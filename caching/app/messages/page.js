import { unstable_noStore } from 'next/cache';

import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';

// funny enough, this also applies to the layout
// export const revalidate = 10;

// export const dynamic = 'force-dynamic';

export default async function MessagesPage() {
  // unstable_noStore();
  // const response = await fetch('http://localhost:8080/messages', {
  //   // cache: 'no-store',
  //   // next: {
  //   //   revalidate: 5,
  //   // },
  //   next: {
  //     tags: ['msg'],
  //   },
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
