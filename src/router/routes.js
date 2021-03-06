import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Message from "@/views/Message";
import Project from "@/views/Project";
import BlogDetail from "@/views/Blog/Detail";
import NotFound from "@/views/NotFound.vue"

export default [{
        //首次打开页面直接默认跳转路由
        path: '*',
        redirect: '/home'
    }, {
        name: "Home",
        path: "/home",
        component: Home,
        meta: {
            title: "首页"
        }
    },
    {
        name: "About",
        path: "/about",
        component: About,
        meta: {
            title: "关于我"
        }
    },
    {
        name: "Blog",
        path: "/article",
        component: Blog,
        meta: {
            title: "文章"
        }
    },
    {
        name: "CategoryBlog",
        path: "/article/cate/:categoryId",
        component: Blog,
        meta: {
            title: "文章"
        }
    },
    {
        name: "BlogDetail",
        path: "/article/:id",
        component: BlogDetail,
        meta: {
            title: "文章详情"
        }
    },
    {
        name: "Message",
        path: "/message",
        component: Message,
        meta: {
            title: "留言板"
        }
    },
    {
        name: "Project",
        path: "/project",
        component: Project,
        meta: {
            title: "项目和效果"
        }
    },
    {
        name: "NotFount",
        path: "*",
        component: NotFound
    }
]