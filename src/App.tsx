import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="flex flex-col w-[560px] p-10 shadow-md   gap-6 ">
        <p className="text-[#063251] text-[28px] font-semibold flex self-center">
          Grocery Bud
        </p>
        <form className="flex ">
          <input
            className="flex-1 p-1 rounded-l-md"
            placeholder="e.g. bread"
            type="text"
          />
          <button className="px-2 py-1 bg-[#a5d5f8] text-[18px] rounded-r-md">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App
