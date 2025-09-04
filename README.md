# MetaScrub Scrubber 🧼



A simple, privacy-focused web tool to scrub sensitive metadata (like GPS location) from your files before you share them.



## 🤔 Why is this needed?



Many files you create contain hidden data, known as metadata. A photo taken on your phone can contain the exact GPS coordinates of where it was taken, your phone model, and more. A PDF can contain your name as the author.



MetaScrub Scrubber provides a simple interface to remove this potentially sensitive data, allowing you to share your files with peace of mind.



## ✨ Features



-   **Metadata Removal:** Strips EXIF data from JPEG images to protect your privacy.

-   **Simple Interface:** Just upload a file, and download the clean version.

-   **Privacy First:** No files are stored on the server. All uploaded data is processed in memory and deleted immediately. _(This should be your goal!)_

-   **[In Progress]** Support for more file types like PNG, PDF, and DOCX.



## 💻 Tech Stack


-Backend: Node.js with Express

-Core Logic: exif-parser

-Frontend: HTML, CSS, Vanilla JavaScript



## 🚀 Getting Started



Want to run this project locally? Follow these steps.



### Prerequisites


-   [e.g., Node.js v18+]


### Installation


1.  Clone the repository:

    ```sh

    git clone [https://github.com/square-box-hash/metascrub-scrubber.git](https://github.com/square-box-hash/metascrub-scrubber.git)

    ```

2.  Navigate into the project directory:

    ```sh

    cd metascrub-scrubber

    ```

3.  Install the required dependencies:

    ```sh

    
    # For Node.js/Express

    npm install

    ```

4.  Run the application:

    ```sh

    # For Node.js/Express

    npm start

    ```

5.  Open your browser and go to `http://127.0.0.1:5000`



## 🗺️ Roadmap



-   [ ] Add support for PNG files.

-   [ ] Add support for scrubbing author data from PDFs.

-   [ ] Create a simple browser extension.

-   [ ] Allow scrubbing metadata from a URL.



## 🤝 Contributing



Contributions are welcome! Please feel free to open an issue or submit a pull request.



## 📄 License



This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
