import {
 GET_EXHIBITORS_LOADING, GET_EXHIBITORS_SUCCESS, GET_EXHIBITORS_FAILURE, 
 DELETE_EXHIBITOR_LOADING, DELETE_EXHIBITOR, DELETE_EXHIBITOR_SUCCESS, DELETE_EXHIBITOR_FAILURE
} from '../actions/exhibitors'

const INITIAL_STATE = {
  exhibitors : [],
  loading : false,
  error: null
}

export default (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
     // GET EXHIBITORS
    case GET_EXHIBITORS_LOADING:
      return{...currentState, loading: true};
      break;
    case GET_EXHIBITORS_SUCCESS:
      return{...currentState, loading: false, error: null, exhibitors: action.exhibitors};
      break;
    case GET_EXHIBITORS_FAILURE:
      return {...currentState, loading: false, error: action.error};
      break;

       // DELETE EXHIBITORS

    // case DELETE_EXHIBITOR_LOADING:
    //   return{...currentState, loading: true};
    //   break;
    // case DELETE_EXHIBITOR_SUCCESS:
    //   return{...currentState, loading: false, error: null, exhibitors:action.exhibitors};
    //   break;
    // case DELETE_EXHIBITOR_FAILURE:
    //   return{...currentState, loading: false, error: action.error};
    //   break;
    default:
      return currentState;
      break;

  }
}
