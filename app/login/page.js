'use client'

import { useState } from "react"
import { signIn, useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import Link from "next/link"
import { toast } from "react-hot-toast"
const Login = () => {
    const { data } = useSession();
    if (data?.user) {
        redirect("/")
    }
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setUserData(prev => ({ ...prev, [name]: value }))
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await signIn('credentials', {
                redirect: false,
                email: userData.email,
                password: userData.password
            })
            console.log(data);

            if (data.error) {
                // User login is not valid
                toast.error(data.error);
            } else {
                // User login is valid
                console.log(data);
                toast.success('Login successful');
                // Perform additional actions or redirect the user to the desired page
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    const handleGoogleLogin = async (e) => {
        e.preventDefault();
        await signIn("google");
    }
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font relative">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-white">Please log in</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Log in with your existed account to go further process</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2 flex-col">
                            <form onSubmit={handleLogin}>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                                        <input type="email" required name="email" value={userData.email} onChange={handleInputChange} id="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="password" className="leading-7 text-sm text-gray-400">password</label>
                                        <input type="password" required name="password" value={userData.password} onChange={handleInputChange} id="password" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <input type="submit" value={'Login'} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" />
                                </div>
                            </form>
                            <span className="text-white text-center">or</span>
                            <button className="mt-5 bg-slate-200 hover:bg-slate-300 transition text-black font-semibold py-2 px-5 rounded-lg shadow-lg flex items-center mx-auto" onClick={handleGoogleLogin}>
                                <span></span> Sign in using &nbsp; <span className="text-red-500 text-xl">G</span> <span className="text-blue-500 text-xl">oogle</span>
                            </button>

                            <div className="w-full flex mt-2 justify-center text-indigo-400">
                                <Link href={'/register'}>create an account</Link>
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                                <a href="mailto:sisuptodhaka5402@gmail.com" className="text-indigo-400">sisuptodhaka5402@gmail.com</a>
                                <br /><br />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login