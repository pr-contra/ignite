import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from "react";
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

type Comment = {
  comment: string;
  handleDeleteComment: (commentToDelete: string) => void;
}

export const Comment = ({ comment, handleDeleteComment }: Comment) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeComment = () => {
    setLikeCount(prev => prev + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/pr-contra.png" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Andrade</strong>
              <time
                title="10 de Junho às 12:16h"
                dateTime="2022-06-10 12:16:20"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={() => handleDeleteComment(comment)} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

