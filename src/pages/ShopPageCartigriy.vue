<template>
  <q-page>

    <div  class="w-100pr  row justify-center wrap mt-2pr">
      <Suspense>
        <div class=" w-100pr text-center  text-h5">{{categoriyaProductId.categoriya_nomi}}</div>
      </Suspense>
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
