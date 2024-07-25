let item = {
  id: 101,
  imgURL: "",
  name: "Us.Polo",
  price: 1999,
  qty: 1,
};

let htmldata = `<tr>
  <td>${item.id}</td>
  <td><img src="${item.imgURL}" alt="" width="30px" height="30px"></td>
  <td>${item.name}</td>
  <td>${item.price}</td>
  <td>
      <i class="bi bi-dash-circle" onclick="decQty();"></i>
      <span id="qty">${item.qty}</span>
      <i class="bi bi-plus-circle" onclick="incQty()"></i>
  </td>
  <td>
      <span id="total-price">${(item.price * item.qty).toFixed(2)}</span>
  </td>
</tr>`;

let displayTag = document.getElementById("display");
displayTag.innerHTML = htmldata;

let qtyTag = document.getElementById("qty");
let totalTag = document.getElementById("total-price");

function incQty() {
  qtyTag.textContent = ++item.qty;
  totalTag.textContent = `${(item.price * item.qty).toFixed(2)}`;
}

function decQty() {
  if (item.qty > 1) {
    qtyTag.textContent = --item.qty;
    totalTag.textContent = `${(item.price * item.qty).toFixed(2)}`;
  } else {
    qtyTag.textContent = 1;
    totalTag.textContent = `${(item.price * item.qty).toFixed(2)}`;
  }
}
