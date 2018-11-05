const isInputValid = require("../js/isInputValid");
// const validState1 = require("./validAppState");

const valid = {
  email: "myEmail@gmx.de",
  error: null,
  nameFirst: "Jason",
  nameLast: "Simms",
  phone: "123456",
  progress: 75,
  salary: "0 - 1.000",
  step: 3
};

test(`test correctly written`, () => {
  expect(isInputValid(1, "not an object")).toBeUndefined();
});

test(`Accepts Reasonable Name`, () => {
  expect(isInputValid(0, valid)).toBeTruthy();
});

test(`Accepts Reasonable Email`, () => {
  expect(isInputValid(1, valid)).toBeTruthy();
});

test(`Accepts Reasonable Phone`, () => {
  expect(isInputValid(2, valid)).toBeTruthy();
});

test(`Accepts Salary Input`, () => {
  expect(isInputValid(3, valid)).toBeTruthy();
});
