import React, { useState, useReducer, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

const ACTION_TYPE = {
  response: "UPDATE_RESPONSE",
  error: "UPDATE_ERROR",
  loading: "UPDATE_LOADING",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.response:
      console.log("hihihih");
      return { ...state, response: action.value };
    case ACTION_TYPE.error:
      return { ...state, error: action.value };
    case ACTION_TYPE.loading:
      return { ...state, loading: action.value };
    default:
      return state;
  }
}

const initialValue = {
  response: {},
  error: "",
  loading: true,
};

export default function useAxios({ url, method, data }: AxiosRequestConfig) {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const { response, error, loading } = state;

  const requestConfig: AxiosRequestConfig = {
    method: method,
    url: url,
    data: data,
    headers: {
      "X-Naver-Client-Id": process.env.NEXT_PUBLIC_CLIENT_ID,
      "X-Naver-Client-Secret": process.env.NEXT_PUBLIC_CLIENT_SECRET,
    },
  };

  const fetchData = async () => {
    try {
      const _response = await axios.request(requestConfig);
      console.log("_response", _response);
      dispatch({ type: ACTION_TYPE.response, value: _response });
    } catch (error) {
      console.log("data fetcing error", error);
      console.log(process.env.NEXT_PUBLIC_CLIENT_ID);
      dispatch({ type: ACTION_TYPE.error, value: error });
    } finally {
      console.log("finally");
      dispatch({ type: ACTION_TYPE.loading, value: false });
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, method]);

  useEffect(() => {
    console.log("url changed", url);
  }, [url]);

  useEffect(() => {
    console.log("method changed", method);
  }, [method]);
  useEffect(() => {
    console.log("data changed", data);
  }, [data]);

  useEffect(() => {
    console.log("response state 바뀜", response);
  }, [response]);

  return { response, error, loading };
}
