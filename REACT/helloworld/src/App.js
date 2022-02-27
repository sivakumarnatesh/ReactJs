import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
import Inline from './Components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';
import FragementDemo from './Components/FragementDemo';
import Table from './Components/Table';
import ParentComp from './Components/ParentComp';
import formComp from './Components/formComp';
function App() {
  return (
    <div className="App">
    <formComp name="siva"/>
    {/* <ParentComp/> */}
    {/* <Table/> */}
    {/* <FragementDemo/> */}
    {/* <LifecycleA/> */}
    {/* <Form/> */}
      {/* <h1 className='error'>Error</h1>
      <h2 className={styles.success}>Success</h2> */}
      {/* <Inline/> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Counter /> */}
      {/* <Message/> */}
      {/* <Greet name="Siva">
        <button>Click me</button>
      </Greet>
      <Greet name="Thilak">
        <h3>This is children</h3>
      </Greet>
      <Greet name="Raja"></Greet> */}
      {/* <Welcome name="kumar" />
      <Welcome name="Mani" /> */}
      <Hello/>
    </div>
  );
}

export default App;
