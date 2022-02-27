import React from 'react'
import Person from './Person';
function NameList() {
    const names = ['Siva','Thilak','Raja'];
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'SIVA',
    //         age: 21,
    //         skill: 'React'
    //     }, {
    //         id: 2,
    //         name: 'RAJA',
    //         age: 23,
    //         skill: 'Angular'
    //     }, {
    //         id: 3,
    //         name: 'Thilak',
    //         age: 20,
    //         skill: 'Js'
    //     }];
    // const personList = persons.map(person => <Person key = {person.id} person={person}/>)
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>);
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
