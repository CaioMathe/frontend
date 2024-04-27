import React, { useState, useEffect }  from "react";
import flat from '../img/login.png'
import { api } from '../api'
import {  useNavigate } from 'react-router-dom';



export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function valid_user(e){
        e.preventDefault();
        const user = {
            username: username,
            password: password
          };
        console.log(user)

        await api.post('/token/', user, { headers: { 'Content-Type': 'application/json' } })
        .then((e) => {   
            navigate('/')
            localStorage.setItem('token_debitus', e.data.access);
        }).catch((error)=>{

            console.log(error)
        })
    }

    useEffect(()=>{
        if(localStorage.getItem('token_debitus') != null){
            navigate('/')
        }
    })


    return (
        <div className="col-span-10 flex flex-row  justify-between items-center h-svh">
            <div className="w-3/12 h-svh  bg-orange-500 content-center">
                <div className="ml-5 mr-5">

                    <form onSubmit={valid_user} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4  text-center">
                            <h1>Entrar</h1>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Cpf
                            </label>
                            <input onChange={cpf => setUsername(cpf.target.value)} value={username} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/> 
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Senha
                            </label>
                            <input onChange={pass => setPassword(pass.target.value)} value={password}  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <button  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Entrar
                            </button>
                            <a href="/"  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
                                Esqueceu a Senha?
                            </a>
                        </div>
                    </form>
                    
                    <p className="text-center text-yellow-50 text-xs">
                        &copy;2024 Debitus. Todos os direitos reservados.
                    </p>
                </div>

            </div>
            <div className=" ">
                <img src={flat} className="" alt="flat" />

            </div>

        </div>
    )
}