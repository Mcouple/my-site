import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/icon/"
//导入样式
import styles from "./showMessage.module.less"
/**
 * 弹出消息
 * @param{String} content 消息内容
 * @param{String} type 消息类型 info error  success warn 
 * @param{Number} duration 多久后消失
 * @param{HTMLElement} contaienr 容器，消息会显示到该容器的正中；如果不传，则显示到页面中 
 */
export default function(options = {}) {
    const content = options.content || "";
    const type = options.type || "success";
    const duration = options.duration || 1500;
    const container = options.container || document.body;


    //创建消息元素
    const div = document.createElement("div")
    const iconDom = getComponentRootDom(Icon, { type })
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><p>${content}</p>`
        //设置样式
    const typeClassName = styles[`message-${type}`] //类型样式名
    div.className = `${styles.message} ${typeClassName}`


    //容器的position是否改动过
    //getComputedStyle用来获取元素实际显示的样式
    if (getComputedStyle(container).position === "static") {
        container.style.position = "relative"
    }

    container.appendChild(div);
    //浏览器强行渲染
    div.clientHeight; //读取元素的clientHeight类似位置尺寸属性，就会导致reflow

    //动画效果，回归到正常位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50%,-50%)`

    //等一段时间消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%,-50%) translateY(-60px)`;
        //弹窗隐藏之后,让div消失
        //注册transtionend事件,第三个参数可以设置只触发一次
        div.addEventListener("transitionend", function() {
            div.remove();
            //运行回调函数
            //如果有个回调函数，则运行回调函数
            // if (options.callback) { options.callback() }
            options.callback && options.callback();

        }, { once: true })
    }, duration)
}