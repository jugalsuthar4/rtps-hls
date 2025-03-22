const ffmpeg = require("fluent-ffmpeg");



const inputRTSP = "rtsp://jugal:jugal@192.0.0.4:8080/h264_ulaw.sdp"; // Replace with your RTSP stream
const outputHLS = "output/index.m3u8"; // HLS playlist file


ffmpeg(inputRTSP)
  .inputOptions([
    "-rtsp_transport", "tcp", // Use TCP for better reliability
    "-buffer_size", "1024000",
  ])
  .outputOptions([
    "-vf", "scale=640:360", // Resize to 640x360 (low quality)
    "-b:v", "500k", // Lower video bitrate
    "-r", "15", // Reduce frame rate to 15 FPS
    "-c:v", "libx264", // Use H.264 codec
    "-preset", "ultrafast", // Low latency processing
    "-crf", "30", // Higher CRF = lower quality
    "-c:a", "aac", // Use AAC audio codec
    "-b:a", "64k", // Lower audio bitrate
    "-hls_time", "2", // Shorter segment duration (2s for real-time playback)
    "-hls_list_size", "6", // Keep only last 6 segments
    "-hls_flags", "delete_segments+append_list", // Delete old segments
    "-f", "hls", // Force format as HLS
  ])
  .output(outputHLS)
  .on("start", () => console.log("Streaming started..."))
  .on("end", () => console.log("Streaming finished."))
  .on("error", (err) => console.error("Error: ", err))
  .run();

