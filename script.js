var submit = document.getElementById("submit");
submit.addEventListener("click",displayDetails);

submit.addEventListener("click",function (e){
    e.preventDefault();
})


var row=1;

function displayDetails(){
    var name=document.getElementById("name").value;
    var empid=document.getElementById("empid").value;
    var dropdown=document.getElementById("dropdown").value;
    var mail=document.getElementById("mail").value;
    var doj=document.getElementById("doj").value;

    if(!name || !empid || ! dropdown || ! mail ||! doj){
        alert("Please fill in all the boxes");
        
        return;
    }
    var display=document.getElementById("display");

    var newRow= display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = name;
    cell2.innerHTML = empid;
    cell3.innerHTML = dropdown;
    cell4.innerHTML = mail;
    cell5.innerHTML = doj;

    row++;



}



   function resetFunction() {
 
    document.getElementById("NewEmp").reset();
   }

   function formdisplay()
   {
       var T = document.getElementById("formdiv");
       T.style.display="block";
       var B= document.getElementById("buttonc");
       B.style.display="none";

   }

 