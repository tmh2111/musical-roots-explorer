import React, { useState } from "react";

const songs = [
  {
    title: "No One",
    artist: "Alicia Keys",
    influences: [
      {
        title: "Beautiful",
        artist: "Christina Aguilera",
        note: "Empowering vocals and emotional themes."
      },
      {
        title: "Sir Duke",
        artist: "Stevie Wonder",
        note: "Celebration of music and soulful rhythm."
      }
    ],
    genre: "Soul / Synth / Pop",
    vocab: ["together", "strong", "love"],
    link: "https://www.youtube.com/watch?v=rywUS-ohqeE"
  },
  {
    title: "Beautiful",
    artist: "Christina Aguilera",
    genre: "Pop Ballad",
    vocab: ["ashamed", "true", "worthy"],
    link: "https://www.youtube.com/watch?v=eAfyFTzZDMM"
  },
  {
    title: "Sir Duke",
    artist: "Stevie Wonder",
    genre: "Funk / Soul",
    vocab: ["rhythm", "celebration", "music"],
    link: "https://www.youtube.com/watch?v=hmKshpLXnxE"
  }
];

export default function App() {
  const [selectedSong, setSelectedSong] = useState(songs[0]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Musical Roots Explorer</h1>
      <p>Start with a song you like and discover its musical ancestors.</p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {songs.map((song, idx) => (
          <div key={idx} onClick={() => setSelectedSong(song)} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', cursor: 'pointer' }}>
            <h2>{song.title}</h2>
            <p><em>by {song.artist}</em></p>
            <p>Genre: {song.genre}</p>
          </div>
        ))}
      </div>

      {selectedSong && (
        <div style={{ marginTop: '2rem' }}>
          <h2>You selected: {selectedSong.title}</h2>
          <p>Artist: {selectedSong.artist}</p>
          <a href={selectedSong.link} target="_blank" rel="noreferrer">Listen on YouTube</a>
          <h3>Key Vocabulary</h3>
          <ul>
            {selectedSong.vocab.map((word, i) => (
              <li key={i}>{word}</li>
            ))}
          </ul>

          {selectedSong.influences && (
            <>
              <h3>Musical Influences</h3>
              <ul>
                {selectedSong.influences.map((influence, i) => (
                  <li key={i}><strong>{influence.title}</strong> by {influence.artist} – {influence.note}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
