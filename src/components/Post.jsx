import style from './Post.module.css'
import Comment from './Comment'
import Avatar from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'


export function Post({ author, content, publishedAt }) {

  const [comments, setComments] = useState(['teste'])
  const [newComment, setNewComment] = useState('')


  const publishedDateFormated = format(publishedAt, "d 'de'  LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: 'Há'
  })

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, newComment])
    setNewComment('')
  }

  function onDeleteComment(commentToDelete) {

    //criar uma nova lista sem o comentario que eu nao quero mais
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment != commentToDelete
    })

    setComments(commentsWithoutDeleteOne)

  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('')
    setNewComment(event.target.value)
  }

  function handleNewCommentinvalid(event) {
    event.target.setCustomValidity('Esse campo precisa ser preenchido')
  }

  const isNewCommentEmpty = newComment.length == 0

  return (
    <article className={style.post} >

      <header>

        <div className={style.author} >

          <Avatar src={author.avatarUrl} />

          <div className={style.authorInfo} >
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>


        </div>

        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()} >

          {publishedDateRelativeNow}
        </time>

      </header>


      <div className={style.content} >

        {content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index} >{line.content}</p>
          } else {
            return <p key={index} ><a href='#' >{line.content}</a> </p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} >

        <strong>Deixe seu feedback</strong>

        <textarea value={newComment}
          name='content'
          onChange={handleNewCommentChange}
          placeholder='Deixe o seu comentario'
          onInvalid={handleNewCommentinvalid}
          required />

        <div className={style.buttonArea} >
          <button
            disabled={isNewCommentEmpty} type='submit' >Publicar
          </button>
        </div>

      </form>

      <div className={style.commentList} >

        {comments.map((comment, index) => (
          <Comment
            key={index}
            content={comment}
            onDeleteComment={onDeleteComment} />
        ))}

      </div>

    </article>
  )
}