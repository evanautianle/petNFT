// src/utils/contract.js
import { ethers } from 'ethers';

const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const abi = [
  // Your contract ABI goes here
];

export const getContract = (provider) => {
  return new ethers.Contract(contractAddress, abi, provider);
};

export const mintNFT = async (provider, account) => {
  const contract = getContract(provider);
  try {
    const tx = await contract.mint(account);
    await tx.wait();
    console.log('NFT Minted!');
  } catch (error) {
    console.error('Error minting NFT:', error);
  }
};
