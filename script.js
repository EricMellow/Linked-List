var webTitle = document.querySelector('.website-title').value;
var webURL = document.querySelector('.website-url').value;
var enterButton = document.querySelector('.enter-button');
var readButton = document.querySelector('.read-button');
var deleteButton = document.querySelector('.deletebutton');



// webTitle.addEventListener('keyup', );
// webURL.addEventListener('keyup', urlValidation);
enterButton.addEventListener('click', ConstructBookmark);
// readButton.addEventListener('click', markRead);
// deleteButton.addEventListener('click', deleteBookmark);

$('.read-button').on('click', function() {
  $('.read-button').toggleClass('read-read', addOrRemove);
});


function ConstructBookmark() {
  $('.puppies').clone().removeAttr('class').appendTo('aside');
  var newTitle = $('.website-title').val()
  $('h2').text(newTitle);
  var newURL = $('.website-url').val()
  $('p').text(newURL);

  // var newH2 = document.querySelector('.website-output');
  // newH2.text('.website-output') = webTitle;
};

// function ConstructBookmark() {
//   document.createElement('puppies');
// }




// var newBookmark = document.createElement('article');
//   var newTitle = document.createTextNode(webTitle);
//   var newURL = document.createTextNode(webURL);

//   newBookmark.appendChild(newTitle, newURL);

//   var newArticle = document.querySelector('article');
//   document.body.insertBefore(newArticle, newBookmark);