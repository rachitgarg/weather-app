(function(){
  $('a').on('click', function(){
      var content=[
  {
    title: '1st bolg',
    thumbnail: 'http://t0.gstatic.com/images?q=tbn:ANd9GcRkBHSoAQTaTViiwXzFJVR8r9d-AB28nIcqZRoYOLPVm5kZjAlH'
  },
  {
    title: '2nd blog',
    thumbnail: 'http://t0.gstatic.com/images?q=tbn:ANd9GcRkBHSoAQTaTViiwXzFJVR8r9d-AB28nIcqZRoYOLPVm5kZjAlH'
  },
   {
    title: '2nd blog',
    thumbnail: 'http://t0.gstatic.com/images?q=tbn:ANd9GcRkBHSoAQTaTViiwXzFJVR8r9d-AB28nIcqZRoYOLPVm5kZjAlH'
  }
  ];
  var template = $('#blog').html();
  $.each(content,function(index, obj){
    var temp=template.replace(/{{title}}/ig,obj.title).replace(/{{thumbnail}}/ig,obj.thumbnail);
    $(document.body).append(temp);
  });
  });
})();
