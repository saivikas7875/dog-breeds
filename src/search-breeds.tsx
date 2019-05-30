import React, {useState, useEffect} from 'react';
import breedSearchStyles from './breed-search.module.css';
import {Breeds, fetchDogBreeds, getBreedSearchOptions} from './dog-breeds';
import {Dropdown} from 'semantic-ui-react';

export const SearchBreeds: React.FC = () => {
    // const [breed, setBreed] = useState<string>('');
    const [allBreeds, setAllBreeds] = useState<Breeds>({status: '', message: {}});

    useEffect(() => {
        const fetchAllBreeds = async(): Promise<void> => {
            const allBreeds = await fetchDogBreeds();

            setAllBreeds(allBreeds);
        };

        fetchAllBreeds();
    }, []);

    return (
        <section className={breedSearchStyles.container}>
            <Dropdown
                fluid
                search
                selection
                options={getBreedSearchOptions(allBreeds)}
            />
        </section>
    );
};
