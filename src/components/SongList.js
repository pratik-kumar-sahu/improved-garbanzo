import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function SongList() {
  const [songs, setSongs] = useState([
    { title: "See you again", id: 1 },
    { title: "Con colma", id: 2 },
    { title: "You're Welcome", id: 3 },
  ]);

  const addSong = () => {
    setSongs([...songs, { title: "Where you are", id: uuidv4() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSong}>Add a Song</button>
    </div>
  );
}

export default SongList;
