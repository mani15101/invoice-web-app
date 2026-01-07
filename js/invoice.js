let items = [];

document.getElementById("invoiceNo").value =
  "INV-" + Date.now();

document.getElementById("invoiceDate").value =
  new Date().toISOString().split("T")[0];

function goBack() {
  window.location.href = "index.html";
}

function addItem() {
  const name = itemName.value;
  const q = Number(qty.value);
  const r = Number(rate.value);

  const total = q * r;
  items.push({ name, q, r, total });

  const row = itemTable.insertRow();
  row.innerHTML = `<td>${name}</td><td>${q}</td><td>${r}</td><td>${total}</td>`;
}

function viewInvoice() {
  localStorage.setItem("invoiceItems", JSON.stringify(items));
  localStorage.setItem("custName", custName.value);
  localStorage.setItem("custState", custState.value);
  localStorage.setItem("invoiceNo", invoiceNo.value);
  localStorage.setItem("invoiceType", invoiceType.value);
  window.location.href = "invoice-preview.html";
}
