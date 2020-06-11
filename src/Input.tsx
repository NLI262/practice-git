import React, { useState, useRef } from "react";

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => void;
    person?: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>)=> any;
}


export const TextField: React.FC<Props> = ({ text, handleChange }) => {

    return (
        <div >
            <input value={text} onChange={handleChange} />
           
        </div>
    );
};
