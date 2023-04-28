import React, { useState } from "react";
import { FiTrash2, FiCheckCircle } from "react-icons/fi";

function Home() {
  //tasks state
  const [tasks, setTasks] = useState([]);

  //uer input task
  const [inputTask, setInputTask] = useState("");

  //add new task
  const addNewtask = (title) => {
    if (title !== "") {
      //lastid
      const latsId = tasks.length === 0 ? 0 : tasks[tasks.length - 1].id;
      const newTask = { id: latsId + 1, title: title, completed: false };
      setTasks([...tasks, newTask]);
      setInputTask("");
    }
  };

  //remove a task
  const removeTask = (id) => {
    setTasks((prevTask) => {
      return prevTask.filter((task) => task.id !== id);
    });
  };

  return (
    <div>
      <h1 className=" text-4xl font-extrabold py-5">Task Master</h1>
      <p className=" text-sm font-thin px-16">
        Task Master is an easy-to-use task manager app that helps you stay
        organized and productive. With a simple and intuitive interface, you can
        easily create, edit, and prioritize your tasks, set reminders and
        deadlines, and track your progress.
      </p>

      {/* add a section that user can add own task */}
      <section className=" flex flex-col items-center justify-center mt-3">
        <input
          type="text"
          placeholder="add new task"
          className=" border-2 border-purple-400 p-2 m-2 w-60 rounded-md"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button
          onClick={() => addNewtask(inputTask)}
          className=" bg-yellow-400 p-2 m-2 w-60 rounded-md"
        >
          Add new Task +
        </button>
      </section>

      {/*show  all tasks */}
      <section className=" p-5 border-t-4 m-5">
        {tasks &&
          tasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-row items-center justify-center gap-4"
            >
              <p
                className={
                  task.completed
                    ? " bg-green-400 p-2 m-2 rounded-md "
                    : " bg-purple-400 p-2 m-2 rounded-md "
                }
              >
                {task.completed ? task.title + "(completed!)" : task.title}
              </p>
              <div
                onClick={() => removeTask(task.id)}
                className=" p-3 bg-red-500 rounded-md cursor-pointer text-white"
              >
                <FiTrash2 />
              </div>
              <div
                onClick={() => {
                  setTasks(
                    tasks.map((item) => {
                      if (item.id === task.id) {
                        return { ...item, completed: true };
                      }

                      return item;
                    })
                  );
                }}
                className=" p-3 bg-green-500 rounded-md cursor-pointer text-white"
              >
                <FiCheckCircle />
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}

export default Home;
