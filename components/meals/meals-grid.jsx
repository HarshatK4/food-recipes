import MealItem from './meals-item';
import styles from './meals-grid.module.css';

export default function Mealgrid({meals}){
    return(
        <ul className={styles.meals}>
            {meals.map((meal)=>{
                return (
                    <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
                );
            })}
        </ul>
    );
}