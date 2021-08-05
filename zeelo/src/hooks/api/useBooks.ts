import useSWR from "swr";
import fetcher from "core/libs/fetch";

const useBooks = () => {
    console.log(process.env.REACT_APP_API_URL)
    const { data, mutate, isValidating } = useSWR(`${process.env.REACT_APP_API_URL}/items`, fetcher);
    return [data, { mutate, isValidating }];
};
export default useBooks;

