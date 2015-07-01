//行序列号重置
function resetSeq(){
	var tableObj = document.getElementById("mainTable");
	for(var i = 1;i < tableObj.rows.length;i ++){
		tableObj.rows[i].cells[0].innerHTML = i;
	}
}

//模态传值
function editXm(num) {
	var tableObj = document.getElementById("mainTable");
	var obj = new Object();
	obj.name = "title";
	var rev = window.showModalDialog("modal.html",obj,'dialogWidth=600px;dialogHeight=600px,dialogLeft=200px,dialogTop=200px,center=yes,help=1,resizable=0,status=1,scroll=1,edge=sunken,unadorned=yes,dialogHide=0');
	if(rev){
		tableObj.rows[num].cells[1].innerHTML = "<input value='" + rev + "' style="border:0" mce_style="border:0" type='text'><img src="search.jpg" mce_src="search.jpg" onclick='editXm(" + num + ")'>";
	}
}