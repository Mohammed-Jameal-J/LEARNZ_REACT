import React from 'react'
import { useForm } from 'react-hook-form';

const SimpleForm = () => {
    const {register,handleSubmit,reset, watch ,formState: { errors }}=useForm({
        defaultValues:{
            username: "jameal",
            email: "jameal@gmail.com"
        }
    });

    const formSubmit=(data)=>{
        console.log(data);
        reset();
    }
    const live=watch("username");


  return (
    <form onSubmit={handleSubmit(formSubmit)}>
        <input type="text" name="username" placeholder='Enter your Name ' {...register("username")} />
        <p>Live value: {live}</p>
        <input name="email" placeholder='Enter your Email ' {...register("email",{required: "Email is required", pattern:{value: /^\S+@\S+$/i, message: "Invalid email address"}})} />
        {errors.email && <p>{errors.email.message}</p>}
        <button type="submit">Submit</button>
    </form>
  )
}

export default SimpleForm