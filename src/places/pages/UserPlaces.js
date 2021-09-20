import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Bldg",
    description: "This is the empire state building",
    imageUrl: "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    location: {
      lat: 40.7484405,
      long: -73.9878584,
    },
    creator: "E. Ron Little",
  },
  {
    id: "p1",
    title: "Empire State Bldg",
    description: "This is the empire state building",
    imageUrl: "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    address: "8523 east 58th Street Tulsa OK 74145",
    location: {
      lat: 40.7484405,
      long: -73.9878584,
    },
    creator: "E. Ron Little",
  },
];



const UserPlaces = props => {
  return (
    <PlaceList items={DUMMY_PLACES} />
  );
}

export default UserPlaces;
