import React from 'react'
import Input from './Input'
import Button from './Button'

const RestoProfile = ({ setShowResto, showResto }) => {
  return (
    <>
      <div id="defaultModal" tabindex="-1" aria-hidden="true" className={showResto ? "flex items-center fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden bg-black/50 overflow-y-auto h-screen opacity-100 duration-500" : "-translate-y-[50px] flex items-center fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden bg-black/50 overflow-y-auto h-screen opacity-0 pointer-events-none duration-500"}>
        <div className="relative w-[80%] max-h-full overflow-y-scroll m-auto">

          <div className="relative rounded-lg shadow bg-darkGray">

            <div className="flex items-start justify-between p-4 border-b rounded-t border-textGray ">
              <h3 className="text-xl font-semibold text-white">
                Restaurant Profile
              </h3>
              <button onClick={() => { setShowResto(false) }} type="button" className="text-white bg-transparent hover:bg-gray-600 duration-200 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center ">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className='grid grid-cols-2 gap-x-4'>
                <Input label={"Main Image"} type={"file"} />
                <Input label={"Background Image"} type={"file"} />
              </div>
              <div className='grid grid-cols-2 gap-x-4'>
                <Input label={"Name"} type={"text"} placeholder={"Enter name of restaurant"} />
                <Input label={"Tags"} type={"text"} placeholder={"Tags"} />
              </div>
              <Input label={"Description"} textarea={true} placeholder={"Description"} />
            </div>

            <div className="flex items-center justify-center pb-6  rounded-b ">
              <Button text={"Save"} className={"w-1/6"} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RestoProfile