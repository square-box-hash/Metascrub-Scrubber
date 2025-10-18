# MetaScrub Scrubber 🧼

A full-stack web application to scrub sensitive metadata (like GPS location) from your files before you share them.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**This project provides a simple service to remove sensitive metadata from your files. It uses a React/Vite frontend and a Node.js/Express backend for processing.**

### ✨ [Live Demo Link (coming soon!)] ✨

---

## 🤔 Why is this needed?

Many files you create contain hidden data, known as metadata. A photo taken on your phone can contain the exact GPS coordinates of where it was taken, your phone model, and the time of capture.

**MetaScrub** provides a simple interface to upload your file, have it processed on our server, and download a clean, metadata-free version.

![[A good screenshot or GIF of your app in action]](httpsNext-Week.png) ## 🚀 Key Features

* **Powerful Server-Side Scrubbing:** Uses the high-performance [Sharp](https://sharp.pixelploom.com/) library to efficiently remove metadata.
* **Simple React UI:** A clean, modern interface built with React and Vite for easy file uploads.
* **Secure File Handling:** Uses `multer` for file uploads and `uuid` to generate unique filenames, preventing conflicts.
* **Privacy First:** We are committed to your privacy. **Uploaded files are processed immediately and deleted from the server** after scrubbing. No original or scrubbed files are stored.
* **File Support:** Currently tested and working for **JPEG/JPG** files.

## 💻 Tech Stack

This project is a full-stack application composed of two main parts:

* **Frontend (Client):**
    * [React](https://reactjs.org/): For building the user interface.
    * [Vite](https://vitejs.dev/): As a fast frontend build tool.
    * `[e.g., Axios or Fetch]` for making API calls to the backend.

* **Backend (Server):**
    * [Node.js](https://nodejs.org/): As the JavaScript runtime.
    * [Express](https://expressjs.com/): As the server framework.
    * [Multer](https://github.com/expressjs/multer): For handling `multipart/form-data` (file uploads).
    * [Sharp](https://sharp.pixelploom.com/): For high-performance image processing and metadata removal.
    * [UUID](https://github.com/uuidjs/uuid): For generating unique temporary filenames.

## 🛠️ How to Run Locally

To get this project running on your own machine, you'll need to run both the server and the client.

### Prerequisites

* [Node.js](https://nodejs.org/) (v18.0 or later)
* `npm` (comes with Node.js)

---

### 1. Set up the Backend (Server)

(Assuming your server code is in a `/server` folder or similar)

```sh
# Navigate to the server directory
cd server

# Install server dependencies
npm install

# Start the server
npm start
# or: node server.js

# The server should now be running on http://localhost:5000 (or your configured port)
```

---

### 2. Set up the Frontend (Client)

(In a **new terminal window**)

```sh
# Navigate to the client directory
cd client

# Install client dependencies
npm install

# Start the Vite development server
npm run dev

# The React app should now be running and open in your browser
# (usually on http://localhost:5173)
```

## 🗺️ Roadmap (Future Plans)

* [ ] Add explicit support for `PNG` and `WebP` files (Sharp can do this!).
* [ ] Show a "Before vs. After" metadata comparison in the UI.
* [ ] Implement batch processing to upload and scrub multiple files at once.
* [ ] Add comprehensive error handling for failed uploads or non-image files.

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.