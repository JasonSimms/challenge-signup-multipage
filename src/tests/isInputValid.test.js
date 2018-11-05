const isInputValid = require("../js/isInputValid");
const validState1 = require("./validAppState");

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

test(`Accepts Salary Input`, () => {
  expect(isInputValid(3, validState1.validState1)).toBeTruthy();
});

test(`Requires a Salary Entry`, () => {
  expect(isInputValid(3, {salary: ``})).toBeFalsy();
})

test(`Phone number must be at least 5 numbers`, () => {
  expect(isInputValid(2, {phone: '1234'})).toBeFalsy();
})

test(`Short emails are rejected`, () => {
  expect(isInputValid(1, {email: `my@email`})).toBeFalsy();
})

test(`Name cannot contain numbers`, () => {
  expect(isInputValid(0, {nameFirst:`5jason`,nameLast:"simms7"})).toBeFalsy();
})

test(`Name requires an entry`, () => {
  expect(isInputValid(0, {nameFirst:``,nameLast:"simms"})).toBeFalsy();
})