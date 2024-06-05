import Image from 'next/image';
import classes from './page.module.css';
import { getMeal } from '@/lib/meals';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';

export async function generateMetadata({ slug }) {
  const meal = await getMeal(slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

async function Meal({ slug }) {
  const meal = await getMeal(slug);

  if (!meal) {
    notFound();
  }

  const instructions = meal.instructions.replace(/\n/, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: instructions,
          }}
        ></p>
      </main>
    </>
  );
}

export default async function MealDetailsPage({ params: { slug } }) {
  return (
    <Suspense fallback={<p className={classes.loading}>Fetching meal...</p>}>
      <Meal slug={slug} />
    </Suspense>
  );
}
