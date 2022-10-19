import {useEffect, useRef, useState} from 'react';
import {InitialValues, onChangeArgs, Product} from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState<number>( initialValues?.count || value );

    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value);
    }, [value])

    useEffect(() => {
        const mountTimer = setTimeout(() => {
            isMounted.current = true;
        }, 1);

        return () => {
            clearTimeout(mountTimer);
        }
    }, [])

    const increaseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0);

        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount);
        }

        setCounter(newValue);

        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    return {
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        reset
    }
}