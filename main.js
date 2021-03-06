var count = 0;
var data = [[count++, 'images/nilkumar.jpg', 'Nilkumar', 'Patel', 'Analyst', '$50000'],
            [count++, 'images/chintan.jpg', 'Chintan', 'Trivedi', 'Full-stack developer', '$75000'],
            [count++, 'images/chaitali.jpg', 'Chaitali', 'Rahol', 'Web Design', '$60000'],
            [count++, 'images/parth.jpg', 'Parth', 'Vyas', 'Android Dev', '$80000'],]

function refreshTable() {
   document.getElementById('table').innerHTML = "";
   for (let i=0; i<data.length; i++) {
      document.getElementById('table').innerHTML += "<tr>" +
                                                      "<td><img src='" + data[i][1] + "' height='50px' width='50px'></td>" +
                                                      "<td>"+ data[i][2] +"</td>" +
                                                      "<td>"+ data[i][3] +"</td>" +
                                                      "<td>"+ data[i][4] +"</td>" +
                                                      "<td>"+ data[i][5] +"</td>" +
                                                      "<td id='delete-btn' onclick='deleteRow(" + data[i][0] + ")'><img src='images/close.jpg' height='50px' width='50px'></td>" +
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
      document.getElementById("error").innerHTML = "Please add all the required fields.";
   } else {
      arr = photo.split('\\');
      console.log(arr);
      photo_link = "images/" + arr[arr.length-1];
      console.log(photo_link);
      data.push([count++, photo_link, firstName, lastName, job, salary]);
      document.getElementById("form").reset();
      document.getElementById("error").innerHTML = "";
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