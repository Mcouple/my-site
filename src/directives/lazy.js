//图片懒加载
import eventBus from "@/eventBus";
//防抖
import { debounce } from "@/utils"
//导入gif图片
import defaultGif from "@/assets/default.gif"
let imgs = [];

function setImage(img) {
    img.dom.src = defaultGif; //页面一加载直接使用默认图片
    //处理图片
    const clientHeight = document.documentElement.clientHeight; //视口高度
    //该图片是否在视口范围内
    const rect = img.dom.getBoundingClientRect() //求得dom元素的位置信息
    const height = rect.height || 150;
    if (rect.top >= -height && rect.top <= clientHeight) {
        //在视口范围内
        // const temImg = new Image();
        // temImg.onload = function() {
        //     img.dom.src = img.src;
        // }
        // temImg.src = img.src;
        img.dom.src = img.src
            //判断图片有无处理过
        imgs = imgs.filter(i => i !== img)
    }
};

//调用该函数，就可以设置哪些合适的图片
function setImages() {
    for (const img of imgs) {
        //处理图片，看图片有没有在视口内
        setImage(img)
    }
};

function handleScroll(dom) {
    setImages();
}

//滚动条的事件总线
eventBus.$on("mainScroll", debounce(handleScroll, 50));
export default {
    //bind只执行一次
    inserted(el, bindings) {
        const img = {
            //dom元素
            dom: el,
            //src真实的链接地址
            src: bindings.value,
        }
        imgs.push(img)
            // 立即处理一次图片
        setImages(imgs)
    },
    //当切换别的页面，当前页面的dom元素直接删除，unbind在元素消失时执行
    unbind(el) {
        imgs = imgs.filter(img => img.dom !== el)
    }
}