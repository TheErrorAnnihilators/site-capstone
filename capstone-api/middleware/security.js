const jwt = require('jsonwebtoken');
const { secretKey } = "fried_chicken"
const { UnauthorizedError } = require('../utils/errors');

const { fetchUserDataFromToken } = require('../../capstone-ui/services/apiService')


const jwtFrom = ({ headers }) => {
  if (headers?.authorization) {
    const [scheme, token] = headers.authorization.split(" ");
    if (scheme.trim() === "Bearer") {
      return token;
    }
  }
  return undefined;
};

const extractUserFromJwt = async (req, res, next) => {
  try {
    const token = jwtFrom(req);

    if (token) {
      const decodedToken = jwt.verify(token, secretKey);
      res.locals.user = decodedToken;
      console.log("Decoded User:", res.locals.user);

      // Add the user ID to the request
      // const userId = decodedToken.id;
      const user = await fetchUserDataFromToken(token);


      // Add the user ID to the response headers
      res.locals.user = user;
      console.log("User:", res.locals.user);

    }

    return next();
  } catch (error) {
    console.error("Error:", error);
    return next();
  }
};

const requireAuthenticatedUser = (req, res, next) => {
  try {
    const { user } = res.locals;
    console.log(user);
    if (!user?.email) {
      throw new UnauthorizedError();
    }
    return next();
  } catch (error) {
    console.error("Error:", error);
    return next(error);
  }
};

module.exports = {
  extractUserFromJwt,
  requireAuthenticatedUser
};
