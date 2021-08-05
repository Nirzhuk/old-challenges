import { useState } from "react";


interface useFormProps<T> {
    initialData: T;
    onSubmit(values:T):void;
}

const useForm = <T extends object>({ initialData, onSubmit}: useFormProps<T>)=> {
    const [values, setValues] = useState<T>(initialData);
    
    const handleChange = (e: React.ChangeEvent<any>) =>{
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        onSubmit?.(values);
    }

    return {values, handleChange,handleSubmit}
}

export default useForm;