import Axios from 'axios';
import { exhibitorsApi } from '../apiConfig';

// Action types

// Get all Exhibitors

export const GET_EXHIBITORS_LOADING = "GET_EXHIBITORS_LOADING";
export const GET_EXHIBITORS = "GET_EXHIBITORS";
export const GET_EXHIBITORS_SUCCESS = "GET_EXHIBITORS_SUCCESS";
export const GET_EXHIBITORS_FAILURE = "GET_EXHIBITORS_FAILURE";

export const DELETE_EXHIBITOR_LOADING = "DELETE_EXHIBITOR_LOADING";
export const DELETE_EXHIBITOR = "DELETE_EXHIBITOR";
export const DELETE_EXHIBITOR_SUCCESS = "DELETE_EXHIBITOR_SUCCESS";
export const DELETE_EXHIBITOR_FAILURE = "DELETE_EXHIBITOR_FAILURE";


// Action Creators

// Get all Exhibitors

export const getExhibitorsLoading = () => {
  return{
    type: GET_EXHIBITORS_LOADING
  }
}

export const getExhibitors = () => {
  const payload = Axios.get(exhibitorsApi);
  return{
    type:GET_EXHIBITORS,
    payload
  }

}

export const getExhibitorsSuccess = (exhibitors) => {
  return{
    type: GET_EXHIBITORS_SUCCESS,
    exhibitors
  }
}

export const getExhibitorsFailure = (error) => {
  return{
    type: GET_EXHIBITORS_FAILURE,
    error
  }
}

// delete exhibitors

// export const deleteExhibitorLoading = () => {
//   return{
//     type: DELETE_EXHIBITOR_LOADING
//   }
// }

// export const deleteExhibitor = (id) => {
//   const payload = Axios.delete(deleteExhibitorApi(id));
//   return{
//     type: DELETE_EXHIBITOR,
//     payload
//   }
// }

// export const deleteExhibitorSuccess = () => {
//   return{
//     type: DELETE_EXHIBITOR_SUCCESS

//   }
// }

// export const deleteExhibitorFailure = (error) => {
//   return{
//     type: DELETE_EXHIBITOR_FAILURE
//   }
// }