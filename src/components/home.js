import React, { useState } from "react";
import { FiTrash2, FiPlus, FiCheckCircle } from "react-icons/fi";

function Home() {
  const [sections, setSections] = useState([
    { title: "Default task", id: 1, completed: false },
  ]);
  const [newSectionTitle, setNewSectionTitle] = useState("");

  //add a new section function
  const addANewSection = (title) => {
    //if no section added, set the id to 1
    if (sections.length === 0) {
      setSections([{ title: "Dummy task", id: 1, completed: false }]);
    } else {
      if (title !== "") {
        const lastId = sections[sections.length - 1].id;
        const newSection = { title: title, id: lastId + 1, completed: false };
        setSections([...sections, newSection]);
        setNewSectionTitle("");
      }
    }
  };

  //remove a section function
  const removeSection = (id) => {
    setSections((prevSections) =>
      prevSections.filter((section) => section.id !== id)
    );
  };

  return (
    <div>
      <h1 className="text-4xl font-extrabold py-5">Task Master</h1>
      <p className="text-sm font-thin px-16">
        Task Master is an easy-to-use task manager app that helps you stay
        organized and productive. With a simple and intuitive interface, you can
        easily create, edit, and prioritize your tasks, set reminders and
        deadlines, and track your progress.
      </p>

      {/* add a section that user can add own section */}
      <section className="flex items-center justify-center flex-col">
        <input
          type="text"
          placeholder="add a new section"
          className="border-2 border-purple-400 p-2 m-2 w-60 rounded-md"
          value={newSectionTitle}
          onChange={(e) => setNewSectionTitle(e.target.value)}
        />
        <p
          className="bg-yellow-400 p-2 m-2 w-60 rounded-md flex items-center justify-center cursor-pointer gap-2"
          onClick={() => addANewSection(newSectionTitle)}
        >
          Add Section <FiPlus />
        </p>
      </section>

      {/* this section contains the sections of the cv */}
      <section className="flex items-center justify-center flex-col">
        {/* map all the sections */}
        {sections.map((section) => (
          <div
            key={section.id}
            className="flex flex-row items-center justify-center"
          >
            <p
              className={
                section.completed
                  ? "bg-green-400 p-2 m-2 w-60 rounded-md"
                  : "bg-purple-400 p-2 m-2 w-60 rounded-md"
              }
            >
              {section.completed
                ? section.title + " (completed!)"
                : section.title}
            </p>
            <div
              className="p-3 bg-red-500 rounded-md cursor-pointer text-white mx-3"
              onClick={() => removeSection(section.id)}
            >
              <FiTrash2 />
            </div>
            <div
              className="p-3 bg-green-500 rounded-md cursor-pointer text-white"
              // this maeks the task as completed
              onClick={() => {
                setSections(
                  sections.map((item) => {
                    if (item.id === section.id) {
                      return { ...item, completed: true };
                    }
                    return item;
                  })
                );
              }}
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
