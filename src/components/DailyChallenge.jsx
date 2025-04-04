import React, { useState } from "react";
import { Calendar, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const DailyChallenge = ({
  date,
  word,
  transliteration,
  meaning,
  example,
  exampleTranslation,
  completed,
  onComplete,
}) => {
  const [isRevealed, setIsRevealed] = useState(completed);
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleMarkComplete = () => {
    setIsCompleted(true);
    onComplete();
    toast({
      title: "Challenge Completed!",
      description: "You've earned 10 XP points!",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-hindi-blue text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-hindi-gold" />
          <h3 className="text-lg font-semibold">Daily Challenge</h3>
        </div>
        <div className="flex items-center text-sm">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-hindi-blue hindi-text mb-2">
            {word}
          </h2>
          <p className="text-lg text-gray-600 mb-1">{transliteration}</p>
          <p className="text-sm text-gray-500">
            {isRevealed ? meaning : "????????"}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <p className="text-lg mb-2 hindi-text">{example}</p>
          <p className="text-sm text-gray-600">
            {isRevealed ? exampleTranslation : "Can you guess the meaning?"}
          </p>
        </div>

        <div className="flex justify-between">
          {!isRevealed ? (
            <Button
              onClick={handleReveal}
              className="bg-hindi-orange hover:bg-orange-600 text-white"
            >
              Reveal Meaning
            </Button>
          ) : !isCompleted ? (
            <Button
              onClick={handleMarkComplete}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Check className="mr-2 h-4 w-4" /> Mark as Learned
            </Button>
          ) : (
            <Button disabled className="bg-gray-300 text-gray-600 cursor-not-allowed">
              <Check className="mr-2 h-4 w-4" /> Completed
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyChallenge;
