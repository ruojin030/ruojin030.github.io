$(".timeline-wrapper .timeline-content-item > span").on("mouseenter mouseleave", function (e) {
  $(".timeline-wrapper .timeline-content-item.active").removeClass("active");
  $(this).parent().addClass("active");
});

$(".timeline-content-item-reveal").on("click", function (e) {
 $(".image-display").empty();
//$(".image-display").append($('img', this).css("width", "200px"));
$('img', this).clone().css("width", "200px").appendTo( ".image-display" );

 //console.log($('img', this)[0] );
 //$(".image-display").append('<img src ="src/example.jpg" style="width:200px;" ></img>');
});