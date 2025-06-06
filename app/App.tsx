import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import BottomNavigation from "@/components/layout/BottomNavigation";
import { useRouter } from 'next/router';
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto p-4 flex-grow pb-24">
      </main>
      <BottomNavigation />
      <Toaster />
    </div>
  );
}

export default App;