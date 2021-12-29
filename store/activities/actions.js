import axios from "axios";
import { appDoneLoading, appLoading } from "../appState/actions";

const ApiUrl = "http://www.boredapi.com/api/activity";
//action creators
const loadStore = (activity) => {
  return {
    type: "activities/loadStore",
    payload: activity,
  };
};

// const dispatch = useDispatch();

//THUNK
//fetches one random activity without arguments
export const fetchRandom = () => {
  return async (dispatch, getState) => {
    // console.log("this is thunk speaking");
    try {
      const res = await axios.get(`${ApiUrl}`);
      // console.log("this is res: ", res);
      dispatch(loadStore(res.data));
    } catch (e) {
      console.log(e);
    }
  };
};

//fetches one random activity either with one arguments or two.

export const fetchSpecific = (activityType, activityPeople) => {
  // console.log(
  //   "Fetching specific",
  //   activityType,
  //   typeof activityPeople,
  //   activityPeople
  // );

  console.log("thunk is called:");

  const type = activityType;
  const people = parseInt(activityPeople); //is a string when it's >2

  if (type === "select" && people === 0) {
    console.log("type and people are: ", type, people);
    return async (dispatch, getState) => {
      dispatch(appLoading());

      try {
        const res = await axios.get(`${ApiUrl}`);
        dispatch(loadStore(res.data));
        dispatch(appDoneLoading());
      } catch (e) {
        console.log(e);
        dispatch(appDoneLoading());
      }
    };
  }
  if (type === "select" || people === 0) {
    if (type === "select") {
      if (people === 3) {
        const number = Math.floor(Math.random() * 3) + 3;
        // console.log("number is: ", number);
        return async (dispatch, getState) => {
          dispatch(appLoading());

          try {
            const res = await axios.get(`${ApiUrl}?participants=${number}`);
            dispatch(loadStore(res.data));
            dispatch(appDoneLoading());
          } catch (e) {
            console.log(e);
            dispatch(appDoneLoading());
          }
        };
      }
      return async (dispatch, getState) => {
        // console.log("this is specific thunk with one arg");
        dispatch(appLoading());

        try {
          const res = await axios.get(`${ApiUrl}?participants=${people}`);
          // console.log("this is res for people: ", res.data);
          dispatch(loadStore(res.data));
          dispatch(appDoneLoading());
        } catch (e) {
          console.log(e); // if there's nothing found API sends back a proper error message
          dispatch(appDoneLoading());
        }
      };
    }
    if (people === 0) {
      return async (dispatch, getState) => {
        dispatch(appLoading());

        // console.log("this is specific thunk with one arg");
        try {
          const res = await axios.get(`${ApiUrl}?type=${type}`);
          // console.log("this is res for type: ", res.data);
          dispatch(loadStore(res.data));
          dispatch(appDoneLoading());
        } catch (e) {
          console.log(e);
          dispatch(appDoneLoading());
        }
      };
    } else {
      console.log("something went wrong in drop down menus");
      dispatch(appDoneLoading());

      return;
    }
  }

  if (type !== "select" && people !== 0) {
    return async (dispatch, getState) => {
      dispatch(appLoading());

      // console.log("this is specific thunk with two args");
      try {
        const res = await axios.get(
          `${ApiUrl}?type=${type}&participants=${people}`
        );
        // console.log("res of fetch with two args: ", res);
        //just do fetch request with the defined consts at the start of this function.
        dispatch(loadStore(res.data));
        dispatch(appDoneLoading());
      } catch (e) {
        console.log(e);
        dispatch(appDoneLoading());
      }
    };
  }
};
