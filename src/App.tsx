import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { usetodo } from './store/useToDo';




function App() {
  const [title, settitle] = useState("")
  const{todo,setTodo} =usetodo()

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="flex flex-col w-[560px] p-10 shadow-md   gap-6 ">
        <p className="text-[#063251] text-[28px] font-semibold flex self-center">
          Grocery Bud
        </p>
        <form onSubmit={(e)=>{
          e.preventDefault();
          setTodo({id:uuidv4(),title:title})
          settitle("")
          }} className="flex ">
          <input value={title} onChange={(e)=>{
             settitle(e.target.value)
          }}
            className="flex-1 p-1 rounded-l-md"
            placeholder="e.g. bread"
            type="text"
          />
          <button  type='submit' className="px-2 py-1 bg-[#a5d5f8] text-[18px] rounded-r-md hover:text-white hover:bg-blue-400">
            submit
          </button>
        </form>
        <ul className='flex flex-col gap-2'>
          {
            todo.map((items)=>(
              <li className='hover:text-[#063251] hover:bg-blue-100 px-2 py-1 rounded-md'>{items.title}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App
