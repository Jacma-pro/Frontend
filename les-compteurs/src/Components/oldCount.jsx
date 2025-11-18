import React, { useState, useMemo } from 'react';

const Compteur = () => {
    const [count, setCount] = useState(0);
    const handleColorButton = useMemo(() => {
        return count < 10 ? 'button-color-green' : 'button-color-red';
    }, [count]);
    const handleHideButton = useMemo(() => {
        return count >= 20 ? 'hideButton' : '';
    }, [count]);
    const handleButtonSize = useMemo(() => {
        return {
            width: `${150 - count * 10}px`,
            height: `${50 - count * 4}px`,
            fontSize: `${20 - count * 2}px`
        };
    }, [count]);

    const [isHovered, setIsHovered] = useState(false);
    const handleButtonHoveredClass = useMemo(() => {
        return isHovered ? 'button-hover' : '';
    }, [isHovered]);

    return (    
        <>
            <div className='compteur-container'>
                <button className={`${handleColorButton} ${handleHideButton} ${handleButtonHoveredClass}`} 
                    onClick={() => setCount(count => count + 2)} 
                    style={handleButtonSize}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                > <br />
                </button>
                <button onClick={() => setCount(0)}>
                    Reset
                </button>
                <p>
                    Count is {count}
                </p>
            </div>
        </>
    );
};
export default Compteur;