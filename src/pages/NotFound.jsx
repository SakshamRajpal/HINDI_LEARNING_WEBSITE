
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center bg-gray-50 px-6">
        <div className="text-center max-w-md">
          <h1 className="text-5xl font-bold text-hindi-blue mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! Looks like you're lost in translation.
          </p>
          <p className="mb-8 hindi-text text-3xl text-hindi-orange">
            यह पृष्ठ मौजूद नहीं है।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-hindi-blue hover:bg-blue-800">
                <Home className="mr-2 h-4 w-4" /> Go Home
              </Button>
            </Link>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
