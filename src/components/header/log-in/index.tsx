import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "/src/assets/logo.svg";

type FormData = {
  email: string;
  password: string;
};

const schema: ZodType<FormData> = z.object({
  email: z
    .string()
    .nonempty({ message: "Can't be empty" })
    .email({ message: "Email address is invalid." }),
  password: z.string().nonempty({ message: "Can't be empty" }),
});

function LogIn(props: { setShowAvatar: (status: boolean) => void }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const storedEmail = localStorage.getItem("user_email");
    const storedPassword = localStorage.getItem("user_password");
    if (data.email === storedEmail && data.password === storedPassword) {
      navigate("/");
    } else {
      alert("invalid email or password");
    }
    return data;
  };

  return (
    <div className="flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-[#10141E] px-[1.5rem]">
      <img className="translate-y-[-4rem]" src={Logo} alt="Logo" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#161D2F] p-[2rem] w-full max-w-[25rem] rounded-3xl"
      >
        <h1 className="text-[2rem] leading-[2.5rem] font-[400] tracking-[-0.03rem] text-[#FFF] mb-[2.5rem]">
          Login
        </h1>
        <div className="flex flex-col items-center gap-[1.5rem]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:max-w-[35rem] relative flex flex-col items-center max-w-[21rem] w-full gap-[1.5rem]"
          >
            <div
              className={clsx(
                errors.email?.message
                  ? "border-[#F45f]"
                  : "border-[#5A698F] hover:border-[#FFF]",
                "flex flex-row border-b w-full transition-all duration-300"
              )}
            >
              <input
                {...register("email")}
                type="text"
                id="Email"
                placeholder="Email address"
                className="bg-transparent outline-none text-[#FFF] text-[1rem] leading-[1.1rem] font-[400] pb-[0.5rem] pl-[0.5rem] w-full"
              />
              {errors.email && (
                <span className="md:relative md:top-0 md:text-end md:w-[70%] text-[0.7rem] leading-[0.8rem] font-[700] italic text-[#F67E7E] pl-[0.5rem] absolute left-0 top-8">
                  {errors.email?.message}
                </span>
              )}
            </div>
            <div
              className={clsx(
                errors.password?.message
                  ? "border-[#F45f]"
                  : "border-[#5A698F] hover:border-[#FFF]",
                "flex flex-row border-b w-full transition-all duration-300"
              )}
            >
              <input
                {...register("password")}
                type="password"
                id="Password"
                placeholder="Password"
                className="bg-transparent outline-none text-[#FFF] text-[1rem] leading-[1.1rem] font-[400] pb-[0.5rem] pl-[0.5rem] w-full"
              />
              {errors.password && (
                <span className="md:relative md:top-0 md:text-end md:w-[70%] text-[0.7rem] leading-[0.8rem] font-[700] italic text-[#F67E7E] pl-[0.5rem] absolute left-0 top-8">
                  {errors.password?.message}
                </span>
              )}
            </div>
            <input
              onClick={() => {
                props.setShowAvatar(true);
              }}
              type="submit"
              value="Login to your account"
              className="text-[1rem] leading-[1.1rem] font-[400] mt-[1.5rem] cursor-pointer max-w-[21rem] px-[1rem] py-[0.9rem] w-full rounded-md text-[#FFF] bg-[#FC4747] hover:text-[#10141E] hover:bg-[#FFF] transition-all duration-300"
            />
          </form>
          <div className="flex gap-[0.5rem]">
            <h3 className="text-[1rem] leading-[1.2rem] font-[400] text-[#FFF]">
              Don`t have an account?
            </h3>
            <Link to="/sign-up">
              <h2 className="text-[1rem] leading-[1.2rem] font-[400] text-[#FC4747] cursor-pointer">
                Sign Up
              </h2>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default LogIn;
