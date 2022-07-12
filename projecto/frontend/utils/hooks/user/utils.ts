import useSWR from 'swr';

export const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

export function useUser() {
  const { data, error } = useSWR(
    'http://localhost:3000/api/users?user=mo',
    fetcher,
  );

  console.log(data)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
