function sendMail() {
  var params = {
    khachhang: document.getElementById("room1Name").value,
    email: document.getElementById("room1Email").value,
    sodienthoai: document.getElementById("room1Phone").value,
    loaixe: document.getElementById("room1type").value,
    giathuengay: document.getElementById("room1Price").value,
    ngaythue: document.getElementById("room1day").value,
    songaythue: document.getElementById("number1day").value,
    tongthanhtoan: document.getElementById("room1Phone").value,
    



//     {{khachhang}}

// {{email}}

// {{sodienthoai}}

// {{loaixe}}

// {{giathue/ngay}}

// {{ngaythue}}

// {{songaythue}}

// {{tongthanhtoan}}
  };

  const serviceID = "service_vv68pg3";
  const templateID = "template_46pj6pd";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("room1Name").value = "";
        document.getElementById("room1Email").value = "";
        document.getElementById("room1Phone").value = "";
        document.getElementById("room1type").value= "";
    document.getElementById("room1Price").value= "";
document.getElementById("room1day").value= "";
document.getElementById("number1day").value= "";
document.getElementById("room1Phone").value= "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}
