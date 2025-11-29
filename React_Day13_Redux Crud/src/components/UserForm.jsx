import React, { useEffect } from 'react'
import z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';

const UserForm = () => {
    const dispatch = useDispatch();

    const schema = z.object({
        name: z.string().min(2, "Name should be at least 2 characters"),
        email: z.email("Invalid email address"),
    });

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });
    const onSubmit = (data) => {
        const action = { type: "ADD_USER", payload: {id: Date.now(), ...data} };
        dispatch(action);
        reset();
    }

    useEffect(() => {
        setValue("name", "Jameal");
        setValue("email", "jameal@gmail.com");
    }, []);
    
  return (
    <>
    <h1>Add User</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} type="text" placeholder='Name' />
      {errors.name && <p>{errors.name.message}</p>}
      <br />
      <input {...register("email")} type="email" placeholder='Email' />
      {errors.email && <p>{errors.email.message}</p>}
      <br />
      <button type="submit">Add User</button>
    </form>
    </>
  )
}

export default UserForm