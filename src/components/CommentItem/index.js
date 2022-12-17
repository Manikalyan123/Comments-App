// Write your code here
import './index.css'

const CommentItem = props => {
  const {comments} = props
  const {name, comment, id} = comments

  return (
    <li className="list-order">
      <div className="comment-details-cont">
        <div className="first-letter-cont">
          <p>{name[0]}</p>
        </div>
        <h1 className="Name">{name}</h1>
        <p className="time-passage">less than a minute</p>
      </div>
      <p>{comment}</p>
      <div className="like-delete-cont">
        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt="like"
            className="Like-image"
          />
        </button>

        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="Delete-image"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
