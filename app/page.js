import { redirect } from "next/navigation";
import getCurrentUser from './actions/getCurrentUser'
import Image from "next/image";
import Input from "./components/Input";
import AllTodos from './components/AllTodos.jsx'
export default async function Home() {
  const session = await getCurrentUser();
  if (!session?.email) {
    redirect('/login?callbackUrl=/todo')
  }
  const { name, image, id, alltodos } = session
  return (
    <>
      <div className="flex flex-col items-center gap-3 mt-2 mb-4">
        {image !== null && <Image src={image} width={90} height={90} alt="user-profile" className="rounded-full" />}
        <h1 className="text-xl md:text-2xl mt-[6px]">Welcome {name}!</h1>
      </div>
      <Input id={id} />
      <div className="px-4 mt-4">
        {alltodos.length !== 0 ?
          (alltodos.map((e) => {
            return (
              <AllTodos key={e.id} id={e.id} title={e.title} description={e.description} />
            )
          })) : (<><h1 className="text-center mt-2 text-gray-400">No data to show</h1></>)
        }
      </div>
    </>
  )
}
