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
    console.log("in SUCCES")
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

function useHttp(requestFunction, startWithPending) {
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
        console.log("tr",JSON.stringify(responseData))
        dispatch({ type: "SUCCESS", responseData });
        console.log("inside my http hook",responseData);
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
