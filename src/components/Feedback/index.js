// Write your React code here.
import {Component} from 'react'
import './index.css'
import EmojisComponent from '../emojis'

let output
let feedback
class Feedback extends Component {
  state = {givenObj: this.props, isClicked: false}

  onClickEmojiFeedback = () => {
    this.setState({
      isClicked: true,
    })
  }

  render() {
    const {givenObj, isClicked} = this.state
    const {resources} = givenObj
    const {emojis, loveEmojiUrl} = resources

    let finalOutput
    output = (
      <div className="emoji-heading-container">
        <h1>How satisfied are you with our customer support performance?</h1>
        <ul className="unordered-list">
          {emojis.map(each => (
            <EmojisComponent
              onClickEmojiFeedback={this.onClickEmojiFeedback}
              emojisList={each}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )
    console.log('output block', {output})

    feedback = (
      <div className="Feed-back-container">
        <img src={loveEmojiUrl} alt=" love emoji" className="love-emoji" />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to import our customer support performance
        </p>
      </div>
    )
    if (isClicked === false) {
      finalOutput = output
    } else {
      finalOutput = feedback
    }

    return <div className="bg_container">{finalOutput}</div>
  }
}

export default Feedback
