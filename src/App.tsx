import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import Onirologie from "./pages/Onirologie";
import Pilgrimages from "./pages/Pilgrimages";
import Origin from "./pages/Origin";
import Circle from "./pages/Circle";
import BookPage from "./pages/BookPage";
import ScrollToTop from "./components/ScrollToTop"; // <-- Import ScrollToTop

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <ScrollToTop />  {/* <-- Place it here, inside BrowserRouter but before Routes */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/onirologie" element={<Onirologie />} />
              <Route path="/pilgrimages" element={<Pilgrimages />} />
              <Route path="/origin" element={<Origin />} />
              <Route path="/circle" element={<Circle />} />
              <Route path="/book" element={<BookPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />

          {/* Fixed social media links on the right side */}
          <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:block">
            <SocialLinks orientation="vertical" />
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
