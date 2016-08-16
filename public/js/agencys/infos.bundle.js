webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(15);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require){
	    __webpack_require__(3);
	    $(function () {
	        var BMap = __webpack_require__(16);
	        // console.log(BMap);
	        
	        
	        function initBMap() {
	            var map = new BMap.Map("allmap"); // 创建地图实例

	            // var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
	            var point = new BMap.Point(113.94212, 22.546162);  // 创建点坐标
	            map.centerAndZoom(point,20);                 // 初始化地图，设置中心点坐标和地图级别

	            map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
	            map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用


	            var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
	            // var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
	            var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
	            map.addControl(top_left_control);
	            // map.addControl(top_left_navigation);

	            var options = {
	                renderOptions:{map: map, panel:"r-result"},
	                onSearchComplete: function(results){
	                    // console.log(results);
	                    //document.getElementById("log").innerHTML = JSON.stringify(results)
	                    if (local.getStatus() == BMAP_STATUS_SUCCESS){
	                        // 判断状态是否正确
	                        var s = [];
	                        for (var i = 0; i < results.getCurrentNumPois(); i ++){
	                            s.push(results.getPoi(i).title + ", " + results.getPoi(i).address);
	                        }
	                        // console.log(s);
	                        //document.getElementById("log").innerHTML = s.join("<br>");

	                    }
	                }
	            };
	            var local = new BMap.LocalSearch(map, options);
	            // local.search('大族激光科技中心');
	            local.search('广州市越秀区环市东路422号2楼');
	        }

	        initBMap();

	        var winWidth = $('.wrapper').width();
	        $(window).resize(function () {
	            var wrapperWidth = $('.wrapper').width();
	            if(wrapperWidth==winWidth){
	                winWidth=wrapperWidth;
	                // console.log(winWidth);
	                initBMap();
	            }

	        })

	    })




	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require,exports,module){
	    // var BMap = require('http://api.map.baidu.com/getscript?v=2.0&ak=Xxl3KBGneiWgAPS3jIN8Zar5qTpGqDMF&services=&t=20160401164342');
	    // module.exports = window.BMap
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }

});