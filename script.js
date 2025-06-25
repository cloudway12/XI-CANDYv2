window.onload = function() {
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.forEach(text => addCommentToDisplay(text));
};

function postComment() {
  const input = document.getElementById('commentInput');
  const commentText = input.value.trim();

  if (commentText) {
    addCommentToDisplay(commentText);

    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(commentText);
    localStorage.setItem('comments', JSON.stringify(comments));

    input.value = '';
  } else {
    alert('Komentar tidak boleh kosong!');
  }
}

function addCommentToDisplay(text) {
  const display = document.getElementById('commentsDisplay');
  const comment = document.createElement('div');
  comment.className = 'comment';
  comment.textContent = text;
  display.appendChild(comment);
}

console.log("JS berhasil dimuat")