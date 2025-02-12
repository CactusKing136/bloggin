const homeButton = document.querySelector(".ul-home");
const postButton = document.querySelector(".ul-post");
const body = document.querySelector("body");
const clearPostsButton = document.querySelector(".clear-button");

let blog = {
  titles: [],
  authors: [],
  texts: [],
};

homeButton.addEventListener("click", () => {});

postButton.addEventListener("click", () => {
  createPost();
});

function createPost() {
  let title = postTitleInput.value;
  let author = postAuthorInput.value;
  let text = postTextInput.value;

  if (title.length * author.length * text.length == 0) {
    alert("Error: Please fill out all fields.");
    postTitleInput.value = "";
    postAuthorInput.value = "";
    postTextInput.value = "";
    return;
  }

  let blog = JSON.parse(localStorage.getItem("blog"));

  blog.titles.push(title);
  blog.authors.push(author);
  blog.texts.push(text);

  localStorage.setItem("blog", JSON.stringify(blog));

  postTitleInput.value = "";
  postAuthorInput.value = "";
  postTextInput.value = "";
}

clearPostsButton.addEventListener("click", () => {
  localStorage.clear();
  localStorage.setItem("blog", JSON.stringify(blog));
});
