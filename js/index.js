"use strict";var name,phone,id,access_token,day_time,_ref=[$(".requestRecord"),$(".appoint")],record_btn=_ref[0],appoint_btn=_ref[1];appoint_btn.click(function(e){name=$(".name")[0].value,phone=$(".phone")[0].value,id=$(".id")[0].value;name&&phone&&id&&isPoneNum(phone)&&checkIDCard(id)?(MtaH5.clickStat("login",{uname:JSON.stringify(name),phone_num:JSON.stringify(phone)}),$.ajax({url:"https://gzflower.bluej.cn/index/book/book",type:"post",data:{phone_num:phone,idcard_num:id,uname:name},timeout:3e3,success:function(e){var n={access_token:e.data.access_token}.access_token;location.href="selection.html?access_token="+n+"&uname="+escape(name)},error:function(){log("error")}})):$(".notice").text("内容不能为空").css("visibility","visible")}),record_btn.click(function(e){if(name=$(".name")[0].value,phone=$(".phone")[0].value,id=$(".id")[0].value,name&&phone&&id)if(isPoneNum(phone))if(checkIDCard(id)){uname=$(".name")[0].value,phone_num=$(".phone")[0].value,id=$(".id")[0].value;api.record_url;$.ajax({url:api.book_url,type:"post",data:{phone_num:phone_num,idcard_num:id,uname:uname},timeout:3e3,success:function(e){console.log(e),access_token=e.data.access_token},error:function(){console.log("error")}}),$.ajax({url:api.record_url,type:"post",data:{phone_num:phone,idcard_num:id,uname:name},timeout:3e3,success:function(e){uname=escape(uname),console.log(e.data.report),e.data.report?location.href="mine.html?access_token="+access_token+"&phone_num="+phone_num+"&uname="+escape(uname):location.href="record.html?access_token="+access_token+"&phone_num="+phone_num+"&uname="+escape(uname)},error:function(){console.log("error")}})}else swal("身份证号码不正确 ");else swal("电话号码不正确");else swal("内容不能为空")});