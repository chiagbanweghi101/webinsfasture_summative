# Speech to Text Converter

A full-stack web application that converts speech to text using both real-time speech recognition and audio file transcription.

## Features

- Real-time speech recognition using the Web Speech API
- Audio file transcription using AssemblyAI API
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
2. Open your browser and navigate to `http://localhost:3000`

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
- AssemblyAI API has rate limits based on your subscription plan
- Supported audio file formats include MP3, WAV, M4A, and more 