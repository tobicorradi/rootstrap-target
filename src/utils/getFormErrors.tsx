export const getFormErrors = (requestErrors, errors, input) => {
  if (typeof requestErrors !== 'undefined' && typeof requestErrors[input] !== 'undefined') {
    const inputName = input.charAt(0).toUpperCase() + input.slice(1);
    const apiErrorMessage = `${inputName} ${requestErrors[input][0]}`;
    return apiErrorMessage;
  }
  if (typeof errors !== 'undefined' && typeof errors[input] !== 'undefined') {
    const error = errors[input].message;
    return error;
  }

  if (typeof errors !== 'undefined' && typeof errors[input] === 'undefined') {
    return requestErrors[0];
  }
  return '';
};
