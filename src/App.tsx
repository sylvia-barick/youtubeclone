
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Trending from "./pages/Trending";
import Music from "./pages/Music";
import Movies from "./pages/Movies";
import Gaming from "./pages/Gaming";
import News from "./pages/News";
import Sports from "./pages/Sports";
import Learning from "./pages/Learning";
import Fashion from "./pages/Fashion";
import Podcasts from "./pages/Podcasts";
import Live from "./pages/Live";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import History from "./pages/History";
import Help from "./pages/Help";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/music" element={<Music />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/news" element={<News />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/live" element={<Live />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/history" element={<History />} />
          <Route path="/help" element={<Help />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/report" element={<Help />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
