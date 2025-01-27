import React from 'react'
import styles from './Comment.module.css'
import { fetchCommentData }  from '../../utils/utils'

export type StoredCommentsProps = {
  id: number
}

export default async function  StoredComments ({ id }: StoredCommentsProps) {
const commentData = await fetchCommentData(id);

return(
  <div className={styles.comments}>
    {commentData.map(comment => (
      <div className={styles.comments} key={comment.id}>
        <p> { comment.body } </p>
        <p className={styles.comments_date}> { new Date(comment.timestamp).toLocaleDateString('en-US', { timeZone: 'UTC' }) } </p>
      </div>
    )
  )}
  </div>
)
};