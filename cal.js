document.getElementById('cv').addEventListener('click',function(e)
{
    document.getElementById('by').style.display='none'; 
    document.getElementById('loadd').style.display='block';
    setTimeout(loadingfinish , 1000);
    setTimeout(convertion,1050);
    e.preventDefault();
});
function loadingfinish()
{
    document.getElementById('loadd').style.display='none';
}
function convertion()
{
    
    if(document.getElementById('insert')!=null)
    {
    document.getElementById('insert').remove();
    }
    if(document.getElementById('somme').value=='')
    {
        ShowErr('You must fill the currency to convert from');
    }
    else{
        if(document.getElementById('sum').value=='')
        {
           ShowErr("you must fill the currency to convert to");
        }
        else
        {
            if(document.getElementById('money').value=='')
            {
               ShowErr('You must fill the amount to convert');
            }
            else{
                if(document.getElementById('somme').value!='Euro'&&document.getElementById('somme').value!='Dollar'&&document.getElementById('somme').value!='Dinar')
                {
                    ShowErr('You must enter an existant currency to convert from'); 
                }
                else
                {
                    if(document.getElementById('sum').value!='Euro'&&document.getElementById('sum').value!='Dollar'&&document.getElementById('sum').value!='Dinar')
                    {
                        ShowErr('You must enter an existant currency to convert to'); 
                    }
                else
                {
                if(document.getElementById('money').value<=0)
                {
                    ShowErr('You must enter a positive amount');
                }
                else
                {
                const coeff = coefficient(document.getElementById('somme').value,document.getElementById('sum').value);
                console.log(typeof(document.getElementById('money').value));
                const ls =  document.getElementById('money').value +' $';
                const hf = document.getElementById('hfour');
                const h = document.createElement('h6');
                h.id='insert';
                h.appendChild(document.createTextNode('Convertion from  ' + document.getElementById('somme').value +' to  ' +document.getElementById('sum').value  ));
                hf.appendChild(h);
                document.getElementById('amnt').value =document.getElementById('money').value;
                document.getElementById('results').value = coeff * document.getElementById('money').value ;
                document.getElementById('by').style.display='block'; 
                }
            }
            }
            }
        
        }

    }
}

function coefficient(a,b)
{
    if (a==b)
    {
        return 1;
    }
    else
    {
        if(b=='Euro'&&a=='Dinar')
        {
           return 0.0069;
        }
        else
        {
            if(b=='Dollar'&&a=='Dinar')
            {
               return 0.0078;
            }
            else
            {
                if(a=='Dollar'&&b=='Dinar')
            {
               return 128.92;
            }
            else
            {
                if(a=='Euro'&&b=='Dinar')
                {
                   return 145.21;
                }
                else{
                    if(a=='Euro'&&b=='Dollar')
                {
                   return 1.13;
                }
                else{
                    return 0.89;
                }
                }

            }
            }
        }
    }
}

function ShowErr(err)
{
   const div = document.createElement('div');
   div.className='alert alert-danger';
   div.appendChild(document.createTextNode(err));
   const h1 = document.querySelector('h1');
   const card = document.querySelector('.card');
   card.insertBefore(div,h1);
   setTimeout(Effacer,3000);
       
   
}

function Effacer ()
{
   document.querySelector('.alert ').remove();
}