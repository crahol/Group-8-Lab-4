var count = 0;
var data = [[count++, 'images/nilkumar.jpg', 'Nilkumar', 'Patel', 'Analyst', '$50000'],
            [count++, 'images/chintan.jpg', 'Chintan', 'Trivedi', 'Full-stack developer', '$75000'],
            [count++, 'images/chaitali.jpg', 'Chaitali', 'Rahol', 'Web Design', '$60000'],
            [count++, 'images/parth.jpg', 'Parth', 'Vyas', 'Android Dev', '$80000'],]

function refreshTable() {
   document.getElementById('table').innerHTML = "";
   for (let i=0; i<data.length; i++) {
      document.getElementById('table').innerHTML += "<tr>" +
                                                      "<th><img src='" + data[i][1] + "' height='50px' width='50px'></th>" +
                                                      "<th>"+ data[i][2] +"</th>" +
                                                      "<th>"+ data[i][3] +"</th>" +
                                                      "<th>"+ data[i][4] +"</th>" +
                                                      "<th>"+ data[i][5] +"</th>" +
                                                      "<th id='delete-btn' onclick='deleteRow(" + data[i][0] + ")'>x</th>" +
                                                    "</tr>";
   }
}

function addRow(event) {
   event.preventDefault();
   var photo = document.getElementById("photo").value;
   var firstName = document.getElementById("first-name").value;
   var lastName = document.getElementById("last-name").value;
   var job = document.getElementById("job").value;
   var salary = document.getElementById("salary").value;
   if (photo === "" || firstName === "" || lastName === "" || job === "" || salary === "") {
      alert("Please add all the fields.");
   } else {
      data.push([count++, photo, firstName, lastName, job, salary]);
      console.log(photo);
      document.getElementById("form").reset();
   }
   refreshTable();
}

function deleteRow(index) {
   for (let i=0; i<data.length; i++) {
      if (data[i][0] === index) {
         data.splice(i, 1);
         break;
      }
   }
   refreshTable();
}

refreshTable();