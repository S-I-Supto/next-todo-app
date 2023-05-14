'use client'
import axios from "axios"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"

const DeleteBtn = ({ id }) => {
    const router = useRouter();
    const handleDeletedTodo = async () => {
        try {
            await axios.post(`/api/deletetodo/${id}`)
            toast.success('deleted')
            router.refresh()
        } catch (error) {
            toast.error(error.message)
        }

    }
    return (
        <button className='px-[8px] rounded-md py-[5px] bg-cyan-600 transition hover:bg-cyan-700 hover:shadow-white' onClick={() => { handleDeletedTodo(id) }}>delete</button>
    )
}

export default DeleteBtn