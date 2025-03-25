import React, { useEffect } from "react";
import UserGetAllUsers from "../../context/UserGetAllUsers";
import User from "./User";

const Users = () => {
  const [allUsers, loading] = UserGetAllUsers();

  // Log all users only when the data changes and is not loading
  useEffect(() => {
    if (!loading) {
      console.log(allUsers);
    }
  }, [allUsers, loading]);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching users
  }

  return (
    <>
      <div style={{ maxHeight: "calc(80vh)" }} className="py-2 overflow-y-auto">
        {allUsers.map((user, index) => {
          return <User key={user._id} user={user} />;
        })}
      </div>
    </>
  );
};

export default Users;
