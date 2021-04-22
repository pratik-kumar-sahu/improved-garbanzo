import React, { useState } from "react";

function SongList() {
  const [songs, setSongs] = useState([
    { title: "See you again", id: 1 },
    { title: "Con colma", id: 2 },
    { title: "You're Welcome", id: 3 },
  ]);

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default SongList;
