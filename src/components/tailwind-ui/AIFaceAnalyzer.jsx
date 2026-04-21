import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as faceapi from "face-api.js";

const AIFaceAnalyzer = () => {
  const videoRef = useRef();
  const navigate = useNavigate();
  const [emotion, setEmotion] = useState("Initializing AI Engine...");
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  // Emoji Mapping for Wow Factor!
  const emojiMap = { happy: "😄", sad: "😢", angry: "😠", neutral: "😐", surprised: "😲", fearful: "😨", disgusted: "🤢", "No Face Detected": "👤", "Analyzing Face...": "🤖" };

  // 1. Load Models & Start Camera
  useEffect(() => {
    let stream = null;

    async function startAI() {
      try {
        const model_url = "/models"; // Make sure models are in public/models
        await faceapi.nets.tinyFaceDetector.loadFromUri(model_url);
        await faceapi.nets.faceExpressionNet.loadFromUri(model_url);
        setIsModelLoaded(true);
        setEmotion("Starting Camera...");

        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setEmotion("Analyzing Face...");
      } catch (err) {
        console.error("AI Initialization Error:", err);
        setEmotion("Camera/Model Error!");
      }
    }
    
    startAI();

    // ⚡ SUPER IMPORTANT: Cleanup Function to turn off the camera when leaving the page!
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  // 2. Continuous Emotion Detection
  useEffect(() => {
    if (!isModelLoaded) return;

    const interval = setInterval(async () => {
      if (!videoRef.current) return;

      const detections = await faceapi.detectAllFaces(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      ).withFaceExpressions();

      if (detections.length > 0) {
        const expressions = detections[0].expressions;
        // MAXIMUM EMOTION FINDING LOGIC
        const maxEmotion = Object.keys(expressions).reduce((a, b) => expressions[a] > expressions[b] ? a : b);
        setEmotion(maxEmotion);
      } else {
        setEmotion("No Face Detected");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isModelLoaded]);

  return (
    <div className="min-h-[90vh] bg-[#0a0a0c] pt-8 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Navigation */}
        <button 
          onClick={() => navigate(-1)} 
          className="mb-8 text-slate-400 hover:text-[#10b981] font-bold text-sm flex items-center gap-2 transition-colors"
        >
          ← Back to Dashboard
        </button>

        <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3">
              AI Face <span className="text-[#10b981]">Analyzer</span>
            </h1>
            <p className="text-slate-400">TensorFlow.js Real-time Neural Network Processing</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center bg-[#161b22] border border-slate-800 p-8 rounded-[30px] shadow-[0_0_30px_rgba(16,185,129,0.05)] relative overflow-hidden">
          
          {/* Decorative Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981] rounded-full filter blur-[100px] opacity-10"></div>

          {/* Left: Camera Feed */}
          <div className="w-full lg:w-3/5">
            <div className="bg-black rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden border-2 border-slate-800 shadow-xl">
              <video 
                ref={videoRef} 
                autoPlay 
                muted 
                className="w-full h-full object-cover transform scale-x-[-1]" // scale-x-[-1] acts as a mirror
              ></video>
              
              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none border border-[#10b981]/30 rounded-2xl overflow-hidden">
                 <div className="w-full h-1 bg-[#10b981]/50 shadow-[0_0_10px_#10b981] animate-[pulse_2s_ease-in-out_infinite]"></div>
              </div>
            </div>
          </div>

          {/* Right: AI Output Panel */}
          <div className="w-full lg:w-2/5 flex flex-col items-center justify-center p-6 text-center z-10">
            
            <div className="w-24 h-24 bg-[#10b981]/10 rounded-full flex items-center justify-center mb-6 border border-[#10b981]/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <span className="text-5xl">{emojiMap[emotion] || "🤖"}</span>
            </div>

            <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Current Emotion</h3>
            <div className="text-3xl font-black text-white capitalize tracking-wide mb-8">
              {emotion}
            </div>

            <div className="w-full bg-slate-900 rounded-xl p-4 border border-slate-800">
                <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-slate-400">Model Status</span>
                    <span className={isModelLoaded ? "text-[#10b981]" : "text-yellow-500"}>
                        {isModelLoaded ? "ONLINE" : "LOADING..."}
                    </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Engine</span>
                    <span className="text-[#27C8F5]">TensorFlow.js (face-api)</span>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFaceAnalyzer;