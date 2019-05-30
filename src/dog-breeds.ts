import axios from 'axios';

export interface Breeds {
    status: string;
    message: object;
}

export interface SearchBreedOption {
    id: number;
    key: number;
    text: string;
}

export const fetchDogBreeds = async (): Promise<Breeds> => {
    try {
        const response = await axios.get(`https://dog.ceo/api/breeds/list/all`);

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getBreedSearchOptions = (
    breeds: Breeds
): Array<SearchBreedOption> => {
    const breedNames: Array<SearchBreedOption> = Object.keys(
        breeds.message
    ).map((breed: string, index: number) => ({
        id: index,
        key: index,
        text: breed
    }));

    return breedNames;
};
