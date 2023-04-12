import { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClick =async () => {
    setLoading(true);
    try {
        //Login URL
        await fetch("", {
          method: "POST",
          body: {email,password},
        })
          .then(async (res) => {
            const data = await res.json();

			setLoading(false);
            if (data.success) {
              alert("Login SuccessFull !!");
			  window.location.href="/";

            } else {
              alert("Something went wrong !");
            }
          })
          .catch((err) => {
            setLoading(false);
            alert("Something went wrong !");
            console.log(err);
          });

        // // console.log(json);
      } catch (error) {
        alert("Something went wrong!");
        // console.log(error);
      }
  };
  return (
    <div className="flex h-full items-center justify-center">
      {!loading && (
        <div className="  mt-[2rem]">
          <div className="border bg-white p-6 shadow-lg">
            <div variant="h3" color="black" className="xl font-bold">
              SignIn
            </div>
            <div variant="paragraph" color="black" className="text-xs">
              Please fill the from to login
            </div>
            <hr className="my-2 h-2 w-full border-black" />

            <div className="mb-3">
              {/* <input type="text" id="small-input" className="block w-full px-3 py-2 border border-gray-300  focus:outline-blue-500"  placeholder="Department"/> */}
              <input
                type="email"
                id="Email"
                pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                maxLength={255}
                className="block py-2.5 px-0 w-full pl-3  text-gray-900 bg-transparent  border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:invalid:border-red-600  focus:ring-0 focus:border-blue-600 peer "
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-5 md:mb-6">
              {/* <input type="text" id="small-input" className="block w-full px-3 py-2 border border-gray-300  focus:outline-blue-500"  placeholder="Department"/> */}
              <input
                type="password"
                id="password"
                className="block py-2.5 px-0 w-full pl-3  text-gray-900 bg-transparent  border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:invalid:border-red-600  focus:ring-0 focus:border-blue-600 peer"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                className="text-sm Reach-us  lg:block text-white bg-primary whitespace-nowrap rounded-2xl py-1 px-5 mx-10"
                onClick={handleClick}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
