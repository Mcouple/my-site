<template>
    <nav class="menu-container">
        <router-link :exact="item.exact"  v-for="item in items" :key="item.link" :to="{name:item.name}" 
         active-class="selected"  exact-active-class=""  
        >
            <!-- :class="{selected:isSelected(item)}" -->
            <icon :type="item.icon"/>
            <span>{{item.title}}</span>
        </router-link>
    </nav>
</template>

<script>
import icon from "@/components/icon"
export default {
    components:{
        icon
    },
    data(){
        return{
            items:[
                {
                    name:"Home",
                    title:"首页",
                    icon:"home",
                    exact:true,
                },{
                    name:"Blog",
                    title:"文章",
                    icon:"blog",
                    //startWith:true  //只要碰到startWith就说明是blog就要启动模糊匹配
                    exact:false, //激活状态是否要精确匹配
                },{
                    name:"About",
                    title:"关于我",
                    icon:"about",
                    exact:true,
                },{
                    name:"Project",
                    title:"项目&效果",
                    icon:"code",
                    exact:true
                },{
                    name:"Message",
                    title:"留言板",
                    icon:"chat",
                    exact:true
                }
            ]
        }
    },

    // methods:{
    //     isSelected(item){
    //         //菜单的链接地址
    //         var link = item.link.toLowerCase()
    //         //当前浏览器的访问路径
    //         var curPathname = location.pathname.toLowerCase()
    //         if(item.startWith){
    //             return curPathname.startsWith(link)
    //         }else{
    //           return curPathname === link
    //         }
    //     }
    // }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container{
    margin: 24px 0px;
    width: 100%;
    flex-direction: column;
    a{
        &.selected{
            // background:gray;
            //把@words颜色加深百分之10
            background:darken(@words,2%)
         }
        text-decoration: none;
        color: @gray;
        display: block;
        padding: 0 50px;
        height: 45px;
        line-height: 45px;
        cursor: pointer;
        &:hover{
            color: white;
        }
        .icon-container{
            font-size: 24px;
        }
        span{
            display: inline-block;
            margin-left: 10px;
        }
    }
}
</style>