const branchId = localStorage.getItem("selectedBranch");
const branch = BRANCHES.find(b => b.id === branchId);

const items = JSON.parse(localStorage.getItem("invoiceItems"));
let total = 0;

let html = `
<h2>${branch.name}</h2>
<p>${branch.address}</p>
<p>GSTIN: ${branch.gstin}</p>

<hr>

<p><b>${localStorage.getItem("invoiceType")}</b></p>
<p>Invoice No: ${localStorage.getItem("invoiceNo")}</p>
<p>Customer: ${localStorage.getItem("custName")}</p>

<table>
<tr><th>Item</th><th>Qty</th><th>Rate</th><th>Total</th></tr>
`;

items.forEach(i => {
  total += i.total;
  html += `<tr>
    <td>${i.name}</td>
    <td>${i.q}</td>
    <td>${i.r}</td>
    <td>${i.total}</td>
  </tr>`;
});

const gst = total * (branch.gstPercent / 100);

html += `
</table>

<p>Subtotal: ${total}</p>
<p>GST (${branch.gstPercent}%): ${gst}</p>
<h3>Grand Total: ${total + gst}</h3>

<p>${branch.bank}</p>
`;

document.getElementById("invoice").innerHTML = html;

function back() {
  window.location.href = "invoice.html";
}
