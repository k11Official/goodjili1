var tim=1;
setInterval("tim++",100);
var autourl=new Array();
for(i=0;i<=2;i++){
autourl[i]=$('.ulList li').eq(i).find('a').attr("href");
}
function auto(url){
	var str=tim*10;
	if(url==autourl[0]){
		$('#lineMs0').html(str+'ms')
	}
	if(url==autourl[1]){
		$('#lineMs1').html(str+'ms')
	}
	if(url==autourl[2]){
		$('#lineMs2').html(str+'ms')
	}
}
function run(){
	for(var i=0;i<autourl.length;i++){
		document.write("<img src="+autourl[i]+"/"+Math.random()+" width=1 height=1 onerror=auto('"+autourl[i]+"') style='display:none'>");
	}
}
run()