import { BsGoogle, BsFillCaretRightFill } from "react-icons/bs";

interface LoginProps {
  setLogin: (value: boolean) => void;
}

const Login = ({ setLogin }: LoginProps) => {
  return (
    <div className="flex flex-col text-white bg-logIn h-screen bg-contain object-center bg-no-repeat w-screen shadow-inner px-9 pb-3 md:flex-row md:justify-between md:bg-[length:40%_100%]">
      <div className="">
        <div className="flex gap-6 py-12 mb-96 md:mb-88">
          <button
            onClick={() => setLogin(true)}
            className="border-b-2 border-lemon pb-1.5 rounded-b-sm ">
            Login
          </button>
          <button onClick={() => setLogin(false)} className="pb-2">
            Sign up
          </button>
        </div>

        <p className="text-4xl font-bold pb-12">WELCOME BACK</p>
      </div>

      {/* {error?.code === "auth/user-not-found" && (
        <p className="text-red-800 font-bold text-[16px] py-1">
          {" "}
          User not found
        </p>
      )} */}
      <div className="md:w-[60vw] md:flex md:justify-center md:items-center md:h-screen">
        <form className="flex flex-col gap-4 md:w-[60%]">
          <input
            type="email"
            placeholder="Email"
            className="p-3 text-white border-b border-gray-500 outline-none placeholder:text-white bg-dark"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-3 text-white border-b border-gray-500 outline-none placeholder:text-white bg-dark"
          />
          <a href="" className="text-lemon flex justify-end pb-4">
            Forget Password
          </a>

          <div className="flex justify-between">
            <div className="p-4 text-2xl bg-darkGray rounded-full ">
              <BsGoogle />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center bg-lemon py-4 px-7 rounded-[2rem] text-black text-xl font-bold gap-2">
              {/* {loading ? "Loading..." : "Login"}
              {!loading && (
                <span className="">
                  <BsFillCaretRightFill />
                </span>
              )} */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
