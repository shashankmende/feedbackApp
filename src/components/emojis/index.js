import './index.css'

const EmojisComponent = props => {
  const {emojisList, onClickEmojiFeedback} = props

  const {name, imageUrl} = emojisList
  const onClickEmoji = () => {
    onClickEmojiFeedback()
  }

  return (
    <li className="list-item-container">
      <img
        src={imageUrl}
        alt={name}
        className="emoji-image"
        onClick={onClickEmoji}
      />
      <p>{name}</p>
    </li>
  )
}
export default EmojisComponent
