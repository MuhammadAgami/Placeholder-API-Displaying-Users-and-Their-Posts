function getUser() {
  var userRequest = new XMLHttpRequest();
  userRequest.open("GET", "https://jsonplaceholder.typicode.com/users");
  userRequest.responseType = "json";
  userRequest.send();

  userRequest.onload = function () {
    if (userRequest.status === 200) {
      const users = userRequest.response;

      for (const user of users) {
        document.getElementById("Users").innerHTML += `
        <div onclick="clickUser(${user.id})" class="shadow p-3 mb-2 bg-body-tertiary rounded" style="cursor:pointer">
            <h2>${user.name}</h2>
            <p>${user.email}</p>
        </div>
      `;
      }
    } else {
      console.error("Error:", userRequest.statusText);
    }
  };
}

function getPosts(number) {
  var postRequest = new XMLHttpRequest();
  postRequest.open(
    "GET",
    `https://jsonplaceholder.typicode.com/posts?userId=${number}`
  );
  postRequest.responseType = "json";
  postRequest.send();

  postRequest.onload = function () {
    if (postRequest.status === 200) {
      const posts = postRequest.response;

      document.getElementById("Posts").innerHTML = "";

      for (const post of posts) {
        document.getElementById("Posts").innerHTML += `
          <div class="shadow p-3 mb-2 bg-body-tertiary rounded">
              ${post.body}
          </div>
      `;
      }
    } else {
      console.error("Error:", postRequest.statusText);
    }
  };
}

function clickUser(id) {
  getPosts(id);
}

getUser();
