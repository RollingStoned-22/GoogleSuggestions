// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestion, key, id, onComplete} = props
  const onSelect = () => {
    onComplete(id)
  }
  return (
    <li className="container">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onSelect}
      />
    </li>
  )
}

export default SuggestionItem
