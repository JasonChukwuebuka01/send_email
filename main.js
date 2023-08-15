window.onload = () => {
  const button = document.querySelector("button");
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
    clearValues();
  });

  // Case1: This is a () when called after clicking the button, it saves values got from user form inputs in an object named param={}. this param object would be sent into emailjs.send() as a last parameter.
  //1st parameter:service-id. 2nd paramter: template-id.
  //3rd/last parameter:param object.
  // This will be processed inside your account in Email.js and take proper values in set.
  // Email.js takes the data and return a repsonse which is collected at .then(res=>{res.status}). res.status === 200 i.e success. if any error comes up, it goes to .catch(error=>{})

  function sendEmail() {
    let param = {
      from_name: name.value,
      email_id: email.value,
      message: message.value,
    };

    emailjs
      .send("service_v4pbo0j", "template_tdymvuo", param)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Email sent succesfully",
          text: "Rewards would be random",
          confirmButtonText: "Ok",
          customClass: {
            confirmButton: "order",
          },
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          confirmButtonText: "Ok",
          title: "Oops...",
          text: "Something went wrong!",
          footer: `something is wrong in the fetch error type:${error.status}`,
          customClass: {
            confirmButton: "order",
          },
        });
      });
  } //End of sendEmail();

  // CASE 2: A () that clears all user-input;

  function clearValues() {
    name.value = "";
    email.value = "";
    message.value = "";
  }

  // This truggers first to the screen
  Swal.fire({
    title: "GIVE AWAY TIME",

    text: `so in a bid of using /testing Email.js for the first time,i'll be gifting out free Data to fellow Newbies who is starting their tech career. so,this is my token of wishing you Success in your Journey. send me an Email in this format: "i'm Emailing from Sololearn/Twitter/LinkedIn. Here is my mobile number:0810*****"THIS IS ONLY FOR 🇳🇬 `,

    imageUrl:
      "https://thumbs.dreamstime.com/b/happiness-concept-psychology-happy-people-young-woman-running-multicolored-balloons-beach-71974216.jpg",

    imageWidth: 250,
    imageHeight: 200,
    imageAlt: "Custom image",
    customClass: {
      confirmButton: "order",
    },
  });
}; //End of General()✅
