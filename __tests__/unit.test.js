// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('valid phone number 858-396-2313', () => {
  expect(isPhoneNumber('858-396-2313')).toBe(true);
});
test('valid phone number 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('invalid phone number missing dashes', () => {
  expect(isPhoneNumber('8583962313')).toBe(false);
});
test('invalid phone number letters', () => {
  expect(isPhoneNumber('abcdefghij')).toBe(false);
});

test('valid email chnie@ucsd.edu', () => {
  expect(isEmail('chnie@ucsd.edu')).toBe(true);
});
test('valid email nie.chenhao@c.edu', () => {
  expect(isEmail('niechenhao@c.edu')).toBe(true);
});
test('invalid email with no @', () => {
  expect(isEmail('google.com')).toBe(false);
});
test('invalid email with 2 @', () => {
  expect(isEmail('chnie@@ucsd.edu')).toBe(false);
});

test('valid strong pw Abcd', () => {
  expect(isStrongPassword('Richard')).toBe(true);
});
test('valid strong pw Zxy123', () => {
  expect(isStrongPassword('God142857')).toBe(true);
});
test('invalid strong pw too short', () => {
  expect(isStrongPassword('Ab')).toBe(false);
});
test('invalid strong pw starts with number', () => {
  expect(isStrongPassword('1234')).toBe(false);
});

test('valid date 6/5/2025', () => {
  expect(isDate('6/5/2025')).toBe(true);
});
test('valid date 01/06/2000', () => {
  expect(isDate('01/06/2000')).toBe(true);
});
test('invalid date wrong year length', () => {
  expect(isDate('2/14/99')).toBe(false);
});
test('invalid 0', () => {
  expect(isDate('0/0/0')).toBe(false);
});

test('valid hex FFA', () => {
  expect(isHexColor('FFA')).toBe(true);
});
test('valid hex 00ffcc', () => {
  expect(isHexColor('00ffcc')).toBe(true);
});
test('invalid hex four digits', () => {
  expect(isHexColor('FFFF')).toBe(false);
});
test('invalid hex non-hex chars', () => {
  expect(isHexColor('GGG')).toBe(false);
});

