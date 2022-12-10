import axios from 'axios';
import React, { useEffect, useState } from 'react';
import base_url from '../config';

export default function Home() {

    const [isLoading, setIsLoading] = useState(false);
    const [dataMember, setDataMember] = useState(null);

    useEffect(() => {
        //on load
        loadData();
        return () => {
            //on unload
        }
    }, [])


    const loadData = () => {
        setIsLoading(true);
        axios.get(base_url + "users").then((result) => {
            // alert(JSON.stringify(result.data))
            setDataMember(result.data.data)
        }).catch((error) => {
            alert(error)
        }).finally(() => {
            setIsLoading(false);
        });
    }

    const tambahMember = () => {
        setIsLoading(true);
        const formTambah = document.getElementById("formTambah");
        const formData = new FormData(formTambah);
        axios.post(base_url+"register",formData).then((result)=>{
            const sukses = result.data.sukses;
            if(sukses == 0){
                alert(JSON.stringify(result.data.pesan));
            }
            loadData();
        }).catch((error)=>{
            alert(error);
        }).finally(()=>{
            setIsLoading(false);
        });
    }

    const hapusMember = (id, nama) => {
        const yakin = window.confirm("Apakah Anda Yakin Mau Menghapus " + nama + "?");
        if(yakin){
            setIsLoading(true);
            axios.delete(base_url+"users/"+id).then((result)=>{
                alert(result.data.pesan);
                loadData();
            }).catch((error)=>{
                alert(error);
            }).finally(()=>{
                setIsLoading(false);
            })
        } else {
            alert("Galau Yaa?")
        }
    }

    if (isLoading || dataMember == null) {
        return (
            <div>loading ....</div>
        )
    }

    return (
        <div>
            {/* {JSON.stringify(dataMember)} */}
            <fieldset>
                <legend>Tambah Member</legend>
                <form id='formTambah' onSubmit={tambahMember}>
                    <input type="text" placeholder='Isi Nama' name='txt_nama'/>
                    <input type="email" placeholder='Isi Email' name='txt_email'/>
                    <input type="tel" placeholder='Isi Telp' name='txt_telp'/>
                    <input type="password" placeholder='Isi Password' name='txt_password'/>
                    <button type='submit'>Tambah</button>
                </form>
            </fieldset>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>Telepon</th>
                        <th>Created At</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {dataMember.map((item,index) => {
                        return(
                            <>
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.email}</td>
                                    <td>{item.telp}</td>
                                    <td>{item.created_at}</td>
                                    <td><button onClick={()=>{hapusMember(item.id, item.nama)}}>Hapus Data</button></td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
