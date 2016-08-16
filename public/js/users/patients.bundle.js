webpackJsonp([24],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(40);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	    var utils = __webpack_require__(4);
	    var login = __webpack_require__(9);
	    
	    $('.del-patient').on('click',function(){
	        delPatient($(this));
	    });

	    $('#add-tr').on('click',function(){
	        addTr();
	    });

	    function addTr(){
	        var trHtml = '<tr class="new-tr"><td class="name"><input placeholder="就诊人姓名"/></td>'+
	            '<td class="gender"><div class="select-box"><div class="selected"><span class="text">请选择</span><i class="icon pull-down"></i></div><ul class="options"><li class="option">男</li><li class="option">女</li></ul></div></td>'+
	            '<td class="birthday"><input placeholder="出生年月"/></td>'+
	            '<td class="telephone"><input placeholder="联系电话"/></td>'+
	            '<td class="new-patient"><a class="text-main" href="javascript:void(0)">添加</a></td></tr>';
	        var tr = $(trHtml);
	        utils.BuildSelect(tr.find('.select-box'));
	        tr.find('.new-patient').on('click',function(){
	            addPatient($(this));
	        });
	        $('#add-tr').closest('tr').before(tr);

	    }

	    function addPatient($this){
	        var name = '',gender='',birthday='',telephone='',age='';
	        var genderJson = {"1":"男","2":"女"};

	        var tr = $this.closest('tr');
	        var oName = tr.find('.name input');
	        var oGender = tr.find('.gender .options .option.active');
	        var oBirthday = tr.find('.birthday input');
	        var oTel = tr.find('.telephone input');
	        utils.SendAjax({
	            url: '/users/patient/add',
	            param: {name:name,gender:gender,birthday:birthday,telephone:telephone},
	            method: 'POST',
	            tipText: '添加就诊人',
	            callback: function (result) {
	                tr.html('<td>'+name+'</td><td>'+genderJson[gender]+'</td><td>'+age+'</td><td>'+telephone+'</td><td><a href="javascript:void(0)" class="del-patient">删除</a></td>');
	                tr.data('id',result.data.id);
	                tr.find('.del-patient').on('click',function(){
	                    delPatient($(this));
	                })
	            },
	            errorFun: function (result) {

	            }
	        });
	    }

	    function delPatient($this){
	        login.CheckLogin(function() {
	            var tr = $this.closest('tr');
	            var id = tr.data('id');
	            utils.SendAjax({
	                url: '/users/patient/del',
	                param: {contactPersonId: id},
	                method: 'POST',
	                tipText: '删除就诊人',
	                callback: function (result) {
	                    tr.hide(1000);
	                },
	                errorFun: function (result) {

	                }
	            });
	        });
	    }
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }

});