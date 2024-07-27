import { useForm, SubmitHandler } from "react-hook-form";
import './LoginForm.css'
import { Button, useNotice } from "@yamada-ui/react";

type Inputs = {
  email: string,
  password: string
};
/* フォームのコンテナ */
// .form-container {
//   background-color: white;
//   padding: 30px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   max-width: 400px;
// }


function LoginForm () {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    // console.log(watch("email")); // watch input value by passing the name of it
    // console.log(watch('password'));
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <>
        <div className="flex flex-col justify-conter items-center p-10 max-w-md w-full rounded-md bg-white">
          <h1 className="text-3xl font-bold">Login</h1>
          <form className="flex flex-col w-80 " onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input className="p-2 my-2 w-full border-solid border-[1px] rounded-md border-[#6b7280] border-opacity-50" id="email" placeholder="Email" {...register("email", {required: true})} />
            {/* include validation with required or other standard HTML validation rules */}
            <input className="p-2 my-2 border-solid border-[1px] rounded-md border-[#6b7280] border-opacity-50" id="password" placeholder="password" {...register("password", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.password && <span>This field is required</span>}
            <Button className="bg-[#000]" type="submit">Login</Button>

          </form>
        </div>
      </>
    );

}

export default LoginForm; 