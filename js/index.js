// JavaScript Document
window.onload = function(){
	var oCourseId = document.getElementById('courseId');
	var aLi = oCourseId.getElementsByTagName('li');
	var aDiv = document.getElementsByClassName('courseR');
	var len= aLi.length;
	
	for(var i=0;i<len;i++){
		aLi[i].index = i;
		aLi[i].onmouseover = function()
		{
			for(var i=0;i<len;i++){
				aLi[i].className = '';
				aDiv[i].style.display='none';
			};
			this.className = 'active';
			aDiv[this.index].style.display = 'block';
		};
	};
};
$(function(){
	$('.headerright li').hover(function(){
		
		$('.headerright li').removeClass('active');
		$(this).addClass('active');	
	},function(){
		$(this).removeClass('active');	
	});
	/*头部*/
	$('.teamMain li').each(function() {
        $(this).hover(
			function(){
				$(this).children('p').stop().animate({top:0},308);
			},
			function(){
				$(this).children('p').stop().animate({top:308},0);
		});
	});
	/*教师团队*/
});
/*	$('.teamMain ul li').hover(function(){
	
		//$(this).addClass('activeDiv');
		$(this).find('div').stop(true,true).animate({'top':'0px'});
	
	},function(){
		//$(this).removeClass('activeDiv');
		$(this).find('div').stop(true,true).animate({'top':'0px'});
	});	
	
});*/