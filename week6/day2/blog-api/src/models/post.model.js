let posts = [];
let currentId = 1;

function createPost(title, content) {
  return {
    id: currentId++,
    title,
    content,
    timestamp: new Date()
  };
}

module.exports = {
  posts,
  createPost
};
