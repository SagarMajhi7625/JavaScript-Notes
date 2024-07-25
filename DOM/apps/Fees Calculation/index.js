document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("fees-form");
  const selectedCourse = document.getElementById("course");
  const totalFeesInput = document.getElementById("totalFees");
  const caste = document.querySelectorAll("input[name='radio']");
  const concessionFeesInput = document.getElementById("concessionFees");
  const paidFeesInput = document.getElementById("paidFees");
  const dueFeesInput = document.getElementById("dueFees");

  const course = {
    MERN: 30000,
    JAVA: 31000,
    PYTHON: 32000,
  };

  const concessionCaste = {
    SC: 1000,
    ST: 2000,
  };

  selectedCourse.addEventListener("change", function () {
    const courseFees = selectedCourse.value;
    console.log(`Selected Course: ${courseFees}`);
    totalFeesInput.value = course[courseFees];
    console.log(`Course Price: ${totalFeesInput.value}`);
  });

  for (let i = 0; i < caste.length; i++) {
    const radio = caste[i];
    console.log(radio);
    radio.addEventListener("change", function () {
      const concession = radio.value;
      console.log(`Selected Caste: ${concession}`);
      concessionFeesInput.value = concessionCaste[concession];
      console.log(`Concession Fee: ${concessionFeesInput.value}`);
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const totalFees = totalFeesInput.value;
    const concessionFees = concessionFeesInput.value;
    const paidFees = paidFeesInput.value;
    console.log(`paidFees: ${paidFees}`);
    const dueFees = totalFees - concessionFees - paidFees;
    dueFeesInput.value = dueFees;
    console.log(`Remaining Due: ${dueFeesInput.value}`);
  });
});
