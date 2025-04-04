import React, { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoLesson = ({ title, description, videoId, transcript }) => {
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-hindi-blue mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>

      <div className="aspect-w-16 aspect-h-9 relative">
        <iframe
          className="w-full h-96"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {transcript && (
        <div className="p-6 border-t border-gray-100">
          <Button
            variant="outline"
            className="mb-4"
            onClick={() => setShowTranscript(!showTranscript)}
          >
            {showTranscript ? (
              <>
                <VolumeX className="mr-2 h-4 w-4" /> Hide Transcript
              </>
            ) : (
              <>
                <Volume2 className="mr-2 h-4 w-4" /> Show Transcript
              </>
            )}
          </Button>

          {showTranscript && (
            <div className="bg-gray-50 p-4 rounded-md max-h-60 overflow-y-auto text-sm">
              <p className="whitespace-pre-line">{transcript}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoLesson;
