import React, { useState, useEffect } from "react";

export default function Comment(props) {
  const { comment, userId } = props;
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/user/getCustomerProfile/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.error(error));
  }, [userId]);

  return (
    <div>
      {user && (
        <div className="">
            <span>
                <img src= {user.photo ? user.photo : '/src/assets/user.png' }/>
                <div>{user.first_name} {user.email}</div>
            </span>
            <p>{props.comment}</p>
            <hr/>
        </div>  )}
    </div>
  );
}