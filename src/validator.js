//required field validator
export const required = value => (value ? undefined : 'Required');

//valid input validator
export const valid = value =>  value.trim() !== '' ? undefined : 'Invalid entry';

//corect length validator
export const length = length => value => {
    if (length.min && value.length < length.min) {
        return `Must be at least ${length.min} characters long`;
    }
    if (length.max && value.length > length.max) {
        return `Must be at most ${length.max} characters long`;
    }
};

//verify password validator
export const verify = info => (value, values) =>
    info in values && value.trim() === values[info].trim()
        ? undefined
        : 'Incorrect Password';

//Local auth storage
export const loadAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
  try {
      localStorage.setItem('authToken', JSON.parse(JSON.stringify(authToken)));
  } catch (e) {console.log('error')}
};

export const saveUserInfo = (userInfo) => {
  try {
      localStorage.setItem('localUserId', JSON.parse(JSON.stringify(userInfo.userId)));
      localStorage.setItem('localUserName', JSON.parse(JSON.stringify(userInfo.firstName)));
  } catch (e) {console.log('error')}
};

export const clearAuthToken = () => {
  try {
      localStorage.removeItem('localUserId');
      localStorage.removeItem('localUserName');
      localStorage.removeItem('authToken');
  } catch (e) {console.log('error')}
}
