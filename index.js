// 链表结构
function Node(value) {
    this.value = value;
    this.next = null;
}
var a = new Node(1)
var b = new Node(2)
var c = new Node(3)
var d = new Node(4)

a.next = b
b.next = c
c.next = d
d.next = null;
console.log(a.value)
console.log(a.next.value)
console.log(a.next.next.value)
console.log(a.next.next.next.value)


// vue中得到组件生成的根DOM
function getComponentRootDom(comp, props) {
    const vm = new Vue({
        render: (h) => h(comp, { props })
    })
    vm.$mount()
    return vm.$el;
}
import Icon from "./src/components/icon/index.vue"
var dom = getComponentRootDom(Icon, { type: "home" })
    // 这样就可以得到一个真实的dom元素，但是还没有添加到页面上
console.log(dom)