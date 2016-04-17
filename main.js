function moveToTab(i){
	var height = $('.t').height();
	$('.t').css('top', - height * i + "px");
}
function addDownload(title,ic,link){
	var s = '<li class="dl">' +
			'<p><img src="images/'+ic+'"> '+title+'</p>'+
			'<div class="dl-container">'+
			'<input type="text" value="'+link+'" readonly>'+
			'<a href="'+link+'" target="_blank"><span class="entypo-download fancy fancy-green"> Download</span></a>'+
			'</div>'+
			'</li>';
	$('.downloads').append(s);
} 

/*===================== ONLOAD EVENT ========================================*/

$(function(){
	/* SET UP ALL LINK HERE */
	initDownloads();
	/* auto select textbox */
	$('.dl-container input').click(function(){this.select();});
	
	/* set event switch tabs */
	$('.btn').click(function(){
		moveToTab($('.btn').index(this));
		$('.current').removeClass('current');
		$(this).addClass('current');
	});
	
	/* set event for button play */
	
	$('#btnPlay1').click(function(){
		$('.music').html('<iframe width="100%" height="100%" src="http://mp3.zing.vn/embed/album/IWDB7C0D?autostart=true" frameborder="0" allowfullscreen="true"></iframe>');
	});
	$('#btnPlay2').click(function(){
		$('.music').html('<iframe width="100%" height="100%" src="http://mp3.zing.vn/embed/album/IWCF7I90?autostart=true" frameborder="0" allowfullscreen="true"></iframe>');
	});
	
	// tooltips for applications links
	$('.apptip').tooltipster({
	   animation: 'grow',
	   delay: 0,
	   theme: 'tooltipster-punk',
	   touchDevices: false,
	   position: 'bottom',
	   trigger: 'hover'
	});
	
	// tooltips for social links
	$('.sociali').tooltipster({
	   animation: 'grow',
	   delay: 400,
	   theme: 'tooltipster-punk',
	   touchDevices: false,
	   position: 'bottom',
	   trigger: 'hover'
	});
	// tooltips for select tab buttons
	$('.btn').tooltipster({
	   animation: 'fade',
	   delay: 100,
	   theme: 'tooltipster-blue',
	   touchDevices: false,
	   position: 'left',
	   trigger: 'hover'
	});
	
	// tooltips for link container
	$('.dl-container input').tooltipster({
	   animation: 'fall',
	   delay: 0,
	   theme: 'tooltipster-blue',
	   timer: 1000,
	   touchDevices: false,
	   position: 'left',
	   trigger: 'click',
	   content: 'Link copied into <b style="color: #64EF21">Clipboard</b>',
	   contentAsHTML: true
	});
	
	// init custom scrollbar
	$('.downloads').customScrollbar();
	
	// zeroclipboard
	ZeroClipboard.config( { swfPath: "http://cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.1.5/ZeroClipboard.swf" } );
	var zc = new ZeroClipboard($(".dl input"));
	$(".dl input").mouseenter(function(){ZeroClipboard.setData('text/plain',$(this).val())});
	
	// confirm on exit
	//window.onbeforeunload = function(){return "Thoát khỏi trang?"}
	
	// popup layers
	$('.open-popup-link').magnificPopup({
	  type:'inline',
	  midClick: true
	});
	
});