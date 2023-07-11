import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'
import { Post } from './components/Post'
import { ArrowUp } from '@phosphor-icons/react'



//author: {avatr_url:'',name:'',role:'',publishedAt:Date,content:''}

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego',
      role: 'CTO RocketSeat '
    },
    content: [

      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare</a> ' },

    ],

    publishedAt: new Date('2023-07-09 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk',
      role: 'Educador RocketSeat '
    },
    content: [

      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare</a> ' },

    ],

    publishedAt: new Date('2023-07-10 21:20:00'),
  },
]

function scrollTop() {

  window.scroll({
    top: 0,
    behavior: "smooth",
  })

}

function App() {

  return (

    <>
      <Header />

      <div className={styles.wrapper} >

        <Sidebar />


        <main>

          {posts.map(post => {
            return <Post key={post.id} author={post.author} publishedAt={post.publishedAt} content={post.content} />
          })}

        </main>



      </div>

      <button onClick={scrollTop} className={styles.buttonTop} > <ArrowUp size={22} /> </button>
    </>

  )
}

export default App
