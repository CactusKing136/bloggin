const homeButton = document.querySelector(".ul-home");
const postButton = document.querySelector(".post-button");
const body = document.querySelector("body");
const postTitleInput = document.querySelector(".create-post-title-input");
const postAuthorInput = document.querySelector(".create-post-author-input");
const postTextInput = document.querySelector(".create-post-textarea");
const createPostDiv = document.querySelector(".create-post");

postButton.addEventListener("click", () => {
  createPost();
});

body.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    createPost();
  }
});

function createPost() {
  let title = postTitleInput.value;
  let author = postAuthorInput.value;
  let text = postTextInput.value;

  if (title.length * author.length * text.length == 0) {
    alert("Error: Please fill out all fields.");
  } else {
    let blog = JSON.parse(localStorage.getItem("blog"));

    blog.titles.push(title);
    blog.authors.push(author);
    blog.texts.push(text);

    localStorage.setItem("blog", JSON.stringify(blog));

    postTitleInput.value = "";
    postAuthorInput.value = "";
    postTextInput.value = "";
  }
}
