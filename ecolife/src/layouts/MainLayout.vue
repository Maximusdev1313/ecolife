<template>
  <q-layout view="hhh lpR fff">
    <q-header reveal class="navbar h-70px content-center">
      <q-toolbar>
        <router-link to="/">
          <div class="w-15pr h-50px mt-15px ml-20px">
            <img
              src="../assets/logo-white-font.png"
              width="60"
              alt="" />
          </div>
        </router-link>
        <div class="row w-85pr h-50px mt-10px content-center">
          <router-link to="/">
            <span class="span q-ml-xl text-subtitle2 text-weight-bold text-black text-center">Bosh sahifa</span>
          </router-link>
          <!-- <router-link to="">
            <span class="span q-ml-xl text-subtitle2 text-weight-bold text-black">Fresh Food</span>
          </router-link>
          <router-link>
             <span class="span q-ml-xl text-subtitle2 text-weight-bold text-black">Fresh Vegetable</span>
          </router-link>
          <router-link>
            <span class="span q-ml-xl text-subtitle2 text-weight-bold text-black">Prices Drop</span>
          </router-link> -->
          <router-link to="/about">
            <span class="span q-ml-xl text-subtitle2 text-weight-bold text-black">Biz haqimizda</span>
          </router-link>
          
          <q-space />
          <router-link to="login" class="fs-18px mr-20px">Registratsiya</router-link>
          <q-icon color="white" size="25px" name="search" class="q-mr-md" />
          <router-link to="basket">
            <q-icon color="white" size="25px" name="shopping_cart" /><strong
            class="mt-3px ml-10px mr-10px text-white text-weight-bold">{{shot}} $</strong>
          </router-link>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-black text-white h-600px  mt-500px">
      <div class="w-100pr  h-70pr row justify-center items-center content-center">
        <div class="w-92pr h-60pr row">
          <div class="w-25pr h-100pr">
            <div class="text-h6 text-weight-bolder text-white">
              Ish vaqti
            </div>
            <div class="q-mt-lg text-grey text-weight-bold">
              Dushanba – Yakshanba: 8:00 – 20:00
            </div>

            <div class="q-mt-lg">
              <q-icon class="icon" name="fab fa-facebook-f" />
              <q-icon class="icon q-ml-md" name="fab fa-twitter" />
              <q-icon class="icon q-ml-md" name="fab fa-youtube" />
              <q-icon class="icon q-ml-md" name="fab fa-google" />
              <q-icon class="icon q-ml-md" name="fab fa-instagram-square" />
            </div>
          </div>
          <div class="w-25pr h-100pr">
            <div class="text-h6 text-weight-bolder text-white">Ma'lumotlar</div>
            <div class="a-href column q-mt-lg text-weight-bold">
              <a href="">Yetkazib berish</a>
              <a href="">Biz haqimizda</a>
              <!-- <a href="">Secure Paymett</a> -->
              <a href="">Biz bilan bog'lanish</a>
              <!-- <a href="">Sitemap</a> -->
            </div>
          </div>
          <div class="w-25pr h-100pr">
            <div class="text-h6 text-weight-bolder text-white">
              Foydalanish uchun
            </div>
            <div class="a-href column q-mt-lg text-weight-bold">
              <a href="">Foydalanuvchi shartlari</a>
              <a href="">Chegirmalar</a>
              <a href="">Registratsiya</a>
              <!-- <a href="">Best Sales</a> -->
              <a href="">Boshqa loyihalar</a>
            </div>
          </div>
          <!-- <div class="w-25pr h-100pr">
            <div class="text-h6 text-weight-bolder text-white">NEWSLETTER</div>
            <div class="q-mt-lg text-grey text-weight-bold">
              Be the first to know about our new arrivals and exclusive offers.
            </div>
            <div class="q-mt-md">
              <form>
                <q-input outlined type="email" bg-color="white" v-model="email" :dense="dense" />
              </form>
            </div>
          </div> -->
        </div>
      </div>
      <div class="row justify-center">
        <q-separator class="w-90pr bg-dark"> </q-separator>
      </div>
      <div class="w-100pr h-29pr column justify-center items-center content-center">
        <div>
          <img src="http://demo.posthemes.com/pos_ecolife_fastfood/img/cms/payment.png" alt="" />
        </div>
        <div class="q-mt-xl">Copyright © . All Rights Reserved</div>
      </div>
    </q-footer>
  </q-layout>
</template>


<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      email:"",
      dense:true,
    }
  },
  computed:{
    ...mapState(["shot"])
  },
};
</script>
<style scoped>
.fs-18px{
  text-decoration: none;
  color: white;
}
.fs-18px:hover{
  color:rgb(0, 255, 247);
}
a{
  text-decoration: none;
}
.navbar{
  background: linear-gradient(
    to right,
    rgb(68, 0, 255),
    rgb(200, 0, 255),
    rgb(255, 0, 221),
    rgb(221, 0, 255),
    rgb(255, 0, 149),
    rgb(54, 53, 53)
  ) ;
}
.span {
  cursor: pointer;
  background: transparent;
}

.icon {
  color: grey;
}

.icon:hover {
  color: red;
  cursor: pointer;
}

.a-href a {
  text-decoration: none;
  color: grey;
}

.a-href a:hover {
  color: red;
  margin-left: 5px;
  cursor: pointer;
}

.a-href {
  line-height: 2.5;
  color: grey;
}

</style>
