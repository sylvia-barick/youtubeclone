
import { Home, TrendingUp, Music, Film, Gamepad2, Newspaper, Trophy, Lightbulb, Settings, Flag, HelpCircle, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const mainItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: TrendingUp, label: 'Trending' },
    { icon: Music, label: 'Music' },
    { icon: Film, label: 'Movies' },
    { icon: Gamepad2, label: 'Gaming' },
    { icon: Newspaper, label: 'News' },
    { icon: Trophy, label: 'Sports' },
    { icon: Lightbulb, label: 'Learning' },
  ];

  const bottomItems = [
    { icon: Settings, label: 'Settings' },
    { icon: Flag, label: 'Report history' },
    { icon: HelpCircle, label: 'Help' },
    { icon: MessageSquare, label: 'Send feedback' },
  ];

  return (
    <aside className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gray-900 border-r border-gray-700 transition-all duration-300 z-40 ${
      isOpen ? 'w-60' : 'w-16'
    }`}>
      <div className="flex flex-col h-full py-4">
        {/* Main navigation */}
        <div className="flex-1">
          <nav className="space-y-1 px-2">
            {mainItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className={`w-full justify-start text-white hover:bg-gray-800 ${
                  item.active ? 'bg-gray-800' : ''
                } ${!isOpen ? 'px-2' : 'px-4'}`}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {isOpen && <span className="ml-4">{item.label}</span>}
              </Button>
            ))}
          </nav>
        </div>

        {/* Bottom section */}
        {isOpen && (
          <>
            <Separator className="bg-gray-700 mx-4" />
            <nav className="space-y-1 px-2 pt-4">
              {bottomItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-gray-800 px-4"
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span className="ml-4">{item.label}</span>
                </Button>
              ))}
            </nav>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
