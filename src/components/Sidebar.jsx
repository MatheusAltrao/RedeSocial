import Avatar from './Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from '@phosphor-icons/react'


export function Sidebar() {
  return (
    <aside className={styles.sidebar} >

      <img className={styles.cover} src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" />


      <div className={styles.profile} >

        <Avatar src={'https://github.com/matheusaltrao.png'} />

        <strong>Matheus</strong>
        <span>Web Developer</span>

        <footer>

          <a href="#">
            <PencilLine size={20} />
            Editar o seu perfil
          </a>
        </footer>

      </div>


    </aside>
  )
}