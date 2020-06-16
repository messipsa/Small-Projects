const boutton = document.querySelector('.clear-tasks');
const liste = document.querySelector('.collection');
const filtrer = document.querySelector('#filter');
const form = document.querySelector('#task-form');
const taskin = document.querySelector('#task');
const temps =document.querySelector('#task2');
const fin = document.querySelector('#task3');
console.log(boutton.previousElementSibling.childElementCount=0 );
console.log(taskin.value);
addEventListeners();
function addEventListeners(e)
{
  document.addEventListener('DOMContentLoaded',gettasks)
    form.addEventListener('submit',addTask);
    liste.addEventListener('click',suppression);
     boutton.addEventListener('click',lavage);
     filtrer.addEventListener('keyup',recherche);
}

function gettasks()
{
  let taches ;
  if(localStorage.getItem('taches')===null)
  {
    taches = [];
  }
  else
  {
    taches = JSON.parse(localStorage.getItem('taches'));
  }
  taches.forEach(function(t)
  {
    //const t = (JSON.stringify(taskk));
    console.log(typeof(t) + typeof(t.task));
    console.log(t + t['task'] + t.debut + t[0].task);
    console.log(t.txt);
    const li = document.createElement('li');
  li.className='collection-item';
  if(t.debut!='' && t.fin!='')
  {
  li.appendChild(document.createTextNode(t.debut+' --> ' +t.fin+' : ' +t.task ));
  }
  else
  {
    if(t.debut==''&&t.fin!='')
    {
      li.appendChild(document.createTextNode(t.fin+' : ' +t.task ));
    }
    else
    {
      if(t.debut!=''&&t.fin=='')
      {
        li.appendChild(document.createTextNode(t.debut + '  : ' +t.task ));
      }
      else
      {
        li.appendChild(document.createTextNode(t.task ));
      }
    }
  }
  const link = document.createElement('a');
  link.className='delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
 liste.appendChild(li);
  }
  )
}

function addTask (e)
{
    
    if(taskin.value=='')
    {
        alert('Add a Task');
    }
    else{
      
  const li = document.createElement('li');
  li.className='collection-item';
 
  if(temps.value!='' && fin.value!='')
  {
  li.appendChild(document.createTextNode(temps.value+' --> ' +fin.value+' : ' +taskin.value ));
  }
  else
  {
    if(temps.value==''&&fin.value!='')
    {
      li.appendChild(document.createTextNode(fin.value+' : ' +taskin.value ));
    }
    else
    {
      if(temps.value!=''&&fin.value=='')
      {
        li.appendChild(document.createTextNode(temps.value + '  : ' +taskin.value ));
      }
      else
      {
        li.appendChild(document.createTextNode(taskin.value ));
      }
    }
  }
  const link = document.createElement('a');
  link.className='delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
 liste.appendChild(li);
 storeLS(taskin.value,temps.value,fin.value);
  taskin.value='';
  temps.value='';
  fin.value='';
      
    }
  e.preventDefault();
}

function storeLS(Task,Begin,End)
{
  let taches =[];
  if(localStorage.getItem('taches')==null)
  {
    taches = [];
  }
  else
  {
    taches = JSON.parse(localStorage.getItem('taches'));
  }
  let object = {task : Task , 
  debut : Begin,
fin : End};
console.log(Task + Begin + End);
console.log(taches +' '+JSON.stringify(object));
  taches.push(JSON.stringify(object));
    console.log(taches);
    localStorage.setItem('taches',JSON.stringify(taches));
}

function suppression(e)
{
  console.log(e.target);
  if(e.target.className=="fa fa-remove" && confirm('Are you sure?'))
  {
  e.target.parentElement.parentElement.remove();
  }
  
  e.preventDefault();
}
function lavage (e)
{
  while(liste.firstChild)
  {
    boutton.previousElementSibling.removeChild(liste.firstChild);

  }
  //let taches = [];
  //localStorage.setItem('taches',null);
  localStorage.clear();
  e.preventDefault();
}
function removing(e)
{
  liste.innerHTML='';
  e.preventDefault();
}
function recherche(e)
{
  const entre = e.target.value.toLowerCase();
  console.log(document.querySelectorAll('li.collection-item'));
  document.querySelectorAll('li.collection-item').forEach(function(elm)
  {
   const txt = elm.textContent.toLocaleLowerCase();
   /*console.log(txt + ' ' + entre);
   console.log(txt.indexOf(entre));*/
   if(txt.indexOf(entre)!=-1)
   {
     elm.style.display = 'block';
   }
   else
   {
      elm.style.display = 'none';
   }

  })
  
  e.preventDefault();
}