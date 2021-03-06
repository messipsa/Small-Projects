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

     Delete_book(target)
     {
           const t = target;
           t.parentElement.parentElement.remove();
     }

     Show_Alert(text)
     {
        if(text=='error')
        {
            const divv = document.querySelector('.container');
            const form = document.querySelector('#frm');
            const nuevo = document.createElement('div');
            const hone = document.createElement('h1');
            nuevo.className='alert error';
            nuevo.appendChild(document.createTextNode('Please fill in all fields'));
            divv.insertBefore(nuevo,form);
            setTimeout(Effacer,3000);
        }
        else
        {
            const divv = document.querySelector('.container');
            const form = document.querySelector('#frm');
            const nuevo = document.createElement('div');
            const hone = document.createElement('h1');
            nuevo.className='alert succes';
            if(text=='succes')
            {
            nuevo.appendChild(document.createTextNode('Book added '));
            }
            else
            {
                nuevo.appendChild(document.createTextNode('Book removed '));
            }
            divv.insertBefore(nuevo,form);
            setTimeout(function()
            {
                document.querySelector('.succes').remove();
            },3000);
        }
     }
 }

 class Local
 {
     
    static getbooks()
    {
       let books = [];
      if(localStorage.getItem('books')==null)
      {
          books = [];
      }
      else
      {
          books = JSON.parse(localStorage.getItem('books'));
      }
      return books;
    }

    static affichage()
    {
       let books = Local.getbooks();
       books.forEach(function(book)
       {
           const cmp = new UI();
           cmp.Add_Book(book);
       })

    }


     static addbook(book)
     {
       let books = Local.getbooks();
       console.log(books);
       const livre = new Book(book.title,book.author,book.parution);
       books.push(livre);
       console.log(books);
       localStorage.setItem('books',JSON.stringify(books));
     }

     
     static removebook(Isbn)
     {
        let books = Local.getbooks();
        books.forEach(function(book,index)
        {
            const cmp = new UI();
            if(book.parution==Isbn)
           {
               books.splice(index,1);
           }
            
        })
        localStorage.setItem('books',JSON.stringify(books));
     }
 }

 document.addEventListener('DOMContentLoaded',Local.affichage);
 document.querySelector('.button-primary').addEventListener('click',adding);

 
function adding(e)
{
    const aut = document.querySelector('#auteur').value;
 const time = document.querySelector('#date').value;
 const ttr = document.querySelector('#titre').value;
 const livre = new Book(ttr,aut,time);
 const comp = new UI();
 console.log(comp);
  if(ttr==''||time==''||aut=='')
  {
      comp.Show_Alert('error');
  }
  else{
   comp.Add_Book(livre);
   Local.addbook(livre);
   comp.Show_Alert('succes');
  }
    e.preventDefault();
}

function Effacer()
{
    document.querySelector('.error').remove();
}

document.querySelector('#liste').addEventListener('click',deleting);
function deleting(e)
{
    if(e.target.className=='delete')
    {
        const comp = new UI();
        comp.Delete_book(e.target);
        console.log(e.target.parentElement.previousElementSibling.textContent);
        Local.removebook(e.target.parentElement.previousElementSibling.textContent);
        comp.Show_Alert('removed');
    }
    e.preventDefault();
}
