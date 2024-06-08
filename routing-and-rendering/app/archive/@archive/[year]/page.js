import NewsList from '@/components/news-list.js/news-list';
import { getNewsForYear } from '@/lib/news';

export default function FilteredNewsPage({ params: { year } }) {
  const news = getNewsForYear(year);
  return <NewsList news={news} />;
}
