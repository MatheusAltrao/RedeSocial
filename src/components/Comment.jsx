import React, { useState } from 'react'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import Avatar from './Avatar'


const Comment = ({ content, onDeleteComment }) => {

  const [likeCount, setlikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setlikeCount(like => like + 1)
  }

  return (
    <div className={styles.comment} >

      <Avatar hasBorder={false} hasBoder src={'https://github.com/matheusaltrao.png'} />

      <div className={styles.commentBox} >

        <div className={styles.commentContent} >
          <header>

            <div className={styles.authorAndTime} >
              <h3>Matheus (você)</h3>
              <time title='21 de maio de 2022' dateTime='2022-05-11 12:40:00' >
                Públicado há 2h
              </time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar Comentario' ><Trash size={24} /></button>

          </header>

          <p>{content}</p>


        </div>

        <footer>
          <button onClick={handleLikeComment} >
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>

      </div>

    </div>
  )
}

export default Comment
