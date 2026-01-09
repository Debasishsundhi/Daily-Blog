// Future JavaScript features
// Example: Dark mode, comments, animations, etc.

console.log("Daily Blog Loaded Successfully");
function loadBlogs() {
  fetch("https://script.google.com/macros/s/AKfycbzyeI5PQJJ32LkPuOvjfENFOUUN35a3_zO5EH6m8z_ZYQIUa6SKUD3QHOPJZRM1mjxYnA/exec")
    .then(res => res.json())
    .then(data => {
      const box = document.querySelector(".container");
      if (!box) return;

      box.innerHTML = "";

      data.reverse().forEach(blog => {
        box.innerHTML += `
          <div class="post">
            <h2>${blog.title}</h2>
            <p class="date">${blog.date}</p>
            <p>${blog.content}</p>
          </div>
        `;
      });
    });
}

// page load pe call
loadBlogs();