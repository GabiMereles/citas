import React,{Fragment, useState}from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';




var Formulario = ({crearCita}) => {

//Crear State de Citas
    var [cita,actualizarCita]=useState({

        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    var [error,actualizarError]= useState(false)

    var actualizarState = (e) => {

        actualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        })
    }
// Extraer los valores
    var {mascota,propietario,fecha,hora,sintomas} = cita; 

// Cuando el usuario presiona agregar cita
    var submitCita = (e) => {

        e.preventDefault();
        
        //validar

        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){

           actualizarError(true);
            return;

        }

        // Eliminar el mensaje previo
        actualizarError(false);

        //Asignar id
        cita.id= uuid();

        //crecar la cita
        crearCita(cita);

        //reiniciar el formulario
        actualizarCita({
          mascota: "",
          propietario: "",
          fecha: "",
          hora: "",
          sintomas: ""
        });


    }


    return(
        <Fragment>
                <h2> Crear Cita</h2>

                {error ? <p className="alerta_error">Todos los campos son obligatorios</p>
                :null}

                <form
                onSubmit={submitCita}              
                >
                    <label>Nombre Mascota</label>
                    <input 
                        type="text"
                        name="mascota"
                        className="u-full-width"
                        placeholder= "Nombre Mascota"
                        onChange={actualizarState}
                        value={mascota}
                    />
                    <label>Nombre Dueño</label>
                    <input
                        type="text"
                        name="propietario"
                        className="u-full-width"
                        placeholder="Nombre Dueño"
                        onChange={actualizarState}
                        value={propietario}
                    />
                    <label>Fecha</label>
                    <input
                        type="date"
                        name="fecha"
                        className="u-full-width"
                        onChange={actualizarState}
                        value={fecha}
                    />
                    <label>Hora</label>
                    <input
                        type="time"
                        name="hora"
                        className="u-full-width"
                        onChange={actualizarState}
                        value={hora}
                     />

                     <label>Síntomas</label>
                     <textarea
                        className="u-full-width"
                        name="sintomas"
                        onChange={actualizarState}
                        value={sintomas}
                     ></textarea>
                    <button
                    type="submit"
                    className="u-full-width button-primary"

                    >Agregar cita
                    </button>

                </form>


        </Fragment>


    )

}

Formulario.prototype = {

crearCita: PropTypes.func.isRequired

}
export default Formulario;