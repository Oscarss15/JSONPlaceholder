async function mostrarDatos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    const tableBody = document.querySelector("table.table tbody");

    data.forEach((data) => {
      const row = document.createElement("tr");

      const id = document.createElement("th");
      id.scope = "row";
      id.textContent = data.id;
      row.appendChild(id);

      const name = document.createElement("td");
      name.textContent = data.name;
      row.appendChild(name);

      const city = document.createElement("td");
      city.textContent = data.address.city;
      row.appendChild(city);

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

async function recogerDatosById(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return null;
  }
}

document
  .getElementById("selectid")
  .addEventListener("change", async function () {
    const userId = this.value;
    if (userId) {
      const user = await recogerDatosById(userId);
      if (user) {
        document.getElementById("name").textContent = user.name;
        document.getElementById("phone").textContent = user.phone;
      } else {
        document.getElementById("name").textContent = "No disponible";
        document.getElementById("phone").textContent = "No disponible";
      }
    } else {
      document.getElementById("name").textContent = "";
      document.getElementById("phone").textContent = "";
    }
  });

mostrarDatos();
fetchUsers();
recogerDatosById();
