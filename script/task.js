/**
 * aqiDate,存储用户输入的空气指数数据
 * 示例格式：
 * aqiData={
 * 	"北京"：90
 * 	"上海"：40
 * }
 */


 	var aqiData=new Array();
 	var aqicity=document.getElementById("aqicity").value;
 	var aqivalue=document.getElementById("aqivalue").value;
 	
 	
 	

/**
 * 从用户输入中获取数据，向AqiData 中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */

function addAqiData(){
		//trim() 去首尾空格
		
		
		var city=aqicity.trim();
		var valuee=aqivalue.trim();
		
		if(city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
			alert("城市名称，请输入中英文");
			return;
		};
		if(valuee.match(/^\d+$/)){
			alert("空气质量指数，请输入整数");
			return;
		}
		


}

/**
 * 渲染aqi-table表格
 */

function renderAqiList(){
	var table=document.getElementById("aqi-table");
	var tr=document.createElement("tr");
	aqiData[0]=document.createTextNode("城市");
	aqiData[1]=document.createTextNode("空气质量");
	
	for(var i=0;i<aqiData.length;i++){
		var td=document.createElement("td");
		td.appendChild(aqiData[i]);
		tr.appendChild(td);
	}
	
	var newtd=tr.insertCell();
	newtd.innerHTML='<input type="button"  value="删除"/>';

	table.appendChild(tr);
}

/**
 * 点击add-btn时处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */

function addBtnHandle(){
	addAqiData();
	renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取那个城市数据被删，删除数据，更新表格显示
*/
function delBtnHandle(){
	//do sth

	renderAqiList();
}

function init(){
	//在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	var addbtn=document.getElementById("add-btn");
	addbtn.onclick=addBtnHandle;
	
	//给aqi-table 中所有删除按钮绑定事件，触发delBtnHandle函数
	
}

init();






