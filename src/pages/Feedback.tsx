
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle feedback submission
    alert('Thank you for your feedback!');
    setFeedback('');
    setEmail('');
  };

  return (
    <Layout>
      <div className="p-6 max-w-4xl">
        <h1 className="text-white text-3xl font-bold mb-8">Send Feedback</h1>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-6">
            Help us improve YouTube by sharing your thoughts and suggestions. Your feedback is important to us!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">
                Email (optional)
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Your feedback *
              </label>
              <Textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Tell us what you think about YouTube..."
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-32"
                required
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="bg-red-600 hover:bg-red-700">
                Send Feedback
              </Button>
              <Button type="button" variant="outline" className="text-white border-gray-600 hover:bg-gray-700">
                Cancel
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-8 bg-gray-800 rounded-lg p-6">
          <h2 className="text-white text-xl font-semibold mb-4">Other ways to provide feedback</h2>
          <div className="space-y-3 text-gray-300">
            <p>• Visit our <span className="text-blue-400 cursor-pointer">Community Guidelines</span> to report content</p>
            <p>• Use the <span className="text-blue-400 cursor-pointer">Help Center</span> for technical issues</p>
            <p>• Follow us on <span className="text-blue-400 cursor-pointer">Twitter</span> for updates</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Feedback;
