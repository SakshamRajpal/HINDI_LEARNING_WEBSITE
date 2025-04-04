
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Award, Calendar, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressTracker from "@/components/ProgressTracker";
import DailyChallenge from "@/components/DailyChallenge";

const sampleLessonProgress = [
  { id: 1, name: "Hindi Alphabet (Vowels)", completed: true, progress: 100 },
  { id: 2, name: "Hindi Alphabet (Consonants)", completed: true, progress: 100 },
  { id: 3, name: "Basic Greetings", completed: false, progress: 75 },
  { id: 4, name: "Numbers 1-20", completed: false, progress: 30 },
];

const formatDate = () => {
  const date = new Date();
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const Index = () => {
  const [challengeCompleted, setChallengeCompleted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hindi-orange to-orange-500 text-white py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Your Journey to Hindi Fluency Starts Here
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
                Learn Hindi from the basics to advanced with interactive lessons,
                videos, quizzes, and daily challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/lessons">
                  <Button className="bg-black hover:bg-orange-600 text-white text-lg px-8 py-6">
                    Start Learning <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/alphabet">
                  <Button variant="outline" className="border-white text-black hover:bg-white hover:text-hindi-blue text-lg px-8 py-6">
                    Explore Hindi Alphabet
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 md:px-10">
            <h2 className="text-3xl font-bold text-center mb-12 text-hindi-blue">
              Everything You Need to Master Hindi
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-hindi-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-hindi-blue">Interactive Lessons</h3>
                <p className="text-gray-600">
                  Learn Hindi through structured, interactive lessons designed by language experts.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PlayCircle className="h-8 w-8 text-hindi-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-hindi-blue">Video Tutorials</h3>
                <p className="text-gray-600">
                  Watch engaging video lessons with native speakers for perfect pronunciation.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-hindi-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-hindi-blue">Track Progress</h3>
                <p className="text-gray-600">
                  Monitor your learning journey with detailed progress tracking and achievements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Section (if logged in) */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ProgressTracker
                  totalLessons={12}
                  completedLessons={2}
                  currentStreak={3}
                  totalPoints={145}
                  lessonProgress={sampleLessonProgress}
                />
              </div>
              
              <div>
                <DailyChallenge
                  date={formatDate()}
                  word="नमस्ते"
                  transliteration="Namaste"
                  meaning="Hello / Greetings"
                  example="नमस्ते, आप कैसे हैं?"
                  exampleTranslation="Hello, how are you?"
                  completed={challengeCompleted}
                  onComplete={() => setChallengeCompleted(true)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-hindi-orange py-16">
          <div className="container mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Begin Your Hindi Learning Journey?
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students learning Hindi with our interactive platform.
              Start your journey today and speak Hindi with confidence.
            </p>
            <Link to="/lessons">
              <Button className="bg-white text-hindi-orange hover:bg-gray-100 text-lg px-8 py-6">
                Start Your First Lesson
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
