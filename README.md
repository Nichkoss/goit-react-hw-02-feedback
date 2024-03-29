# Feedback page

* The application should display the number of reviews collected for each category. The application should not store feedback statistics between different sessions (page refreshes).

* Expand the functionality of the application so that the interface displays more statistics about the collected feedback. Add a display of the total number of collected reviews from all categories and the percentage of positive reviews. To do this, create helper methods countTotalFeedback() and countPositiveFeedbackPercentage() that count these values based on the data in the state (calculated data).

* Refactor the application. Application state must remain in the root <App> component.

* Extend the functionality of the application so that the statistics block is rendered only after at least one feedback has been collected. Report the lack of statistics to the <Notification message="There is no feedback"> component.

