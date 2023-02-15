import "./App.css";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import React, { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import PlayerPage from "./pages/PlayerPage";
import { useDataLayerValue } from "./DataLayer";

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  const spotify = new SpotifyWebApi();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists
        })
      })
      spotify.getPlaylist('37i9dQZEVXcTU4NgWnt2HK').then((response)=>{
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      })
    }
  }, []);
  return <div className="app">{token ? <PlayerPage spotify = {spotify} /> : <LoginPage />}</div>;
}

export default App;
