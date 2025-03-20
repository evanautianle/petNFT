// src/Components/Navbar/Navbar.jsx
import React, { useEffect } from 'react';
import { useWeb3 } from '../../contexts/Web3Context';
import './Navbar.css';

const Navbar = () => {
  const { account, connectWallet } = useWeb3();

  useEffect(() => {
    if (account) {
      console.log('Connected account:', account);
    }
  }, [account]);

  return (
    <nav className="navbar">
      <h1>PetNFT</h1>
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </nav>
  );
};

export default Navbar;
