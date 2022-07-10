
var selectedperson

function addperson(btn)
{

    
    var fname = document.getElementById('txtFname').value
    var lname = document.getElementById('txtLname').value
   

    if(btn.value=='Add')
    {
    


    var person = document.createElement('tr')
    





    var FNcell = document.createElement('td')
    var LNcell = document.createElement('td')


    var chkbox = document.createElement('td')
    chkbox.innerHTML="<input type='checkbox'  onclick='chkclickfor(this)'>"



    //FNcell.innerHTML=fname

    var FNnode = document.createTextNode(fname)
    FNcell.appendChild(FNnode)

    var LNnode = document.createTextNode(lname)
    LNcell.appendChild(LNnode)




    person.appendChild(chkbox)
    person.appendChild(FNcell)
    person.appendChild(LNcell)


    var delLink =document.createElement('a')
    delLink.innerHTML='Delete'
    delLink.href='#'
   /* delLink.onclick=function(){deleteperson(event)}
    delLink.onclick=function(){deleteperson2(this)}  */
    delLink.onclick=function(){deleteperson3(person)}

    


    var edlink =document.createElement('a')
    edlink.innerHTML='Edit'
    edlink.href='#'
    edlink.onclick=function(){editeperson(person)}

    var sep = document.createTextNode(' | ')

    var opcell=document.createElement('td')
    opcell.appendChild(delLink)
    opcell.appendChild(sep)
    opcell.appendChild(edlink)

    person.appendChild(opcell)



    document.getElementById('T1').appendChild(person)

    }
    else
    {
        selectedperson.childNodes[1].innerHTML=fname
        selectedperson.childNodes[2].innerHTML=lname
        selectedperson.style.backgroundColor="white"



    }


}
/*
function deleteperson(e)
{
    var person =e.srcElement.parentNode.parentNode
    document.getElementById('T1').removeChild(person)
}

function deleteperson(link)
{
    var person =link.parentNode.parentNode
    document.getElementById('T1').removeChild(person)
}
*/
function deleteperson3(person)
{
    
    document.getElementById('T1').removeChild(person)
}

function editeperson(person)
{

    selectedperson=person
    person.style.backgroundColor="orange"
    document.getElementById('txtFname').value=person.childNodes[1].innerHTML
    document.getElementById('txtLname').value=person.childNodes[2].innerHTML
    document.getElementById('btnAdd').value='Modify'
}


function chkclick(c)
{
  var btn= document.getElementById('T1')


  if(c.checked)
    for(var i=1; i<T1.childNodes.length;i++)
     T1.childNodes[i].childNodes[0].childNodes[0].checked='checked'
    

     else 
     for(var i=1; i<T1.childNodes.length;i++)
     T1.childNodes[i].childNodes[0].childNodes[0].checked=''

    
}



chkclickfor(chk)
{
    if(!chk.checked)
      document.getElementById('c').checked=''
}