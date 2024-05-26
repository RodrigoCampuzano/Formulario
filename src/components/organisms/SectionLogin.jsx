import Swal from 'sweetalert2';
import Field from "../molecules/Field";
import Field2 from '../molecules/Field2';
import Button from "../atoms/Button";
import LinkedList from '../../models/LinkedList';
import { useState } from 'react';
import './SectionLogin.css';

function SectionLogin() {
    const lista = new LinkedList();
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmación, setConfirmación] = useState('');
    const [correo, setCorreo] = useState('');
    const [numero, setNumero] = useState('');
    const [fecha, setFecha] = useState('');
    const [pais, setPais] = useState('');
    const [userData, setUserData] = useState(null);

    const handlerClick = () => {
        const userData = {
            nombre,
            apellidos,
            usuario,
            contraseña,
            confirmación,
            correo,
            numero,
            fecha,
            pais
        };

        lista.add(userData);

        setNombre('');
        setApellidos('');
        setUsuario('');
        setContraseña('');
        setConfirmación('');
        setCorreo('');
        setNumero('');
        setFecha('');
        setPais('');

        setUserData(userData);

        Swal.fire({
            title: "Registro Exitoso",
            icon: "success"
        });
    };

    return (
        <div id='container'>
            <div id='box-container'>
                <div id="login_section">
                    <Field type="text" placeholder="Nombre(s)" text="Nombre(s)" val={nombre} fnVal={setNombre} />
                    <Field type="text" placeholder="Apellidos" text="Apellidos" val={apellidos} fnVal={setApellidos} />
                    <Field type="text" placeholder="Ejemplo: Rodrigo14" text="Usuario" val={usuario} fnVal={setUsuario} />
                    <Field type="password" placeholder="Ejemplo: 12345689" text="Contraseña" val={contraseña} fnVal={setContraseña} />
                    <Field type="password" placeholder="Ejemplo: 12345689" text="Confirmación Contraseña" val={confirmación} fnVal={setConfirmación} />
                    <Field type="email" placeholder="Ejemplo: hol@gmail.com" text="Correo" val={correo} fnVal={setCorreo} />
                    <Field type="tel" placeholder="Ejemplo: 9627512441" text="Numero de Teléfono" val={numero} fnVal={setNumero} />
                    <Field type="date" text="Fecha de Nacimiento" val={fecha} fnVal={setFecha} />
                    <Field2 type="text" placeholder="Seleccione un Pais" text="Pais" val={pais} fnVal={setPais} />
                    <Button title='Registro' onclick={handlerClick} />
                </div>
            </div>
            <div>
            {userData && (
                <div>
                    <h2>Datos de Usuario Registrado:</h2>
                    <p>Nombre: {userData.nombre}</p>
                    <p>Apellidos: {userData.apellidos}</p>
                    <p>Usuario: {userData.usuario}</p>
                    <p>Contraseña: {userData.contraseña}</p>
                    <p>Confirmación: {userData.confirmación}</p>
                    <p>Correo: {userData.correo}</p>
                    <p>Número de Teléfono: {userData.numero}</p>
                    <p>Fecha de Nacimiento: {userData.fecha}</p>
                    <p>País: {userData.pais}</p>
                </div>
            )}
            </div>
        </div>
            
    );
}

export default SectionLogin;
