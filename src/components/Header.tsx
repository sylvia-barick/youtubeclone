
import { Search, Bell, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface HeaderProps {
  onMenuClick: () => void;
  onSearch?: (query: string) => void;
}

const Header = ({ onMenuClick, onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (onSearch) {
        onSearch(searchQuery);
      }
      // Navigate to home page with search
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-700 px-4 py-3 z-50">
      <div className="flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="text-white hover:bg-gray-800"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M23.498 6.186a2.994 2.994 0 0 0-2.108-2.108C19.63 3.638 12 3.638 12 3.638s-7.63 0-9.39.44A2.994 2.994 0 0 0 .502 6.186C.062 7.946.062 12 .062 12s0 4.054.44 5.814a2.994 2.994 0 0 0 2.108 2.108c1.76.44 9.39.44 9.39.44s7.63 0 9.39-.44a2.994 2.994 0 0 0 2.108-2.108c.44-1.76.44-5.814.44-5.814s0-4.054-.44-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <span className="text-white text-xl font-semibold">YouTube</span>
          </Link>
        </div>

        {/* Center search */}
        <div className="flex-1 max-w-2xl mx-8">
          <form onSubmit={handleSearch} className="flex">
            <div className="relative flex-1">
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 rounded-r-none focus:border-blue-500"
              />
            </div>
            <Button 
              type="submit"
              className="bg-gray-700 hover:bg-gray-600 border border-gray-600 border-l-0 rounded-l-none px-6"
            >
              <Search className="h-4 w-4 text-gray-300" />
            </Button>
          </form>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
            <Bell className="h-5 w-5" />
          </Button>
          <Link to="/profile">
            <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
