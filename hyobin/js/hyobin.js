
//owl
			jQuery("#hyo_page").owlCarousel({
				loop:true,
				margin:0,
				nav:true,
				items:1,
				autoplay:true,
				responsive:{ //반응형에 따른 스타일 옵션
					0:{
						items:1, // 모바일
					},
					600:{
						items:1, // 브라우저 600px 이하
						nav:false,
					},
					1024:{
						items:1, // 브라우저 1024px 이하
					}
				}
			});

			jQuery(".hyo_Banner").owlCarousel({
				loop:true,
				margin:0,
				nav:true,
				navText: ["이전","다음"],
			 // navText: ["<img src='/hyobin/img/hyobin1.jpeg'>","<img src='/hyobin/img/hyobin2.jpeg'>"],
       	items:1,
        autoplay:true,
				responsive:{ //반응형에 따른 스타일 옵션
					0:{
						items:1, // 모바일
					},
					600:{
						items:1, // 브라우저 600px 이하
            nav:false,
					},
					1024:{
						items:1, // 브라우저 1024px 이하
					}
				}
			});






//
// $(window).scroll(function(){
//   //스크롤이 되었을때
//     if($(window).scrollTop() > 0){  //스크롤 했을 때
//       $('body').addClass('scroll');
//       // $(".navbar-brand img").attr('src',srclogo); //src로 접근해서 oriLogo를 넣어라
//     }else{
//       $('body').removeClass('scroll');
//       // $(".navbar-brand img").attr('src',oriLogo);
//     }
// });
//
// //막대그래프 애니메이션
// $(".bar div").each(function(){
//   var _w =  $(this).data("num");
//      $("p",this).width(0);
//      $("p",this).animate({ "width" : _w}, 600, function(){
//        //애니메이션 완료 후 실행되는 함수
//        $(this).html("<strong>"+_w+"</strong>");
//
//      });
// });
//
//
//
// //탑버튼
//   $("#topBtn").click(function(){
//
//     $("html, body").animate({
//       scrollTop: 0
//     }, 500);
//
//   });
