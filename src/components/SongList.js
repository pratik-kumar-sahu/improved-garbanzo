import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NewSongForm from "./NewSongForm";

function SongList() {
  const [songs, setSongs] = useState([
    { title: "See you again", id: 1 },
    { title: "Con colma", id: 2 },
    { title: "You're Welcome", id: 3 },
  ]);

  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuidv4() }]);
  };

  // useEffect Hook:
  // - useEffect hook is bit like a lifecycle method that we normally use in class based components.
  // - When we use functional component we don't have access to lifecycle methods.
  // - we can use useEffect to communicate with DB or connect with an API endpoint or something like these.
  // - this function will run everytime our app re-renders or some data updates.
  useEffect(() => {
    console.log("useEffect hook ran", songs);
  });

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
      {/* suppose we have another state age which is changed by this button. Then also useEffect will run amd thats bad */}
    </div>
  );
}

export default SongList;
