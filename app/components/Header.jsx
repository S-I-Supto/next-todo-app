import Userbutton from "./Userbutton"

const Header = () => {
    return (
        <header className="text-white body-font  bg-gray-900">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row  justify-between">
                <div className="flex justify-center md:justify-start  title-font font-medium  text-gray-900 mb-4 md:mb-0">
                    <span className=" ml-6 text-xl  text-white tracking-wider">TODO APP</span>
                </div>
                    <Userbutton />
               
            </div>
        </header>
    )
}

export default Header