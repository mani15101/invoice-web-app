const select = document.getElementById("branchSelect");

BRANCHES.forEach(b => {
  const opt = document.createElement("option");
  opt.value = b.id;
  opt.textContent = b.name;
  select.appendChild(opt);
});

function createInvoice() {
  localStorage.setItem("selectedBranch", select.value);
  window.location.href = "invoice.html";
}
