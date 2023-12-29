
import { useState } from 'react';
import Column from './components/Column';

function App() {
  const [todo, setTodo] = useState([])
  const [onProgress, setOnProgress] = useState([])
  const [done, setDone] = useState([]);
  const [task, setTask] = useState("");

  const addToTodo = () => {
    setTodo([...todo, { id: Date.now(), content: task }])
    setTask("");
  }

  const functionToMove = (id,identity, task) => {

    if (id === 1) {
      setTodo(todo.filter((item) => item.id !== identity));
      setOnProgress([...onProgress, { id: Date.now(), content: task }]);
    }else if(id === 2){
      setOnProgress(onProgress.filter((item) => item.id !== identity));
      setDone([...done, { id: Date.now(), content: task }]);
    }
  }

  const functionToMoveBack = (id,identity, task) => {

    if (id === 2) {
      setOnProgress(onProgress.filter((item) => item.id !== identity));
      setTodo([...todo, { id: Date.now(), content: task }]);
    }else if(id === 3){
      setDone(done.filter((item) => item.id !== identity));
      setOnProgress([...onProgress, { id: Date.now(), content: task }]);
    }
  }
  
  return (
    <div className="w-full h-[100vh] bg-black p-24">
      <div className="w-full flex justify-center gap-44">
        <h4 className="text-white text-3xl font-thin ">React ToDo App</h4>
        <div className="mt-2 relative">
          <input
            type=""
            id=""
            placeholder="Add todo"
            className="w-full rounded-md border-gray-400 pe-10 shadow-sm sm:text-sm p-2 bg-black border text-white"
            onChange={(e) => {
              setTask(e.target.value);
            }}
            value={task}
          />

          <span
            className="absolute right-2 top-0 text-3xl text-gray-400 cursor-pointer"
            onClick={addToTodo}
          >
            +
          </span>
        </div>
      </div>

      <div className="w-full h-[90%] mt-16 flex justify-around">
        <Column
          id={1}
          title={"ToDo"}
          tasks={todo}
          functionToMove={functionToMove}
          functionToMoveBack={functionToMoveBack}
        />
        <Column
          id={2}
          title={"On Progress"}
          tasks={onProgress}
          functionToMove={functionToMove}
          functionToMoveBack={functionToMoveBack}
        />
        <Column
          id={3}
          title={"Done"}
          tasks={done}
          functionToMove={functionToMove}
          functionToMoveBack={functionToMoveBack}
        />
      </div>
    </div>
  );
}

export default App;


