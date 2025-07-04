
import { Search, Bell, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
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
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">YT</span>
            </div>
            <span className="text-white text-xl font-semibold">YouTube</span>
          </div>
        </div>

        {/* Center search */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex">
            <div className="relative flex-1">
              <Input
                placeholder="Search"
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 rounded-r-none focus:border-blue-500"
              />
            </div>
            <Button className="bg-gray-700 hover:bg-gray-600 border border-gray-600 border-l-0 rounded-l-none px-6">
              <Search className="h-4 w-4 text-gray-300" />
            </Button>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
