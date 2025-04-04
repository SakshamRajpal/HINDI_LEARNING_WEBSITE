import React, { useState, useRef } from "react";
import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const AlphabetCard = ({ hindi, transliteration, audioSrc, examples }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const audioRef = useRef(null);
  const exampleAudioRefs = useRef([]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const playExampleAudio = (index) => {
    if (exampleAudioRefs.current[index]) {
      exampleAudioRefs.current[index]?.play();
    }
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 transform ${
        isFlipped ? "rotate-y-180" : ""
      } cursor-pointer h-full`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`transition-opacity duration-500 ${isFlipped ? "hidden" : "block"}`}>
        <div className="p-6 text-center">
          <div className="mb-4 flex justify-end">
            {audioSrc && (
              <Button
                variant="ghost"
                size="sm"
                className="text-hindi-blue hover:text-hindi-orange"
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio();
                }}
              >
                <Volume2 className="h-5 w-5" />
              </Button>
            )}
          </div>
          <div className="text-6xl font-bold text-hindi-blue hindi-text mb-4">{hindi}</div>
          <div className="text-xl text-gray-600">{transliteration}</div>
          <p className="text-xs text-gray-400 mt-4">Click to see examples</p>
          {audioSrc && <audio ref={audioRef} src={audioSrc} className="hidden" />}
        </div>
      </div>

      <div className={`transition-opacity duration-500 ${isFlipped ? "block" : "hidden"} h-full`}>
        <div className="p-6 h-full">
          <div className="flex justify-between items-center mb-4">
            <div className="text-2xl font-bold text-hindi-blue hindi-text">{hindi}</div>
            {audioSrc && (
              <Button
                variant="ghost"
                size="sm"
                className="text-hindi-blue hover:text-hindi-orange"
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio();
                }}
              >
                <Volume2 className="h-5 w-5" />
              </Button>
            )}
          </div>

          <div className="space-y-3">
            {examples?.map((example, index) => (
              <div key={index} className="border-b border-gray-100 pb-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg hindi-text">{example.hindi}</span>
                  {example.audioSrc && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-hindi-blue hover:text-hindi-orange"
                      onClick={(e) => {
                        e.stopPropagation();
                        playExampleAudio(index);
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <p className="text-sm text-gray-600">{example.meaning}</p>
                {example.audioSrc && (
                  <audio
                    ref={(el) => (exampleAudioRefs.current[index] = el)}
                    src={example.audioSrc}
                    className="hidden"
                  />
                )}
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 mt-4 absolute bottom-4 left-0 right-0 text-center">
            Click to flip back
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlphabetCard;
