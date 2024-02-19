import { Comment } from "../Comment"

export const CommentList = ({ comments }) => {
    return (
        <section>
            <h2>Comentários</h2>
            <ul>
                {comments.map(comment => <li key={comment.id}>
                    <Comment comment={comment} />
                </li>)}
            </ul>
        </section>
    )
}