import css from './FeedbackOptions.module.css'
import React, { Component } from 'react'

class FeedbackOptions extends Component {
  render() {
      const { options, onLeaveFeedback } = this.props;
    return (
      <div className={css.btnWrap}>
        {options.map(option => (
          <button
            onClick={() => onLeaveFeedback(option)}
            key={option}
            name="good"
            type="button"
            className={css.btn}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}
export default FeedbackOptions
