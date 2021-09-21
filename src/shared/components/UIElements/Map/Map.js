import React, { useRef, useEffect } from "react";
import "./Map.css";

// THIS WILL NOT WORK WITHOUT PUTTING YOUR API KEY INTO THE INDEX.HTML SCRIPT TAG


const Map = (props) => {
  const mapRef = useRef();
  const { center, zoom } = props;

  /////
  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  /////
  // let map;

  // function initMap() {
  //   map = new window.google.maps.Map(mapRef.current, {
  //     center: center,
  //     zoom: zoom,
  //   });

  //   new window.google.maps.Marker({ position: center, map: map }, [
  //     center,
  //     zoom,
  //   ]);
  // }

  // useEffect(initMap, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
