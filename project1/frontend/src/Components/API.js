import React, { useState, useEffect } from "react";

function API() {
  const startArray = [{ id: 1 }, { id: 2 }, { id: 3 }];

  const [data, setData] = useState(startArray);

  const [trip, setTrip] = useState(0);

  const getPosts = async () => {
    setTrip((prev) => (prev += 1));

    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData([...json]);
      });
  };

  const getUsers = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData([...json]);
      });
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h2>Trip: {trip}</h2>

      <h2>Api test</h2>
      <button name="posts" onClick={(e) => getPosts(e)}>
        Get some Posts
      </button>
      <button name="users" onClick={(e) => getUsers(e)}>
        Get some Users
      </button>
      <h3>Fetched Data</h3>
      {data.map((val) => (
        <div key={val.id}>
          <h4>{val.id}</h4>
          <p>{val.name}</p>
          <p>{val.email}</p>
        </div>
      ))}
      {/* {data.forEach((val) => {
          <p>{val.id}</p>;
        })} */}
    </div>
  );
}

export default API;
