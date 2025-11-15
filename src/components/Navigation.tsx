import {Menu, Sparkles, X} from "lucide-react";
import {useState} from "react";
import {Link, useLocation} from "react-router-dom";

export default function Navigation(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (sectionId: string): void => {
    if (!isHomePage) {
      window.location.href = "/#" + sectionId;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({behavior: "smooth"});
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">neLabz</span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage && (
              <>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-300 hover:text-purple-400 transition"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-300 hover:text-purple-400 transition"
                >
                  Galerie
                </button>
                <button
                  onClick={() => scrollToSection("video")}
                  className="text-gray-300 hover:text-purple-400 transition"
                >
                  Video
                </button>
                <button
                  onClick={() => scrollToSection("story")}
                  className="text-gray-300 hover:text-purple-400 transition"
                >
                  Story
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-purple-400 transition"
                >
                  Kontakt
                </button>
              </>
            )}
            {/* <Link to="/impressum" className="text-gray-300 hover:text-purple-400 transition">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-gray-300 hover:text-purple-400 transition">
              Datenschutz
            </Link> */}
          </div>
          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-900/30">
            {isHomePage && (
              <>
                <button
                  onClick={() => scrollToSection("features")}
                  className="block w-full text-left py-2 text-gray-300 hover:text-purple-400"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="block w-full text-left py-2 text-gray-300 hover:text-purple-400"
                >
                  Galerie
                </button>
                <button
                  onClick={() => scrollToSection("video")}
                  className="block w-full text-left py-2 text-gray-300 hover:text-purple-400"
                >
                  Video
                </button>
                <button
                  onClick={() => scrollToSection("story")}
                  className="block w-full text-left py-2 text-gray-300 hover:text-purple-400"
                >
                  Story
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left py-2 text-gray-300 hover:text-purple-400"
                >
                  Kontakt
                </button>
              </>
            )}
            {/* <Link to="/impressum" className="block py-2 text-gray-300 hover:text-purple-400">
              Impressum
            </Link>
            <Link to="/datenschutz" className="block py-2 text-gray-300 hover:text-purple-400">
              Datenschutz
            </Link> */}
          </div>
        )}
      </div>
    </nav>
  );
}
