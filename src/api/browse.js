import Spotify from './spotify';

const getNewRelease = () => {
  return Spotify.axiosInstance.get('browse/new-releases').then(res => res.data.albums);
}

const getFeaturedPlaylists = () => {
  return Spotify.axiosInstance.get('browse/featured-playlists').then(res => res.data.playlists);
}

const getCategories = () => {
  return Spotify.axiosInstance.get('browse/categories').then(res => res.data.categories);
}

export default {
  getNewRelease,
  getFeaturedPlaylists,
  getCategories
}
