import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

import Browse from '../../../api/browse';

export default class Discover extends Component {
  state = {
    newReleases: [],
    playlists: [],
    categories: []
  };

  async componentDidMount() {
    const [newReleases, playlists, categories] = await Promise.all([
      Browse.getNewRelease(),
      Browse.getFeaturedPlaylists(),
      Browse.getCategories()
    ]);
    this.setState({
      newReleases: newReleases.items,
      playlists: playlists.items,
      categories: categories.items
    });
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
