import styled, { keyframes } from "styled-components";

export const NftContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 140px;

`;

export const NftBlock = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
   
`;

export const NftCard = styled.div`
    cursor: pointer;
    background-color: #1d2633;
    border-radius: 8px;
    padding: 20px;
    max-width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

`;

export const NftImage = styled.div`margin-bottom: 20px;`;

export const NftName = styled.div`

    font-weight: bold;
    margin-bottom: 10px;

`;

export const NftOwner = styled.div`

    margin-bottom: 10px;
    color: #319ce3;
    cursor: pointer;
   
`;

export const NftCollection = styled.div`margin-bottom: 10px;`;

export const NftCollectionAddress = styled.div`

    margin-bottom: 10px;
    cursor: pointer;
   
`;

export const NftDescription = styled.div`margin-bottom: 10px;`;

export const NftMarketplace = styled.div`margin-bottom: 10px;`;

export const NftTotalCopies = styled.div`margin-bottom: 10px;`;

export const NftPrice = styled.div`

    display: inline-block;
    margin-bottom: 10px;

`;

export const CopyButton = styled.button`

    display: none;
    cursor: pointer;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: transparent;

`;

export const AddressContainer = styled.span`

    position: relative;

    &:hover ${CopyButton} {
        display: inline-block;
    }

`;

export const Owner = styled.span`color: #319ce3;`;

export const Address = styled.span`color: #319ce3;`;

export const TextName = styled.p`

  color: white;
  font-size: 20px;

`;

export const Text = styled.p`

  color: white;
  font-size: 14px;

`;

export const ModalOverlay = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1d2633;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    
`;

export const ModalContent = styled.div`

    padding: 20px;
    border-radius: 8px;
    width: 100%;
    height: 800px;
    overflow: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

`;

export const CloseButton = styled.span`

    position: absolute;
    top: 40px;
    right: 80px;
    cursor: pointer;
    color: white

`;

const spinAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const NftTitle = styled.p`

  margin-top: 140px;
  text-align: center;
  font-weight: bold;
  font-size: 42px;
  color: transparent;
  background: linear-gradient(90deg, #00c6fb, #005bea);
  background-clip: text;
  -webkit-background-clip: text;
  animation: ${spinAnimation} 5s linear infinite;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

`;

export const LoaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1d2633;
    z-index: 9999; 
`;

export const Loader = styled.div`
    border: 16px solid #195172; 
    border-top: 16px solid #3498db; 
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${spinAnimation} 2s linear infinite;
`;
