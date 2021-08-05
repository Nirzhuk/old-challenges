import useSWR from "swr";
import fetcher from "core/libs/fetch";

const useBook = (id:string) => {
    const { data, isValidating } = useSWR(`${process.env.REACT_APP_API_URL}/items/${id}`, fetcher);
    return [data, { isValidating }];
};
export default useBook;
