
import Layout from '@/components/Layout';
import VideoGrid from '@/components/VideoGrid';

const Fashion = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-6">Fashion</h1>
        <VideoGrid category="fashion" />
      </div>
    </Layout>
  );
};

export default Fashion;
