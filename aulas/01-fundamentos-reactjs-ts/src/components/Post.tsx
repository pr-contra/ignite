import { format, formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

type Author = {
  avatarUrl: string;
  name: string;
  role: string;
}

type Content = {
  id: string;
  type: "paragraph" | "link";
  content: string;
}

type Post = {
  author: Author;
  content: Content[];
  publishedAt: Date;
}

export const Post = ({ author, content, publishedAt }: Post) => {
  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-PT', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit',
  // }).format(publishedAt);

  const [comments, setComments] = useState(["1", "2", "3"]);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: pt },
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: pt,
    addSuffix: true,
  });

  const handleCreateNewComment = (e: FormEvent) => {
    e.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText('');
  };


  const handleNewCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentText(e.target.value);
    e.target.setCustomValidity("");
  };

  const handleNewInvalidComment = (e: InvalidEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity("Este campo é obrigatório!");
  }


  const handleDeleteComment = (commentToDelete: string) => {
    const newComments = [...comments];
    newComments.splice(comments.indexOf(commentToDelete), 1);

    setComments(newComments);
  }


  const isNewCommentEmpty = newCommentText.length <= 0;

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
          if (line.type === 'link') {
            return (
              <p key={line.id}>
                👉 <a href="#">{line.content}</a>
              </p>
            );
          } else {
            return <p key={line.id}>{line.content}</p>;
          }
        })}
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea
          name="comment"
          value={newCommentText}
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          onInvalid={handleNewInvalidComment}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment key={comment} comment={comment} handleDeleteComment={handleDeleteComment}/>
        ))}
      </div>
    </article>
  );
};
