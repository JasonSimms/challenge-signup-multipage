# Multi Step SignUp Form in ReactJS, by Jason Simms

[See this project deployed on Github!](https://jasonsimms.github.io/challenge-signup-multipage/)

[![DeepScan grade](https://deepscan.io/api/teams/2472/projects/3556/branches/31597/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=2472&pid=3556&bid=31597)

1. Clone or copy this repository
2. $ npm install
3. $ npm start
4. Go to `http://localhost:3000`

- To Test -  $ npm test

-   This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technical Choices
1. Create-React-App Template   

- This template is a quick start way to get going on a React App Fast.

2. React-sweet-progress 

- A React component for creating customized progress bars

3. react-fade-in

- Fast way to apply simple animations to form loading

4. Jest testing

- Comes pre installed in Create-React-App but is further applied to my Javascript functions.

## Decisions

1.  Conditional Rendering controls which page of the application is seen.  

- More Info: All components are held in displayedFormARR (App.js line 49). After each successful input, state.step is incremented resulting in the next choice from the array.

2.  Inputs are constantly updated to the app.js state and validated before advancing.

3.  Input is validated through src/js/isInputValid.js.

- This function recieves the step number as a key which corresponds to a switch logic tree.  The second variable is the entire state object so that the function can always be applied universally at any time.

- Inputs are checked against various Regular Expressions and an invalid entry will limit the user from progressing as well as trigger an alert message assisting them in filling out their form.

4. Navigation buttons and form reset buttons are also rendered conditionally based on the current step. Reset only shows up on the final form page.



****

## Future Improvements

- Phone Numbers entry can use formatting to allow characters + ( - ) and later removed in processing before submitting for summary or server post.

- Animations on hover or input field select could be embelished.

- Processing should be used to eliminate spaces and bad capilization on string entries.

- Icons could be used for buttons to enhance UX.

- Alert message for invalid entry could be replaced by input labels or tips.

- Button positions can be improved

- Add Backend Server to recieve entries.

- Deploy.