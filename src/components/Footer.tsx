import {Github, Sparkles} from "lucide-react";
import {Link} from "react-router-dom";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-black border-t border-purple-900/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold">neLabz</span>
            <span className="text-gray-400">© 2025</span>
          </div>

          <div className="flex space-x-6">
            <Link to="/impressum" className="text-gray-400 hover:text-purple-400 transition">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-gray-400 hover:text-purple-400 transition">
              Datenschutz
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
