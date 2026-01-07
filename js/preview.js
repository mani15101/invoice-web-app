const branch = BRANCHES.find(b => b.id === localStorage.getItem("selectedBranch"));
const items = JSON.parse(localStorage.getItem("invoiceItems"));

companyName.innerText = branch.name;
companyName2.innerText = branch.name;
companyAddress.innerText = branch.address;
companyGstin.innerText = branch.gstin;
companyState.innerText = branch.state;
bankDetails.innerText = branch.bank;

invoiceNo.innerText = localStorage.getItem("invoiceNo");
invoiceDate.innerText = new Date().toLocaleDateString("en-GB");

custName.innerText = localStorage.getItem("custName");
custName2.innerText = localStorage.getItem("custName");
custState.innerText = localStorage.getItem("custState");
custState2.innerText = localStorage.getItem("custState");

let subtotal = 0;

items.forEach((i, index) => {
  subtotal += i.total;
  itemRows.innerHTML += `
    <tr>
      <td>${index + 1}</td>
      <td>${i.name}</td>
      <td>9403</td>
      <td>${i.q}</td>
      <td>${i.r.toFixed(2)}</td>
      <td>${i.total.toFixed(2)}</td>
    </tr>`;
});

const cgstVal = subtotal * 0.09;
const sgstVal = subtotal * 0.09;
const grand = subtotal + cgstVal + sgstVal;

cgst.innerText = cgstVal.toFixed(2);
sgst.innerText = sgstVal.toFixed(2);
grandTotal.innerText = "₹ " + grand.toFixed(2);

amountWords.innerText = numberToWords(Math.round(grand)) + " Only";

function goBack() {
  window.location.href = "invoice.html";
}

function numberToWords(num) {
  return "INR " + num.toLocaleString("en-IN");
}
