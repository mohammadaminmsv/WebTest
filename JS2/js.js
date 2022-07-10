var Student = new Array
var i=0;

function addstudent()
{
    var Fname = prompt("Enter your First Name =")
    var Lname = prompt("Enter your Last Name =")
    var Age = prompt("Enter your Age =")

    var std = {Fname : Fname , Lname : Lname , Age : Age}
    Student[i++] = std;

}

function showstudent()
{
    var table = "<table  <tr> <th >First Name</th> <th>Last Name</th> <th>Age</th> </tr> "
    for (var j=0 ; j<i ; ++j)
    {
        table = table + "<tr>"
        table += "<td> "+ Student[j].Fname+"</td>"
        table += "<td>" + Student[j].Lname+"</td>"
        table += "<td>" + Student[j].Age+"</td>"
        table += "/<tr>"
    }

    table += "</table>"

    document.getElementById('Students').innerHTML=table;

}
