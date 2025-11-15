import {useEffect} from "react";
import {Route, BrowserRouter as Router, Routes, useLocation} from "react-router-dom";

import {
  ContactSection,
  FeaturesSection,
  Footer,
  GallerySection,
  HeroSection,
  ImprintPage,
  Navigation,
  PrivacyPolicyPage,
  StorySection,
  VideoSection,
} from "./components";

// Main App Component
export default function App(): JSX.Element {
  // No basename needed for custom domain
  // All routes are at root level
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<ImprintPage />} />
          <Route path="/datenschutz" element={<PrivacyPolicyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Home Page Component
function HomePage(): JSX.Element {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <VideoSection />
      <GallerySection />
      <StorySection />
      <ContactSection />
    </>
  );
}

// Scroll to top component
function ScrollToTop(): null {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
