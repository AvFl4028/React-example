//Se importa el modulo de react
import React from 'react';
import ReactDOM from 'react-dom';

//Constante que contiene los datos del usuario
const user = {
  name: 'Juan',
  lastName: 'Perez',
  age: 30,
  avatar: 'https://avatars2.githubusercontent.com/u/1234?s=460&v=4'
};

function getName(user) {
  return user.name + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {getName(user)}</h1>;
  }
  return <h1>Hello, Stranger</h1>;
}

//Constante que contiene el componente
const container = document.getElementById('root');
const element = 
  <div>
    <h1>  
      {getGreeting(user)}
    </h1>
    <img src={user.avatar}></img>
  </div>;

//ReactDOM.render(__QUE__, __DONDE__);
ReactDOM.render(element, container);
