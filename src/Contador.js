import React, { useState } from "react";

export default function Contador(){
    const [num, setNum] = useState(0);
    return(
        <div>
            <p className="paragrafo"> Contador: {num}</p>
            <button className="somar" onClick={() => setNum(num + 5)}>Somar 5</button>
            
            <button className="subtrair" onClick={() => setNum(num - 3)}>Subtrair 3</button>
            
        </div>
    )
}