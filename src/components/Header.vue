<template>
  <div class="header">
    <div class="logo_wrapper">
      <button class="mobile_nav" type="button">
        <Icon
          icon="charm:menu-hamburger"
          color="#202020"
          width="20"
          height="20"
        />
      </button>
      <a class="logo" href="http://"
        ><img src="../assets/logo.svg" alt="logo"
      /></a>
    </div>
    <div class="header_components">
      <div class="search_wrapper">
        <div class="search_inner">
          <input
            type="search"
            name=""
            id="mainSearch"
            placeholder="Search..."
          />
          <button type="submit">
            <Icon icon="akar-icons:search" color="#202020" />
          </button>
        </div>
        <div class="mobile_search">
          <button type="button">
            <Icon icon="akar-icons:search" color="#202020" />
          </button>
        </div>
      </div>

      <div class="components_wrapper">
        <button>
          <Icon icon="ion:notifications" color="#202020" />
        </button>
        <img class="header_potrait" src="../assets/header_potrait.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Header",
  components: {
    Icon,
  },
};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1em 4%;
}

.logo_wrapper {
  display: flex;
  align-items: center;
}

.mobile_nav {
  border: none;
  cursor: pointer;
  background: transparent;
  margin-right: 0.2em;
}

.logo {
  display: block;
}

.header_components {
  display: flex;
  align-items: center;
  justify-content: end;
}

.header_components button {
  height: 100%;
  border: none;
  padding: 0.2em;
  cursor: pointer;
  background: transparent;
}

.search_wrapper {
  width: fit-content;
  margin-right: 0.1em;
}

.search_inner {
  width: 100%;
  height: 40px;
  flex-wrap: nowrap;
  border: 1px solid #dcdcdc;
  border-radius: 7px;
  display: none;
}

#mainSearch {
  width: 100%;
  height: 100%;
  border: none;
  padding: 1em;
}

.search_inner button {
  padding: 0 1em;
}


.components_wrapper {
  display: flex;
  align-items: center;
}

.header_potrait {
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 0.3em;
}

@media screen and (min-width: 768px) {
  .mobile_nav {
    display: none;
  }

  .header_components {
    width: 70%;
    /* justify-content: ; */
  }

.search_wrapper {
  width: 85%;
}
  .search_inner {
    display: flex;
  }

  .mobile_search {
    display: none;
  }

  .header_potrait {
width: 45px;
height: 45px;
  }
}

@media screen and (min-width: 1024px) {
  .header_components {
    width: 80%;
  }

  .search_wrapper {
  width: 90%;
  margin-right: 1em;
}

.header_potrait {
  margin-left: 1em;
}
}
</style>