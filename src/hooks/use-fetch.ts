import { useEffect, useState } from "react";

type UseFetchResult<TData, TError extends Error> = {
  data: TData | undefined;
  isLoading: boolean;
  error: TError | undefined;
};

export const useFetch = <TData, TError extends Error>(
  promiseFn: (signal: AbortSignal) => Promise<TData>,
): UseFetchResult<TData, TError> => {
  const [data, setData] = useState<TData | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<TError | undefined>();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data: TData = await promiseFn(signal);
        setData(data);
      } catch (err) {
        if (!signal.aborted) setError(err as unknown as TError);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return {
    data,
    error,
    isLoading,
  };
};
