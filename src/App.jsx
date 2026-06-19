import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Layout from "./components/Layout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import SelectedWork from "./pages/SelectedWork.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import AIAutomation from "./pages/AIAutomation.jsx";
import MarketingLab from "./pages/MarketingLab.jsx";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/selected-work" element={<SelectedWork />} />
            <Route path="/selected-work/case-studies" element={<CaseStudies />} />
            <Route path="/selected-work/ai-automation" element={<AIAutomation />} />
            <Route path="/marketing-lab" element={<MarketingLab />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
