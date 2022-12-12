 $(document).ready(function(){
         var allPanels = $('.question p').hide(); 
         var allMinus = $('.question .fa-minus').hide();
         var firstQues = $('.fqa .container .question').first();
         console.log(firstQues);
         firstQues.find('.fa-plus').hide();
         firstQues.find('.fa-minus').show();
         firstQues.find('p').slideToggle();
        $('.question .fa-plus').click(function() {
            allPanels.slideUp();
            allPanels.parent().find('.fa-minus').hide();
            allPanels.parent().find('.fa-plus').show();
            $(this).parent().parent().next().slideToggle();
            $(this).parent().find('.fa-minus').show();
            $(this).hide();
        });
    });