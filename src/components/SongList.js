import React, { useState } from "react";

function SongList() {
  const [songs, setSongs] = useState([
    { title: "See you again", id: 1 },
    { title: "Con colma", id: 2 },
    { title: "You're Welcome", id: 3 },
  ]);

  const addSong = () => {
    setSongs([...songs, { title: "Where you are", id: 4 }]); // using id: 4 will throw error after clicking one time so for this we use uuid.
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
