<template>
    <ul class="contact-container">
        <li>
            <a v-if="data" :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`">
                <div class="icon"><Icon type='qq'/></div>
                <span>{{data.qq}}</span>
            </a>
            <div class="pop">
                <img src="@/assets/wechat.jpg" alt="">
            </div>
        </li>
        <li>
            <a v-if="data" :href="`mailto:${data.mail}`" >
                <div class="icon">
                    <Icon type="mail"/>
                </div>
                <span>{{ data.mail }}</span>
            </a>
        </li>
        <li>
            <a v-if="data" target="_blank" :href="data.github">
                <div class="icon"><Icon type="github"/></div>
                <span>{{data.githubName}}</span>
            </a>
            <div class="pop">
                <img src="@/assets/wechat.jpg" alt="">
            </div>
        </li>
        <li>
            <a href="">
                <div class="icon"><Icon type="weixin"/></div>
                <span v-if="data">{{data.weixin}}</span>
            </a>
            <div class="pop">
                <img src="@/assets/wechat.jpg" alt="">
            </div>
        </li>
    </ul>
</template>

<script>
import Icon from "@/components/icon";
//导入数据仓库
import {mapState} from "vuex";
export default {
    components:{
        Icon
    },
    computed:mapState("setting",["data"])
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.contact-container{
    padding: 20px;
    margin: 0;
    color: @gray;
    @itemHeight:30px;
    li{
        height: 20px;
        line-height: @itemHeight;
        margin: 18px 0;
        cursor: pointer;
        position: relative;
        //li鼠标悬停的时候，让.pop的div显示出来
        &:hover{
            .pop{
                 transform: scaleY(1);
            }
        }
    }
    a{
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    .icon{
        width: 36px;
        font-size: 26px;
    }
    .icon-container{
        font-size: 26px;
    }
    .pop{
        position: absolute;
        bottom: 25px;
        background-color: white;
        padding:7px 5px 0px 5px;
        border-radius: 5px;
        // 图片旋转隐藏
        transform: scaleY(0);
        //设置旋转中心
        transform-origin:center bottom;
        transition: 0.2s ease-in;
        img{
            width: 150px;
            height: 150px;
        }
        &::after{
            content: "";
            position: absolute;
            display: inline-block ;
            width: 8px;
            height: 8px;
            background-color: white;
            left:50%;
            transform: translateX(-50%) rotate(45deg);
            bottom: -4px;
        }
    }
}
</style>