import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import toast from "react-hot-toast";
import { AuthContext } from "../../firebase/AuthProvider";


const Register = () => {

    
    const {creatUser} = useContext(AuthContext)
    const [error, setError] = useState(null)
    // console.log(error);

    const hendelRegister = (e) => {
        e.preventDefault()

        const form = new FormData(e.target)
        const name = form.get("name")
        const email = form.get("email")
        const photo = form.get("Photourl")
        const password = form.get("password")
        console.log(name,email,photo,password);

        const capitalLetter = /[A-Z]/;
        const specialCharacter = /^(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]+$/;


        if(password.length < 6) {
            setError("password at least  6 characters")
            return;
        }
        else if(!specialCharacter.test(password)){
            setError("password at least a special character")
            return;
        }
        else if(!capitalLetter.test(password)){
            setError("password at least a capital letter")
            return;
        }
        else{
            setError(null)
        }

        creatUser(email,password)
        .then(res => {
            console.log(res.user)
            // setUser(res?.user)
            toast.success('Your Login Successfully!')
        })
        .catch(err => console.log(err))

    }
    return (
        <div>
        <div className="">
            <div className=" bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
                    <div className="card flex-shrink-0 w-10/12 lg:w-8/12 bg-base-100">
                        <div className=" lg:text-left py-10 mx-8 border-b">
                            <h1 className="text-center text-4xl font-bold">Register</h1>
                        </div>
                        <form onSubmit={hendelRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg font-semibold">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter your name" className=" px-2 py-3 border outline-0 bg-[#F3F3F3] focus:outline-1" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg font-semibold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email address" className=" px-2 py-3 border outline-0 bg-[#F3F3F3] focus:outline-1" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg font-semibold">Photo Url</span>
                                </label>
                                <input type="text" name="Photourl" placeholder="Enter Photo url" className=" px-2 py-3 border outline-0 bg-[#F3F3F3] focus:outline-1" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg font-semibold">Password</span>
                                </label>
                                <input type="text" name="password" placeholder="Enter your password" className="px-2 py-3 border outline-0	bg-[#F3F3F3] focus:outline-1" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            {
                                error && <p className="text-sm text-center text-red-600">{error}</p>
                            }
                            <GoogleLogin></GoogleLogin>
                            <div className="text-center pt-4">
                                <p className="text-lg">Alredy have an account please? <Link to="/login" className="text-red-600 font-bold">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;