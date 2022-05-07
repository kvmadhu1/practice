import React from "react";
import Person from "./Person";

function NameList() {

    const person = [
        {
            id:1,
            name:"madhu trial",
            age:30,
            skill: "react"
        },
        {
            id:2,
            name:"kv",
            age:40,
            skill: "java"
        },
        {
            id:3,
            name:"mad",
            age:20,
            skill: "nill"
        }

    ] 

    // const personList = person.map((person)=><h2>iam {person.name}. I am  {person.age} years old . i know {person.skill} </h2>)

    const personList = person.map((person)=><Person key={person.id} person= {person} />)

//   const names = ["madhu", "kv", "ckm", "blr"];
//   const nameList = names.map((name) => <h3>{name}</h3>);
  return (
    <div>

{personList}


        {/* {
            names.map((name)=><h1>{name}</h1>)
        } */}
      {/* {nameList} */}

      {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2>
            <h2>{names[3]}</h2> */}
    </div>
  );
}

export default NameList;
