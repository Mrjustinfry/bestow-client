export const required = value => (value ? undefined : 'Required');
export const valid = value =>  value.trim() !== '' ? undefined : 'Invalid entry';
