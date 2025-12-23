import React, { useState } from 'react';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [scrubbedUrl, setScrubbedUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setScrubbedUrl('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:5000/api/scrub', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        setScrubbedUrl(url);
      } else {
        alert('Error scrubbing file!');
      }
    } catch (err) {
      alert('Failed to connect to backend.');
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400">
      <div className="w-full max-w-md p-10 shadow-xl bg-white/90 rounded-xl">
        <h1 className="mb-8 text-4xl font-extrabold text-center text-blue-700">
          MetaScrub Scrubber
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Scrubbing...' : 'Scrub File'}
          </button>
        </form>
        {scrubbedUrl && (
          <div className="flex justify-center mt-8">
            <a
              href={scrubbedUrl}
              download={selectedFile.name}
              className="px-4 py-2 font-semibold text-white transition bg-green-600 rounded-lg hover:bg-green-700"
            >
              Download Scrubbed File
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;