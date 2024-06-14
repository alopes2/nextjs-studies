'use client';

// Will be { useActionState } from 'react' in the future (next 14.30.0 and react 19)
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
