import React from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';

export const Post = ({ author, content, publishedAt }) => {
  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-PT', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit',
  // }).format(publishedAt);

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: pt },
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: pt,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} hasBorder />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p>
                👉 <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
