// src/contexts/Web3Context.js
import { createContext, useState, useEffect, useContext } from 'react';
import { ethers } from 'ethers';

const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [network, setNetwork] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(web3Provider);
      window.ethereum.on('accountsChanged', (accounts) => {
        setAccount(accounts[0]);
      });
      window.ethereum.on('chainChanged', (chainId) => {
        setNetwork(chainId);
      });
    }
  }, []);

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0]);
  };

  return (
    <Web3Context.Provider value={{ account, provider, network, connectWallet }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);
