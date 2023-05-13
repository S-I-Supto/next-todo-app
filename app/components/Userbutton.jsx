'use client'

import { signOut, useSession, signIn } from "next-auth/react";
const Userbutton = () => {
    const { data } = useSession();

    // const session = useSession();
    return (
        <>
            {
                !data?.user ?
                    (
                        <>
                            <button className="flex items-center focus:outline-none text-white bg-cyan-400 hover:shadow-blue-500/50 focus:ring-4  font-medium rounded-lg text-lg px-5 py-2.5 mb-2  " onClick={() => { signIn() }}>
                                Login
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="flex items-center focus:outline-none text-white bg-cyan-400 hover:shadow-blue-500/50 focus:ring-4  font-medium rounded-lg text-lg px-5 py-2.5 mb-2  cursor-pointer" onClick={() => { signOut() }}>
                                Logout
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </>
                    )
            }
        </>
    )
}

export default Userbutton