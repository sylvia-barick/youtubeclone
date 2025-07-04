
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useNavigate, useLocation } from 'react-router-dom';

interface CategoryTabsProps {
  onCategoryChange?: (category: string) => void;
}

const CategoryTabs = ({ onCategoryChange }: CategoryTabsProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const categories = [
    { name: 'All', path: '/', category: 'all' },
    { name: 'Music', path: '/music', category: 'music' },
    { name: 'Gaming', path: '/gaming', category: 'gaming' },
    { name: 'Live', path: '/', category: 'live' },
    { name: 'News', path: '/news', category: 'news' },
    { name: 'Sports', path: '/sports', category: 'sports' },
    { name: 'Learning', path: '/learning', category: 'learning' },
    { name: 'Fashion', path: '/', category: 'fashion' },
    { name: 'Podcasts', path: '/', category: 'podcasts' },
    { name: 'Watched', path: '/history', category: 'watched' },
    { name: 'New to you', path: '/', category: 'new' }
  ];

  const handleCategoryClick = (category: any) => {
    if (category.path === '/') {
      // For home page categories, use callback
      if (onCategoryChange) {
        onCategoryChange(category.category);
      }
    } else {
      // For dedicated pages, navigate
      navigate(category.path);
    }
  };

  const isActive = (category: any) => {
    if (category.path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === category.path;
  };

  return (
    <div className="sticky top-16 bg-gray-900 border-b border-gray-700 px-6 py-3 z-30">
      <ScrollArea className="w-full">
        <div className="flex gap-3">
          {categories.map((category, index) => (
            <Button
              key={category.name}
              variant={isActive(category) ? "default" : "secondary"}
              size="sm"
              onClick={() => handleCategoryClick(category)}
              className={`whitespace-nowrap cursor-pointer ${
                isActive(category)
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'bg-gray-800 text-white hover:bg-gray-700 border-gray-600'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CategoryTabs;
