import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initalState = {
  cart: [],
};

const productsReducer = (state = initalState, action) => {
  //we are checking here -- action.payload e j product ashtece ota ki ager teke ache kina..find method diye find korteci j. id === id match hocce kina
  const selectedProduct = state.cart.find(product => product.id === action.payload.id);
  console.log(selectedProduct)
 
  switch (action.type) {
    case ADD_TO_CART:
      ///ekane hocce j ager teke jodi take product mane jodi undefined na hoi  tahoel tmi tamai eta koro R jodi unique product hoi tahole hocce tmi next logic return e jaw ga
      
      if(selectedProduct){
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, {...action.payload, quantity: 1}],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    default:
      return state;
  }
};
export default productsReducer;
