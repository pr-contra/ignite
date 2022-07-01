import styles from './App.module.css';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import './global.css';

// author: { avatarUrl: String, name: String, role: String }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/pr-contra.png',
      name: 'Pedro Andrade',
      role: 'Frontend Developer @ Gympass',
    },
    content: [
      { id: 'line11', type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        id: 'line12',
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { id: 'line13', type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-10 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/luciavmrodriguez.png',
      name: 'Lucía Rodriguez',
      role: 'Frontend Techlead @ Fidelidade',
    },
    content: [
      { id: 'line21', type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        id: 'line22',
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { id: 'line23', type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-10 22:00:00'),
  },
];

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts &&
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              );
            })}
        </main>
      </div>
    </div>
  );
};
