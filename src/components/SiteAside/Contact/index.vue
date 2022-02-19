<template>
    <ul class="contact-container">
        <li>
            <a href="tencent://message/?Menu=yes&uin=1031725971&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
                <div class="icon"><Icon type="qq"/></div>
                <span>1031725971</span>
            </a>
            <div class="pop">
                <img src="@/assets/wechat.jpg" alt="">
            </div>
        </li>
        <li>
            <a href="mailto:suplzy0409@gmail.com" >
                <div class="icon"><Icon type="mail"/></div>
                <span>suplzy0409@gmail.com</span>
            </a>
        </li>
        <li>
            <a href="">
                <div class="icon"><Icon type="github"/></div>
                <span>Mcouple</span>
            </a>
            <div class="pop">
                <img src="@/assets/wechat.jpg" alt="">
            </div>
        </li>
        <li>
            <a href="">
                <div class="icon"><Icon type="weixin"/></div>
                <span>18625636523</span>
            </a>
            <div class="pop">
                <img src="@/assets/wechat.jpg" alt="">
            </div>
        </li>
    </ul>
</template>

<script>
import Icon from "@/components/icon";
export default {
    components:{
        Icon
    },
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