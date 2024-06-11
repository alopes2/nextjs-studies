import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

export default function ImagePage({ params: { id } }) {
  console.log(id);
  const news = DUMMY_NEWS.find((item) => item.slug === id);

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
