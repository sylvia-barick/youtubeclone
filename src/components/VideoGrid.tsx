
import VideoCard from './VideoCard';

const VideoGrid = () => {
  const videos = [
    {
      id: '1',
      title: 'Building a Modern React Application with TypeScript and Tailwind CSS',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=640&h=360&fit=crop',
      channel: 'CodeMaster Pro',
      views: '2.1M views',
      timestamp: '3 days ago',
      duration: '15:42'
    },
    {
      id: '2',
      title: 'The Future of Web Development: What Every Developer Should Know',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=640&h=360&fit=crop',
      channel: 'Tech Insights',
      views: '856K views',
      timestamp: '1 week ago',
      duration: '22:15'
    },
    {
      id: '3',
      title: 'Mastering JavaScript: Advanced Concepts and Best Practices',
      thumbnail: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=640&h=360&fit=crop',
      channel: 'JavaScript Guru',
      views: '1.3M views',
      timestamp: '5 days ago',
      duration: '18:30'
    },
    {
      id: '4',
      title: 'Creating Beautiful UIs with Modern CSS Techniques',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=640&h=360&fit=crop',
      channel: 'Design Code',
      views: '674K views',
      timestamp: '2 weeks ago',
      duration: '12:05'
    },
    {
      id: '5',
      title: 'Database Design Fundamentals for Web Developers',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&h=360&fit=crop',
      channel: 'Data Science Hub',
      views: '445K views',
      timestamp: '4 days ago',
      duration: '25:18'
    },
    {
      id: '6',
      title: 'Building Scalable APIs with Node.js and Express',
      thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=640&h=360&fit=crop',
      channel: 'Backend Mastery',
      views: '923K views',
      timestamp: '1 week ago',
      duration: '20:45'
    },
    {
      id: '7',
      title: 'Cloud Computing Essentials: AWS, Azure, and Google Cloud',
      thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=640&h=360&fit=crop',
      channel: 'Cloud Expert',
      views: '1.1M views',
      timestamp: '6 days ago',
      duration: '28:12'
    },
    {
      id: '8',
      title: 'Mobile App Development: React Native vs Flutter',
      thumbnail: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=640&h=360&fit=crop',
      channel: 'Mobile Dev Pro',
      views: '789K views',
      timestamp: '3 weeks ago',
      duration: '16:33'
    },
    {
      id: '9',
      title: 'AI and Machine Learning for Web Developers',
      thumbnail: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=640&h=360&fit=crop',
      channel: 'AI Academy',
      views: '1.5M views',
      timestamp: '2 days ago',
      duration: '31:07'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;
