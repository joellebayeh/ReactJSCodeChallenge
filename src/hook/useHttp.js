import { useReducer, useCallback } from "react";

function httpReducer(state, action) {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      loading: true,
    };
  }
  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      loading: false,
    };
  }
  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      loading: false,
    };
  }
  return state;
}

function useHttp(requestFunction, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    loading: startWithPending,
    data: null,
    error: null,
  });
  const sendRequest = useCallback(
    async function (requestData) {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);
        console.log("try")
        dispatch({ type: "SUCCESS", responseData });
      } catch (error) {
        console.log("catch")
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
