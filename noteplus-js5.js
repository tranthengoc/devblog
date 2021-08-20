$(document).on('click','.loadmore-btn', function(e){
   e.preventDefault();
   let nextLink = $(this).attr('href');
   let loadmoreBtn = $('#blog-pager .loadmore-btn');
   if(nextLink){
      $.ajax({
         url: nextLink,
         beforeSend: function(){
           loadmoreBtn.addClass('loading').text('Loading...');
         },
         complete: function(){
           loadmoreBtn.removeClass('loading');
         },
         success: function(html){
           let rslt = $(html).find('#Blog1 .blog-posts').html();
           let nextPage = $(html).find('#Blog1 .loadmore-btn').attr('href');
           $('.blog-posts').append(rslt);
           loadmoreBtn.show();
           if(nextPage){
             loadmoreBtn.attr('href', nextPage).text('Load More');
           }else{
             loadmoreBtn.addClass('no-more').text('All Posts Loaded!').removeAttr('href');
           }
         }
      });
   }
});
