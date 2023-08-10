const url = "./data.json";
  loadData(url)
    .then(displayData)
    .catch((error) => {
      console.log(error);
    });


function loadData(url) {
    return new Promise((succes, failuer) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => {
        if (xhr.status === 200) {
          succes(xhr.responseText);
        } else {
          failuer(`Request failed. Status: ${xhr.status}`);
        }
      };
      xhr.onerror = () => {
        failuer("Network Error");
      };
      xhr.send();
    });
    
  }
  
  function displayData(data) {
    const students = JSON.parse(data);
    const table = document.getElementById("Tab");
  
    for (let i = 0; i < students.length; i++) {
      const row = table.insertRow();
      const student = students[i];
      const cell1 = row.insertCell();
      const cell2 = row.insertCell();
      const cell3 = row.insertCell();
      cell1.innerHTML = student.name;
      cell2.innerHTML = student.age;
      cell3.innerHTML = student.address;
    }
  }
  
  