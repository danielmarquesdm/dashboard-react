import React, { useState, useEffect } from 'react';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import markerIcon from './../../assets/img/marker.png';
import api from '../../services/api';
import socket from '../../services/socket';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
const createMarker = () => {
  //-2.564326 -44.3548614
  const { latitude: lat, longitude: lon } = socket();
  console.log(lat);
  //const people = [{lat:-2.564326,lon:-44.3548614},{lat:-2.566530,lon:-44.3564620},{lat:-2.566970,lon:-44.3564867}];
  if (lat) {
    return (
      <Marker
        title="Rafael Oliveira"
        position={{ lat: lat, lng: lon }}
        icon={markerIcon}
      />
    );
  }
};
const CustomSkinMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      mapTypeId={'satellite'}
      defaultZoom={17}
      defaultCenter={{ lat: -2.563385, lng: -44.1892417 }}
      defaultOptions={{
        scrollwheel: true,
        zoomControl: true,
        styles: [
          {
            featureType: 'water',
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: '#0088ff' },
            ],
          },
          {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [
              { hue: '#ff0000' },
              { saturation: -100 },
              { lightness: 99 },
            ],
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#808080' }, { lightness: 54 }],
          },
          {
            featureType: 'landscape.man_made',
            elementType: 'geometry.fill',
            stylers: [{ color: '#ece2d9' }],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{ color: '#ccdca1' }],
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#767676' }],
          },
          {
            featureType: 'road',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#ffffff' }],
          },
          { featureType: 'poi', stylers: [{ visibility: 'off' }] },
          {
            featureType: 'landscape.natural',
            elementType: 'geometry.fill',
            stylers: [{ visibility: 'on' }, { color: '#b8cb93' }],
          },
          { featureType: 'poi.park', stylers: [{ visibility: 'on' }] },
          {
            featureType: 'poi.sports_complex',
            stylers: [{ visibility: 'on' }],
          },
          { featureType: 'poi.medical', stylers: [{ visibility: 'on' }] },
          {
            featureType: 'poi.business',
            stylers: [{ visibility: 'simplified' }],
          },
        ],
      }}
    >
      {createMarker()}
    </GoogleMap>
  ))
);

export default function Maps() {
  return (
    <CustomSkinMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}
