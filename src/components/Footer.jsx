import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hindi-blue text-white py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-hindi-orange font-bold text-2xl">हिंदी</span>
            <span className="text-white font-bold text-xl">Safar</span>
            <span className="text-hindi-gold font-bold text-xl">Seekho</span>
          </Link>
          <p className="mt-4 text-sm">
            Your journey to fluent Hindi starts here. Learn, practice, and master Hindi with our interactive lessons.
          </p>
        </div>

        <div className="col-span-1">
          <h3 className="text-hindi-gold font-medium text-lg mb-4">Learn</h3>
          <ul className="space-y-2">
            <li><Link to="/lessons" className="text-sm hover:text-hindi-orange transition-colors">Lessons</Link></li>
            <li><Link to="/alphabet" className="text-sm hover:text-hindi-orange transition-colors">Alphabet</Link></li>
            <li><Link to="/vocabulary" className="text-sm hover:text-hindi-orange transition-colors">Vocabulary</Link></li>
            <li><Link to="/grammar" className="text-sm hover:text-hindi-orange transition-colors">Grammar</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-hindi-gold font-medium text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><Link to="/practice" className="text-sm hover:text-hindi-orange transition-colors">Practice</Link></li>
            <li><Link to="/quiz" className="text-sm hover:text-hindi-orange transition-colors">Quizzes</Link></li>
            <li><Link to="/daily-challenge" className="text-sm hover:text-hindi-orange transition-colors">Daily Challenge</Link></li>
            <li><Link to="/leaderboard" className="text-sm hover:text-hindi-orange transition-colors">Leaderboard</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-hindi-gold font-medium text-lg mb-4">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-white hover:text-hindi-orange transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-hindi-orange transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-hindi-orange transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-hindi-orange transition-colors">
              <Youtube size={20} />
            </a>
          </div>
          <a href="mailto:info@hindisafarseekho.com" className="flex items-center text-sm hover:text-hindi-orange transition-colors">
            <Mail size={16} className="mr-2" /> info@hindisafarseekho.com
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-700">
        <p className="text-sm text-center">© {new Date().getFullYear()} Hindi Safar Seekho. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
