// var webTitle = $('.website-title').val();
// var webURL = $('.website-url').val();
var enterButton = $('.enter-button');
var readButton = $('.read-button');
var rightSide = $('.bookmarks');
var deleteButton = $('.delete-button');



// webTitle.addEventListener('keyup', );
// webURL.addEventListener('keyup', urlValidation);
enterButton.on('click', ConstructBookmark);
$('aside').on('click', '.read-button', markRead);
$('aside').on('click', '.delete-button', deleteBookmark);


function ConstructBookmark() {
  var newTitle = $('.website-title').val();
  var newURL = $('.website-url').val();
  if (newTitle === "") {
    alert('Please enter a title')
  } else if (newURL === "") {
    alert('Please enter a URL')
  } else {
  rightSide.append(`<article class="bookmarks-article">
    <h2 class="website-output">${newTitle}</h2>
    <p class = "url-output" class="url-read"><a href="">${newURL}</a></p>
      <div>
      <button class="read-button">Read</button>
      <button class="delete-button">Delete</button>
    </div>
  </article>`)
  focusCursor();
  $('.website-title').val() = '';
  newURL.val() = ("");
};
};

function focusCursor() {
  $('.website-title').focus();
}

function markRead() {
    $(this).closest('article').toggle('read-read');
    console.log('works');
};

function deleteBookmark() {
  // $(this).closest('article').remove();
  $(this).closest('article').toggle('read-read');
};
