import axios from 'axios';

export interface Breeds {
    status: string;
    message: any;
}

export interface DogImage {
    status: string;
    message: string;
}

export interface SearchBreedOption {
    id: number;
    key: number;
    text: string;
    value: string;
}

export const fetchDogBreeds = async (): Promise<Breeds> => {
    try {
        const response = await axios.get(`https://dog.ceo/api/breeds/list/all`);

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchDogImage = async (breed: string): Promise<DogImage> => {
    try {
        const response = await axios.get(
            `https://dog.ceo/api/breed/${breed}/images/random`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchDogSubBreedImage = async (
    breed: string,
    subBreed: string
): Promise<DogImage> => {
    try {
        const response = await axios.get(
            `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUpperCaseName = (lowerCaseName: string): string =>
    lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);

export const getImageLabel = (breed: string, subBreed: string): string =>
    subBreed !== ''
        ? `${getUpperCaseName(subBreed)} ${getUpperCaseName(breed)}`
        : getUpperCaseName(breed);

export const getBreedSearchOptions = (
    breeds: Breeds
): Array<SearchBreedOption> => {
    const breedNames: Array<SearchBreedOption> = Object.keys(
        breeds.message
    ).map((breed: string, index: number) => ({
        id: index,
        key: index,
        text: getUpperCaseName(breed),
        value: breed
    }));

    return breedNames;
};

export const getSubBreeds = (
    breeds: Breeds,
    breed: string
): Array<SearchBreedOption> =>
    breeds.message[breed].map((subBreed: string, index: number) => ({
        id: index,
        key: index,
        text: getUpperCaseName(subBreed),
        value: subBreed
    }));
