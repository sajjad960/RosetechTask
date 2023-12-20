import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface fetchProps {
  url: string;
  options: object;
}

export const useCustomFetch = (
  fetchOptions: fetchProps,
  executeOnMount = true
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async (params: fetchProps) => {
    const { url, options } = params;
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);

      console.log("rending", url);
      if (!response.ok) {
        toast.error("Fetch Fail, Something went wrong");
      }
      setData(result);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Handle the error if needed
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (executeOnMount) fetchData(fetchOptions);
  }, [executeOnMount, fetchData, fetchOptions]);

  return { data, loading, execute: fetchData };
};
