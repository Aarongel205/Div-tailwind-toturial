import React from 'react'

const App = () => {
  return (
    <div className='bg-zinc-900 h-screen flex justify-center items-center flex-col'>
      <p className='text-white font-bold text-4xl'>This is my app</p>
      <div id="parent-box-div"className='border-2 border-white p-4 rounded-md size-2/3 mt-10 flex flex-col space-y-2'>
        {/*First div*/}
        <div id="group-indiv-div"className='flex flex-row size-full space-x-2'>
          <div id="indiv-div
          "className='border border-white p-4 rounded-md size-full
          text-white flex justify-center items-center text-2xl font-bold'>Hello I'm Aaron</div>
        </div>
        {/*second div*/}
        <div id="group-indiv-div"className='flex flex-row size-full space-x-2'>
          <div id="indiv-div
          "className='border border-white p-4 rounded-md size-full
          '></div>
          <div id="indiv-div
          "className='border border-white p-4 rounded-md size-full
          '></div>
        </div>

        {/*third div*/}
        <div id="group-indiv-div"className='flex flex-row size-full space-x-2'>
          <div id="indiv-div
          "className='border border-white p-4 rounded-md size-full
          '></div>
          <div id="indiv-div
          "className='border border-white p-4 rounded-md size-full
          '></div>
          <div id="indiv-div
          "className='border border-white p-4 rounded-md size-full
          '></div>
        </div>

       
      </div>
    </div>
  )
}

export default App
