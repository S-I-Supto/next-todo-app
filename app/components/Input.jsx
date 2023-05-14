'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast } from "react-hot-toast"
const Input = ({ id }) => {
    const router = useRouter();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setTitle(''); setDescription('')
        try {
            const data = await axios.post(`/api/settodo`, { title, description, ownerId: id })
            toast.success('added')
            router.refresh()
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 border-cyan-600 py-2 px-4 text-black">
            <input type="text" placeholder="title" required value={title} onChange={handleTitle}
                className="bg-transparent 
                border-b border-cyan-400
                px-2 py-2  focus:outline-none
                focus:border-blue-500
                text-white transition
            "
            />
            <input type="text" placeholder="description" value={description} onChange={handleDescription}
                className="bg-transparent 
                           border-b border-cyan-400
                           px-2 py-2  focus:outline-none
                         focus:border-blue-500
                         text-white transition
                          "
            />
            <input type="submit"
                className="cursor-pointer py-[5px]
            px-1 bg-cyan-400 
            min-w-[200px] self-center
        
            hover:bg-cyan-500
            hover:drop-shadow-xl
            transition mt-3
            "
                value="Add" />
        </form>
    )
}

export default Input