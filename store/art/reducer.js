const initialState = {
  paintings: [],
  NoOfFetches: 0,
};

export default function Art(state = initialState, action) {
  switch (action.type) {
    case "paintingFetched": {
      return {
        ...state,
        paintings: action.payload,
        NoOfFetches: state.NoOfFetches + 1,
      };
    }
    default: {
      return state;
    }
  }
}
