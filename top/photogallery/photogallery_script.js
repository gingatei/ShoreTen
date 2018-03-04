/* フォトギャラリー */
$(function(){
	//メインスライド用
	  $('.bxslider01').bxSlider({
	  pagerCustom: '#bx-pager',  //ページャーをサムネイルにする
	  controls:false//前後の矢印を消す
	  });
	});

	//サムネイルのカールセル用
	$(function(){
	  $('.bxslider02').bxSlider({
	  pager:false,
	  minSlides: 6,  //１スライド内のサムネイルの数
	  maxSlides: 6,  //１スライド内のサムネイルの最大数
	  slideWidth: 100,  //サムネイルの横幅（単位はpx）
	  slideMargin: 10,  //サムネイル間の余白（単位はpx）
	  nextSelector: '#NextIcon',  //"次へ”矢印をカスタマイズするための記述
	  prevSelector: '#PrevIcon'//"前へ”矢印をカスタマイズするための記述
	      });
	});