import React, { Fragment, useState } from "react";
import Formulario from './components/Formulario';
import Cita from './components/Cita';

 //El hook use effect
 
function App() {

  //Arreglo de citas

  var [citas,guardarCitas]=useState([]);

  // Funcion que tome las citas actaules y agregue la nueva
  var crearCita= cita=>  {
      guardarCitas([
        ...citas,
        cita
      ]);
  }
  // Funcion que elimina una cita por si id
  var eliminarCita = id => {

    var nuevasCitas= citas.filter(cita => cita.id !== id );
    guardarCitas(nuevasCitas);
  }

  //Mensaje condicional
  var titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus Citas';


  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>

      <div className="container">
      <div className="row">

        <div className="one-half column">
          <Formulario
          
          crearCita={crearCita}
          
          />
        </div>
        
        <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita 
              
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
              />
            ))}
        </div>
      </div>



      </div>


    </Fragment>
    


  );
}

export default App;
