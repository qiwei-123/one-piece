/*
    参数 :
    1.obj 要执行动画的对象
    2.attr 要执行动画的样式 比如: left top width height
    3.target 执行动画的目标位置
    4.speed 移动的速度
    5.callback 回调函数 此函数将会在动画执行完毕后执行
*/
function move(obj, attr, target, speed, callback) {
    // 1 2 3 共三处将timer改为obj.timer 达成效果 : 同时点击两个按钮不会中断后者 
    // 1-
    clearInterval(obj.timer);
    /*
        此处设置一个判断
        使输入speed的值输入正值即可 以便不用输入负值
    */
    var current = parseInt(getStyle(obj, attr));
    if (current > target) {
        speed = -speed
    }
    // 2-
    obj.timer = setInterval(function () {
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;
        /*
        向左移动时 需要判断newValue是否小于target
        向右移动时 需要判断newValue是否大于target
        */
        if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
            newValue = target;
        }
        // 加入attr参数 可改变width height top等属性 使用数组存储
        obj.style[attr] = newValue + "px";
        // 3-
        if (newValue == target) {
            clearInterval(obj.timer);

            callback && callback();
        }


    }, 30);

    function getStyle(obj, name) {
        if (window.getComputedStyle) {
            // 正常浏览器的方式 具有getComputedStyle()方法
            return getComputedStyle(obj, null)[name];
        } else {
            // IE8的方式 没有getComputedStyle()方法
            return obj.currentStyle[name];
        }
    };

};
