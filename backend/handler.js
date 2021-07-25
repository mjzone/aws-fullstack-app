'use strict';

module.exports.getUserById = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        user: 'Manoj Fernando'
      },
      null,
      2
    ),
  };
};
