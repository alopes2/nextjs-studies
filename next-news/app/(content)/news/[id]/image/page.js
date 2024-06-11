import { DUMMY_NEWS } from '@/dummy-news';
import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';

export default async function ImagePage({ params: { id } }) {
  const news = await getNewsItem(id);

  if (!news) {
    notFound();
  }

  console.log(news.image);

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${news.image}`} alt={news.title} />
    </div>
  );
}
