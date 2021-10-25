import React, { useState } from 'react';
import Poruka from './components/Poruka';


const App = (props) => {
    const [poruke, postaviPoruke] = useState(props.poruke);
    const [unosPoruke, postaviUnos] = useState("...");
    const [ispisSve, postaviIspis] = useState(false);

    const porukeZaIspis = ispisSve ? poruke : poruke.filter(p => p.vazno === true)

    const novaPoruka = (e) => {
        e.preventDefault()
        console.log('Klik', e.target)

        const noviObjekt = {
            id: poruke.length + 1,
            sadrzaj: unosPoruke,
            datum: new Date().toISOString(),
            vazno: Math.random() > 0.5
        }

        postaviPoruke(poruke.concat(noviObjekt))
        postaviUnos('')
    }

    const promjenaUnosa = (e) => {
        console.log(e.target.value);
        postaviUnos(e.target.value);


    }
    return (
        <div>
            <h1>Poruke</h1>
            <button onClick = {() => postaviIspis(!ispisSve)}>Prikaži {ispisSve ? "važne" : "sve"}</button>
                
            <ul>
                {porukeZaIspis.map(p =>
                    <Poruka key={p.id} poruka={p} />
                )}
            </ul>
            <form onSubmit={novaPoruka}>
                <input value={unosPoruke} onChange={promjenaUnosa} />
                <button type='submit'>Spremi</button>
            </form>
        </div>
    )
}


export default App;