import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  booking: [],
  loading: false,
  error: null,
};

export const BookingsContext = createContext(INITIAL_STATE);

const BookingsReducer = (state, action) => {
  switch (action.type) {
    case "BOOKING_LOADING":
      return {
        booking: [],
        loading: true,
        error: null,
      };
    case "BOOKING_SUCCESS":
      return {
        booking: action.payload,
        loading: false,
        error: null,
      };
    case "BOOKING_FAILURE":
      return {
        booking: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const BookingsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BookingsReducer, INITIAL_STATE);

  return (
    <BookingsContext.Provider
      value={{
        booking: state.booking,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </BookingsContext.Provider>
  );
};