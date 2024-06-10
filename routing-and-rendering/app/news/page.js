import Link from 'next/link';

import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';
import NewsList from '@/components/news-list.js/news-list';

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}