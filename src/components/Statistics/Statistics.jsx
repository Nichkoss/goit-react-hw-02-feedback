import css from './Statistics.module.css'
import React, { Component } from "react"

export default class Statistics extends Component {
  constructor() {
    super();

    this.state = {
        good: 0,
        neutral: 0,
        bad: 0
        }
    };
    
    onClick = (event) => {
        const btn = event.target.name;
        this.setState({[btn]: this.state[btn]+1})
    }
  

  render() {
      return (
        <div className={css.wrapper}>
          <h3 className={css.title}>Please leave feedback</h3>
          <div onClick={this.onClick} className={css.btnWrap}>
            <button name="good" type="button" className={css.btn}>
              Good
            </button>
            <button name="neutral" type="button" className={css.btn}>
              Neutral
            </button>
            <button name="bad" type="button" className={css.btn}>
              Bad
            </button>
          </div>

          <div className={css.results}>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
          </div>
        </div>
      );
  }
}