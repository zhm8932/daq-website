define(function(require,exports,module){function t(t){function e(n,a){if(0>n)return t.outdatedFun&&t.outdatedFun(),!1;a.attr("data-restTime",1e3*n);var i=parseInt(n/60)<10?"0"+parseInt(n/60):parseInt(n/60),r=parseInt(n%60)<10?"0"+parseInt(n%60):parseInt(n%60);a.html(i+t.minuteUnit+r+t.secondUnit),n--,setTimeout(function(){e(n,a)},1e3)}var n={minuteUnit:"分",secondUnit:"秒",outdatedFun:function(){window.location.reload()}},a="true"===$("#browser-mobile").val();a&&(n.minuteUnit=" : ",n.secondUnit=""),t=$.extend({},n,t);var i=$(".timer");i.each(function(n,a){var i=$(a),r=parseInt(i.attr("data-paytime")),u=parseInt(i.attr("data-currenttime")),o=parseInt((t.totalTime-(u-r))/1e3);e(o,i)})}require("jquery"),exports.updateTime=t});