import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GoogleMap from "react-google-map"
import GoogleMapLoader from "react-google-maps-loader"

const MY_API_KEY = "AIzaSyDZvVNfIihs2WtgWLp1RpdY7ipPL7yxZog"

const schoolTypes = [
  {
    name: 'Kindergarten',
    id: 'kindergarten'
  },
  {
    name: 'Pre-school',
    id: 'preSchool'
  },
  {
    name: 'Primary school',
    id: 'primaryschool'
  },
  {
    name: 'Middle school',
    id: 'middleschool'
  }
]

const serviceIds = {
  kindergarten: {
    fi: 870,
    sv: 881
  },
  preSchool: {
    fi: 1089,
    sv: 1093
  },
  primaryschool: {
    fi: 1099,
    sv: 1188
  },
  middleschool: {
    fi: 1188,
    sv: 1190
  }
};

const Map = ({googleMaps, coordinates}) => (
  <div style={{height: '500px'}}>
    <GoogleMap
      googleMaps={googleMaps}
      coordinates={coordinates}
      center={{lat: 60.17208, lng: 24.9067677}}
      zoom={12}
      onLoaded={(googleMaps, map) => {
        map.setMapTypeId(googleMaps.MapTypeId.ROADMAP)
      }}
    />
  </div>
);

Map.propTypes = {
  googleMaps: PropTypes.object.isRequired,
};

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      schoolType: null,
      language: 'fi',
      coordinates: []
    }
  }

  componentDidMount() {
    this.fetchSchools();
  }

  fetchSchools() {
    const {schoolType, language} = this.state;
    if (!schoolType || !language) {
      return;
    }
    const serviceId = serviceIds[schoolType][language];

    const getOnLoaded = (title) =>
      (googleMaps, map, marker) => {
        const infoWindow = new googleMaps.InfoWindow({
          content: `<div><strong>${title}</strong></div>`
        });
        googleMaps.event.addListener(marker, 'click', () => {
          infoWindow.open(map, marker);
        })
      }

    fetch(`https://api.hel.fi/servicemap-test/v2/unit/?service=${serviceId}&only=root_ontologytreenodes%2Clocation%2Cname%2Cstreet_address%2Ccontract_type&include=services%2Caccessibility_properties&geometry=true&page=1&page_size=1000`)
      .then(data => data.json())
      .then(data => data.results.filter(result => result.geometry).map(result => ({
        title: result.name.en,
        position: {
          lng: result.geometry.coordinates[0],
          lat: result.geometry.coordinates[1]
        },
        onLoaded: getOnLoaded(result.name.en)
      })))
      .then(results => this.setState({coordinates: results}));
  }

  selectSchoolType(schoolType) {
    this.setState({schoolType, coordinates: []}, this.fetchSchools);
  }

  selectLanguage(language) {
    this.setState({language, coordinates: []}, this.fetchSchools);
  }

  render() {
    return (
      <div>
        <div class="btn-group" data-toggle="buttons">
          {schoolTypes.map(({name, id}) =>
            <a key={id} class={this.state.schoolType === id ? 'btn btn-default' : 'btn btn-primary'} onClick={this.selectSchoolType.bind(this, id)}>
              {name}
            </a>
          )}
        </div>
        <div class="btn-group" data-toggle="buttons">
          <a class={this.state.language === 'fi' ? 'btn btn-default' : 'btn btn-primary'} onClick={this.selectLanguage.bind(this, 'fi')}>
            Finnish
          </a>
          <a class={this.state.language === 'sv' ? 'btn btn-default' : 'btn btn-primary'} onClick={this.selectLanguage.bind(this, 'sv')}>
            Swedish
          </a>
        </div>
        <GoogleMapLoader
          params={{
              key: MY_API_KEY,
              libraries: "places",
          }}
          render={googleMaps => googleMaps && <Map googleMaps={googleMaps} coordinates={this.state.coordinates}/>}
          />
      </div>
    );
  }
}

export default Search;
