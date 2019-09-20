export const actionCreator = (typeReq, action) => {
  switch (typeReq) {
    case 'req':
      return `${action}_REQUEST`;
    case 'res':
      return `${action}_RESPONSE`;
    case 'fail':
      return `${action}_FAILED`;
    default:
      return action;
  }
};
