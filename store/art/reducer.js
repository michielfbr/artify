const initialState = {
  paintings: [],
};

export default function Art(state = initialState, action) {
  switch (action.type) {
    case "paintingFetched": {
      return {
        ...state,
        paintings: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
