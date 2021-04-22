import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NewSongForm from "./NewSongForm";

function SongList() {
  const [songs, setSongs] = useState([
    { title: "See you again", id: 1 },
    { title: "Con colma", id: 2 },
    { title: "You're Welcome", id: 3 },
  ]);

  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuidv4() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
}

export default SongList;
