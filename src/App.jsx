import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [scrubbedUrl, setScrubbedUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
  const file = e.target.files[0];
  setSelectedFile(file);
  setScrubbedUrl('');
};

// ... inside your return/render ...
<input 
  type="file" 
  onChange={handleFileChange} 
  /* This allows images, videos, and PDFs */
  accept="image/*,video/*,application/pdf" 
  className="hidden" 
  id="file-upload"
/>

{/* Simple Dynamic Icon Logic */}
{selectedFile && (
  <div className="mt-4 p-4 border rounded-lg bg-white/10 flex items-center gap-3">
    <div className="text-3xl">
      {selectedFile.type.includes('image') ? '🖼️' : 
       selectedFile.type.includes('video') ? '🎥' : 
       selectedFile.type.includes('pdf') ? '📄' : '📁'}
    </div>
    <div className="text-sm truncate">{selectedFile.name}</div>
  </div>
)}

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // Use the environment variable, or fallback to localhost for development
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const response = await fetch(`${apiUrl}/api/scrub`, {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    setScrubbedUrl(url);
  } else {
    const errorData = await response.json().catch(() => ({}));
    alert(errorData.error || 'Error scrubbing file!');
  }
    } catch (err) {
      alert('Failed to connect to backend.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0a0c] p-6">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]" />

      <div className="glass-card w-full max-w-lg p-10 rounded-[2rem] relative z-10 flex flex-col items-center">
        <h1 className="text-4xl font-black mb-2 text-gradient tracking-tight">
          MetaScrub
        </h1>
        <p className="text-gray-400 mb-10 text-sm font-medium uppercase tracking-widest">
          Privacy-First Metadata Removal
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          {/* Custom File Upload UI */}
          <div className="relative group">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:bg-white/5 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-3 text-gray-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-sm text-gray-400">
                  {selectedFile ? <span className="text-white font-semibold">{selectedFile.name}</span> : "Select a file to scrub"}
                </p>
              </div>
              <input type="file" onChange={handleFileChange} className="hidden" />
            </label>
          </div>

          <button
            type="submit"
            disabled={loading || !selectedFile}
            className="btn-glossy w-full py-4 px-6 rounded-xl font-bold text-white uppercase tracking-wider disabled:opacity-30"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Scrubbing...
              </span>
            ) : 'Scrub Metadata'}
          </button>
        </form>

        {scrubbedUrl && (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <a
              href={scrubbedUrl}
              download={selectedFile?.name || "scrubbed_file"}
              className="flex items-center gap-2 text-green-400 hover:text-green-300 font-bold transition-colors border-b border-green-400/30 pb-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12 a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3" />
              </svg>
              Download Scrubbed File
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;