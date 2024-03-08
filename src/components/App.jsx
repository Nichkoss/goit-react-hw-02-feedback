import css from './App.module.css'
import React, { Component } from 'react';
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import { Section } from './Section/Section'
import {Notification} from './Notification/Notification'

class App extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  };

  onFeedbackClick = (key) => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 }
    })
  }
  
  countTotalFeedback() {
    return this.state.bad + this.state.good + this.state.neutral;
  }

  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() === 0) {
            return 0
        }
    return Math.round((this.state.good*100) / this.countTotalFeedback());
    // return ((this.state.good * 100) / this.countTotalFeedback()).toFixed(2);
  }


  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={css.container}>
        <Section title={'Feedback: '}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onFeedbackClick}
          ></FeedbackOptions>
        </Section>
        <Section title={'Statistics: '}>
          {total === 0 && <Notification message="There is no feedback"></Notification>}
          {total !== 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
};
export default App
