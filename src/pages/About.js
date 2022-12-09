import React, { useState } from 'react'

export default function About() {
    const [nama, setNama] = useState("");
    const isiNama = (nilai) => {
        setNama(nilai);
    }
    return (
        <div>
            <input type="text" placeholder='Isi Nama' onChange={(event)=>{
                isiNama(event.target.value);
            }} /> <br />
            Nama    : {nama}
        </div>
    )
}
