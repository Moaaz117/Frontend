const idText = document.getElementById('id-label');
const ad_input = document.getElementById('ad-input');
const soyad_input = document.getElementById('soyad-input');
const tc_input = document.getElementById('tc-input');
const tl_input = document.getElementById('tl-input');
//düzenleme ekranı
const idText2 = document.getElementById('id-label2');
const ad_input2 = document.getElementById('ad-input2');
const soyad_input2 = document.getElementById('soyad-input2');
const tc_input2 = document.getElementById('tc-input2');
const tl_input2 = document.getElementById('tl-input2');
//kutucukları temizle
idText.value = '';
ad_input.value = '';
soyad_input.value = '';
tc_input.value = '';
tl_input.value = '';
idText2.value = '';
ad_input2.value = '';
soyad_input2.value = '';
tc_input2.value = '';
tl_input2.value = '';
document.getElementById('delete-input').value = '';

let idNumber = 1000000;
let nosayisi = 0;
let editIndex = null;
const dlt_all = document.getElementById('delete-all');
const dlt_search = document.getElementById('delete-search');
//butunlar
olustur.addEventListener('click', idOlustur);
gonder.addEventListener('click', addPerson);
duzenle_button.addEventListener('click', duzenle);
dlt_all.addEventListener('click', delete_all);
dlt_search.addEventListener('click', delete_search);

function idOlustur() {
  idNumber++;
  idText.textContent = idNumber;
}

function addPerson() {
  const adText = ad_input.value.trim();
  const soyadText = soyad_input.value.trim();
  const tcText = tc_input.value.trim();
  const tlText = tl_input.value.trim();
  if (adText === '' || soyadText === '' || tcText === '') {
    alert('Lütfen zorunlu bilgileri doldurun.');
    return;
  }
  nosayisi++;
  const ul = document.createElement('ul');
  const items = [nosayisi, idNumber, adText, soyadText, tcText, tlText];
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
  //düzenleme tuşu ekle
  const img1 = document.createElement('img');
  img1.src = "pictures/duzenle.png";
  img1.id = "duzenle";
  img1.className = "edit";
  img1.addEventListener('click', function () {
    editIndex = Array.prototype.indexOf.call(ul.parentNode.children, ul);
    idText2.textContent = ul.children[1].textContent;
    ad_input2.value = ul.children[2].textContent;
    soyad_input2.value = ul.children[3].textContent;
    tc_input2.value = ul.children[4].textContent;
    tl_input2.value = ul.children[5].textContent;
  });
  ul.appendChild(img1);
  //silme tuşu ekle
  const img2 = document.createElement('img');
  img2.src = "pictures/delete.png";
  img2.id = "delete";
  img2.className = "delete";
  img2.addEventListener('click', function () {
    editIndex = Array.prototype.indexOf.call(ul.parentNode.children, ul);
    ul.remove();
  });
  ul.appendChild(img2);
  //listeyi ekle
  document.getElementById('lists').appendChild(ul);
  ad_input.value = '';
  soyad_input.value = '';
  tc_input.value = '';
  tl_input.value = '';
}
function duzenle() {
  if (editIndex !== null) {
    const ul = document.getElementById('lists').children[editIndex];
    ul.children[2].textContent = ad_input2.value.trim();
    ul.children[3].textContent = soyad_input2.value.trim();
    ul.children[4].textContent = tc_input2.value.trim();
    ul.children[5].textContent = tl_input2.value.trim();
    editIndex = null;
    idText2.textContent = '';
    ad_input2.value = '';
    soyad_input2.value = '';
    tc_input2.value = '';
    tl_input2.value = '';
  }
}

function delete_search() {
  const inputValue = document.getElementById('delete-input').value;
  var listsContainer = document.getElementById('lists');
  var lists = listsContainer.getElementsByTagName('ul');
  if (inputValue !== "") {
    // Ul öğelerini dolaş
    for (var i = 0; i < lists.length; i++) {
      var ul = lists[i];
      // Ul öğesinin içindeki li öğelerini al
      var lis = ul.getElementsByTagName('li');

      // Li öğelerini dolaş
      for (var j = 0; j < lis.length; j++) {
        var li = lis[j];
        // Li öğesinin içeriğini kontrol et
        if (li.textContent.trim() === inputValue) {
          // Eşleşen ul öğesini sil
          listsContainer.removeChild(ul);
          break; // öğeyi bulup sildikten sonra döngüden çık
        }
      }
    }
  }
  document.getElementById('delete-input').value = '';
}
function delete_all() {
  document.getElementById('lists').textContent = " ";
  idNumber = 1000000;
  nosayisi = 0;
  const ul = document.createElement('ul');
  ul.style = "background-color: #e8e6e7;";
  const items = ["No", "ID", "AD", "SOYAD", "TC", "TELEFON"];
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
  document.getElementById('lists').appendChild(ul);
}


