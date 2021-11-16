const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
};

const wagonReducer = (state = initialWagonState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case "gather": {
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1,
      };
    }
    case "travel": {
      const supplies = state.supplies - 20 * action.payload;
      if (supplies < 0) return state;

      return {
        supplies,
        distance: state.distance + 10 * action.payload,
        days: state.days + action.payload,
      };
    }
    case "tippedWagon": {
      return {
        supplies: state.supplies - 30,
        distance: state.distance,
        days: state.days + 1,
      };
    }
  }
};

let wagon = wagonReducer(undefined, {});
console.log(wagon);

wagon = wagonReducer(wagon, { type: "travel", payload: 1 });
console.log(wagon);

wagon = wagonReducer(wagon, { type: "gather" });
console.log(wagon);

wagon = wagonReducer(wagon, { type: "tippedWagon" });
console.log(wagon);

wagon = wagonReducer(wagon, { type: "travel", payload: 3 });
console.log(wagon);
