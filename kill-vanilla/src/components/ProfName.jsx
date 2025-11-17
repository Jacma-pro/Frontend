import React, { useMemo } from 'react';
import { useState, useCallback } from 'react';

const ProfName = (props) => {
    const [name, setName] = useState('thomas');

    const upperCaseName = useMemo(
        () => name.toUpperCase()
        , [name]
    );

    const handleClick = useCallback(
        () => setName('titi')
        , []
    );

    return (
        <div>
            <h1>Prénom du prof : {upperCaseName}</h1>
            <button onClick={handleClick}>Reset</button>
        </div>
    );
};

export default ProfName;