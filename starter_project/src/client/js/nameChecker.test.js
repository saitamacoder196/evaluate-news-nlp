import { isValidURL, checkForName } from './nameChecker';

describe('Testing the URL validation functionality', () => {
  test('isValidURL returns true for valid URL', () => {
    expect(isValidURL('http://www.example.com')).toBeTruthy();
  });

  test('isValidURL returns false for invalid URL', () => {
    expect(isValidURL('not_a_valid_url')).toBeFalsy();
  });
});

describe('Testing the name check functionality', () => {
  global.alert = jest.fn();

  test('checkForName recognizes a valid name', () => {
    checkForName('Picard');
    expect(global.alert).toHaveBeenCalledWith('Welcome, Captain!');
  });

  test('checkForName alerts for invalid name', () => {
    checkForName('Zaphod');
    expect(global.alert).toHaveBeenCalledWith('Enter a valid captain name');
  });
});
