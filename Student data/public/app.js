var stdFirstName=document.getElementById("stdFirstName");
var stdLastName=document.getElementById("stdLastName");
var stdAge=document.getElementById("stdAge");
var stdEdu=document.getElementById("stdEdu");
var stdID=document.getElementById("stdID");
var studentList=[];
var tBody = document.getElementById("tbody");

function render(){
    tBody.innerHTML="";
    for (var i=0;i<studentList.length;i++){
        tBody.innerHTML+=`<tr>
        <td> ${i*1}</td>
        <td>${studentList[i].firstName}</td>
        <td>${studentList[i].lastName}</td>
        <td>${studentList[i].age}</td>
        <td> ${studentList[i].education}</td>
        <td>${studentList[i].id}</td>
        <td><button onclick = "deleteData(${i})"class="tbody-btn">Delete</button></td>
        <td><button onClick = "editData(${i})"class = "tbody-btn">Edit</button></td>
        </tr>`
    }
}



// function addStudent(){
//     var a =stdFirstName.value;
//     var b = stdLastName.value;
//     var c=stdAge.value;
//     var d = stdEdu.value;
//     var e = stdID.value;
//     var obj={
//         firstName:a,
//         lastName:b,
//         age:c,
//         education:d,
//         id:e

//     }
//     studentList.push(obj);
//     stdFirstName.value="";
//     stdLastName.value="";
//     stdAge.value="";
//     stdEdu.value="";
//     stdID.value=""
//     render();
    
// }
function addStudent() {
    var a = stdFirstName.value;
    var b = stdLastName.value;
    var c = stdAge.value;
    var d = stdEdu.value;
    var e = stdID.value;

    if (a && b && c && d && e) {
        var obj = {
            firstName: a,
            lastName: b,
            age: parseInt(c),
            education: d,
            id: parseInt(e)
        };
        studentList.push(obj);
        stdFirstName.value = "";
        stdLastName.value = "";
        stdAge.value = "";
        stdEdu.value = "";
        stdID.value = "";
        render();
    } else {
        alert("Please fill in all fields.");
    }
}


function deleteData(index){
    studentList.splice(index,1)
    render();
}
function deleteAll(){
    studentList=[];
    tBody.innerHTML="";
}
function editData(index){
    var newName = prompt("enter name");
    var newLastName=prompt("enter last name")
    var newAge = prompt ("enter Age");
    var newEdu= prompt("enter edu");
    var newId=prompt("new id");
    if(newName !== null && newAge !== null && newLastName!==null&&newEdu!==null&&newId!==null){
        studentList[index].firstName=newName;
        studentList[index].lastName=newLastName;
        studentList[index].age=parseInt(newAge);
        studentList[index].education=newEdu;
        studentList[index].id=parseInt(newId);
        render();
    }

}