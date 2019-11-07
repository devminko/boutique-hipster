
const INTIAL_STATE = {
  isAuth: false,
  isAdmin: false,
};

export const authReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  };
};