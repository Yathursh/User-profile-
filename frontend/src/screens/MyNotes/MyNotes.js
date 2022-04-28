import React from "react";
import MainScreen from "../../components/MainScreen";
import {  useSelector } from "react-redux";
import "./MyNotes.css";

function MyNotes({ history, search }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <div className="home1">
      <MainScreen title={`Welcome Back ${userInfo && userInfo.name}..`}>  
      </MainScreen>
    </div>
  );
}

export default MyNotes;