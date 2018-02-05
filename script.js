var webTitle = document.querySelector('.website-title').value;
var webURL = document.querySelector('.website-url').value;
var enterButton = document.querySelector('.enter-button');
var readButton = document.querySelector('.read-button');
var deleteButton = document.querySelector('.deletebutton');



// webTitle.addEventListener('keyup', );
// webURL.addEventListener('keyup', urlValidation);
enterButton.addEventListener('click', ConstructBookmark);
readButton.addEventListener('click', markRead);
deleteButton.addEventListener('click', deleteBookmark);


function ConstructBookmark() {
  $('.bookmarks-article').clone().removeAttr('class').appendTo('aside');
  var newTitle = $('.website-title').val();
  $('h2').text(newTitle);
  var newURL = $('.website-url').val();
  $('p').text(newURL);
};

function markRead() {
    readButton.classList.add('read-read');
    console.log('works');
};

function deleteBookmark() {
  $('.bookmarks-article').remove();
};
