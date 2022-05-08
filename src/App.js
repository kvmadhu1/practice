
import "./App.css";



import BindEvent from "./components/practice/BindEvent";
import ClassClick from "./components/practice/ClassClick";
import Counter from "./components/practice/Counter";
import FunctionClick from "./components/practice/FunctionClick";

import Greet from "./components/practice/Greet";
import Hello from "./components/practice/Hello";
import Message from "./components/practice/Message";
import ParentComponent from "./components/practice/ParentComponent";
import Welcome from "./components/practice/Welcome";
import NameList from "./NameList";
import UserGreeting from "./UserGreeting";
import StyleSheet from "./components/practice/StyleSheet";
import InlineStyle from "./components/practice/InlineStyle";
import './components/practice/appStyles.css'
import styles from './components/practice/appStyles.module.css'
import Form from "./components/practice/Form";
import LifeCycleA from "./components/practice/LifeCycleA";
import FragmentDemo from "./FragmentDemo";
import Table from "./Table";
import PureComp from "./components/practice/PureComp";
import ParentComp from "./ParentComp";
import RefsDemo from "./components/practice/RefsDemo";
import Input from "./components/practice/Input";
import FocusInput from "./components/practice/FocusInput";
import FRParentInput from "./components/practice/FRParentInput";

import { UserProvider } from "./components/practice/usercontext";
import PostList from "./components/practice/HTTP/PostList";
import PostForm from "./components/practice/HTTP/PostForm";
import ClassCounter from "./components/practice/HOOK/ClassCounter";
import HookCounter from "./components/practice/HOOK/HookCounter";
import HookCounterTwo from "./components/practice/HOOK/HookCounterTwo";
import HookCounterThree from "./components/practice/HOOK/HookCounterThree";
import HookCounterFour from "./components/practice/HOOK/HookCounterFour";
import HookCounterOne from "./components/practice/HOOK/HookCounterOne";

import ClassCounterOne from "./components/practice/HOOK/ClassCounterOne";
import ClassMouse from "./components/practice/HOOK/ClassMouse";
import HookMouse from "./components/practice/HOOK/HookMouse";
import MouseContainer from "./components/practice/HOOK/MouseContainer";
import IntervalClassCounter from "./components/practice/HOOK/IntervalClassCounter";
import IntervalHookCounter from "./components/practice/HOOK/IntervalHookCounter";
import DataFetching from "./components/practice/DataFetching";
import ComponentC from "./components/practice/HOOK/ComponentC";
import React from "react";
import CounterOne from "./components/practice/HOOK/CounterOne";

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">

      <CounterOne />
      <div>hai madhu test branch</div>
      <div>hai madhu feature branch</div>
<<<<<<< Updated upstream
      <div>hai madhu master change</div>
=======
      <div>hai madhu feature branch stack</div>
>>>>>>> Stashed changes


      {/* <UserContext.Provider value={'madhu k v'} >
        <ChannelContext.Provider value={'hai'}>
        <ComponentC />
        </ChannelContext.Provider>
      
      </UserContext.Provider> */}
      
      

      {/* <DataFetching /> */}

      {/* <IntervalHookCounter /> */}

      {/* <IntervalClassCounter /> */}

      {/* <MouseContainer /> */}

      {/* <HookMouse /> */}

      {/* <ClassMouse /> */}

      {/* <HookCounterOne /> */}
      
      {/* <ClassCounterOne /> */}

      {/* <HookCounterFour /> */}

      {/* <HookCounterThree /> */}

      {/* <HookCounterTwo /> */}

      {/* <HookCounter /> */}

      {/* <ClassCounter /> */}

{/* <PostForm /> */}
{/* <PostList /> */}


  {/* <UserProvider value={'madhu'}>
    <ComponentC />
  </UserProvider> */}
      

      {/* <FRParentInput /> */}

      {/* <FocusInput /> */}

      {/* <Input /> */}

      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}

      {/* <Table /> */}

    {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}

      {/* <Form /> */}

      
      {/* <h1 className="error">error</h1>
      <h1 className={styles.success}>success</h1> */}

      {/* <InlineStyle />

<StyleSheet primary={true} /> */}

{/* <NameList /> */}
      {/* <UserGreeting /> */}

      {/* <ParentComponent /> */}


    {/* <BindEvent /> */}
    {/* <ClassClick /> */}


      {/* <FunctionClick /> */}





      {/* <Counter /> */}

{/* <Message /> */}

{/* <Greet name= "abcd" > its childern propery </Greet> */}

{/* <Greet name= "f" heroname="b" >
 <button>click</button>
</Greet> */}


{/* <Welcome name="abcdefg" hello="hello">
 <h4>this is class with childern</h4>
</Welcome> */}

{/* <Hello /> */}



      {/* <HookCounterFour />
      <ClassCounterOne />
      <HookCounterOne /> */}

    </div>
  );
}

export default App;
