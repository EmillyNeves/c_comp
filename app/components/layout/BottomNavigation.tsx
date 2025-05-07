import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, Edit3, BarChart2, LineChart, Code } from "lucide-react";

function BottomNavigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-2">
      <div className="container max-w-md mx-auto flex justify-around items-center">
        <Link href="/" className={`nav-item p-2 rounded-lg ${isActive('/') ? 'text-primary' : 'text-muted-foreground'}`}>
          <Home size={24} />
        </Link>
        <Link href="/attendance" className={`nav-item p-2 rounded-lg ${isActive('/attendance') ? 'text-primary' : 'text-muted-foreground'}`}>
          <Calendar size={24} />
        </Link>
        <Link href="/notes" className={`nav-item p-2 rounded-lg ${isActive('/notes') ? 'text-primary' : 'text-muted-foreground'}`}>
          <Edit3 size={24} />
        </Link>
        <Link href="/progress" className={`nav-item p-2 rounded-lg ${isActive('/progress') ? 'text-primary' : 'text-muted-foreground'}`}>
          <BarChart2 size={24} />
        </Link>
        <Link href="/analytics" className={`nav-item p-2 rounded-lg ${isActive('/analytics') ? 'text-primary' : 'text-muted-foreground'}`}>
          <LineChart size={24} />
        </Link>
        <Link href="/developer" className={`nav-item p-2 rounded-lg ${isActive('/developer') ? 'text-primary' : 'text-muted-foreground'}`}>
          <Code size={24} />
        </Link>
      </div>
    </nav>
  );
}

export default BottomNavigation;