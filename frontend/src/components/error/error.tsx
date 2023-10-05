import React from 'react';


interface Props {
    error: string;
}

export const Error = ({error}: Props) => error ? <div className={'text-center text-red-800 mt-[10px]'}>{error}</div> : <></>