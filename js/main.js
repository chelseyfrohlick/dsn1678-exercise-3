// JavaScript Document
var salesRight = $('.sales_right');
var salesDetailsRight = $('.sales__details_right');

var ClickHandler = function () {
	
	var isActive = salesDetailsRight.attr('data-state');
	
	if(isActive == 'active'){
	salesDetailsRight.attr('data-state','inactive');	
	}else{
	salesDetailsRight.attr('data-state','active');
	}
	
};

salesRight.on('click', ClickHandler);


var salesLeft = $('.sales_left');
var salesDetailsLeft = $('.sales__details_left');

var ClickHandler = function () {
	
	var isActive = salesDetailsLeft.attr('data-state');
	
	if(isActive == 'active'){
	salesDetailsLeft.attr('data-state','inactive');	
	}else{
	salesDetailsLeft.attr('data-state','active');
	}
	
};

salesLeft.on('click', ClickHandler);