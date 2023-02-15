var firebaseConfig = {
  apiKey: "AIzaSyD9aNoLr9opPO6cs5C-C1vIaGNiZyLbZPA",
  authDomain: "iotvd-15d21.firebaseapp.com",
  projectId: "iotvd-15d21",
  storageBucket: "iotvd-15d21.appspot.com",
  messagingSenderId: "943467542646",
  appId: "1:943467542646:web:2901231e81ed9ac22a4757",
};
firebase.initializeApp(firebaseConfig);


//Thông tin liên hệ
firebase.firestore().collection("contact").onSnapshot( (querySnapshot)=>{
    document.getElementById('contactm').innerHTML='';
    querySnapshot.forEach((doc)=>{
      console.log(doc.id, " => ", doc.data());
      document.getElementById('contactm').innerHTML+=`
      <tr>
      <td>${doc.data().name}</td>
      <td>${doc.data().msg}</td>
      <td>${doc.data().info}</td>
      <td>
      <button class="btn btn-danger" onclick="deletec2(4,'${doc.id}')" >X</button>
      </td>
    </tr>
  `
    });
  });

//Thông tin hợp đồng
firebase.firestore().collection("clients").onSnapshot( (querySnapshot)=>{
    document.getElementById('clientst').innerHTML='';
    querySnapshot.forEach((doc)=>{
  
      console.log(doc.id, " => ", doc.data());
      var total = Number(doc.data().price.replace(/[.]/,",").replace(/[^0-9]+/g,""))*doc.data().numberday;
      document.getElementById('clientst').innerHTML+=`
      <tr>
      <td>${doc.id}</td>
      <td>${doc.data().name}</td>
      <td>${doc.data().type}</td>
      <td>${doc.data().day}</td>
      <td>${doc.data().numberday}</td> 
      <td>${doc.data().price}</td> 
      <td>${numberWithCommas(total)}</td> 
      <td>${doc.data().email}</td>
      <td>${doc.data().phone}</td>
      <td>
      <button class="btn btn-danger" onclick="deletec1(4,'${doc.id}')" >X</button>
      </td>
      </tr>
      `
    });
  });

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
}
//Xóa thông tin hợp đồng
function deletec1(room,id) {
  console.log(room,id)
  firebase.firestore().collection(`clients`).doc(id).delete().then(function() {
    Swal.fire({
      icon:'success',
      title: `Đã xóa hợp đồng`
  }).then((result) => {
      if (result) {
       
      }
    })
  }).catch(()=>{
  console.log('Lỗi')
})
}
//Xóa thông tin liên hệ
function deletec2(room,id) {
  console.log(room,id)
  firebase.firestore().collection(`contact`).doc(id).delete().then(function() {
    Swal.fire({
      icon:'success',
      title: `Đã xóa thông tin liên hệ`
  }).then((result) => {
      if (result) {
       
      }
    })
  }).catch(()=>{
  console.log('Lỗi')
})
}