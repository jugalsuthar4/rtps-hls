# Setup Instructions

## 1. Set Environment Variable
Set the environment variable in your `.env` file as follows:

```sh
RTSP_URL="rtsp://jugal:jugal@192.0.0.4:8080/h264_ulaw.sdp"
```

## 2. Install Dependencies
Run the following command to install all required dependencies:

```sh
npm install
```

## 3. Install FFmpeg
FFmpeg is required for handling RTSP streams. Install it based on your OS:

### **Windows**
1. Download FFmpeg from [FFmpeg's official website](https://ffmpeg.org/download.html).
2. Extract the downloaded file and add the `bin` folder to the system `PATH`:
   - Open *System Properties* → *Advanced* → *Environment Variables*.
   - Under *System Variables*, find *Path* and edit it.
   - Add the full path to the `bin` folder (e.g., `C:\ffmpeg\bin`).
3. Verify installation by running:
   ```sh
   ffmpeg -version
   ```

### **MacOS (Using Homebrew)**
```sh
brew install ffmpeg
```

### **Linux (Ubuntu/Debian)**
```sh
sudo apt update && sudo apt install ffmpeg -y
```

### **Linux (CentOS/RHEL)**
```sh
sudo yum install epel-release -y
sudo yum install ffmpeg -y
```

## 4. Run the Server
Start the development server using:

```sh
npm run dev
```

## 5. Open `index.html`
You can open the `index.html` file in your browser using:
- Live Server (if you have the extension installed in VS Code)
- Direct file path by opening the file manually in your browser.

## 6. Verify FFmpeg Installation
After installation, verify that FFmpeg is correctly installed by running:

```sh
ffmpeg -version
```

This should display version details if FFmpeg is installed correctly.

---

Your setup should now be ready! 🚀 If you encounter any issues, double-check the installation steps and environment variables.

