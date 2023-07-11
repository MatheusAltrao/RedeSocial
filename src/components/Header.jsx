import styles from './Header.module.css'
import Logo from '../assets/Ignite simbol.svg'

export function Header() {
  return (

    <div className={styles.header} >

      <img src={Logo} alt="Logo Ignite" />
      <h1>Ignite Feed</h1>
    </div>
  )
}