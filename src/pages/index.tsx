import React, { useEffect, useMemo } from "react";
import useAxios from "@src/hooks/useAxios";
import { AXIOS_METHOD_TYPE } from "@src/types/AxiosTypes";

function HomePage({ item }) {
  const { response, loading, error } = useAxios({
    url: "/v1/search/movie.json?query=life&display=10&start=1&genre=1",
    method: AXIOS_METHOD_TYPE.get,
    data: { hi: "hi" },
  });

  useEffect(() => {
    console.log("index.html response", response);
    return () => {
      console.log("unmount..?");
    };
  }, [response]);

  return <div>Welcome to Next.js!</div>;
}

export default HomePage;
