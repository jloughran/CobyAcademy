$('document').ready(function () {
  const contents = $('#contents');
  $('h1').each(function (index, title) {
    if (index !== 0) {
      const titleText = $(this).text();
      const linkText = titleText.replace(' ', '-').toLowerCase();
      contents.append('<li><a href="#' + linkText + '">' + titleText + '</a></li>');
    }
  });

  // now do the scroll magic pin for the contents

});
