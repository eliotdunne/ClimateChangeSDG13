$('#go').click(function() {
  location.href = $('#menu').find('option:selected').data('url');  
});