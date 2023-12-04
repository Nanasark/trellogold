"use client"
import Image from 'next/image'
import Trellogold from "@/assets/images/trellogold.png"
import {MagnifyingGlassIcon,UserCircleIcon} from "@heroicons/react/24/solid"
import Avatar from "react-avatar"

function Header() {
  return (
    <header>
        <div className=" h-[200px] [md:h-[280px] flex flex-col items-center md:flex-row">
            <div
            className=" absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-[#00CCCC] to-[#dd6b08] rounded-md filter blur-3xl opacity-50 -z-50"
            >

            </div>
            <Image
                src={Trellogold}
                alt="logo"
                width={300}
                height={400}
                className='w-44 md:w-56 pb-10 md:pb-0 object contain'
            />

            {/*Search bos */}
            <div className=" flex items-center spaxe-x-5 flex-1 justify-end w-full">
                
                <form className= "flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-400"/>
                    <input type="text" placeholder="search" className="flex-1 outline-none" /> 
                    <button hidden className="ring-2 border-2 radius-5" type="submit">Search</button>
                </form>

                {/* Avatar */}
                <Avatar name="Realhavenn" round size="58" color="#004792" />
            </div>
        </div>

        <div className="flex items-center justify-center px-5 md:py-5">
            <p className="flex items-center text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white max-w-3xl text-[#002D72]">
                <UserCircleIcon className="inline-block h-10 w-10 text-[#002D72] mr-1 " />
                GPT is summarising your tasks for the day...
            </p>
        </div>
       
    </header>
  )
}

export default Header