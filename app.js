const boutton = document.querySelector('.clear-tasks');
const liste = document.querySelector('.collection');
const filtrer = document.querySelector('#filter');
const form = document.querySelector('#task-form');
const taskin = document.querySelector('#task');
const temps =document.querySelector('#task2');
const fin = document.querySelector('#task3');
console.log(taskin );
console.log(taskin.value);
addEventListeners();
function addEventListeners(e)
{
    form.addEventListener('submit',addTask);
   
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
  
  li.appendChild(document.createTextNode(temps.value+' --> ' +fin.value+' : ' +taskin.value ));
  const link = document.createElement('a');
  link.className='delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
 liste.appendChild(li);
  taskin.value='';
  temps.value='';
  fin.value='';
    }
  e.preventDefault();
}