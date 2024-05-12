import React, {
    useState,
    useEffect,
    useRef
} from 'react';

import {
    Chart,
    registerables
} from 'chart.js';

import Image from 'next/image';

import {
    ModalBlock,
    ModalCard,
    ModalImage,
    ModalName,
    ModalOwner,
    ModalText,
    ModalAddressContainer,
    NameOwner,
    ModalCollectionAddress,
    NameAddress,
    ModalCollection,
    ModalDescription,
    ModalMarketplace,
    ModalTotalCopies,
    ModalPrice,
    ChartNFT,
    ModalLink
} from '../assets/style/modalNft.style';

import Toncoin from '../assets/img/ton.png';
import { CardType } from '../types/CardType';

Chart.register(...registerables);

export const ModalNft: React.FC<CardType> = ({
    image,
    name,
    owner,
    collection,
    collectionAddress,
    description,
    marketplace,
    totalCopies,
    initialPrice
}) => {

    const [price, setPrice] = useState(initialPrice);
    const [priceHistory, setPriceHistory] = useState([{ price: initialPrice, time: new Date() }]);

    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        const interval = setInterval(() => {

            const newPrice = (parseFloat(priceHistory[priceHistory.length - 1].price) + 0.01).toFixed(2);
            const newPriceHistory = [...priceHistory, { price: newPrice, time: new Date() }];

            setPrice(newPrice);
            setPriceHistory(newPriceHistory);

        }, 3000);

        return () => clearInterval(interval);

    }, [priceHistory]);

    useEffect(() => {

        if (chartRef.current) {

            const ctx = chartRef.current.getContext('2d');

            if (ctx) {

                const existingChart = Chart.getChart(chartRef.current);

                if (existingChart) {
                    existingChart.destroy();
                }

                new Chart(ctx, {

                    type: 'line',
                    data: {
                        labels: priceHistory.map((_, index) => index + 1),
                        datasets: [
                            {
                                label: 'Price',
                                data: priceHistory.map(data => data.price),
                                fill: false,
                                borderColor: '#319ce3',
                                backgroundColor: 'black',
                                tension: 0.1
                            }
                        ]
                    },

                    options: {
                        scales: {
                            x: {
                                type: 'linear',
                                ticks: {
                                    color: 'white'
                                },
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.2)'
                                }
                            },

                            y: {
                                ticks: {
                                    color: 'white'
                                },
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.2)'
                                }
                            }
                        }
                    }

                });
            }
        }

    }, [priceHistory]);

    return (

        <ModalBlock>

            <ModalCard>

                <ModalImage>

                    <Image
                        src={image}
                        alt='/'
                        height={640}
                        width={600}
                    />

                </ModalImage>

                <ModalName>

                    {name}

                </ModalName>

                <ModalOwner>

                    <ModalText>

                        Owner: {' '}

                        <ModalAddressContainer>

                            <NameOwner>

                                <ModalLink
                                    href={`https://tonviewer.com/${owner}`}
                                >

                                    {owner}

                                </ModalLink>

                            </NameOwner>

                        </ModalAddressContainer>

                    </ModalText>

                </ModalOwner>

                <ModalCollectionAddress>

                    <ModalText>

                        Collection Address: {' '}

                        <ModalAddressContainer>

                            <NameAddress>

                                <ModalLink
                                    href={`https://tonviewer.com/${collectionAddress}`}
                                >

                                    {collectionAddress}

                                </ModalLink>

                            </NameAddress>

                        </ModalAddressContainer>

                    </ModalText>

                </ModalCollectionAddress>

                <ModalCollection>

                    <ModalText>

                        Collection:{collection}

                    </ModalText>

                </ModalCollection>

                <ModalDescription>

                    <ModalText>

                        Description: {description}

                    </ModalText>

                </ModalDescription>

                <ModalMarketplace>

                    <ModalText>

                        Marketplace: {marketplace}

                    </ModalText>

                </ModalMarketplace>

                <ModalTotalCopies>

                    <ModalText>

                        Copies: {totalCopies}

                    </ModalText>

                </ModalTotalCopies>

                <ModalPrice>

                    <ModalText>

                        Price: {price}

                        <Image
                            src={Toncoin}
                            alt='Toncoin'
                            height={25}
                            width={25}
                            style={{ verticalAlign: 'middle', marginLeft: '5px', marginBottom: '5px' }}
                        />

                    </ModalText>

                    <ChartNFT
                        ref={chartRef}
                        id='priceChart'
                    />

                </ModalPrice>

            </ModalCard>

        </ModalBlock>

    );

}
