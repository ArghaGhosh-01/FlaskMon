document.getElementById("myForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  try {
    const response = await fetch("http://localhost:3000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    });

    const result = await response.json();

    if (result.success) {
      window.location.href = "success.html";
    } else {
      document.getElementById("errorMsg").innerText = result.message;
    }

  } catch (err) {
    document.getElementById("errorMsg").innerText = err.message;
  }
});
