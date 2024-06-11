import ModalBackdrop from '@/components/modal-backdrop/modal-backdrop';
import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';

export default async function InterceptedImagePage({ params: { id } }) {
  const news = await getNewsItem(id);

  if (!news) {
    notFound();
  }

  console.log(news.image);

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </div>
      </dialog>
    </>
  );
}
