import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BottomNav } from "@/components/bottom-nav";

// Pages
import Index from "./pages/Index";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SelectAddiction from "./pages/SelectAddiction";
import SetGoal from "./pages/SetGoal";
import LockScreen from "./pages/LockScreen";
import Success from "./pages/Success";
import Failure from "./pages/Failure";
import Wallet from "./pages/Wallet";
import Leaderboard from "./pages/Leaderboard";
import Charity from "./pages/Charity";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen pb-16">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/select-addiction" element={<SelectAddiction />} />
              <Route path="/set-goal" element={<SetGoal />} />
              <Route path="/lock-screen" element={<LockScreen />} />
              <Route path="/success" element={<Success />} />
              <Route path="/failure" element={<Failure />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/charity" element={<Charity />} />
              <Route path="/home" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <BottomNav />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
