
$(function() {
  $('.drawer-item>a').click(function() {
    $('#drawer-check').removeAttr('checked').prop('checked', false).change();
  });
});


$(window).on("load", function() {
  $('.works-item').addClass('load')
});