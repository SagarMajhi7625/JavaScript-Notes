let items = [
  {
    id: 101,
    imgURL: "https://via.placeholder.com/30",
    name: "Us.Polo",
    price: 19.99,
    qty: 1,
  },
  {
    id: 102,
    imgURL: "https://via.placeholder.com/30",
    name: "Adidas Shoes",
    price: 79.99,
    qty: 1,
  },
  {
    id: 103,
    imgURL: "https://via.placeholder.com/30",
    name: "Nike Jacket",
    price: 49.99,
    qty: 1,
  },
];

function generateCartRow(item) {
  let htmldata = `
    <tr>
      <td>${item.id}</td>
      <td><img src="${item.imgURL}" alt="" width="30px" height="30px"></td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>
        <i class="bi bi-dash-circle" onclick="decQty('${item.id}');"></i>
        <span id="qty-${item.id}">${item.qty}</span>
        <i class="bi bi-plus-circle" onclick="incQty('${item.id}')"></i>
      </td>
      <td>
        <span id="total-price-${item.id}">${(item.price * item.qty).toFixed(
    2
  )}</span>
      </td>
    </tr>
  `;

  let displayTag = document.getElementById("display");
  displayTag.innerHTML += htmldata;
}

for (let item of items) {
  generateCartRow(item);
}

function incQty(id) {
  let item = items.find((i) => i.id == id);
  if (item) {
    let qtyTag = document.getElementById("qty-" + id);
    let totalTag = document.getElementById("total-price-" + id);
    item.qty++;
    qtyTag.textContent = item.qty;
    totalTag.textContent = `${(item.price * item.qty).toFixed(2)}`;
  }
}

function decQty(id) {
  let item = items.find((i) => i.id == id);
  if (item && item.qty > 1) {
    let qtyTag = document.getElementById("qty-" + id);
    let totalTag = document.getElementById("total-price-" + id);
    item.qty--;
    qtyTag.textContent = item.qty;
    totalTag.textContent = `${(item.price * item.qty).toFixed(2)}`;
  }
}
