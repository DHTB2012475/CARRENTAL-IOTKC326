function sendMail() {

  var khachhang = document.getElementById("room1Name").value;
  var email = document.getElementById("room1Email").value;
  var sodienthoai = document.getElementById("room1Phone").value;
  var loaixe = document.getElementById("room1type").value;
  var giathuengay = document.getElementById("room1Price").value;
  var ngaythue = document.getElementById("room1day").value;
  var songaythue = document.getElementById("number1day").value;
  var tongthanhtoan = document.getElementById("room1Phone").value;
   // total: Number(giathuengay.replace(/[.]/,",").replace(/[^0-9]+/g,""))*songaythue,
  var  total = Number(giathuengay.replace(/[.]/,"").replace(/[^0-9]+/g,""))*Number(songaythue);
  total = numberWithCommas(total);

  var params = {
    khachhang, email, sodienthoai, loaixe, giathuengay, ngaythue, songaythue, tongthanhtoan, total
    

    
  };
  

  const serviceID = "service_vv68pg3";
  const templateID = "template_cjuk3j8";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("room1Name").value = "";
      document.getElementById("room1Email").value = "";
      document.getElementById("room1Phone").value = "";
      document.getElementById("room1type").value = "";
      document.getElementById("room1Price").value = "";
      document.getElementById("room1day").value = "";
      document.getElementById("number1day").value = "";
      total="";
      // document.numberWithCommas(total);
      console.log(res);
      alert("Your message sent successfully!!")

    })
    .catch(err => console.log(err));

}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
}

