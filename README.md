# Multi Step SignUp Form in ReactJS, by Jason Simms

[![DeepScan grade](https://deepscan.io/api/teams/2472/projects/3556/branches/31597/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=2472&pid=3556&bid=31597)

1. Clone or copy this repository
2. $ npm install
3. $ npm start
4. Go to `http://localhost:3000`

- To Test -  $ npm test

-   This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technical Choices
1.    

- Solution: The list of houses displayed is controled by the paginator at the top of the list.  This changes the API call address to load houses on state change.  This ensures live data in case there has been a change since the last load.

## Decisions

2.  House Details from the API come as an object with varying amount of keys.

- Solution: Before being displayed an array of Object keys is built and then iterated as a map referencing the original object.

****

## Future Improvements

- Layout CSS
