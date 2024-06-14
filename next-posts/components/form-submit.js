'use client';

// Will be { useActionState } from 'react' in the future (next 14.30.0 and react 19)
import { useFormStatus } from 'react-dom';

export default function FormSubmit() {
  const status = useFormStatus();

  if (status.pending) {
    return <p>Creating post...</p>;
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}
