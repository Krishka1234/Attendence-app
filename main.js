students=[];
function submit(){
    name1=document.getElementById("name1").value;
 
    students.push(name1);
    document.getElementById("displayname").innerHTML=students;
    document.getElementById("name1").value="";
    
}
function show(){
    newarray=students.join("<br>");
    document.getElementById("p1").innerHTML=newarray;
    document.getElementById("sortbutton").style.display="inline-block";
}
function sorting(){
    students.sort();
    newarray=students.join("<br>");
    document.getElementById("p1").innerHTML=newarray;
}