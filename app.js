$(function(){
    let content=1;
    let show=()=>{
        if (content==2){
        $('.image img').attr('src','img/image-john.jpg');
        $('.second').fadeIn();
        } else {
            $('.image img').attr('src','img/image-tanya.jpg');
            $('.first').fadeIn();
        }
    }
    $('#next').click(()=>{
        if (content==1){
            content=2;
        } else {
            content=1;
        }
        $('.image img').fadeOut(300);
        $('.text').fadeOut(500);
        setTimeout(show,300);
        $('.image img').fadeIn(300);
    });
    $('#prev').click(()=>{
        if (content==1){
            content=2;
        } else {
            content=1;
        }
        $('.image img').fadeOut(300);
        $('.text').fadeOut(500);
        setTimeout(show,300);
        $('.image img').fadeIn(300);
    });

})