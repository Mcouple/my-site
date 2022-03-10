import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhPD1DVvthdZWJ7SI5kpuedJS4TmAF3IC2A&usqp=CAU",
        siteTitle: "Mcouple",
        github: "https://github.com/DuYi-Edu",
        qq: "1031725971",
        qqQrCode: "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
        weixin: "18625636523",
        weixinQrCode: "@/assets/wechat.jpg",
        mail: "suplzy0409@gmail.com",
        icp: "河ICP备17001719号",
        githubName: "Mcouple",
        favicon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhPD1DVvthdZWJ7SI5kpuedJS4TmAF3IC2A&usqp=CAU",
    },
});