import * as React from 'react';

const title = 'MESSIPSA';
const employe={
  name : "Moulla Slim",
  age:23,
  adress : "Mchdallah Bouira"
};

const projets = [
  {
     lieu:'Ain defla',
     directeur : 'Hadjar Karim',
     structure : 'T100',
     nb_employe:216,
     objectID:16
},
{
  lieu:'Ain Hammam',
     directeur : 'Hadjar Syphax',
     structure : 'T102',
     nb_employe : 191,
     objectID:13
},
{
  lieu:'Ain Bacha',
     directeur : 'Hadjar Said',
     structure : 'T109',
     nb_employe : 63,
     objectID:12
}
];

function getAdress(objet)
{
   return objet.adress;
}



const mapping = projets.map(item=>
  {
    return item.lieu + ' ' + item.directeur + '\n\t\r\n';
  });




function App() {
  return (
    <div>
      <h1>Hello {employe.name} {getAdress(employe)}</h1>
      <label htmlFor="search">Search :  </label>
      <input id="search" type="text"/>

      <hr/>

      <ul>
        {projets.map(item=>{
          return  (<li key={item.objectID}>
            <span>
            Le projet {item.structure} dirigé par {item.directeur} <tr />
            </span>
            <span>
             {item.lieu}
            </span>
           <tr/>
            <span>
              <a href={item.objectID}>
                {item.nb_employe}
              </a>
            </span>
          </li>);
         
        })}
      </ul>
    </div>
  );
}

export default App;
