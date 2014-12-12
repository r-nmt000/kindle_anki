javascript:(function(){
  var text  = '';
  var title = '';
  $('.yourHighlight').each(function(){
    var cn = $(this).attr('class');
    var line = '';
    title = '"'+$(this).prevAll('.yourHighlightsHeader:first').find('.title').text().replace(/\"/g,'\"\"')+'";';
    line += '"'+$(this).find('.highlight').text().replace(/\"/g,'\"\"')+'";';
    line += title;
    text += line.replace(/,$/,'')+'\r\n';
  });
  if(text){
    $('#csv').remove();$('body').prepend('<textarea id="csv"style="width:100%;height:10em;"></textarea>');
    $('#csv').val(text);
  }
})()
