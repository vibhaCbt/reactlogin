import React, {useEffect, useRef} from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {setFormData } from '../reducers/formDataSlice';
//import { FormInput } from '../components';

export const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, trigger, watch, reset, formState: { errors } } = useForm();
    const password = useRef({});
    password.current = watch("inputPassword", "");

    useEffect(() =>{
        return() =>{
            console.log('cleanup')
        }
    },[])



    const onSubmit = (submittedData) => {
        //console.log(submittedData)
        dispatch(setFormData(submittedData))
        reset();
        navigate('/login')
        
    }

    const registerOptions = {
        inputName: {
            required: 'Name Required',
            maxLength: { value: 5, message: 'Maxlength 5 char allowed' }
        },
        inputEmail: {
            required: 'Email required',
            pattern: { value: /^\S+@\S+$/i, message: "Not match email pattern" }
        },
        inputPhone: {
            required: 'phone required',
            // maxLength: {value: 10, message:"only 10 digits allow"},
            pattern: { value: /^(\+\d{1,3}[- ]?)?\d{10}$/, message: "Invalid phone, only enter 10 digits" }
        },
        inputPassword: {
            required: 'Password required',
            minLength: { value: 3, message: 'required atleast 3 characters' }
        },
        inputConfirmPassword: {
            required: 'Confirm Password required',
            validate: value =>
                value === password.current || "The passwords do not match"
        },
        check: {
            required: 'Check required'
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-12">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input
                            name="inputName"
                            type="text"
                            className="form-control"
                            id="inputName"
                            onKeyUp={() => { trigger('inputName') }}
                            {...register("inputName", registerOptions.inputName)}
                        />
                        {errors.inputName && (<div className='text-danger'>{errors.inputName.message}</div>)}
                        {/* <FormInput
                            type="text" 
                            name='inputName'
                            {...register("inputName", registerOptions.inputName)} 
                            onKeyUp={() => {trigger('inputName')}}
                        /> */}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPhone" className="form-label">Phone</label>
                        <input
                            name="inputPhone"
                            type="text"
                            className="form-control"
                            id="inputPhone"
                            onKeyUp={() => { trigger('inputPhone') }}
                            {...register("inputPhone", registerOptions.inputPhone)}
                        />
                        {errors.inputPhone && (<div className='text-danger'>{errors.inputPhone.message}</div>)}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input
                            name="inputEmail"
                            type="text"
                            className="form-control"
                            id="inputEmail"
                            onKeyUp={() => { trigger('inputEmail') }}
                            {...register("inputEmail", registerOptions.inputEmail)}
                        />
                        {errors.inputEmail && (<div className='text-danger'>{errors.inputEmail.message}</div>)}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword" className="form-label">Passowrd</label>
                        <input
                            name="inputPassword"
                            type="text"
                            className="form-control"
                            id="inputPassword"
                            onKeyUp={() => { trigger('inputPassword') }}
                            {...register("inputPassword", registerOptions.inputPassword)}
                        />
                        {errors.inputPassword && (<div className='text-danger'>{errors.inputPassword.message}</div>)}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
                        <input
                            name="inputConfirmPassword"
                            type="text"
                            className="form-control"
                            id="inputConfirmPassword"
                            onKeyUp={() => { trigger('inputConfirmPassword') }}
                            {...register("inputConfirmPassword", registerOptions.inputConfirmPassword)}
                        />
                        {errors.inputConfirmPassword && (<div className='text-danger'>{errors.inputConfirmPassword.message}</div>)}
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input
                                name='check'
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck"
                                {...register("check", registerOptions.check)}
                                onKeyUp={() => {
                                    trigger('check')
                                }}
                            />
                            {errors.check && (<div className='text-danger'>{errors.check.message}</div>)}
                            <label className="form-check-label" htmlFor="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}