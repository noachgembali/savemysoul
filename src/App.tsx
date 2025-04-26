import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BottomNav } from "@/components/bottom-nav";
import { AuthProvider } from "@/contexts/AuthContext";

const queryClient = new QueryClient();

const BottomNavWrapper = () => {
  const location = useLocation();
  const publicRoutes = ['/', '/welcome', '/login', '/create-username'];
  
  if (publicRoutes.includes(location.pathname)) {
    return null;
  }
  
  return <BottomNav />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <div className="min-h-screen pb-16">
              <Routes>
                <Route path="/" element={<Launch />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create-username" element={<CreateUsername />} />
                <Route path="/select-addiction" element={<SelectAddiction />} />
                <Route path="/set-goal" element={<SetGoal />} />
                <Route path="/lock-screen" element={<LockScreen />} />
                <Route path="/success" element={<Success />} />
                <Route path="/failure" element={<Failure />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/charity" element={<Charity />} />
                <Route path="/home" element={<Index />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/test-nsfw" element={<TestNSFW />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <BottomNavWrapper />
            </div>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
