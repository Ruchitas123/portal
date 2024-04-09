/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
  return `${firstname} ${lastname}`?.trim();
}

/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  // return zero if dates are valid
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 0;
  }

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

/**
 * Calculate Age from Birth Date
 * @name calculateAge
 * @param {string} birthDate Date of birth in YYYY-MM-DD format
 * @returns {number} Age in years
 */
function calculateAge(birthDate) {
  // Check if birthDate is a valid string
  if (typeof birthDate !== 'string') {
    return 0; // Or you can return an error message
  }

  // Parse the birth date into a Date object
  const birthDateObj = new Date(birthDate);

  // Get today's date
  const today = new Date();

  // Calculate the difference in milliseconds
  const diffInMs = today.getTime() - birthDateObj.getTime();

  // Convert milliseconds to years (including leap years)
  const ageInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25));

  return ageInYears;
}


// eslint-disable-next-line import/prefer-default-export
export { getFullName, days, calculateAge};
