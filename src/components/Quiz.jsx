import React, { useState } from "react";
import { Check, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Quiz = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { toast } = useToast();

  const handleOptionSelect = (optionIndex) => {
    if (!isAnswered) {
      setSelectedOption(optionIndex);
    }
  };

  const checkAnswer = () => {
    if (selectedOption === null) {
      toast({ title: "Please select an answer", variant: "destructive" });
      return;
    }

    setIsAnswered(true);
    setShowExplanation(true);

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast({ title: "Correct!", variant: "default", className: "bg-green-500 text-white" });
    } else {
      toast({
        title: "Incorrect",
        description: `The correct answer is: ${questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}`,
        variant: "destructive",
      });
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setShowExplanation(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      if (onComplete) {
        onComplete(score, questions.length);
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      {!quizCompleted ? (
        <>
          <div className="mb-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              Question {currentQuestion + 1} of {questions.length}
            </h3>
            <span className="text-sm bg-hindi-orange text-white px-3 py-1 rounded-full">
              Score: {score}
            </span>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">{questions[currentQuestion].question}</h2>

            <RadioGroup className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 p-3 rounded-md border ${
                    isAnswered
                      ? index === questions[currentQuestion].correctAnswer
                        ? "border-green-500 bg-green-50"
                        : selectedOption === index
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200"
                      : "border-gray-200 hover:border-hindi-orange cursor-pointer"
                  }`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <RadioGroupItem value={index.toString()} disabled={isAnswered} />
                  <Label className="flex-1 cursor-pointer">{option}</Label>
                  {isAnswered && (
                    <span>
                      {index === questions[currentQuestion].correctAnswer ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : selectedOption === index ? (
                        <X className="h-5 w-5 text-red-500" />
                      ) : null}
                    </span>
                  )}
                </div>
              ))}
            </RadioGroup>
          </div>

          {showExplanation && questions[currentQuestion].explanation && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-md">
              <h4 className="font-semibold mb-1">Explanation:</h4>
              <p>{questions[currentQuestion].explanation}</p>
            </div>
          )}

          <div className="flex justify-between">
            {!isAnswered ? (
              <Button onClick={checkAnswer} className="bg-hindi-blue hover:bg-blue-800">
                Check Answer
              </Button>
            ) : (
              <Button onClick={nextQuestion} className="bg-hindi-orange hover:bg-orange-600">
                {currentQuestion < questions.length - 1 ? (
                  <>
                    Next Question <ChevronRight className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  "Finish Quiz"
                )}
              </Button>
            )}
          </div>
        </>
      ) : (
        <div className="text-center py-6">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-lg mb-6">
            Your score: {score} out of {questions.length} ({Math.round((score / questions.length) * 100)}%)
          </p>
          <Button
            onClick={() => {
              setCurrentQuestion(0);
              setSelectedOption(null);
              setIsAnswered(false);
              setShowExplanation(false);
              setQuizCompleted(false);
              setScore(0);
            }}
            className="bg-hindi-blue hover:bg-blue-800"
          >
            Restart Quiz
          </Button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
