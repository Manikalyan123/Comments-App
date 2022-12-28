// Write your code here
import './index.css'

const CommentItem = props => {
  const {comments, deleteComment, onClickLike, color} = props
  const {name, comment, isLiked, id} = comments

  const onLikeClick = () => {
    onClickLike(id)
  }

  const xColor = Math.ceil(Math.random() * color.length)
  console.log(xColor)

  const deleteClick = () => {
    deleteComment(id)
  }

  const LikeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="list-order">
      <div className="comment-details-cont">
        <div className={color[xColor]}>
          <p>{name[0]}</p>
        </div>
        <h1 className="Name">{name}</h1>
        <p className="time-passage">less than a minute</p>
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
