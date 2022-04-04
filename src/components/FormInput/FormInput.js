import React from 'react'
import { useForm } from "react-hook-form";

export const FormInput = (props) => {
    const { register} = useForm();
    return (
        <input
            type={props.type}
            name={props.name}
            className="form-control"
            onKeyUp={props.onKeyUp}
            // {...register(name)}
            {...props}
        />
    )
}