import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Quiz from "@/components/Quiz";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoLesson from "@/components/VideoLesson.jsx";

import { useToast } from "@/hooks/use-toast";

// Sample lesson data
const lessonsData = [
  {
    id: "intro",
    title: "Introduction to Hindi",
    description: "Learn about the Hindi language, its origins, and why it's important.",
    videoId: "XunD5fk8wr4",
    transcript:
      "Hindi is an Indo-Aryan language spoken primarily in India and other parts of South Asia. It is one of the 22 scheduled languages of India and is written in the Devanagari script. Hindi has been influenced by many other languages including Sanskrit, Persian, Arabic, and more recently, English.",
    quiz: [
      {
        id: 1,
        question: "What script is Hindi written in?",
        options: ["Latin", "Devanagari", "Arabic", "Cyrillic"],
        correctAnswer: 1,
        explanation:
          "Hindi is written in the Devanagari script, which is also used for Sanskrit and several other Indian languages.",
      },
      {
        id: 2,
        question: "Hindi is primarily spoken in which country?",
        options: ["China", "Russia", "India", "Japan"],
        correctAnswer: 2,
        explanation:
          "Hindi is primarily spoken in India, where it is one of the official languages.",
      },
      {
        id: 3,
        question: "Which language family does Hindi belong to?",
        options: ["Sino-Tibetan", "Indo-Aryan", "Dravidian", "Austronesian"],
        correctAnswer: 1,
        explanation:
          "Hindi belongs to the Indo-Aryan language family, which is a branch of the Indo-European language family.",
      },
    ],
  },
  {
    id: "alphabet",
    title: "Hindi Alphabet Basics",
    description: "Introduction to Hindi vowels and consonants and how they are pronounced.",
    videoId: "XunD5fk8wr4",
    quiz: [
      {
        id: 1,
        question: "How many vowels are there in Hindi?",
        options: ["5", "10", "12", "14"],
        correctAnswer: 2,
        explanation:
          "There are 12 vowels in Hindi: अ (a), आ (aa), इ (i), ई (ii), उ (u), ऊ (uu), ऋ (ri), ए (e), ऐ (ai), ओ (o), औ (au), अं (am).",
      },
      {
        id: 2,
        question: "Which of these is a Hindi consonant?",
        options: ["अ (a)", "आ (aa)", "क (ka)", "ए (e)"],
        correctAnswer: 2,
        explanation: "क (ka) is a Hindi consonant. The others are vowels.",
      },
      {
        id: 3,
        question: "In Hindi, vowels can be written as:",
        options: [
          "Independent forms only",
          "Dependent forms only",
          "Both independent and dependent forms",
          "Neither independent nor dependent forms",
        ],
        correctAnswer: 2,
        explanation:
          "Vowels in Hindi can be written as independent forms (when they appear at the beginning of a word or syllable) or as dependent forms (when they appear after a consonant).",
      },
    ],
  },
];

const LessonsPage = () => {
  const [selectedLesson, setSelectedLesson] = useState(lessonsData[0].id);
  const [activeTab, setActiveTab] = useState("lesson");
  const { toast } = useToast();

  const currentLesson = lessonsData.find((lesson) => lesson.id === selectedLesson);

  const handleQuizComplete = (score, total) => {
    const percentage = Math.round((score / total) * 100);
    toast({
      title: `Quiz Result: ${percentage}%`,
      description: `You scored ${score} out of ${total}`,
      variant: percentage >= 70 ? "default" : "destructive",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <h1 className="text-3xl font-bold text-hindi-blue mb-8">Hindi Lessons</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Lesson Menu */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-hindi-blue mb-4">Lesson Topics</h2>
              <nav className="space-y-1">
                {lessonsData.map((lesson) => (
                  <button
                    key={lesson.id}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                      selectedLesson === lesson.id
                        ? "bg-hindi-orange text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                    onClick={() => {
                      setSelectedLesson(lesson.id);
                      setActiveTab("lesson");
                    }}
                  >
                    {lesson.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Lesson Content */}
            <div className="md:col-span-3">
              {currentLesson && (
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="mb-6">
                    <TabsTrigger value="lesson" className="text-base px-6">
                      Lesson
                    </TabsTrigger>
                    <TabsTrigger value="quiz" className="text-base px-6">
                      Quiz
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="lesson">
                    <VideoLesson
                      title={currentLesson.title}
                      description={currentLesson.description}
                      videoId={currentLesson.videoId}
                      transcript={currentLesson.transcript}
                    />
                  </TabsContent>

                  <TabsContent value="quiz">
                    <Quiz questions={currentLesson.quiz} onComplete={handleQuizComplete} />
                  </TabsContent>
                </Tabs>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LessonsPage;
