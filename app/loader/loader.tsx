"use client";
import React, { useState, useEffect } from "react";

interface Line {
  text: string;
  delay?: number;
}

const TypingAnimation: React.FC = () => {
  const lines: Line[] = [
    { text: "Fetching network data/request ..." },
    { text: "Compiling it ..." },
    { text: "Training the model ..." },
    { text: "Fetching the data ..." },
    { text: "Verifying it from authentic sources ..." },
    { text: "And the results are ..." },
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleType = async () => {
      if (currentLine === lines.length) return;

      const line = lines[currentLine];
      for (let i = currentIndex; i < line.text.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, line.delay || 100));
        setCurrentIndex(i + 1);
      }

      if (line.text.endsWith(".")) {
        await new Promise((resolve) => setTimeout(resolve, 400));
      }
      setCurrentLine(currentLine + 1);
      setCurrentIndex(0);
    };

    handleType();

    // Cleanup function to prevent memory leaks
    return () => clearTimeout(handleType);
  }, [currentLine, currentIndex, lines]);

  return (
    <div className="bg h-[100vh]">
      <div className="bg-slate-900 grid place-content-center h-screen">
        <div className="text-white text-5xl text-center">
          {currentLine > 0 && <br />} {/* Add a line break before new lines */}
          {lines[currentLine]?.text.substring(0, currentIndex)}
        </div>
      </div>
    </div>
  );
};

export default TypingAnimation;
