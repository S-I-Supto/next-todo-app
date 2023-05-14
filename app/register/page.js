'use client'
import axios from "axios"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
const Register = () => {
    const { data } = useSession();
    if (data?.user) {
        redirect("/?callbackUrl=register")
    }
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const router = useRouter();
    const handleUserData = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }))
    }
    const handleSignIn = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`/api/register`, userData)
            toast.success('user created successfully')
            router.push('/')

        } catch (err) {
            toast.error(err.message)
        }
    }

    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Sign up</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>please sign up to go further process
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto" >
                        <div className="flex flex-wrap -m-2 justify-center" style={{ justifyContent: "center" }}>
                            <form className="flex flex-col justify-center" onSubmit={handleSignIn}>
                                <div className="flex">
                                    <div className="p-2 w-1/2">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                                        <input type="text" required value={userData.name} onChange={handleUserData} id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div className="relative p-2 w-1/2">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                                        <input type="email" required value={userData.email} onChange={handleUserData} id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="relative w-full">
                                    <label htmlFor="password" className="leading-7 text-sm text-gray-400">password</label>
                                    <input type="password" required value={userData.password} onChange={handleUserData} id="password" name="password" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="p-2 w-full">
                                    <input type="submit" value={'Sign up'} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-2" />
                                </div>
                            </form>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                                <a className="text-indigo-400" href="mailto:sisuptodhaka5402@gmail.com">sisuptodhaka5402@gmail.com</a>
                                <p className="leading-normal my-5">Shefat Islam
                                    <br />Rangpur,Bangladesh
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register