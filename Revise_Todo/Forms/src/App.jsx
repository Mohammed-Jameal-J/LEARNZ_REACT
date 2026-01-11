import { useForm } from "react-hook-form"
import * as z from 'zod'
import {zodResolver} from "@hookform/resolvers/zod"

const schema = z.object({
  name: z.string().min(1,"Name is required"),
  email:z.email("Invalid"),
})


function App() {

  const {register,handleSubmit,watch,reset,formState:{errors}}=useForm({
    resolver: zodResolver(schema)
  })
  const onSubmit =(data)=>{
    console.log(data);
    
    reset()
  }

  const email=watch("email")

  return (
    <>

    <form onSubmit={handleSubmit(onSubmit)} >
      <input 
      // {...register("name",{
      //   required:"name is required"
      // })}
      {...register("name")}
       placeholder="Name" />
      {errors.name && <p>{errors.name.message}</p>}
      <input 
      {...register("email")}
       placeholder="Email" />
      <h3>Live :{email}</h3>
      <button type="Submit">Submit</button>
    </form>
    </>
  )
}

export default App
