
import Layout from '@/components/Layout';
import VideoGrid from '@/components/VideoGrid';

const Learning = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-6">Learning</h1>
        <VideoGrid category="learning" />
      </div>
    </Layout>
  );
};

export default Learning;
