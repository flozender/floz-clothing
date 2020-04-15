import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: [],
};

const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default ShopReducer;
