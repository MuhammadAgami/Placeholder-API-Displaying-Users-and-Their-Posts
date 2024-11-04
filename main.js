function getUser() {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      const users = response.data;
      document.getElementById("Users").innerHTML = "";
      for (const user of users) {
        document.getElementById("Users").innerHTML += `
        <div id="user-${user.id}" onclick="clickUser(${user.id})" class="shadow p-3 mb-2 bg-body-tertiary rounded" style="cursor:pointer">
            <h2>${user.name}</h2>
            <p>${user.email}</p>
        </div>
      `;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById(
        "Users"
      ).innerHTML = `<p>Error loading users. Please try again later.</p>`;
    });
}

function getPosts(number) {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
    .then((response) => {
      const posts = response.data;
      document.getElementById("Posts").innerHTML = "";

      for (const post of posts) {
        document.getElementById("Posts").innerHTML += `
          <div class="shadow p-3 mb-2 bg-body-tertiary rounded">
              ${post.body}
          </div>
      `;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById(
        "Posts"
      ).innerHTML = `<p>Error loading posts. Please try again later.</p>`;
    });
}

function clickUser(id) {
  document.querySelectorAll("#Users .active").forEach((element) => {
    element.classList.remove("active");
  });

  document.getElementById(`user-${id}`).classList.add("active");
  getPosts(id);
}

getUser();
