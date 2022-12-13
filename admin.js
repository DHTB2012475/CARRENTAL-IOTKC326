var firebaseConfig = {
  apiKey: "AIzaSyD6HRFXzzpQEy6lZGQiC-6MrmOMEvgvu6s",
  authDomain: "a3ty-6ec75.firebaseapp.com",
  projectId: "a3ty-6ec75",
  storageBucket: "a3ty-6ec75.appspot.com",
  messagingSenderId: "89457445872",
  appId: "1:89457445872:web:29ccf135e1e0640f90eb35",
};
firebase.initializeApp(firebaseConfig);


// Liên hệ
firebase.firestore().collection("contact").onSnapshot( (querySnapshot)=>{
    document.getElementById('contactm').innerHTML='';
    querySnapshot.forEach((doc)=>{
      console.log(doc.id, " => ", doc.data());
      document.getElementById('contactm').innerHTML+=`
      <tr>
      <td>${doc.data().name}</td>
      <td>${doc.data().msg}</td>
      <td>
      <button class="btn btn-danger" onclick="deletec1(4,'${doc.id}')" >X</button>
      </td>
    </tr>
  `
    });
  });
  
  
// ROOM 1
firebase.firestore().collection("room1").onSnapshot( (querySnapshot)=>{
    document.getElementById('room1').innerHTML='';
    querySnapshot.forEach((doc)=>{
  
      console.log(doc.id, " => ", doc.data());
      document.getElementById('room1').innerHTML+=`
      // <tr>
      // <td>${doc.id}</td>
      // <td>${doc.data().idClient}</td>
      // <td>${doc.data().day}</td>
      // <td>$ ${doc.data().price}.00</td>
      // <td>
      // <button class="btn btn-danger" onclick="deletec1(1,'${doc.id}')" >X</button>
      // </td>
      // </tr>
      <tr>
      <td>${doc.data().name}</td>
      <td>${doc.data().msg}</td>
    </tr>
      `
    });
  });
  //ROOM1 END

  //ROOM 2
firebase.firestore().collection("room2").onSnapshot( (querySnapshot)=>{
    document.getElementById('room2').innerHTML='';
    querySnapshot.forEach((doc)=>{
  
      console.log(doc.id, " => ", doc.data());
      document.getElementById('room2').innerHTML+=`
      <tr>
      <td>${doc.id}</td>
      <td>${doc.data().idClient}</td>
      <td>${doc.data().day}</td>
      <td>$ ${doc.data().price}.00</td>
      <td>
      <button class="btn btn-danger" onclick="deletec1(2,'${doc.id}')" >X</button>
      </td>
      </tr>
      `
    });
  });
  //ROOM2END

  //ROOM 3
firebase.firestore().collection("room3").onSnapshot( (querySnapshot)=>{
    document.getElementById('room3').innerHTML='';
    querySnapshot.forEach((doc)=>{
  
      console.log(doc.id, " => ", doc.data());
      document.getElementById('room3').innerHTML+=`
      <tr>
      <td>${doc.id}</td>
      <td>${doc.data().idClient}</td>
      <td>${doc.data().day}</td>
      <td>${doc.data().price}.00</td>
      <td>
      <button class="btn btn-danger" onclick="deletec1(3,'${doc.id}')" >X</button>
      </td>
      </tr>
      `
    });
  });
  //ROOM3 END

  //ROOM 4
firebase.firestore().collection("room4").onSnapshot( (querySnapshot)=>{
    document.getElementById('room4').innerHTML='';
    querySnapshot.forEach((doc)=>{
  
      console.log(doc.id, " => ", doc.data());
      document.getElementById('room4').innerHTML+=`
      <tr>
      <td>${doc.id}</td>
      <td>${doc.data().idClient}</td>
      <td>${doc.data().day}</td>
      <td>$ ${doc.data().price}.00</td>
      <td>
      <button class="btn btn-danger" onclick="deletec1(4,'${doc.id}')" >X</button>
      </td>
      </tr>
      `
    });
  });

function deletec1(room,id) {
  console.log(room,id)
  firebase.firestore().collection(`clients`).doc(id).delete().then(function() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }).catch(()=>{
  console.log('Lỗi')
})
}


//   EndXoas

firebase.firestore().collection("clients").onSnapshot( (querySnapshot)=>{
    document.getElementById('clientst').innerHTML='';
    querySnapshot.forEach((doc)=>{
  
      console.log(doc.id, " => ", doc.data());
      document.getElementById('clientst').innerHTML+=`
      <tr>
      <td>${doc.id}</td>
      <td>${doc.data().name}</td>
      <td>${doc.data().type}</td>
      <td>${doc.data().day}</td>
      <td>${doc.data().numberday}</td> 
      <td>${doc.data().price}</td> 
      <td>${doc.data().email}</td>
      <td>${doc.data().phone}</td>
      <td>
      <button class="btn btn-danger" onclick="deletec1(4,'${doc.id}')" >X</button>
      </td>
      </tr>
      `
    });
  });

