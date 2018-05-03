<template>
  <div class="ak-header">
    <div class="head-logo">
       <head-logo></head-logo>
    </div>
    <div class="head-menu">
      <nav-menu :data="menu"></nav-menu>
      <div class="head-menu_phone">
        <el-dropdown trigger="click">
          <span class="ty-icon-menu"></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in menu" :key="item.name + index" class="phone-link"><router-link :to="item.url">{{ item.name }}</router-link></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import HeadLogo from '~/components/HeadLogo.vue'
import NavMenu from '~/components/NavMenu.vue'
export default {
  name: 'ak-header',
  data () {
    return {
      menu: [
        {
          name: 'Home',
          url: '/'
        },
        {
          name: 'Blog',
          url: '/blog'
        },
        {
          name: 'About',
          url: '/about'
        }
      ]
    }
  },
  components: {
    HeadLogo,
    NavMenu
  }
}
</script>

<style lang="scss" scoped>
.ak-header {
  display: flex;
  height: 60px;
  overflow: hidden;
  .head-logo {
    width: 100px;
    overflow: hidden;
  }
  .head-menu {
    flex: 1;
    // overflow: hidden;
  }
  .head-menu_phone {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 5px;
    .ty-icon-menu {
      width: 20px;
      display: none;
    }
  }
  @media (max-width: 768px) {
    .nav-menu {
      display: none;
    }
    .ty-icon-menu {
      display: inline-block !important;
    }
  }
}
.phone-link {
  a {
    text-decoration: none;
    color: #303133;
  }
}
</style>
