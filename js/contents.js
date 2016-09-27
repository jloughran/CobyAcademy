$('document').ready(function () {
  const contentsDesktop = $('#contents-desktop');
  const contentsMobile = $('#contents-mobile');
  $('h1').each(function (index, title) {
    if (index !== 0) {
      const titleText = $(this).text();
      const linkText = titleText.replace(' ', '-').toLowerCase();
      contentsDesktop.append('<li><a href="#' + linkText + '">' + titleText + '</a></li>');
      contentsMobile.append('<li><a href="#' + linkText + '">' + titleText + '</a></li>');
    }
  });

  // now do the scroll magic pin for the contents

});
