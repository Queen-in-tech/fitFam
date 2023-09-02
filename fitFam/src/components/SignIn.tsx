import { BsGoogle, BsFillCaretRightFill } from "react-icons/bs";

interface SigninProps {
  setLogin: (value: boolean) => void;
}

const SignIn = ({ setLogin }: SigninProps) => {
  return (
    <div className="flex flex-col text-white bg-signIn h-screen bg-[length:100%_60%] object-center bg-no-repeat w-screen px-9 pb-5 md:flex-row md:justify-between  md:bg-[length:40%_100%]">
      <div>
        <header className="flex justify-between py-12 mb-64 md:mb-88">
          <div className="flex gap-6">
            <button onClick={() => setLogin(true)} className="pb-2">
              Login
            </button>
            <button
              onClick={() => setLogin(false)}
              className="border-b-2 border-lemon pb-1.5 rounded-b-sm ">
              Sign up
            </button>
          </div>
        </header>
        <p className="text-5xl font-bold pb-6">Hello Rookie,</p>
        <span className="font-light ">
          Enter your information to <br /> register
        </span>
      </div>

      <div className="md:w-[60vw] md:flex md:justify-center md:items-center md:h-screen">
        <form className="flex flex-col gap-4 pt-8 md:w-[60%]">
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
          <input
            type="text"
            placeholder="Password again"
            className="p-3 text-white border-b border-gray-500 outline-none placeholder:text-white bg-dark mb-10"
          />

          <div className="flex justify-between">
            <button className="p-4 text-2xl bg-darkGray rounded-full ">
              <BsGoogle />
            </button>

            <button className="flex items-center justify-center bg-lemon py-4 px-7 rounded-[2rem] text-black text-xl font-bold gap-2">
              Sign up
              <span className="">
                <BsFillCaretRightFill />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
