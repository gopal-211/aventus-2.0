import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
// import { ChatAppContect } from "../Context/ChatAppContext";
import { Filter, Friend } from "../Components/index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChatApp = () => {
  // const {} = useContext(ChatAppContect);


  return (
    <div>
      <Filter />


      <Friend />
      <ToastContainer />

    </div>
  );
};

export default ChatApp;
