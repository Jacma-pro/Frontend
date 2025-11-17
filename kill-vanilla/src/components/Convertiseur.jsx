import React, { use, useMemo } from "react";
import { useState } from "react";


const Convertiseur = () => {
    const [EuroValue, setEuroValue] = useState(0);
    const dollarValue = useMemo(() => EuroValue * 1.16, [EuroValue]);

    function handleEuroChange(e) {
        const euros = e.target.value;
        setEuroValue(euros);
    }
    return (
        <div>
            <h2>Convertisseur</h2>
            <div> 
                <div class="money">
                    Euros:
                    <input 
                        type="number"
                        value={EuroValue}
                    />
                    
                </div>
            </div>
            <button>
                Convert
                onClick={handleEuroChange}
            </button>
            <div>
                <div class="money">
                    Dollars:    
                    <input 
                        type="number"
                        value={dollarValue}

                    />
                </div>
            </div>
            <button onClick={() => { setEuroValue(0); setDollarValue(0); }}>Reset</button>
        </div>
    );
}
export default Convertiseur;
