require('dotenv').config();
const express = require('express');
const multer = require('multer');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to handle audio file upload and transcription
app.post('/transcribe', upload.single('audio'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No audio file provided' });
        }

        // Upload to AssemblyAI
        const uploadResponse = await axios.post('https://api.assemblyai.com/v2/upload', 
            req.file.buffer,
            {
                headers: {
                    'authorization': process.env.ASSEMBLYAI_API_KEY,
                    'content-type': req.file.mimetype
                }
            }
        );

        // Start transcription
        const transcriptionResponse = await axios.post('https://api.assemblyai.com/v2/transcript',
            {
                audio_url: uploadResponse.data.upload_url
            },
            {
                headers: {
                    'authorization': process.env.ASSEMBLYAI_API_KEY,
                    'content-type': 'application/json'
                }
            }
        );

        // Poll for transcription completion
        const transcriptId = transcriptionResponse.data.id;
        let transcript = null;
        
        while (!transcript) {
            const pollingResponse = await axios.get(`https://api.assemblyai.com/v2/transcript/${transcriptId}`,
                {
                    headers: {
                        'authorization': process.env.ASSEMBLYAI_API_KEY
                    }
                }
            );

            if (pollingResponse.data.status === 'completed') {
                transcript = pollingResponse.data;
                break;
            } else if (pollingResponse.data.status === 'error') {
                throw new Error('Transcription failed');
            }

            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        res.json({ text: transcript.text });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to transcribe audio' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 