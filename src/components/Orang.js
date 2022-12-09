import React, { useState } from 'react'

export default function Orang(props) {

    const [stateAngka, setStateAngka] = useState(0); //hooks

    let angka = 0;

    const test = () => {
        // alert("TEST!!");
        angka = angka+1;
    }
    const tampilkan = (name) =>{
        // alert("Haloo " + name);
        setStateAngka(stateAngka+1);
    }
    return (
        <div>
            Nama: {props.nama} <br/>
            Alamat: {props.alamat}
            <button onClick={test}>Klik Variable</button>
            <button onClick={()=>{tampilkan('Sakhoji')}}>Tombol Test2</button> <br />
            Angka Var   : {angka} <br />
            Angka State : {stateAngka} <br />
        </div>
    )
}
