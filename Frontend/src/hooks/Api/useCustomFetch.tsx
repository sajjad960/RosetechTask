import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface fetchProps {
  url: string,
  options: object
}

export const useCustomFetch = (fetchOptions: fetchProps) => {
  const {url, options} = fetchOptions;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);

      console.log("rending", url);
      if (!response.ok) {
        toast.error("Fetch Fail, Something went wrong");
      }
      setData(result?.data?.data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Handle the error if needed
      console.log(error)
    } finally {
      // Do cleanup or finalization if needed
      setLoading(false);
    }
  }, [url, options]); // Ensure apiUrl is in the dependency array if used inside the callback

  useEffect(() => {

    fetchData();
    return () => {
    };
  }, [fetchData]);

  return { data, loading };
};