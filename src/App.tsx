import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import ContactUs from "./pages/ContactUs";
import NewsBlog from "./pages/NewsBlog";
import BlogDetail from "./pages/BlogDetail";
import HelpCenter from "./pages/HelpCenter";
import Careers from "./pages/Careers";
import { ScrollToTop } from "./components/ScrollToTop";
import { initGA, logPageView } from "./utils/analytics";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Track page views on route change
  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><TermsAndConditions /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/cookies" element={<PageTransition><CookiePolicy /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactUs /></PageTransition>} />
        <Route path="/news" element={<PageTransition><NewsBlog /></PageTransition>} />
        <Route path="/news/:slug" element={<PageTransition><BlogDetail /></PageTransition>} />
        <Route path="/help" element={<PageTransition><HelpCenter /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  // Initialize Google Analytics
  useEffect(() => {
    initGA();
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <AnimatedRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
