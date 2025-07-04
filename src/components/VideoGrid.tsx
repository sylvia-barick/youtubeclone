
import VideoCard from './VideoCard';
import { allVideos } from '@/data/videos';

interface VideoGridProps {
  category?: string;
}

const VideoGrid = ({ category = 'all' }: VideoGridProps) => {
  const filteredVideos = category === 'all' 
    ? allVideos 
    : allVideos.filter(video => video.category === category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredVideos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;
