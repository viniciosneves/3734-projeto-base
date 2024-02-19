import { Comment } from "../Comment"
import { Replies } from "../Replies"
import { ReplyModal } from "../ReplyModal"
import styles from './commentlist.module.css'

export const CommentList = ({ comments }) => {
    return (
        <section className={styles.comments}>
            <h2>Comentários</h2>
            <ul>
                {comments.map(comment => <li key={comment.id} className={styles.comment}>
                    <Comment comment={comment} />
                    <ReplyModal comment={comment}/>
                    <Replies comment={comment}/>
                </li>)}
            </ul>
        </section>
    )
}