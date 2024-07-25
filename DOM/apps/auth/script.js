// User Class: Represents a User
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayUsers() {
    const users = Store.getUsers();

    users.forEach((user) => UI.addUserToList(user));
  }

  static addUserToList(user) {
    const list = document.querySelector("#user-list");

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${user.username}</td>
      <td>${user.password}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
    `;

    list.appendChild(row);
  }

  static deleteUser(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const alertContainer = document.querySelector("#alert-container");
    alertContainer.appendChild(div);
    setTimeout(() => div.remove(), 3000);
  }

  static clearLoginForm() {
    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
  }
}

// Store Class: Handles Storage
class Store {
  static getUsers() {
    let users;
    if (localStorage.getItem("users") === null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem("users"));
    }
    return users;
  }

  static addUser(user) {
    const users = Store.getUsers();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }

  static removeUser(username) {
    const users = Store.getUsers();

    users.forEach((user, index) => {
      if (user.username === username) {
        users.splice(index, 1);
      }
    });

    localStorage.setItem("users", JSON.stringify(users));
  }
}

// Event: Display Users
document.addEventListener("DOMContentLoaded", UI.displayUsers);

// Event: Add User
document.querySelector("#login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  if (username === "" || password === "") {
    UI.showAlert("Please fill in all fields", "danger");
  } else {
    const users = Store.getUsers();
    let userExists = false;

    users.forEach((user) => {
      if (user.username === username) {
        userExists = true;
      }
    });

    if (userExists) {
      UI.showAlert("User already exists", "danger");
    } else {
      const user = new User(username, password);
      Store.addUser(user);
      UI.addUserToList(user);
      UI.showAlert("User Added", "success");
      UI.clearLoginForm();
    }
  }
});

// Event: Remove a User
document.querySelector("#user-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const username =
      e.target.parentElement.parentElement.firstElementChild.textContent;
    UI.deleteUser(e.target);
    Store.removeUser(username);
    UI.showAlert("User Removed", "success");
  }
});
