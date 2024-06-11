'use client';

import { DUMMY_NEWS } from '@/dummy-news';
import { notFound, useRouter } from 'next/navigation';

export default function InterceptedImagePage({ params: { id } }) {
  const router = useRouter();
  const news = DUMMY_NEWS.find((item) => item.slug === id);

  if (!news) {
    notFound();
  }

  console.log(news.image);

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </div>
      </dialog>
    </>
  );
}
