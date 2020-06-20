class Book
 {
     constructor(titre,auteur,date)
     {
         this.title = titre;
         this.author = auteur;
         this.parution = date;
     }
 }

 class UI
 {
     constructor()
     {

     }

     Add_Book(book)
     {
       console.log(book );
       const list = document.querySelector('#liste');
       const nouveau = document.createElement('tr');
       console.log(nouveau);
       const ne = document.createElement('th');
      /* nouveau.appendChild(document.createTextNode(book.title));
       nouveau.appendChild(document.createTextNode(book.author));
       nouveau.appendChild(document.createTextNode(book.parution));*/
       nouveau.innerHTML = `<th>${book.title}</th>
       <th>${book.author}</th>
       <th>${book.parution}</th>
       <th><a href="#" class="delete">X</a></th>
       `
       liste.appendChild(nouveau);
       document.querySelector('#auteur').value='';
       document.querySelector('#date').value='';
       document.querySelector('#titre').value='';
       
     }

     Delete_book()
     {

     }

     Show_Alert()
     {

     }
 }
 document.querySelector('.button-primary').addEventListener('click',takeit);
 
function takeit(e)
{
    const aut = document.querySelector('#auteur').value;
 const time = document.querySelector('#date').value;
 const ttr = document.querySelector('#titre').value;
 const livre = new Book(ttr,aut,time);
 const comp = new UI();
 console.log(comp);
   comp.Add_Book(livre);
    e.preventDefault();
}