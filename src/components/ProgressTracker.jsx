import React from "react";
import { Award, BookOpen, CheckCircle } from "lucide-react";

const ProgressTracker = ({
  totalLessons,
  completedLessons,
  currentStreak,
  totalPoints,
  lessonProgress,
}) => {
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-hindi-blue mb-4">Your Progress</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg flex items-center">
          <BookOpen className="h-10 w-10 text-hindi-orange mr-4" />
          <div>
            <p className="text-sm text-gray-500">Completed</p>
            <p className="text-xl font-bold">
              {completedLessons}/{totalLessons} Lessons
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg flex items-center">
          <Award className="h-10 w-10 text-hindi-gold mr-4" />
          <div>
            <p className="text-sm text-gray-500">Total Points</p>
            <p className="text-xl font-bold">{totalPoints} XP</p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg flex items-center">
          <div className="h-10 w-10 bg-hindi-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
            {currentStreak}
          </div>
          <div>
            <p className="text-sm text-gray-500">Day Streak</p>
            <p className="text-xl font-bold">Keep it up!</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">Overall Progress</span>
          <span className="text-sm font-medium">{overallProgress}%</span>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-hindi-blue"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-3">Recent Lessons</h3>
      <div className="space-y-3">
        {lessonProgress.map((lesson) => (
          <div key={lesson.id} className="flex items-center">
            <div className="w-6 h-6 mr-3">
              {lesson.completed ? (
                <CheckCircle className="h-6 w-6 text-green-500" />
              ) : (
                <div className="h-6 w-6 rounded-full border-2 border-gray-300" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm">{lesson.name}</span>
                <span className="text-xs text-gray-500">{lesson.progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-hindi-orange"
                  style={{ width: `${lesson.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
