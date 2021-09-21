import React from "react";
import {useParams} from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Bldg",
    description: "This is a meme.",
    imageUrl:
      "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    address: "8523 east 58th Street Tulsa OK 74145",
    location: {
      lat: 36.0484405,
      lng: -95.8778584,
    },
    creator: "u1",
  },
  {
    id: "p1",
    title: "Empire State Bldg",
    description: "This is the empire state building",
    imageUrl:
      "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    address: "8523 east 58th Street Tulsa OK 74145",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];



const UserPlaces = props => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return (
    <PlaceList items={loadedPlaces} />
  );
}

export default UserPlaces;
