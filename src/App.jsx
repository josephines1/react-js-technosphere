import "remixicon/fonts/remixicon.css";

import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <HomePage />

      {/* Footer */}
      <Footer />
    </div>
  );
}
