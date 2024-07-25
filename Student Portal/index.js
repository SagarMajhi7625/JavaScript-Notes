let students = [
  {
    SReg: 1,
    SName: "Krishna Singh",
    SMarks: 80,
    SEmail: "krishna@gmail.com",
    SAge: 24,
    SPer: 80,
  },
  {
    SReg: 2,
    SName: "Sahil Sinku",
    SMarks: 70,
    SEmail: "sahil@example.com",
    SAge: 23,
    SPer: 70,
  },
  {
    SReg: 3,
    SName: "Lelin Sagar Patra",
    SMarks: 90,
    SEmail: "lelin@gmail.com",
    SAge: 22,
    SPer: 90,
  },
  {
    SReg: 4,
    SName: "Samir Mundari",
    SMarks: 60,
    SEmail: "samir@gmail.com",
    SAge: 22,
    SPer: 60,
  },
  {
    SReg: 5,
    SName: "Bikram Kesari Hansdha",
    SMarks: 85,
    SEmail: "bikram@gmail.com",
    SAge: 23,
    SPer: 85,
  },
  {
    SReg: 6,
    SName: "Aman Mohanty",
    SMarks: 75,
    SEmail: "aman@gmail.com",
    SAge: 21,
    SPer: 75,
  },
  {
    SReg: 7,
    SName: "Sarthak Mohapatra",
    SMarks: 95,
    SEmail: "sarthak@gmail.com",
    SAge: 22,
    SPer: 95,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("all-students")
    .addEventListener("click", function () {
      displayStudents(students);
    });

  document
    .getElementById("pass-students")
    .addEventListener("click", function () {
      let passStudents = [];
      for (let i = 0; i < students.length; i++) {
        if (students[i].SMarks >= 80) {
          passStudents.push(students[i]);
        }
      }
      displayStudents(passStudents);
    });

  document
    .getElementById("fail-students")
    .addEventListener("click", function () {
      let failStudents = [];
      for (let i = 0; i < students.length; i++) {
        if (students[i].SMarks < 80) {
          failStudents.push(students[i]);
        }
      }
      displayStudents(failStudents);
    });
});

function displayStudents(students) {
  let html = "";
  students.forEach(function (student) {
    html += `
        <tr>
            <td>${student.SReg}</td>
            <td>${student.SName}</td>
            <td>${student.SMarks}</td>
            <td>${student.SEmail}</td>
            <td>${student.SAge}</td>
            <td>${student.SPer}</td>
        </tr>
    `;
  });
  document.getElementById("student-table-body").innerHTML = html;
}
