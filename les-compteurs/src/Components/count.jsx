import React, { useState, useMemo, use } from 'react';

const Compteur = () => {
    const [count, setCount] = useState(0);
    const colorButton = useMemo(() => {
        return count < 10 ? 'button-color-green' : 'button-color-red';
    }, [count]);
    const hideButton = useMemo(() => {
        return count >= 20 ? 'hideButton' : '';
    }, [count]);

    const [isHovered, setIsHovered] = useState(false);
    const buttonHoveredClass = useMemo(() => {
        return isHovered ? 'button-hover' : '';
    }, [isHovered]);

    return (    
        <>
            <div className='compteur-container'>
                <button className={`${colorButton} ${hideButton} ${buttonHoveredClass}`} onClick={() => setCount(count => count + 2)} 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
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