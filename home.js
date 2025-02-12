const homeButton = document.querySelector(".ul-home");
const postButton = document.querySelector(".ul-post");
const body = document.querySelector("body");
const postBox = document.querySelector(".post-box");

window.onload = renderPosts();

function renderPosts() {
  let blog = JSON.parse(localStorage.getItem("blog"));

  if (blog.titles.length === 0) {
    let noPostsMessage = document.createElement("div");
    noPostsMessage.classList.add("no-posts-div");
    noPostsMessage.innerHTML = `
        <p class="no-posts-message">No Posts Here!</p>
    `;
    postBox.appendChild(noPostsMessage);
  } else {
    for (let i = 0; i < blog.titles.length; i++) {
      title = blog.titles[i];
      author = blog.authors[i];
      text = blog.texts[i];
      let newPost = document.createElement("div");
      newPost.classList.add("post");
      newPost.innerHTML = `
        <p class="post-title">${title}</p>
        <p class="post-author">${author}</p>
        <p class="post-text">${text}</p>
    `;
      postBox.appendChild(newPost);
    }
  }
}
