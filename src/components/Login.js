import { useState } from "react";
import { validateEmail, validatePassword } from "./Validate";
function Login() {
    const [signIn,setSignIn] = useState(true);
    const [error,setError] = useState("");
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");
    return (
      <div className="relative w-full h-screen">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg 2000w,
                  https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_medium.jpg 1279w,
                  https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_small.jpg 959w"
          alt=""
          aria-hidden="true"
        />
  
        <div className="absolute inset-0 bg-black/50" />
  
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/75 text-white p-10 rounded-md w-full max-w-sm">
            {signIn && <h1 className="text-3xl mb-5 font-bold">Sign In</h1>}
            {!signIn && <h1 className="text-3xl mb-5 font-bold">Sign Up</h1>}
            <form className="flex flex-col gap-4">
                {!signIn &&
                <input
                type="text"
                placeholder="Username"
                className="p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-red-600"
              />}
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-red-600"
                onChange={(e) => {setEmail(e.target.value);}}
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-red-600"
                onChange={(e) => {setPwd(e.target.value);}}
              />
              <button
                type="submit"
                className="bg-red-600 py-2 rounded-md hover:bg-red-700 transition font-semibold"
                onClick={(e) => {e.preventDefault(); 
                  if (!validateEmail(email)) {
                    setError("Please enter a valid email address.");
                    return;
                  }
                  else if (!validatePassword(pwd)) {
                    setError("Please enter a valid password.");
                    return;
                  }
                  else setError("");
                }}
              >
                {signIn ? "Sign In" : "Sign Up"}
              </button>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {signIn && <h1 className="pt-4 text-red-700 cursor-pointer" onClick={() => setSignIn(false)}>New to HariFlix ?? Sign up</h1>}
            {!signIn && <h1 className="pt-4 text-red-700 cursor-pointer" onClick={() => setSignIn(true)}>Already have an account ?? Sign in</h1>}
          </div>
        </div>
  
      </div>
    );
  }
  
  export default Login;