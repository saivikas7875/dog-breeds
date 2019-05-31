import React, { useEffect, useState } from 'react';
import { Card, Image } from 'semantic-ui-react';
import {
    fetchDogImage,
    getImageLabel,
    SearchBreedOption,
    fetchDogSubBreedImage
} from '../helpers/dog-breeds';

import breedSearchStyles from './breed-search.module.scss';

type Props = {
    breed: string;
    subBreed: string;
    subBreeds?: Array<SearchBreedOption>;
};


export const DogImage: React.FC<Props> = ({ breed, subBreed, subBreeds }) => {
    const [image, setImage] = useState<string>('');

    useEffect(() => {
        setImage('');
        
        if (subBreeds && subBreeds.length > 0) {
            if (subBreed !== '') {
                const fetchSubBreedImage = async (): Promise<void> => {
                    const dogImageResponse = await fetchDogSubBreedImage(
                        breed,
                        subBreed
                    );

                    setImage(dogImageResponse.message);
                };

                fetchSubBreedImage();
            }
        } else {
            const fetchImage = async (): Promise<void> => {
                const dogImageResponse = await fetchDogImage(breed);

                setImage(dogImageResponse.message);
            };

            fetchImage();
        }
    }, [breed, subBreed, subBreeds]);

    return (
        <div className={breedSearchStyles.dogImageContainer}>
            {image !== '' && (
                <Card>
                    <Image src={image} wrapped label={getImageLabel(breed, subBreed)} />
                </Card>
            )}
        </div>
    );
};
