import React, {
    useState,
    useEffect
} from 'react';

import Image from 'next/image';

import {
    NftBlock,
    NftCard,
    NftImage,
    NftName,
    TextName,
    NftOwner,
    AddressContainer,
    Owner,
    Text,
    CopyButton,
    NftCollectionAddress,
    Address,
    NftCollection,
    NftDescription,
    NftMarketplace,
    NftTotalCopies,
    NftPrice
} from '../assets/style/cardNft.style';

import Toncoin from '../assets/img/ton.png';
import { IoCopyOutline } from "react-icons/io5";

import { CardType } from '../types/CardType';

export const CardNft: React.FC<CardType> = ({
    image,
    name,
    owner,
    collection,
    collectionAddress,
    description,
    marketplace,
    totalCopies,
    initialPrice,
    handleImageClick
}) => {

    const [price, setPrice] = useState(initialPrice);

    useEffect(() => {

        const interval = setInterval(() => setPrice((prevPrice: string) => (parseFloat(prevPrice) + 0.01).toFixed(2)), 3000);

        return () => clearInterval(interval);

    }, []);

    const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

    const truncateAddress = (address: string) => {

        const start = address.slice(0, 6);
        const end = address.slice(-6);

        return `${start}...${end}`;

    }

    return (

        <NftBlock>

            <NftCard>

                <NftImage
                    onClick={handleImageClick}
                >

                    <Image
                        src={image}
                        alt={'/'}
                        height={340}
                        width={400}
                    />

                </NftImage>

                <NftName>

                    <TextName>

                        {name}

                    </TextName>

                </NftName>

                <NftOwner
                    onClick={() => copyToClipboard(owner)}
                >

                    <Text>

                        Owner: {' '}

                        <AddressContainer>

                            <Owner>

                                {truncateAddress(owner)}

                            </Owner>

                            <CopyButton>

                                <IoCopyOutline
                                    color='#8994a3'
                                />

                            </CopyButton>

                        </AddressContainer>

                    </Text>

                </NftOwner>

                <NftCollectionAddress
                    onClick={() => copyToClipboard(collectionAddress)}
                >

                    <Text>

                        Collection Address: {' '}

                        <AddressContainer>

                            <Address>

                                {truncateAddress(collectionAddress)}

                            </Address>

                            <CopyButton>

                                <IoCopyOutline
                                    color='#8994a3'
                                />

                            </CopyButton>

                        </AddressContainer>

                    </Text>

                </NftCollectionAddress>

                <NftCollection>

                    <Text>

                        Collection: {' '}

                        {collection}

                    </Text>

                </NftCollection>

                <NftDescription>

                    <Text>

                        Description: {' '}

                        {description}

                    </Text>

                </NftDescription>

                <NftMarketplace>

                    <Text>

                        Marketplace: {' '}

                        {marketplace}

                    </Text>

                </NftMarketplace>

                <NftTotalCopies>

                    <Text>

                        Copies: {' '}

                        {totalCopies}

                    </Text>

                </NftTotalCopies>

                <NftPrice>

                    <Text>

                        Price: {' '}

                        {price}

                        <Image
                            src={Toncoin}
                            alt='Toncoin'
                            height={25}
                            width={25}
                            style={{ verticalAlign: 'middle', marginLeft: '5px', marginBottom: '5px' }}
                        />

                    </Text>

                </NftPrice>

            </NftCard>

        </NftBlock>

    );

}
