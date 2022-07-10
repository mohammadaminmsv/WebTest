function AddNewLink()
{
    var NewLink = document.createElement('a')

/*
    //method 1
    var LinkText = document.createTextNode('Link 3')
    NewLink.appendChild(LinkText)

*/
    //method 2
    NewLink.innerHTML= "link 3"

    NewLink.href="#"
    document.getElementById('d1').appendChild(NewLink)


}