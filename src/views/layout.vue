<template>
    <div class="app-layout">
        <router-view></router-view>
        <tabbar slot="bottom" v-model="tabsSelected">
            <tabbar-item v-for="item in tabs" :key="item.index" :link="item.link">
                <img slot="icon" :src="item.icon">
                <img slot="icon-active" :src="item.iconActive">
                <span slot="label">{{item.label}}</span>
            </tabbar-item>
            <tabbar-item>
                <span slot="label" @click="logout">注销</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem, cookie } from 'vux';

const tabs = {
    2: [
        {
            icon: require('@/assets/images/gray-home.png'),
            iconActive: require('@/assets/images/iconw-home.png'),
            label: '首页',
            link: '/'
        },
        {
            icon: require('@/assets/images/gray-info.png'),
            iconActive: require('@/assets/images/iconw-partyMembe.png'),
            label: '党务信息',
            link: '/party/partyDetail'
        },
        {
            icon: require('@/assets/images/gray-item.png'),
            iconActive: require('@/assets/images/iconw-integral.png'),
            label: '片区活动',
            link: '/active/partyBranch1'
        },
        {
            icon: require('@/assets/images/gray-active.png'),
            iconActive: require('@/assets/images/iconw-activity.png'),
            label: '积分审核',
            link: '/points/review'
        }
    ],
    3: [
        {
            icon: require('@/assets/images/gray-home.png'),
            iconActive: require('@/assets/images/iconw-home.png'),
            label: '首页',
            link: '/'
        },
        {
            icon: require('@/assets/images/gray-info.png'),
            iconActive: require('@/assets/images/iconw-partyMembe.png'),
            label: '党员信息',
            link: '/party/branch'
        },
        {
            icon: require('@/assets/images/gray-active.png'),
            iconActive: require('@/assets/images/iconw-activity.png'),
            label: '支部活动',
            link: '/active/partyBranch'
        },
        {
            icon: require('@/assets/images/gray-item.png'),
            iconActive: require('@/assets/images/iconw-integral.png'),
            label: '积分评定',
            link: '/points/evaluation'
        }
    ],
    4: [
        {
            icon: require('@/assets/images/gray-home.png'),
            iconActive: require('@/assets/images/iconw-home.png'),
            label: '首页',
            link: '/'
        },
        {
            icon: require('@/assets/images/gray-item.png'),
            iconActive: require('@/assets/images/iconw-integral.png'),
            label: '党员积分',
            link: '/points'
        },
        {
            icon: require('@/assets/images/gray-active.png'),
            iconActive: require('@/assets/images/iconw-activity.png'),
            label: '党员活动',
            link: '/active/activeDetail'
        }
    ]
};

export default {
    components: {
        Tabbar,
        TabbarItem
    },
    data() {
        return {
            tabsSelected: -1,
            tabs: tabs[this.$store.getters.user.roleid] || []
        };
    },
    mounted() {
        this.selectTab();
    },
    watch: {
        $route: 'selectTab'
    },
    methods: {
        logout() {
            cookie.remove('ptoken');
            cookie.remove('roleId');
            cookie.remove('userId');
            this.$router.push({
                path: '/login'
            });
        },
        selectTab() {
            this.tabsSelected = this.tabs.findIndex(item => {
                if (item.link === '/') {
                    return /^\/main/.test(this.$route.path) || item.link === this.$route.path;
                } else {
                    return new RegExp('^' + /^\/\w+/.exec(item.link)[0]).test(this.$route.path);
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.app-layout {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}
.weui-tabbar {
    position: relative;
    background-color: #ffffff;
}
.weui-tabbar__item {
    padding: 2px 0 0;
}
</style>
