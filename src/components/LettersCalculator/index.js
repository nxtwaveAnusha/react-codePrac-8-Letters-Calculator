import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {input: '', count: 0}

  onChangeCount = event => {
    const {input, count} = this.state
    this.setState({input: event.target.value})
    this.setState({count: input.length + 1})
  }

  render() {
    const {input, count} = this.state
    return (
      <div className="bg-container">
        <div className="counter-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="letters" className="label">
            Enter the phrase
          </label>
          <input
            id="letters"
            type="text"
            placeholder="Enter the phease"
            className="input-ele"
            onChange={this.onChangeCount}
            value={input}
          />
          <p className="btn">No.of letters: {count}</p>
        </div>
        <div className="img-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img-size"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
