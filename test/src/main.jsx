import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createThirdwebClient, getContract, resolveMethod } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { ThirdwebProvider } from "thirdweb/react";

// create the client with your clientId, or secretKey if in a server environment
export const client = createThirdwebClient({ 
  clientId: "b84edcdb07a107ac0c75c6d837658f90" 
});

// connect to your contract
export const contract = getContract({ 
  client, 
  chain: defineChain(11155111), 
  address: "0x82eBc71f01109E5ED6124D6BEE6e1B3Cc4c0D989"
});


  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <ThirdwebProvider>
      <App />
      </ThirdwebProvider>
  </React.StrictMode>,
)
