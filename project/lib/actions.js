'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

function isInvalidText(text) {
  return !text || text.trim() == '';
}

export async function shareMeal(prevState, formData) {
  console.log(prevState);
  const meal = {
    title: formData.get('title'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size == 0
  ) {
    // throw new Error('Invalid meal data');
    return {
      message: 'Invalid input.',
    };
  }

  await saveMeal(meal);

  // revalidatePath('/meals', 'layout'); current and nested pages
  // revalidatePath('/meals', 'page'); default

  revalidatePath('/meals');
  redirect('/meals');
}
