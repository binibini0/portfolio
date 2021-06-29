
var num=0;
			$("#hyo_page").slick({
					slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li
					infinite : true, 	//무한 반복 옵션
					slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
					//slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
					speed : 300,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
					arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
					dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
					appendDots : '.hyo_num', //내가 만든 dots 사용
					customPaging: function(slider, i) {

					console.log($(slider.$slides[i]).html());
						num++;
					 return '<button class="tab tab'+num+'"><img src=' + $(slider.$slides[i]).find('.hb_slick_dot').data('title') + '><div class="hb_dots_name"></div></button>';
					 // return '<button class="tab"><img src=' + $(slider.$slides[i]).find('.hb_slick_dot').data('title') + '><div class="hb_dots_name">' + $(slider.$slides[i]).find('.hb_slick_dot').data('name') + '</div></button>';

			 },

					autoplay : true,			// 자동 스크롤 사용 여부
					autoplaySpeed : 20000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
					//pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
					//vertical : false,		// 세로 방향 슬라이드 옵션
					prevArrow : "<button class='sac' type='button' class='slick-prev'>이전</button>",		// 이전 화살표 모양 설정
					nextArrow : "<button class='sac' type='button' class='slick-next'>다음</button>",		// 다음 화살표 모양 설정
					//dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
					draggable : true, 	//드래그 가능 여부




					// responsive: [ // 반응형 웹 구현 옵션
					// 	{
					// 		breakpoint: 960, //화면 사이즈 960px
					// 		settings: {
					// 			//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					// 			slidesToShow:3
					// 		}
					// 	},
					// 	{
					// 		breakpoint: 768, //화면 사이즈 768px
					// 		settings: {
					// 			//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					// 			slidesToShow:2
					// 		}
					// 	}
					// ]
			});


			//swiper
			var mySwiper = new Swiper('.swiper-container', {
				loop : true, //루프돌리기
			// 슬라이드를 버튼으로 움직인다!
			  navigation: {
			    nextEl: '.hb-swiper-button-next',	//내 custom nav
			    prevEl: '.hb-swiper-button-prev',
			  },

			// 현재 페이지를 나타내는 점이 생긴다! 클릭하면 이동
			  pagination: {
			    el: '.swiper-pagination',
			    type: 'bullets',
			  },

			// 현재 페이지를 나타내는 스크롤이 생긴다! 클릭하면 이동
			  scrollbar: {
			    el: '.swiper-scrollbar',
			    draggable: true,
			  },

			// 3초마다 자동으로 슬라이드가 넘어간다! 1초 = 1000
			  autoplay: {
			    delay: 3000,
			  },
			});



//사전인터뷰

		$("#interview dl dt").click(function(){
			$(this).toggleClass('on').siblings().removeClass("on");

		});
