const initialState = {
  activities: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "activities/loadStore":
      console.log("this is action payload: ", action.payload);
      return { ...state.activities, ...action.payload };
    default: {
      return state;
    }
  }
}
