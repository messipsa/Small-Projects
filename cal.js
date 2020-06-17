document.getElementById('cv').addEventListener('click',convertion);
function convertion(e)
{
    if(document.getElementById('somme').value=='')
    {
        alert('You must fill the currency to convert from');
    }
    else{
        if(document.getElementById('sum').value=='')
        {
            alert('You must fill the currency to convert to');
        }
        else
        {
            if(document.getElementById('money').value=='')
            {
                alert('You must fill the amount to convert');
            }
            else{
                const coeff = coefficient(document.getElementById('somme').value,document.getElementById('sum').value);
                console.log(typeof(document.getElementById('money').value));
                const ls =  document.getElementById('money').value +' $';
                const hf = document.getElementById('hfour');
                const h = document.createElement('h6');
                h.appendChild(document.createTextNode('Convertion from  ' + document.getElementById('somme').value +' to  ' +document.getElementById('sum').value  ));
                hf.appendChild();
                hf.appendChild(h);
                document.getElementById('amnt').value =document.getElementById('money').value;
                document.getElementById('results').value = coeff * document.getElementById('money').value ;
            }
        
        }

    }
 e.preventDefault();
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
               return 128,92;
            }
            else
            {
                if(a=='Euro'&&b=='Dinar')
                {
                   return 145,21;
                }
                else{
                    if(a=='Euro'&&b=='Dollar')
                {
                   return 1.13;
                }
                else{
                    return 0,89;
                }
                }

            }
            }
        }
    }
}