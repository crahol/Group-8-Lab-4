var table_data = "<tr>" +
                    "<th id='delete-btn'>x</th>" +
                    "<th><img src='images/nilkumar.jpg' height='50px' width='50px'></th>" +
                    "<th>Nilkumar</th>" +
                    "<th>Patel</th>" +
                    "<th>Analyst</th>" +
                    "<th>$50000</th>" +
                 "</tr>" +
                 "<tr>" +
                    "<th id='delete-btn'>x</th>" +
                    "<th><img src='images/chintan.jpg' height='50px' width='50px'></th>" +
                    "<th>Chintan</th>" +
                    "<th>Trivedi</th>" +
                    "<th>Full stack developer</th>" +
                    "<th>$60000</th>" +
                 "</tr>" +
                 "<tr>" +
                    "<th id='delete-btn'>x</th>" +
                    "<th><img src='images/chaitali.jpg' height='50px' width='50px'></th>" +
                    "<th>Chaitali</th>" +
                    "<th>Rahol</th>" +
                    "<th>Web Design</th>" +
                    "<th>$75000</th>" +
                 "</tr>" +
                 "<tr>" +
                    "<th id='delete-btn'>x</th>" +
                    "<th><img src='images/parth.jpg' height='50px' width='50px'></th>" +
                    "<th>Parth</th>" +
                    "<th>Vyas</th>" +
                    "<th>Android Developer</th>" +
                    "<th>$60000</th>" +
                 "</tr>";

function addData() {
    document.getElementById("table").innerHTML += table_data;
}

addData();