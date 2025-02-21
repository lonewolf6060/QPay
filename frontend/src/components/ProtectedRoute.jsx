import { message } from "antd";
import React, { useEffect, useState } from "react";
import { GetUserInfo } from "../apicalls/users";
import { useNavigate } from "react-router-dom";

function ProtectedRoute(props) {
  const [userData, setUserData] = React.useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const response = await GetUserInfo();
      if (response.success) {
        setUserData(response.data);
      } else {
        message.error(response.message);
        navigate("/login");
      }
    } catch (error) {
      navigate("/login");
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (!userData) {
        //if userData is not present in userData, then only call
        getData();
      }
    } else {
      navigate("/login");
    }
  }, []);
  return <div>{props.children}</div>;
}

export default ProtectedRoute;
