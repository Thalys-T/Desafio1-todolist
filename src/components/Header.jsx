import styles from './Header.module.css'

export function Header() {
  return(
      <header className={styles.header}> 
         <strong> Todo List </strong>
      </header>
    );
}