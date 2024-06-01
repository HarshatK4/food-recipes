import Link from "next/link";
import MealGrid from '@/components/meals/meals-grid'
import styles from './page.module.css';
import {getMeals} from '@/lib/meals'
import { Suspense } from "react";

async function Meals(){
  const meals= await getMeals();
  return <MealGrid meals={meals}/>
}

export default async function MealsMain() {
    return (
      <>
        <header className={styles.header}>
        <h1>
          Delicious meals, created {' '}
          <span className={styles.highlight}>by you</span>
          </h1>
          <p>Choose your recipe and cook it yourself.</p>
          <p className={styles.cta}>
            <Link href="/meals/share">
              Share your recipe.
            </Link>
          </p>
        
        </header>
        <main >
            <Suspense fallback={ <p className={styles.loading}>Fetching meals...</p>}>
            <Meals />
            </Suspense>
         </main>
         </>
    );
  }