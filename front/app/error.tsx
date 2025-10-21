'use client'

import Link from "next/link"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({error, reset}:{
    error: Error & {digest?: string};
    reset: () => void;
}){
    const router = useRouter();

    useEffect(() => {
    // Опционально: логирование ошибки
        console.error(error);
    }, [error]);

    const goBack = () => {
        router.back();
    };

    return (
        <div className="p_err">
        <div className="num">
            <span>Error</span>
        </div>
        <div className="txt">
            <p>бортовой компьютер перегружен, попробуйте снова</p>
            <div className="buttons">
                <button onClick={goBack}>вернуться назад</button>
                <button onClick={reset}>попробовать снова</button>
            </div>
        </div>
        </div>
    )
}