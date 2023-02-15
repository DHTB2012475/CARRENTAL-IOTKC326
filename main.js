
var firebaseConfig = {

    apiKey: "AIzaSyD9aNoLr9opPO6cs5C-C1vIaGNiZyLbZPA",
    authDomain: "iotvd-15d21.firebaseapp.com",
    projectId: "iotvd-15d21",
    storageBucket: "iotvd-15d21.appspot.com",
    messagingSenderId: "943467542646",
    appId: "1:943467542646:web:2901231e81ed9ac22a4757",

  //Điền thông tin Firebase config của cá nhân vào đây
 
};

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();


// Bắt đầu xe 1
document.getElementById('formroom1').addEventListener('submit',(e)=>{
    e.preventDefault();
    var phone = document.getElementById('room1Phone');
    var numberday= document.getElementById('number1day');
    var type= document.getElementById('room1type');
    var name= document.getElementById('room1Name');
    var email= document.getElementById('room1Email');
    var day= document.getElementById('room1day');
    var price= document.getElementById('room1Price');
    document.getElementById("btnroom1").style.visibility = 'hidden';
    firebase.firestore().collection('clients').add({
        name: name.value,
        email: email.value,
        type: type.value,
        day: day.value,
        numberday: numberday.value,
        price: price.value,
        phone: phone.value

    })
    .then ((key)=>{
        firebase.firestore().collection('clients').doc(key.id).update({id:key.id})
        .then(()=>{
            firebase.firestore().collection('room1').add({
                day: day.value,
                price: price.value,
                idClient:key.id
            })
            .then((res)=>{
                Swal.fire({
                    icon:'success',
                    title: `Hợp đồng được tạo thành công <br> ID hợp đồng của bạn là: ${res.id}`
    })
                // alert(`Rervation - succes ID:${res.id}` )
                
                name.value='';
                email.value='';
                day.value='';
                document.getElementById('btnroom1').style.visibility = 'visible';
                $('#ModalRoom1').modal('hide')
            })
        })
    })
})
// Kết thúc xe 1

// Bắt đầu xe 2
document.getElementById('formroom2').addEventListener('submit',(e)=>{
    e.preventDefault();
    var phone = document.getElementById('room2Phone');
    var numberday= document.getElementById('number2day');
    var type= document.getElementById('room2type');
    var name= document.getElementById('room2Name');
    var email= document.getElementById('room2Email');
    var day= document.getElementById('room2day');
    var price= document.getElementById('room2Price');
    document.getElementById("btnroom2").style.visibility = 'hidden';
    firebase.firestore().collection('clients').add({
        name: name.value,
        email: email.value,
        type: type.value,
        day: day.value,
        numberday: numberday.value,
        price: price.value,
        phone: phone.value

    })
    .then ((key)=>{
        firebase.firestore().collection('clients').doc(key.id).update({id:key.id})
        .then(()=>{
            firebase.firestore().collection('room2').add({
                day: day.value,
                price: price.value,
                idClient:key.id
            })
            .then((res)=>{
        Swal.fire({
        icon:'success',
        title: `Hợp đồng được tạo thành công <br> ID hợp đồng của bạn là: ${res.id}`
    })
                // alert(`Rervation - succes ID:${res.id}` )
                
                name.value='';
                email.value='';
                day.value='';
                document.getElementById('btnroom2').style.visibility = 'visible';
                $('#ModalRoom2').modal('hide')
            })
        })
    })
})
//Kết thúc xe 2

// Bắt đầu xe 3
document.getElementById('formroom3').addEventListener('submit',(e)=>{
    e.preventDefault();
    var phone = document.getElementById('room3Phone');
    var numberday= document.getElementById('number3day');
    var type= document.getElementById('room3type');
    var name= document.getElementById('room3Name');
    var email= document.getElementById('room3Email');
    var day= document.getElementById('room3day');
    var price= document.getElementById('room3Price');
    document.getElementById("btnroom3").style.visibility = 'hidden';
    firebase.firestore().collection('clients').add({
        name: name.value,
        email: email.value,
        type: type.value,
        day: day.value,
        numberday: numberday.value,
        price: price.value,
        phone: phone.value

    })
    .then ((key)=>{
        firebase.firestore().collection('clients').doc(key.id).update({id:key.id})
        .then(()=>{
            firebase.firestore().collection('room3').add({
                day: day.value,
                price: price.value,
                idClient:key.id
            })
            .then((res)=>{
                Swal.fire({
                    icon:'success',
                    title: `Hợp đồng được tạo thành công <br> ID hợp đồng của bạn là: ${res.id}`
    })
                // alert(`Rervation - succes ID:${res.id}` )
                name.value='';
                email.value='';
                day.value='';
                document.getElementById('btnroom3').style.visibility = 'visible';
                $('#ModalRoom3').modal('hide')
            })
        })
    })
})
{/* <kết thúc  xe3 */}
// Bắt đầu xe 4
document.getElementById('formroom4').addEventListener('submit',(e)=>{
    e.preventDefault();
    var phone = document.getElementById('room4Phone');
    var numberday= document.getElementById('number4day');
    var type= document.getElementById('room4type');
    var name= document.getElementById('room4Name');
    var email= document.getElementById('room4Email');
    var day= document.getElementById('room4day');
    var price= document.getElementById('room4Price');
    document.getElementById("btnroom4").style.visibility = 'hidden';
    firebase.firestore().collection('clients').add({
        name: name.value,
        email: email.value,
        type: type.value,
        day: day.value,
        numberday: numberday.value,
        price: price.value,
        phone: phone.value

    })
    .then ((key)=>{
        firebase.firestore().collection('clients').doc(key.id).update({id:key.id})
        .then(()=>{
            firebase.firestore().collection('room4').add({
                day: day.value,
                price: price.value,
                idClient:key.id
            })
            .then((res)=>{
                Swal.fire({
                    icon:'success',
                    title: `Hợp đồng được tạo thành công <br> ID hợp đồng của bạn là: ${res.id}`
    })
                // alert(`Rervation - succes ID:${res.id}` )
                
                name.value='';
                email.value='';
                day.value='';
                document.getElementById('btnroom4').style.visibility = 'visible';
                $('#ModalRoom4').modal('hide')
            })
        })
    })
})
{/* <kết thúc */}


// Đăng nhập
document.getElementById('formadmin').addEventListener('submit', (e)=>{
    e.preventDefault();
    var user = document.getElementById('adminuser');
    var pass = document.getElementById('adminpass');
    if (user.value == 'a3ty' && pass.value =='a3ty') {
        window.location.href= "thongtinhopdong.html";
    }

});
// Liên hệ
document.getElementById('formcontact').addEventListener('submit', (e)=>{e.preventDefault();
    var user = document.getElementById('contactName');
    var msg = document.getElementById('contactMessage');
    var info = document.getElementById('contactinfo');

    firebase.firestore().collection("contact").add({
        name: user.value,
        msg: msg.value,
        info: info.value
    })
    .then(function(docRef){
        Swal.fire({
            icon:'success',
            title: `Chúng tôi sẽ sớm liên hệ với bạn `
        })
        $(function (){
            $('#ModalContact').modal('toggle');
        });
        user.value='';
        msg.value=""
        info.value='';
    })
    .catch(function(error){
        console.error("Tin nhắn bị lỗi:",error);
    });
});
  

//Kiểm tra xe
document.getElementById('formcheck').addEventListener('submit', (e)=>{
    e.preventDefault();
    document.getElementById('checkr').innerHTML='';
    var id = document.getElementById('checkid');
    var roomc = document.getElementById('roomcheck');

    firebase.firestore().collection(`room${roomc.value}`).doc(id.value).get()
    .then(function(doc) {
        if (doc.exists ) {
            firebase.firestore().collection(`clients`).doc(doc.data().idClient).get().then((doc2) =>{
                console.log("Document data: ", doc.data());
                var total = Number(doc2.data().price.replace(/[.]/,",").replace(/[^0-9]+/g,""))*doc2.data().numberday;
                document.getElementById('checkr').innerHTML+=`
                <hr>
                <h6>ID hợp đồng của bạn là: ${doc.id}</h6>
                <h6>Name: ${doc2.data().name}</h6>
                <h6>Loại xe: ${doc2.data().type}</h6>
                <h6>Ngày thuê: ${doc2.data().day} Ngày</h6>
                <h6>Số ngày thuê: ${doc2.data().numberday}</h6>
                <h6>Giá thuê/ngày: ${doc2.data().price}</h6>
                <h6>Tổng giá thuê: ${numberWithCommas(total)}</h6>
                <h6>E-mail: ${doc2.data().email}</h6>
                <h6>Số điện thoại: ${doc2.data().phone}</h6>
              
                `
                
            })
        } else {
            //doc.data() will under in this case
            console.log("Error");
        }
}).catch(function(error) {
    console.log("Error");
});
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
  }

//form cancel
document.getElementById('formcancel').addEventListener('submit', (e)=>{
    e.preventDefault();
    document.getElementById('cancelr').innerHTML='';
    var id = document.getElementById('cancelid');
    var room = document.getElementById('roomcancel');
    console.log(id,room)
    firebase.firestore().collection(`room${room.value}`).doc(id.value).delete().then
    (function(){
        Swal.fire({
            icon:'success',
            title: `Đã yêu cầu hủy chúng tôi sẽ sớm liên hệ với bạn!`
        })
        
        id.value='';
        room.value='';
        }).catch(()=>{
        console.log('error')
    })
});

document.addEventListener("keydown", function (event){
    if (event.ctrlKey){
       event.preventDefault();
    }
    if(event.keyCode == 123){
       event.preventDefault();
    }
}); 
    
       