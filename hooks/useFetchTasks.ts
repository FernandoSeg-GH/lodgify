"use client";
import { Group } from "@/types";
import { useState, useEffect } from "react";

const useFetchTasks = (url: string) => {
  const [data, setData] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [url]);

  return { data, loading };
};

export default useFetchTasks;
