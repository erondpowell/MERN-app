import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ron Jonson",
      image:
        "https://images.pexels.com/photos/6784829/pexels-photo-6784829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
