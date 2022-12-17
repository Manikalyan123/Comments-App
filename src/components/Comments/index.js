import {Component} from 'react'
import {v4} from 'uuid'
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
      id: v4,
      color: initialContainerBackgroundClassNames[0],
      isLiked: false,
    }
    this.setState(prevState => ({
      comments: [...prevState.comments, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {comments, name, comment} = this.state
    return (
      <div className="Cont">
        <div className="Content">
          <form className="form-cont">
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
            <button
              type="submit"
              className="submit-button"
              onSubmit={this.onAddComment}
            >
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
              <CommentItem comments={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
