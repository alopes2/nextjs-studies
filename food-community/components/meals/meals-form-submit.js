'use client';

import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit() {
  // const status = useFormStatus();
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Sharing...' : 'Share Meal'}
    </button>
  );
}
