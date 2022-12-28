import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const commentsList = []
class Comments extends Component {
  state = {
    comments: commentsList,
    name: '',
    comment: '',
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      name,
      comment,
      id: uuidv4(),
      isLiked: false,
    }
    this.setState(prevState => ({
      comments: [...prevState.comments, newComment],
      name: '',
      comment: '',
    }))
  }

  deleteComment = id => {
    const {comments} = this.state
    const deletedList = comments.filter(each => each.id !== id)
    this.setState({comments: deletedList})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onClickLike = id => {
    this.setState(prevState => ({
      comments: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {comments, name, comment} = this.state
    return (
      <div className="Cont">
        <div className="Content">
          <form className="form-cont" onSubmit={this.onAddComment}>
            <h1 className="heading">Comments</h1>
            <p className="passage">Say something about 4.0 Technologies</p>
            <input
              className="Name-Input"
              onChange={this.onChangeName}
              placeholder="Name"
              value={name}
            />{' '}
            <br />
            <input
              className="Comment-Input"
              onChange={this.onChangeComment}
              placeholder="Comment"
              value={comment}
            />
            <button type="submit" className="submit-button">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="big-image"
          />
        </div>
        <hr />
        <div className="comments-box">
          <div className="comments-count-cont">
            <div className="count-cont">
              <p className="count">1</p>
            </div>
            <div className="count-pass-cont">
              <p className="count-passage">comments</p>
            </div>
          </div>
          <ul className="unorderlist">
            {comments.map(each => (
              <CommentItem
                comments={each}
                key={each.id}
                onClickLike={this.onClickLike}
                deleteComment={this.deleteComment}
                color={initialContainerBackgroundClassNames}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
