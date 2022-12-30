// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {comments, deleteComment, onClickLike} = props
  const {name, comment, isLiked, id, backgrounColor, date} = comments

  const onLikeClick = () => {
    onClickLike(id)
  }

  const deleteClick = () => {
    deleteComment(id)
  }
  const timeOfPost = formatDistanceToNow(date)

  const LikeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="list-order">
      <div className="comment-details-cont">
        <div className={backgrounColor}>
          <p>{name[0]}</p>
        </div>
        <h1 className="Name">{name}</h1>
        <p className="time-passage">{timeOfPost} ago</p>
      </div>
      <p>{comment}</p>
      <div className="like-delete-cont">
        <button type="button" className="like-btn" onClick={onLikeClick}>
          <img src={LikeImage} alt="like" className="Like-image" />
        </button>

        <button type="button" className="del-btn" onClick={deleteClick}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="Delete-image"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
