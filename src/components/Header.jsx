import styles from './Header.module.css'

import rocket from '../assets/rocket.svg';
import todologo from '../assets/todo.svg';

export function Header() {
  return(
      <header className={styles.header}> 
      
         <img src={rocket} alt="Logotipo Rocket" />
         <img src={todologo} alt="Logotipo To Do" />
      
      </header>
    );
}