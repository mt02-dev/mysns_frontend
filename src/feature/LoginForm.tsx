import { useForm, SubmitHandler } from "react-hook-form";
import './LoginForm.css'
import { Button, useNotice } from "@yamada-ui/react";
import { validationSchema } from "../utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type Inputs = {
  email: string,
  password: string
};

function LoginForm () {
  // register 
  const { 
    register, // registerはuseStateを利用した情報管理の簡略化している 
    handleSubmit, 
    watch, 
    formState: { errors } // errors.name.messageに設定したメッセージが格納される
  } = useForm<Inputs>({mode: "onChange" , resolver: zodResolver(validationSchema)});
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  };

  // console.log(watch('password'));
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <>
      <div className="flex flex-col justify-conter items-center p-10 max-w-md w-full rounded-md bg-white">
        <h1 className="text-3xl font-bold">Login</h1>
        <form className="flex flex-col w-80 " onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input 
            className="p-2 my-2 w-full border-solid border-[1px] rounded-md border-[#6b7280] border-opacity-50" 
            id="email"
            placeholder="Email"
            type="email"
            {...register("email")}
          />
          {errors.email && <span className="text-rose-600">{errors.email?.message}</span> }
          {/* include validation with required or other standard HTML validation rules */}
          <input
            className="p-2 my-2 border-solid border-[1px] rounded-md border-[#6b7280] border-opacity-50" 
            id="password"
            placeholder="password"
            {...register("password")}
           />
          {/* errors will return when field validation fails  */}
          {errors.password && <span className="text-rose-600">{errors.password?.message}</span> }
          <Button className="bg-[#000]" type="submit">Login</Button>

        </form>
      </div>
    </>
    );

}

export default LoginForm; 