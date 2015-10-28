/**
 * Created by Administrator on 2015/9/11.
 */
$(function(){
   showTime();
});
//刷新页面
$(".reloadAll").click(function(){
   location.reload();
});
//显示日期星期
function showTime(){
   var show_day=new Array('星期一','星期二','星期三','星期四','星期五','星期六','星期日');
   var time=new Date();
   var year=time.getFullYear();
   var month=time.getMonth()+1;
   var date=time.getDate();
   var day=time.getDay();
   var now_time='当前时间：'+year+'年'+month+'月'+date+'日'+' '+show_day[day-1];
   $("#show_time").html(now_time);
}
//首页发布公告的点击按钮
function addAnnouncement(){
   var a={
      id:'fbgg',
      title:'发布公告',
      lock:true,
      resize: false,
      max:false,
      min:false,
      padding: 0
   }
   var api = $.dialog(a);
   /* jQuery ajax */
   $.ajax({
      url:'index_fbgg.html',
      success:function(data){
         api.content(data);
         $(api.DOM.content[0]).initUI();
      },
      cache:false
   });
}
/*头部修改密码方法*/
function changePassword(){
   var a={
      id:'xgmm',
      title:'修改密码',
      lock:true,
      resize: false,
      max:false,
      min:false,
      padding: 0
   };
   var api = $.dialog(a);
   /* jQuery ajax */
   $.ajax({
      url:'index_xgmm.html',
      success:function(data){
         api.content(data);
         $(api.DOM.content[0]).initUI();
      },
      cache:false
   });
}
/*公共的加入当前时间方法，在页面必须存在class='nowDate'的input输入框
 当传入内容为空时：调用picNowkDate()时显示的结果格式为:2000年10月10日
* 当传入内容时按照格式化的内容如：调用picNowkDate('/')时显示的结果格式为:2000-10-10
* */
function picNowkDate(){
  var AnowDate=$('.nowDate');
  if(AnowDate.length>0){
     var GetnowDate=new Date();
     var GetFY=GetnowDate.getFullYear();
     var GetMon=GetnowDate.getMonth()+1;
     var GetDate=GetnowDate.getDate();
     var  StrNowDate=null;
     StrNowDate= GetFY+'-'+GetMon+'-'+GetDate;

     for(var i=0;i<AnowDate.length;i++){
        AnowDate[i].value=StrNowDate;
     }
  }
}