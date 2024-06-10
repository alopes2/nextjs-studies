import NewsList from '@/components/news-list.js/news-list';
import { getAvailableNewsYears, getNewsForYear } from '@/lib/news';
import Link from 'next/link';

export default function FilteredNewsPage({ params: { filter } }) {
  console.log('Filter', filter);
  const links = getAvailableNewsYears();
  // const news = getNewsForYear(year);

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
