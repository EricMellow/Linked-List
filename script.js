var webURL = $('.website-url');
var enterButton = $('.enter-button');
var readButton = $('.read-button');
var rightSide = $('.bookmarks');
var deleteButton = $('.delete-button');

webURL.on('keyup', disableButton);
enterButton.on('click', ConstructBookmark);
$('aside').on('click', '.read-button', markRead);
$('aside').on('click', '.delete-button', deleteBookmark);

function disableButton() {
  var newTitle = $('.website-title').val();
  var newURL = $('.website-url').val();
  if (newTitle.length > 0 && newURL.length > 0) {
    enterButton.prop('disabled', false)
  } else {
    enterButton.prop('disabled', true)
  };
};

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
      <p class = "url-output" class="url-read"><a class="anchor" href="https://${newURL}">${newURL}</a></p>
      <div>
      <button class="read-button read-hov">Read</button>
      <button class="delete-button">Delete</button>
      </div>
      </article>`)
    focusCursor();
    $('.website-title').val('');
    $('.website-url').val('');
    disableButton();
  };
};

function focusCursor() {
  $('.website-title').focus();
};

function markRead() {
  $(this).closest('button').toggleClass('mark-read');
  $(this).closest('article').toggleClass('bookmarks-read');
  $(this).closest('article').find('a').toggleClass('url-read');
  $(this).closest('article').find('.delete-button').toggleClass('delete-read');
  $(this).closest('article').find('a').toggleClass('anchor');
  $(this).closest('button').find('.read-button').toggleClass('read-hov');
};

function deleteBookmark() {
  $(this).closest('article').toggle('delete-button');
};
