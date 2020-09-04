import _ from "lodash";

const formatGraphqlErrors = (error) => {
  const errorDetails = _.get(error, "orginalError.response.body");
  try {
    if (errorDetails) return JSON.parse(errorDetails);
  } catch (e) {}
  return error;
};

export default formatGraphqlErrors;
