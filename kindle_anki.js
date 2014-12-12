javascript:(function(){
  var text  = '';
  var title = '';
  $('.title, .highlight').each(function(){
    var cn = $(this).attr('class');
    var line = '';
    if(cn =='title'){
      title = '"'+$(this).text().replace(/\"/g,'\"\"')+'";';
    }else if(cn == 'highlight'){
      line += '"'+$(this).text().replace(/\"/g,'\"\"')+'";';
      line += title;
    }
    text += line.replace(/,$/,'')+'\r\n';
  });
  if(text){
    $('#csv').remove();$('body').prepend('<textarea id="csv"style="width:100%;height:10em;"></textarea>');
    $('#csv').val(text);
  }
})()
