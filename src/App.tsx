import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';







function App() {
  const [title, settitle] = useState("")
  // const{todo,setTodo,clearAll,clearone,edit} =usetodo()
  const [clearb,setclearb]=useState(false)
  const [isEditing, setIsEditing]=useState<string|null>(null)
  // const [isEditing, setIsEditing]=useState(false)
  const [todo, setTodo] = useState<{id:string,title:string}[]>([]);
  
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="flex flex-col w-[560px] p-10 shadow-md   gap-6 ">
        <p className="text-[#063251] text-[28px] font-semibold flex self-center">
          Grocery Bud
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (isEditing) {
              const edit=[...todo].map((item)=>(item.id===isEditing?{id:isEditing,title:title}:item))
             setTodo(edit)
              // edit(editing, title);
              setIsEditing(null);
            } else {
              setTodo((privoustodo)=>(
                [...privoustodo,{id:uuidv4(),title:title}]
              ))
              // setTodo({ id: uuidv4(), title: title });
            }
            settitle("");
            setclearb(true);
          }}
          className="flex "
        >
          <input
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            className="flex-1 p-1 rounded-l-md"
            placeholder="e.g. bread"
            type="text"
          />
          <button
            type="submit"
            className="px-2 py-1 bg-[#a5d5f8] text-[18px] rounded-r-md hover:text-white hover:bg-blue-400 hover:transition-all"
          >
            {isEditing ? "change" : "Submit"}
          </button>
        </form>
        <ul className="flex flex-col gap-2">
          {todo.map((items) => (
            <li
              key={items.id}
              className="flex justify-between group hover:bg-blue-100 px-2 py-1"
            >
              <div className=" group-hover:text-[#063251]   rounded-md hover:transition-all">
                {items.title}
              </div>
              <div className="flex gap-2">
                {/* delete */}
                <button
                  onClick={() => {
                    // clearone(items.id);
                    
                    setTodo(()=>{
                      const removeItem=[...todo].filter((todos)=>(todos.id!==items.id))
                      return removeItem
                    })
                    
                  }}
                >
                  <svg
                    fill="#e66b6b"
                    width="18px"
                    height="18px"
                    viewBox="0 0 56 56"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 44.5235 48.6602 L 46.1407 14.3945 L 48.4844 14.3945 C 49.4454 14.3945 50.2187 13.5976 50.2187 12.6367 C 50.2187 11.6758 49.4454 10.8555 48.4844 10.8555 L 38.2422 10.8555 L 38.2422 7.3398 C 38.2422 3.9883 35.9688 1.8086 32.3595 1.8086 L 23.5938 1.8086 C 19.9844 1.8086 17.7344 3.9883 17.7344 7.3398 L 17.7344 10.8555 L 7.5391 10.8555 C 6.6016 10.8555 5.7813 11.6758 5.7813 12.6367 C 5.7813 13.5976 6.6016 14.3945 7.5391 14.3945 L 9.8829 14.3945 L 11.5000 48.6836 C 11.6641 52.0586 13.8907 54.1914 17.2657 54.1914 L 38.7579 54.1914 C 42.1095 54.1914 44.3595 52.0351 44.5235 48.6602 Z M 21.4844 7.5742 C 21.4844 6.2383 22.4688 5.3008 23.8751 5.3008 L 32.1016 5.3008 C 33.5313 5.3008 34.5157 6.2383 34.5157 7.5742 L 34.5157 10.8555 L 21.4844 10.8555 Z M 17.6173 50.6758 C 16.2579 50.6758 15.2500 49.6445 15.1797 48.2852 L 13.5391 14.3945 L 42.3907 14.3945 L 40.8438 48.2852 C 40.7735 49.6680 39.7891 50.6758 38.4063 50.6758 Z M 34.9610 46.5508 C 35.7344 46.5508 36.3204 45.9180 36.3438 45.0273 L 37.0469 20.2773 C 37.0704 19.3867 36.4610 18.7305 35.6641 18.7305 C 34.9376 18.7305 34.3282 19.4102 34.3048 20.2539 L 33.6016 45.0273 C 33.5782 45.8711 34.1641 46.5508 34.9610 46.5508 Z M 21.0626 46.5508 C 21.8595 46.5508 22.4454 45.8711 22.4219 45.0273 L 21.7188 20.2539 C 21.6954 19.4102 21.0626 18.7305 20.3360 18.7305 C 19.5391 18.7305 18.9532 19.3867 18.9766 20.2773 L 19.7032 45.0273 C 19.7266 45.9180 20.2891 46.5508 21.0626 46.5508 Z M 29.4298 45.0273 L 29.4298 20.2539 C 29.4298 19.4102 28.7969 18.7305 28.0235 18.7305 C 27.2500 18.7305 26.5938 19.4102 26.5938 20.2539 L 26.5938 45.0273 C 26.5938 45.8711 27.2500 46.5508 28.0235 46.5508 C 28.7735 46.5508 29.4298 45.8711 29.4298 45.0273 Z" />
                  </svg>
                </button>

                {/* edit */}
                <button
                  onClick={() => {
                    setIsEditing(items.id)
                    settitle(items.title)
                  }}
                >
                  <svg
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4745 5.40801L18.5917 7.52524M17.8358 3.54289L12.1086 9.27005C11.8131 9.56562 11.6116 9.94206 11.5296 10.3519L11 13L13.6481 12.4704C14.0579 12.3884 14.4344 12.1869 14.7299 11.8914L20.4571 6.16423C21.181 5.44037 21.181 4.26676 20.4571 3.5429C19.7332 2.81904 18.5596 2.81903 17.8358 3.54289Z"
                      stroke="#6be675"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19 15V18C19 19.1046 18.1046 20 17 20H6C4.89543 20 4 19.1046 4 18V7C4 5.89543 4.89543 5 6 5H9"
                      stroke="#6be675"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
        {clearb && (
          <button
            onClick={() => {
              // clearAll();
              setTodo([])
              setclearb(false);
            }}
            className="tracking-[0.25rem] text-[14px] text-red-400 hover:text-red-600 hover:transition-all"
          >
            Clear Items
          </button>
        )}
      </div>
    </div>
  );
}

export default App
