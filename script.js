var current_clicks=0;
var count_ans=0

function start(){
	document.getElementById('yes-btn').disabled = false;
	document.getElementById('no-btn').disabled = false;
	var arr=[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99];
	var i;
	var s=""
	for(i=0;i<arr.length;i++){
		//if((i+1)%10==0){

		//	s=s+"<br>";
			
			
		//}
		s=s+arr[i]+" ";
		

		

	}
	console.log(s);
	document.getElementById('inner-content').innerHTML=s;
	
}
var do_count=1;
function no(){
	current_clicks=current_clicks+1;
	do_count=0;
	next_display();


}

function yes(){
	current_clicks=current_clicks+1;
	next_display();
}

function next_display(){
	if(current_clicks==1){
		if(do_count!=0)
			count_ans=count_ans+1;
		var arr=[2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38,39, 42, 43, 46, 47, 50, 51, 54, 55, 58, 59, 62, 63, 66, 67, 70, 71, 74, 75, 78, 79, 82, 83, 86, 87, 90, 91, 94, 95, 98, 99];
		display(arr);
		console.log(count_ans);
		do_count=1;
	}
	
	if(current_clicks==2){
		if(do_count!=0)
			count_ans=count_ans+2;
		var arr=[4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38,39, 44, 45, 46, 47, 52, 53, 54, 55, 60, 61, 62, 63, 68, 69, 70, 71, 76, 77, 78, 79, 84, 85, 86, 87, 92, 93, 94, 95];
		display(arr);
		console.log(count_ans);
		do_count=1;	
	}
	if(current_clicks==3){
		if(do_count!=0)
			count_ans=count_ans+4;
		var arr=[8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63, 72, 73, 74, 75, 76, 77, 78, 79, 88, 89, 90, 91, 92, 93, 94, 95];
		display(arr);
		console.log(count_ans);
		do_count=1;
	}
	if(current_clicks==4){
		if(do_count!=0)
			count_ans=count_ans+8;
		var arr=[16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 48, 49,50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95];
		display(arr);
		console.log(count_ans);
		do_count=1;
	}
	if(current_clicks==5){
		if(do_count!=0)
			count_ans=count_ans+16;
		var arr=[32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 96, 97, 98, 99];
		display(arr);
		console.log(count_ans);
		do_count=1;
	}
		
	if(current_clicks==6){
		if(do_count!=0)
			count_ans=count_ans+32;
		var arr=[64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81,82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
		display(arr);
		console.log(count_ans);
		do_count=1;
	}
	if(current_clicks==7){
		if(do_count!=0)
			count_ans=count_ans+64;
		if(count_ans<=100 && count_ans>0){
			final_ans(count_ans);
			console.log(count_ans);
		}
		else{
			document.getElementById('yes-btn').disabled = true;
			document.getElementById('no-btn').disabled = true;
			document.getElementById('inner-content').innerHTML="<br>Wrong Guess!!<br><button style='color: #000;' class='btn middle' onclick='start()'>Restart</button>";			
			current_clicks=0;
			count_ans=0;
			do_count=1;
		}
	}




}

function final_ans(ans){
	document.getElementById('yes-btn').disabled = true;
	document.getElementById('no-btn').disabled = true;
	

	document.getElementById('inner-content').innerHTML="<br>Your Number is<br>"+count_ans+"<br><button style='color: #000;' class='btn middle' onclick='start()'>Restart</button>";
	current_clicks=0;
	count_ans=0;
	do_count=1;


}

function display(arr) {
	var i;
		var s=""
		for(i=0;i<arr.length;i++){
			//if((i+1)%10==0){

			//	s=s+"<br>";
				
			//	
			//}
			s=s+arr[i]+" ";
			

			

		}
		console.log(s);
		document.getElementById('inner-content').innerHTML=s;
}
