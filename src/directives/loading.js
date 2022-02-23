//全局注册指令
// export default {
//     //bind 是最开始的情况
//     bind(el, binding) {
//         //根据binding.value的值，决定创建或删除img元素
//     },
//     //update是数据更新之后的情况
//     update(el, binding) {
//         //根据binding.value的值，决定创建或删除img元素
//     }
// }

//如果bind()和update()作用一样可以直接，导出个函数，不用导出对象
import loadingUrl from "@/assets/loading.gif";
import styles from "./loading.module.less"


function getLoadingImage(el) {
    return el.querySelector("img[data-role=loading]")
}

function createLoadingImg() {
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading
    return img
}


export default function(el, binding) {
    //根据binding.value的值，决定创建或删除img元素
    //得到当前是否有img元素
    const curImg = getLoadingImage(el);
    if (binding.value) {
        if (!curImg) {
            const img = createLoadingImg()
            el.appendChild(img)
        }
    } else {
        //当binding.value = false，删除loading
        curImg.remove()
    }
}