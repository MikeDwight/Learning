document
  .getElementById("shortenBtn")
  .addEventListener("click", async function () {
    const originalUrl = document.getElementById("originalUrl").value;

    if (originalUrl.trim() === "") {
      alert("Please enter a valid URL");
      return;
    }

    const response = await fetch(
      "https://url-shortner-kshwntnjq-mikedwights-projects.vercel.app/shorten",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalUrl }),
      }
    );

    const data = await response.json();

    const resultDiv = document.getElementById("result");

    if (response.ok) {
      resultDiv.innerHTML = `
            <p>URL raccourcie :</p>
            <a href="https://url-shortner-kshwntnjq-mikedwights-projects.vercel.app/${data.shortUrl}" target="_blank">
                https://url-shortner-kshwntnjq-mikedwights-projects.vercel.app/${data.shortUrl}
            </a>
        `;
    } else {
      resultDiv.innerHTML = `<p style="color:red;">Erreur : ${data.error}</p>`;
    }
  });
