const initialState = {
  painting: {},
};

export default function Painting(state = initialState, action) {
  switch (action.type) {
    case "paintingFetched": {
      return {
        ...state.painting,
        painting: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
