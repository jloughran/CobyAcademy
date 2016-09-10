$('document').ready(function () {
  $('#fullpage').fullpage({
    sectionsColor: ['#70a268', '#628f5b', '#70a268', '#628f5b'],
    anchors: ['', 'bigger-feet', 'smaller-fingers', 'consistent-toe-size'],
    scrollBar: true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Health Benifits of Peanuts', 'Bigger Feet', 'Smaller (More Nimble) Fingers', 'Consistent Toe Size'],
    css3: true,
    responsiveWidth: 1100,
    menu: '#menu',
  });
});
