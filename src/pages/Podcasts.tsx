
import Layout from '@/components/Layout';
import VideoGrid from '@/components/VideoGrid';

const Podcasts = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-6">Podcasts</h1>
        <VideoGrid category="podcasts" />
      </div>
    </Layout>
  );
};

export default Podcasts;
