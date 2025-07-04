
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const CategoryTabs = () => {
  const categories = [
    'All',
    'Music',
    'Gaming',
    'Live',
    'News',
    'Sports',
    'Learning',
    'Fashion',
    'Podcasts',
    'Watched',
    'New to you'
  ];

  return (
    <div className="sticky top-16 bg-gray-900 border-b border-gray-700 px-6 py-3 z-30">
      <ScrollArea className="w-full">
        <div className="flex gap-3">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "secondary"}
              size="sm"
              className={`whitespace-nowrap ${
                index === 0
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'bg-gray-800 text-white hover:bg-gray-700 border-gray-600'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CategoryTabs;
