
import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  onSearch?: (query: string) => void;
}

const Layout = ({ children, onSearch }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header onMenuClick={toggleSidebar} onSearch={onSearch} />
      <Sidebar isOpen={sidebarOpen} />
      
      <main className={`transition-all duration-300 ${
        sidebarOpen ? 'ml-60' : 'ml-16'
      } pt-16`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
