import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { myData } from '../reducers/formDataSlice';
import { Link, useNavigate } from 'react-router-dom';
import { addLoginData } from '../reducers/LoginDataSlice';

export const Login = () => {

    const currentData = useSelector(myData)
    //console.log(currentData)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { register, handleSubmit, trigger, watch, reset, formState: { errors } } = useForm();
    
    const onSubmit = (loginData) =>
    
    {
        // console.log(loginData)
        // console.log(currentData.inputName)
        currentData.filter(x => {
            if(x.inputName === loginData.userName  && x.inputPassword === loginData.loginPswd){
                dispatch(addLoginData(loginData))
                navigate('/')
            }
            else{
                alert('Login detail not matched')
            }
        })
    }

    const loginOpt = {
        userName:{
            required: 'Uer Name Required'
        },
        loginPswd:{
            required: 'Passowrd Required'
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6">
                        <label htmlFor="userName" className="form-label">User Name</label>
                        <input
                            name="userName"
                            type="text"
                            className="form-control"
                            id="userName"
                            onKeyUp={() => { trigger('userName') }}
                            {...register("userName", loginOpt.userName)}
                        />
                        {errors.userName && (<div className='text-danger'>{errors.userName.message}</div>)}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="loginPswd" className="form-label">User Name</label>
                        <input
                            name="loginPswd"
                            type="text"
                            className="form-control"
                            id="loginPswd"
                            onKeyUp={() => { trigger('loginPswd') }}
                            {...register("loginPswd", loginOpt.loginPswd)}
                        />
                        {errors.loginPswd && (<div className='text-danger'>{errors.loginPswd.message}</div>)}
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
            <div className='row'>
                <Link to='/register'>Register</Link>
            </div>
        </div>
    )
}