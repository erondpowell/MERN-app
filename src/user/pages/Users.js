import React, { useEffect, useState } from "react";

import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/Loading/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/Loading/LoadingSpinner";

const Users = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  //first param is a func, second is an array of dependencies.
  //useEffect hook runs whenever some dependency changes.
  useEffect(() => {
    const sendRequest = async () => {
      setIsloading(true);
      try {
        const response = await fetch("http://localhost:5000/api/users");

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedUsers(responseData.users);
      } catch (err) {
        setError(err.message);
      }
      setIsloading(false);
    };
    sendRequest();
  }, []);

  const errorHandler = () => {
    setError(null);
  }


  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler}/>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}

    </React.Fragment>
  );};

export default Users;
