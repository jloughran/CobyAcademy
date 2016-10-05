$('document').ready(function () {
  const contentsDesktop = $('#contents-desktop');
  $('h1').each(function (index, title) {
    if (index !== 0) {
      const titleText = $(this).text();
      const linkText = $(this).attr('id');
      contentsDesktop.append('<li><a href="#' + linkText + '">' + titleText + '</a></li>');
    }
  });
});
