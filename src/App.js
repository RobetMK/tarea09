/* import logo from './logo.svg'; */
import './App.css';
/* import RegisterFormik from './components/pure/forms/registerFormik'; */
/* import LoginFormik from './components/pure/forms/loginFormik'; */
/* import ContactListComponent from './components/container/contact_list'; */
/* import LifeCycleExample from './components/pure/lifeCycleExample'; */
/* import Ejemplo4 from './hooks/Ejemplo4'; */
/* import MiComponenteConContexto from './hooks/Ejemplo3'; */
/* import Ejemplo3 from './hooks/Ejemplo3'; */
/* import Ejemplo2 from './hooks/Ejemplo2'; */
/* import Ejemplo1 from './hooks/Ejemplo1'; */
/* import Greeting from './components/pure/greeting'; */
/* import GreetingF from './components/pure/greetingF'; */
/* import Father from './components/container/father'; */
import TaskListComponent from './components/container/task_list';
/* import OptionalRender from './components/pure/optionalRender'; */
/* import Tarea12 from './components/pure/tarea12'; */
/* import GreetingStyled from './components/pure/greetingStyled'; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* Componente propio Greeting.js */}
          {/* <Greeting name="Martín"></Greeting> */}
          {/* <GreetingF name="Martín"></GreetingF> */}
          {/* <Ejemplo1></Ejemplo1> */}
          {/* <Ejemplo2></Ejemplo2> */}
          {/* <MiComponenteConContexto></MiComponenteConContexto> */}
          {/* <Ejemplo4 nombre="Martín">
            {/* Todo lo que hay aquí, es tratado como props.children//
            <h3>Contenido del props.children--</h3>
          </Ejemplo4> */}
          {/* <LifeCycleExample></LifeCycleExample> */}
          {/* <GreetingStyled name = "martin"></GreetingStyled> */}
          {/* <Father></Father> */}
          {/* Ejemplos de Renderizado condicional */}
          {/* <OptionalRender></OptionalRender> */}
          {/* <Tarea12></Tarea12> */}
          {/* <ContactListComponent></ContactListComponent> */}
          {/* PROYECTO FINAL */}
          <TaskListComponent></TaskListComponent>
          {/* Ejemplos de uso de Formik y Yup */}
          {/* <LoginFormik></LoginFormik> */}
          {/* <RegisterFormik></RegisterFormik> */}
      </header>
    </div>
  );
}

export default App;
