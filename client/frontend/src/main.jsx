import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';
import { createThirdwebClient, defineChain, getContract } from 'thirdweb';

export const client = createThirdwebClient({ 
  clientId: "b84edcdb07a107ac0c75c6d837658f90" 
});

// connect to your contract
export const contract = getContract({ 
  client, 
  chain: defineChain(11155111), 
  address: "0x82eBc71f01109E5ED6124D6BEE6e1B3Cc4c0D989"
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider> 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)