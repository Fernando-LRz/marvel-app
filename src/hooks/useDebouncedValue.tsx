import { useEffect, useState } from 'react';

const useDebouncedValue = ( input: string = '', time: number = 350 ) => {
    const [ debouncedValue, setDebouncedValue ] = useState(input);

    useEffect(() => {

        const timeout = setTimeout(() => {
            setDebouncedValue(input)
        }, time);

        return () => {
            clearTimeout( timeout );
        };

    }, [ input ]);

    return {
        debouncedValue
    };
};

export default useDebouncedValue;