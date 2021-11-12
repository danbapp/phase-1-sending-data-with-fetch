const toServer = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
        Accept: 'application/json',
    },
    body:  JSON.stringify({
      name: 'Daniel',
     email: 'danbapp@gmail.com',
    })
  }

// fetch("http://localhost:3000/users", toServer)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   })
//   .catch(function (error) {
//     alert("Error!");
//     console.log(error.message);
//   });