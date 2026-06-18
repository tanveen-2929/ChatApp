import React, { useEffect } from "react";
import UserGetAllUsers from "../../context/UserGetAllUsers";
import User from "./User";

const Users = () => {
  const [allUsers, loading] = UserGetAllUsers();

  useEffect(() => {
    if (!loading) {
      console.log(allUsers);
    }
  }, [allUsers, loading]);

  return (
    <div className="overflow-y-auto mt-2 max-h-[76vh] px-4">
      {loading ? (
        <div>Loading...</div>
      ) : (
        allUsers.map((user) => <User key={user._id} user={user} />)
      )}
    </div>
  );
};

export default Users;
