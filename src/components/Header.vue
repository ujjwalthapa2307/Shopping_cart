<template lang="html">
  <div >
    <div class="nav-bar">
    </div>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/">Home</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/products">Products</b-nav-item>
            <b-nav-item href="/sales">Sale</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <VueAutosuggest />
              <!--<b-form-input size="sm" type="text" id="myInput" class="mr-sm-2" placeholder="Search"> Hello
                <div class="test">
                  <li v-for="product in products">{{product.title}}</li>
                </div>
              </b-form-input> -->
              <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="search()">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
  </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import VueAutosuggest from '@/components/VueAutosuggest';
export default {
  components: {
    VueAutosuggest
  }
}
</script>

<style lang="css" scoped>
.nav-bar {
    background: linear-gradient(-90deg, #84CF6A, #16C0B0);
    height: 20px;
  }
</style>
