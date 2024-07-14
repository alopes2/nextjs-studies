import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

// export const metadata = {
//   title: 'All Posts',
//   description: 'Browse all posts',
// };

export async function generateMetadata({ params, searchParams }) {
  const posts = await getPosts();

  const numberOfPosts = posts.length;
  return {
    title: `Browse all our ${numberOfPosts} posts`,
    description: 'Browser all our posts',
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
