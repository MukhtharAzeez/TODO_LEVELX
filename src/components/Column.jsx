/* eslint-disable react/prop-types */

function Column({ id, title, tasks, functionToMove, functionToMoveBack }) {
  return (
    <div className="w-[28%] bg-[#0E1012] h-[100%] ">
      <h4 className="text-gray-400 p-4 bg-[#1A1D23] text-3xl font-serif w-full text-center">
        {title}
      </h4>

      <div>
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-[#242731] w-[93%] h-16 m-4 flex justify-center items-center relative"
          >
            {(id === 2 || id === 3) && (
              <p
                onClick={() => functionToMoveBack(id, task.id, task.content)}
                className="text-red-400 text-lg bg-black pt-1 w-10 h-10 flex justify-center rounded-full absolute left-10 cursor-pointer"
              >
                {"<"}
              </p>
            )}
            <h4 className="text-white text-lg">{task.content}</h4>
            {(id === 1 || id === 2) && (
              <p
                onClick={() => functionToMove(id, task.id, task.content)}
                className="text-green-400 text-lg bg-black pt-1 w-10 h-10 flex justify-center rounded-full absolute right-10 cursor-pointer"
              >
                {">"}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Column;
