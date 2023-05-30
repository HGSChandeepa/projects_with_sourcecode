import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Apipage() {
  //navigate to the detail page
  const navigate = useNavigate();
  const [postData, setPostData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = response.data;
      setPostData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //fonttiom for the button for go to the detail page
  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div>
      <button className="bg-green-500 p-2 rounded-md" onClick={fetchData}>
        Fetch Data
      </button>

      {postData.map((item) => (
        <div key={item.id} className="bg-gray-200 p-2 m-2 rounded-md">
          <h1 className="text-2xl font-bold">{item.title}</h1>
          <button
            onClick={() => handleClick(item.id)}
            className=" text-teal-500 text-xl"
          >
            {" "}
            view more
          </button>
        </div>
      ))}
    </div>
  );
}
