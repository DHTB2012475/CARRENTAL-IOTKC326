function sendMail() {
  var params = {
    name: document.getElementById("room1Name").value,
    email: document.getElementById("room1Email").value,
    message: document.getElementById("room1Phone").value,
  };

  const serviceID = "service_vv68pg3";
  const templateID = "template_cjuk3j8";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("room1Name").value = "";
        document.getElementById("room1Email").value = "";
        document.getElementById("room1Phone").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}
