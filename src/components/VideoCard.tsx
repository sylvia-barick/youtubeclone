
import { MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    thumbnail: string;
    channel: string;
    views: string;
    timestamp: string;
    duration: string;
  };
}

const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <div className="group cursor-pointer">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden mb-3">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
          {video.duration}
        </div>
      </div>

      {/* Video info */}
      <div className="flex gap-3">
        <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-semibold">
            {video.channel.charAt(0)}
          </span>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-medium line-clamp-2 mb-1 group-hover:text-gray-300 transition-colors">
            {video.title}
          </h3>
          <p className="text-gray-400 text-sm mb-1">{video.channel}</p>
          <p className="text-gray-400 text-sm">
            {video.views} • {video.timestamp}
          </p>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-white hover:bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default VideoCard;
