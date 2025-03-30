# Speech to Text Converter
#this my vidoe link 
https://youtu.be/AyEBSBbYMOY
A full-stack web application that converts speech to text using both real-time speech recognition and audio file transcription.

Here's a brief guide on how the Speech to Text Converter application works:

# Speech to Text Converter - User Guide
https://www.webpeter.tech
## Features
1. **Real-time Speech Recognition**
   - Uses your device's microphone to convert speech to text instantly
   - Works directly in your browser using the Web Speech API
   - No need for external services for this feature

2. **Audio File Transcription**
   - Upload audio files (MP3, WAV, etc.)
   - Uses AssemblyAI API for accurate transcription
   - Supports various audio file formats

3. **Dark/Light Theme**
   - Toggle between dark and light modes
   - Saves your preference for future visits
   - Accessible theme switcher with emoji indicators

4. **Accessibility Features**
   - Voice feedback on button hover
   - Clear status updates
   - Screen reader friendly

## How to Use

### Real-time Speech Recognition:
1. Click "Start Recording"
2. Speak into your microphone
3. Watch your speech appear as text in real-time
4. Click "Stop Recording" when finished

### Audio File Transcription:
1. Click "Choose Audio File"
2. Select an audio file from your device
3. Click "Transcribe File"
4. Wait for the transcription to complete

### Theme Switching:
1. Click the theme toggle button (🌞/🌙) in the top-right corner
2. Watch the interface smoothly transition between themes

### Copy Text:
1. Wait for transcription to complete
2. Click "Copy Text" button
3. Paste the text anywhere you need it

## Technical Requirements
- Modern web browser (Chrome, Edge, or Firefox recommended)
- Microphone access for real-time speech recognition
- Internet connection for audio file transcription
- JavaScript enabled

## Tips
- For best real-time recognition results, speak clearly and at a moderate pace
- Larger audio files may take longer to transcribe
- The application saves your theme preference automatically
- Hover over buttons to hear their descriptions

Would you like me to explain any specific feature in more detail?
## Features

- Real-time speech recognition using the Web Speech API
- Audio file transcription using AssemblyAI API which is an external api.
- Modern, responsive user interface
- Copy-to-clipboard functionality
- Support for various audio file formats

## Prerequisites

- Node.js (v14 or higher)
- AssemblyAI API key (sign up at https://www.assemblyai.com/)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your AssemblyAI API key:
   ```
   ASSEMBLYAI_API_KEY=your_api_key_here
   ```
4. Create an `uploads` directory in the root folder:
   ```bash
   mkdir uploads
   ```

## Running the Application

1. Start the server:
   ```bash
   npm start
   ```

## Usage

### Real-time Speech Recognition

1. Click the "Real-time Speech" tab
2. Click "Start Recording"
3. Speak into your microphone
4. Click "Stop Recording" when finished

### Audio File Transcription

1. Click the "Audio File" tab
2. Click "Choose Audio File" to select an audio file
3. Click "Transcribe File"
4. Wait for the transcription to complete

## Technologies Used

- Frontend:
  - HTML5
  - CSS3
  - JavaScript (ES6+)
  - Web Speech API
- Backend:
  - Node.js
  - Express.js
  - AssemblyAI API
  - Multer (for file uploads)

## Notes

- The Web Speech API requires a modern browser with microphone support
- AssemblyAI API 
- Supported audio file formats include MP3, WAV, M4A, and more 
