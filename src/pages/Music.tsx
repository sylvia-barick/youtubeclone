
import Layout from '@/components/Layout';
import VideoGrid from '@/components/VideoGrid';

const Music = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-6">Music</h1>
        <VideoGrid category="music" />
      </div>
    </Layout>
  );
};

export default Music;
