let ad_input = document.getElementById("ad-input");
let soyad_input = document.getElementById("soyad-input");
let no_input = document.getElementById("no-input");
const dlt_all = document.getElementById("dlt-all");
const crt_btn = document.getElementById("crt-btn");
var alt_conteiner = document.getElementById("tableContainer");


dlt_all.addEventListener('click', deleteAll);
crt_btn.addEventListener('click', createTable);

function createTable() {
  // Tablonun konulacağı div'i seç
  var container = document.getElementById('tableContainer');
  // Yeni Div oluştur
  var tableDiv = document.createElement('div');
  tableDiv.className = 'divler';
  // Yeni tablo oluştur
  var table = document.createElement('table');

  // Tablo başlıklarını ekle
  var header = table.createTHead();
  var row = header.insertRow(0);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = "<b>Name</b>";
  cell2.innerHTML = "<b>Surname</b>";
  cell3.innerHTML = "<b>Number</b>";
  cell4.innerHTML = "<b>Delete</b>";

  // Tabloyu ekle
  tableDiv.appendChild(table);


  // Düğmeleri ekle
  var deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete Table';
  deleteButton.onclick = function () {
    tableDiv.remove();
  };

  var clearButton = document.createElement('button');
  clearButton.innerHTML = 'Clear';
  clearButton.onclick = function () {
    var rows = table.rows;
    for (var i = 1; i < rows.length; i++) {
      rows[i].cells[0].innerHTML = "";
      rows[i].cells[1].innerHTML = "";
      rows[i].cells[2].innerHTML = "";
    }
  };

  var addButton = document.createElement('button');
  addButton.innerHTML = 'Add';
  addButton.onclick = function () {
    ad_input = document.getElementById("ad-input");
    soyad_input = document.getElementById("soyad-input");
    no_input = document.getElementById("no-input");

    if(ad_input.value==""||soyad_input.value==""||no_input.value==""){
      alert("Lütfen bilgileri eksiksiz giriniz!");
      return;
    }
    var newRow = table.insertRow();
    let inputValue = ad_input.value.trim();
    const newCell1 = newRow.insertCell();
    const newCell2 = newRow.insertCell();
    const newCell3 = newRow.insertCell();
    const newCell4 = newRow.insertCell();
    newCell1.textContent = inputValue;
    inputValue = soyad_input.value.trim();
    newCell2.textContent = inputValue;
    inputValue = no_input.value.trim();
    newCell3.textContent = inputValue;
    newCell4.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
  };

  tableDiv.appendChild(deleteButton);
  tableDiv.appendChild(clearButton);
  tableDiv.appendChild(addButton);

  container.appendChild(tableDiv);

}
function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}





function deleteAll() {
  alt_conteiner.textContent = " ";
}