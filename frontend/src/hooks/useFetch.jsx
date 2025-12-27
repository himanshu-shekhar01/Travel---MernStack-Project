import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url);

        if (!res.ok) {
          setError("Failed to fetch data");
        }

        const result = await res.json();
        setData(result.data );
        setLoading(false);
      } catch (err) {
        setError(err.message);
        // setLoading(false);
      } 
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
