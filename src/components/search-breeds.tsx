import React, { useState, useEffect } from 'react';
import breedSearchStyles from './breed-search.module.scss';
import {
    Breeds,
    fetchDogBreeds,
    getBreedSearchOptions,
    getSubBreeds,
    SearchBreedOption
} from '../helpers/dog-breeds';
import { Dropdown, Container } from 'semantic-ui-react';
import { DogImage } from './dog-image';

export const SearchBreeds: React.FC = () => {
    const [breed, setBreed] = useState<string>('');
    const [subBreed, setSubBreed] = useState<string>('');
    const [allBreeds, setAllBreeds] = useState<Breeds>({
        status: '',
        message: {}
    });
    const [subBreeds, setSubBreeds] = useState<Array<SearchBreedOption>>([]);

    useEffect(() => {
        const fetchAllBreeds = async (): Promise<void> => {
            const allBreeds = await fetchDogBreeds();

            setAllBreeds(allBreeds);
        };

        fetchAllBreeds();
    }, []);

    return (
        <section className={breedSearchStyles.container}>
            <div className={breedSearchStyles.breedSelectors}>
                <Container>
                    <label>Select Dog Breed</label>
                    <Dropdown
                        clearable
                        className={breedSearchStyles.dropDown}
                        lazyLoad
                        labeled
                        openOnFocus
                        fluid
                        search
                        selection
                        options={getBreedSearchOptions(allBreeds)}
                        onChange={(
                            event: React.SyntheticEvent,
                            data: any
                        ): void => {
                            setBreed(data.value);
                            setSubBreed('');
                            if (data.value) {
                                setSubBreeds(getSubBreeds(allBreeds, data.value));
                            }
                        }}
                    />
                </Container>
                <Container>
                    {subBreeds.length > 0 && (
                        <>
                            <label>Select a sub breed of {breed}</label>
                            <Dropdown
                                clearable
                                className={breedSearchStyles.dropDown}
                                lazyLoad
                                labeled
                                openOnFocus
                                fluid
                                search
                                selection
                                options={subBreeds}
                                onChange={(
                                    event: React.SyntheticEvent,
                                    data: any
                                ): void => {
                                    setSubBreed(data.value);
                                }}
                            />
                        </>
                    )}
                </Container>
            </div>
            {breed !== '' && <DogImage breed={breed} subBreed={subBreed} subBreeds={subBreeds} />}
        </section>
    );
};
