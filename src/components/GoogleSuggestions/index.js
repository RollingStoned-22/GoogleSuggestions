// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {searchInput: '', suggestions: this.props.suggestionsList}
  changeInput = event => {
    this.setState({searchInput: event.target.value})
  }
  onComplete = id => {
    const {suggestions} = this.state
    const selectedSuggestion = suggestions.filter((suggestion) => suggestion.id === id)
    this.setState({searchInput: selectedSuggestion.suggestion})
  }
  render() {
    const {searchInput, suggestions} = this.state
    const updatedList = this.props.suggestionsList.filter(suggestion =>
      suggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="page-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google"
          alt="google logo"
        />
        <div className="suggestions-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.changeInput}
            />
          </div>
          <div className="suggestion-items">
            <ul>
              {updatedList.map(suggestion => (
                <SuggestionItem
                  suggestion={suggestion.suggestion}
                  key={suggestion.id}
                  onComplete={this.onComplete}
                  id={suggestion.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
