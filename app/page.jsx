import Link from "next/link";
import styles from '@/app/page.module.css'
import ImageSlideshow from '@/components/image-slideshow/image-slideshow'
export default function Home() {
  return (
    <>
    <header className={styles.header}>
      <div className={styles.slideshow}> 
        <ImageSlideshow />
      </div>
      <div className={styles.hero}> 
        <h1>Next level food for foodies</h1>
        <p>Taste and share food to the world</p>
      
      <div className={styles.cta}>
      <p><Link href="/community">Join the Community</Link></p>
      <p className={styles["explore-button"]}><Link href="/meals">Explore Meals</Link></p>
      </div>
      </div>
    </header>
    <main className={styles.section}>
        <div>
          <h1>
            How it Works
            <p>NeFood is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin and contains essential nutrients such as carbohydrates, fats, proteins, vitamins, or minerals.</p>
            <p>Discover and Connect</p>
          </h1>
        </div>
        <div>
          <h1>
            Why NextLevel Food?
            <p>With online food delivery across 500+ cities, you can get your favorites delivered at your doorstep within minutes.</p>
            <p>Discover and Connect</p>
          </h1>
        </div>
    </main>
    </>
  );
}
