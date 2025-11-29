import React, { useEffect } from 'react'
import z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';

const UserForm = ({ user }) => {
    const dispatch = useDispatch();

    const schema = z.object({
        name: z.string().min(2, "Name should be at least 2 characters"),
        email: z.email("Invalid email address"),
    });

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });
    const onSubmit = (data) => {
      if (user) {
        const action = { type: "UPDATE_USER", payload: {id: user.id, ...data} };
        dispatch(action);
      } else {
        const action = { type: "ADD_USER", payload: {id: Date.now(), ...data} };
        dispatch(action);
      }
      reset();
    }

    // useEffect(() => {
    //     setValue("name", "Jameal");
    //     setValue("email", "jameal@gmail.com");
    // }, []);
    useEffect(() => {
        if (user) {
            setValue("name", user.name);
            setValue("email", user.email);
        }
    }, [user]);

  return (
    <>
    <h1>{user ? "Edit User" : "Add User"}</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} type="text" placeholder='Name' />
      {errors.name && <p>{errors.name.message}</p>}
      <br />
      <input {...register("email")} type="email" placeholder='Email' />
      {errors.email && <p>{errors.email.message}</p>}
      <br />
      <button type="submit">{user ? "Update User" : "Add User"}</button>
    </form>
    </>
  )
}

export default UserForm