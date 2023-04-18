import { useState } from "react";
import Link from "next/link";
import { useCookies } from 'react-cookie';
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [cookie,setCookie] = useCookies();
  const handleClick =async () => {
    setLoading(true);
    // console.log(username,password)
    try {
        //Login URL
        const d={username,password}
        await fetch("http://103.30.64.62:5000/api/auth/login", {
          method: "POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(d),
        })
          .then(async (res) => {
            const data = await res.json();

			setLoading(false);
      console.log(data)
            if (data.Success) {
              alert("Login SuccessFull !!");
              // document.cookie.name = `name:token;val?ue:${data.jwt}`
              setCookie("token",data.jwt)
			        window.location.href="/dashboard";


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
          <div className="min-w-[20rem] border bg-white p-6 shadow-lg">
            <div variant="h3" color="black" className="text-xl font-bold">
              SignIn
            </div>
            <div variant="paragraph" color="black" className="text-sm">
              Please fill the from to login
            </div>
            <hr className="my-2 h-2 w-full border-black" />

            <div className="my-[1rem]">
              {/* <input type="text" id="small-input" className="block w-full px-3 py-2 border border-gray-300  focus:outline-blue-500"  placeholder="Department"/> */}
              <input
                type="text"
                id="username"
                maxLength={255}
                className="block py-2.5 px-0 w-full pl-3  text-gray-900 bg-transparent  border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:invalid:border-red-600  focus:ring-0 focus:border-blue-600 peer "
                placeholder="Enter username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                required
              />
            </div>

            <div className="my-[1rem]">
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
            <div className="flex justify-center my-[2rem]">
              <button
                className="text-md Reach-us lg:block text-white bg-primary whitespace-nowrap rounded-2xl py-1 px-5 mx-10"
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
