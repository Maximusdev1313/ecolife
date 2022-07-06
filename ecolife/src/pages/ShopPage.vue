<template>
  <q-page>

    <div  class="w-100pr  row justify-center wrap mt-2pr">
      <div class=" w-100pr text-center  text-h5">Filter By</div>
        <div class="h-180px w-90pr row justify-between ">
          <div class="row w-50pr ">
            <div class=" w-100pr text-center text-h6">categories</div>
            <div class="column mr-10px " >
              <q-checkbox v-model="right" label='Fudge Cookies(17)' class="chekbox"/>
              <q-checkbox v-model="right1" label='Rose Cookies(17)' class="chekbox"/>
              <q-checkbox v-model="right2" label='moravian spice(17)' class="chekbox"/>
            </div>
            <div class="column " >
              <q-checkbox v-model="right3" label='Sugar Cookies(17)' class="chekbox"/>
              <q-checkbox v-model="right4" label='moravian spice(17)' class="chekbox"/>
              <q-checkbox v-model="right5" label='Sugar Cookies(17)' class="chekbox"/>
            </div>
          </div>
          <!-- <div class="column w-30pr ">
            <span class="text-h6">Price</span>
            <br>
            <span>$9.00 - $34.00</span>
            <br>
            <div class="w-80pr" >
              <q-range color="red"/>
            </div>
          </div> -->
          <div class="column w-40pr">
            <span class="text-h6">Tags</span>
            <div class="column mt-20px">
              <div>
                <q-btn class="btn mr-20px mb-20px" rounded label='cookies'/>
                <q-btn class="btn mb-20px" rounded label='cream cake'/>
              </div>
              <div>
                <q-btn class="btn mb-20px mr-20px" rounded label='chocolate cake'/>
                <q-btn class="btn mb-20px " rounded label='Rose cookies'/>
              </div>
            </div>
          </div>
        </div>
      
    </div>
    <div class="w-100pr mt-7px ">
      <Suspense>
        <Shopcards :products="products"  />
      </Suspense>
    </div>
  </q-page>
</template>
<script>

import { ref , onMounted } from "vue";
import axios from "axios";
import { useRoute } from 'vue-router';
import Shopcards from 'src/components/ShopPage/Shopcards.vue'
import { mapState } from 'vuex';

export default {
  computed:{
    ...mapState(["costs"])
  },
    setup() {
      const categoriyaProductId=ref([])
      const route = useRoute()
      const products=ref('')
      onMounted(()=>{
        
      const getComment = async () => {
        try {
          const Fetch_Categoriya_Id = await axios.get(`http://adminmax.pythonanywhere.com/categoriya/${route.params.id}/`);
          categoriyaProductId.value = Fetch_Categoriya_Id.data;
          products.value=categoriyaProductId.value.mahsulot
          console.log('lkjhg');
        } 
        catch (err) {
          console.log(err);
        }

      };
      let timerId = setInterval(() => getComment(), 1000);
      setTimeout(() => { clearInterval(timerId) }, 1100);
      
      }
  
    )
        return {
            right: ref(false),
            right1: ref(false),
            right2: ref(false),
            right3: ref(false),
            right4: ref(false),
            right5: ref(false),
            right6: ref(false),
            categoriyaProductId,
            products
        };
    },
    components: { Shopcards }
}
</script>

<style lang="scss" scoped>
  .chekbox{
    opacity: 0.8;
  }
  .chekbox:hover{
    opacity: 1;
    transition: 0.8s;
    color: red;
  }
  .btn{
    opacity: 1;
    transition: 0.8s;
  }
  .btn:hover{
    opacity: 1;
    transition: 1s;
    background-color: red;
    color: white;
  }
  .text-black{
    opacity: 0.8;
  }
  .text-black:hover{
    opacity: 1;
    transition: 1s;
    color: red;
  }
  @media screen and (max-width:800px) {
    .mt-7px{
      margin-top: 150px;
    }
  }
</style>
