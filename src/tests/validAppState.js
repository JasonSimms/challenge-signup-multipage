// Description
// Email validation based on Rob Eberhardt's (Thanks, Rob!) email expression, but allows single letter subdomains...
// Matches
// bob@smith.com | bob@j.smith.museum | bob.smith@a-1.smith.com
// Non-Matches
// bob@.com | bob@-a.smith.com

const validState1 = {
  email: "myEmail@gmx.de",
  error: null,
  nameFirst: "Jason",
  nameLast: "Simms",
  phone: "123456",
  progress: 75,
  salary: "0 - 1.000",
  step: 3
};

const validState2 = {
  email: "no@gmail.com",
  error: null,
  nameFirst: "aaron",
  nameLast: "giBon",
  phone: "123456789",
  progress: 75,
  salary: "0 - 1.000",
  step: 3
};

const validState3 = {
  email: "myEmail@gmx.de",
  error: null,
  nameFirst: "Jason",
  nameLast: "Simms",
  phone: "123456",
  progress: 75,
  salary: "0 - 1.000",
  step: 3
};

module.exports = {
  validState1: validState1,
  validState2: validState2,
  validState3: validState3
};
