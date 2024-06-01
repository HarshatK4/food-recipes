import Image from "next/image";
import { getMeal } from "@/lib/meals";
import styles from './page.module.css'
import { notFound } from "next/navigation";
export async function generateMetadata({params}){
  const meal = getMeal(params.mealSlug);
  if (!meal){
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealsShare({params}) {

  const meal= getMeal(params.mealSlug);
  
  
  //meal.instructions =meal.instructions.replace ( '\n', '<br/>');
    return (
      <>
      <header className={styles.header}>
      <div className={styles.image}>
        
        <Image src={meal.image} alt={meal.title} fill />
      </div>
      <div className={styles.headerText}>
        <h1>{meal.title}</h1>
        <p className={styles.creator}>
          by <a href ={`mailto:${meal.creator_email}`}>{meal.creator}</a>
        </p>
        <p className={styles.summary}>{meal.summary}</p>
      </div>
      </header>
      <main>
        <p className={styles.instructions}>{meal.instructions} </p>
      </main>
      </>
    );
  }
  //dangerouslySetInnerHTML={{ __html: meal.instructions}}