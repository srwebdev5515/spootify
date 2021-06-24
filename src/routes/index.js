import React, { useState, useEffect } from 'react';
import Discover from './Discover';
import Spotify from '../api/spotify';

export default function Routes() {
  const [accessToken, setAccessToken] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const token = await Spotify.authorize();
        setAccessToken(token);
        setErrorMessage('');
      } catch (e) {
        setErrorMessage(e);
      }
    })();
  }, [])
  
  // Here you'd return an array of routes
  if (!!errorMessage) {
    return <p className='alert-danger'>{errorMessage}</p>;
  }

  if (!accessToken) {
    return <></>; // Can be replaced with <Loading /> later
  }

  return <Discover />;
}
