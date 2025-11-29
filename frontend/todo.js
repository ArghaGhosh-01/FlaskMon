document.getElementById("todoForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const itemName = document.getElementById("itemName").value;
  const itemDescription = document.getElementById("itemDescription").value;

  const res = await fetch("http://localhost:3000/submittodoitem", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ itemName, itemDescription })
  });

  const data = await res.json();
  document.getElementById("msg").innerText = data.success
    ? "To-Do added successfully!"
    : "Error adding To-Do.";
});
