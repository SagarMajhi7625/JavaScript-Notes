```
<!-- <table class="table table-striped mt-5">
  <thead>
    <tr>
      <th>Username</th>
      <th>Password</th>
      <th></th>
    </tr>
  </thead>
  <tbody id="user-list"></tbody>
</table> -->

```

```
let regFormEl = document.getElementById("reg-form");
let usnBox = document.getElementById("usn");
let emailBox = document.getElementById("email");
let pwBox = document.getElementById("pw");
let dobBox = document.getElementById("dob");
let cityBox = document.getElementById("city");

regFormEl.addEventListener("submit", function (e) {
  e.preventDefault(); // Its used to stop the default functionality

  let userData = {
    username: usnBox.value,
    email: emailBox.value,
    password: pwBox.value,
    dateOfBirth: dobBox.value,
    city: cityBox.value,
  };

  // Store the userData object in an array
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(userData);

  // Store the array in localStorage
  localStorage.setItem("users", JSON.stringify(users));

  console.log("User data stored in localStorage:", users);
});

```

```
  <input
    type="button"
    value="Clear"
    id="clear-btn"
    class="btn btn-light btn-block"
  />

    const clearBtn = document.getElementById("clear-btn");

  clearBtn.addEventListener("click", function () {
    courseSelect.value = "";
    totalFeesInput.value = "";
    // casteRadio.forEach(function (radio) {
    //   radio.checked = false;
    // });
    for (var i = 0; i < casteRadio.length; i++) {
      casteRadio[i].checked = false;
    }
    concessionFeesInput.value = "";
    paidFeesInput.value = "";
    remainingFeesInput.value = "";
  });
```

```
for (let i = 0; i < casteRadio.length; i++) {
  const radio = casteRadio[i];
  radio.addEventListener("change", function () {
    const selectedCaste = radio.value;
    concessionFeesInput.value = casteConcessions[selectedCaste];
    console.log(casteConcessions[selectedCaste], concessionFeesInput.value);
  });
}


  casteRadio.forEach(function (radio) {
    radio.addEventListener("change", function () {
      const selectedCaste = radio.value;
      concessionFeesInput.value = casteConcessions[selectedCaste];
      console.log(casteConcessions[selectedCaste], concessionFeesInput.value);
    });
  });
```
