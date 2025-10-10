// Import required modules
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { exiftool } = require('exiftool-vendored');

// Create an instance of Express
const app = express();

// Configure multer for file upload
const upload = multer({ dest: 'uploads/' });

// Enable CORS
app.use(cors());

// Ensure directories exist
['uploads', 'scrubbed'].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
});

// POST /api/scrub : upload and scrub the file
app.post('/api/scrub', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }
  const inputPath = req.file.path;
  const outputPath = path.join('scrubbed', req.file.originalname);

  try {
    // Remove all metadata
    await exiftool.write(inputPath, {}, ['-all=']);
    fs.renameSync(inputPath, outputPath);

    // Send the scrubbed file for download and clean up
    res.download(outputPath, req.file.originalname, () => {
      fs.unlinkSync(outputPath);
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to scrub file.' });
  }
});

// Default route
app.get('/', (req, res) => {
  res.send('MetaScrub Scrubber backend is running!');
});

// Start the server
app.listen(5000, () => {
  console.log('MetaScrub Scrubber backend running on http://localhost:5000');
});