import { connect } from 'react-redux';
import ExhibitorsComponent from '../components/Exhibitors';
import {
	getExhibitorsLoading, getExhibitors, getExhibitorsSuccess, getExhibitorsFailure
} from '../actions/exhibitors'

const mapStateToProps = (store) => {
  return {
    exhibitors: store.exhibitors.exhibitors,
    loading: store.exhibitors.loading,
    error: store.exhibitors.error
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getExhibitors: () => {
      dispatch(getExhibitorsLoading());
      dispatch(getExhibitors()).then(response => {
        if (response.payload.status<400) {
          dispatch(getExhibitorsSuccess(response.payload.data));

        } else {
          dispatch(getExhibitorsFailure(response.payload.message));
        }
      });
    }
  }
}

export const Exhibitors = connect(mapStateToProps, mapDispatchToProps)(ExhibitorsComponent);