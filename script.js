   function addComment() {
      var nameInput = document.getElementById('name');
      var commentInput = document.getElementById('comment');
      var commentList = document.getElementById('comment-list');
  
      var name = nameInput.value;
      var comment = commentInput.value;
  
      if (name && comment) {
          var listItem = document.createElement('li');
          listItem.innerHTML = '<strong>' + name + ':</strong> ' + comment;
          commentList.appendChild(listItem);
  
          // Reset the form
          nameInput.value = '';
          commentInput.value = '';
      } else {
          alert('Please enter both name and comment.');
      }
  }