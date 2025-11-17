import React, { useState, useMemo } from 'react';

const Compteur = () => {
    const [count, setCount] = useState(0);
    const colorButton = useMemo(() => {
        return count < 10 ? 'button-color-green' : 'button-color-red';
    }, [count]);


    return (
        <>
            <div className='compteur-container'>
                <button className={colorButton} onClick={() => setCount(count => count + 2)}>

                    count is {count}
                </button>
                <button onClick={() => setCount(0)}>
                    Reset
                </button>
            </div>
        </>
    );
};
export default Compteur;