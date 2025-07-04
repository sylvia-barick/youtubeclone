
import Layout from '@/components/Layout';
import VideoGrid from '@/components/VideoGrid';

const News = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-6">News</h1>
        <VideoGrid category="news" />
      </div>
    </Layout>
  );
};

export default News;
