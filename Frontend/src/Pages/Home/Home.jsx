// src/Pages/Home/Home.jsx
import React from 'react';
import { useWeb3 } from '../../contexts/Web3Context';
import { mintNFT } from '../../utils/contract';

const Home = () => {
  const { provider, account } = useWeb3();

  const handleMintNFT = async () => {
    if (provider && account) {
      await mintNFT(provider, account);
    } else {
      alert('Please connect your wallet first.');
    }
  };

  return (
    <div>
      <h1>Welcome to PetNFT Marketplace</h1>
      <button onClick={handleMintNFT}>Mint NFT</button>
    </div>
  );
};

export default Home;
