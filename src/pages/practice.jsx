import React from "react";
import Quiz from "../components/Quiz";
import Navbar from "../components/Navbar";

const questionsData = [
    {
      question: "What is the English sound of the Hindi vowel 'आ'?",
      options: ["a", "aa", "i", "e"],
      correctAnswer: 1,
      explanation: "'आ' sounds like 'aa' as in 'Arm'."
    },
    {
      question: "What is the Hindi word for 'Pomegranate'?",
      options: ["आम", "अनार", "अच्छा", "आदमी"],
      correctAnswer: 1,
      explanation: "'अनार' means Pomegranate."
    },
    {
      question: "Which word starts with the consonant 'क'?",
      options: ["खरगोश", "कमल", "अनार", "आदमी"],
      correctAnswer: 1,
      explanation: "'कमल' starts with 'क' and means 'Lotus'."
    },
    {
      question: "What does the Hindi word 'अच्छा' mean?",
      options: ["Good", "Bad", "Fruit", "Pen"],
      correctAnswer: 0,
      explanation: "'अच्छा' means 'Good' in English."
    },
    {
      question: "Which of the following is a Hindi consonant?",
      options: ["आ", "अ", "क", "ई"],
      correctAnswer: 2,
      explanation: "'क' is a consonant, the others are vowels."
    },
    {
      question: "What is the Hindi word for 'Mango'?",
      options: ["आम", "कमल", "खाना", "खरगोश"],
      correctAnswer: 0,
      explanation: "'आम' means Mango in English."
    },
    {
      question: "Which of these words is used for 'Man' in Hindi?",
      options: ["खाना", "कमल", "आदमी", "अच्छा"],
      correctAnswer: 2,
      explanation: "'आदमी' is the Hindi word for 'Man'."
    }
  ];
  

const Practice = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 text-hindi-orange">Hindi Practice Quiz</h1>
      <Quiz questions={questionsData} />
    </div>
    </>
  );
};

export default Practice;
