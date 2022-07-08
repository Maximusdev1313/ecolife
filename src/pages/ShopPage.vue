<template>
  <q-page>
    <div  class="w-100pr  row justify-center wrap mt-2pr">
      <div class=" w-100pr text-center  text-h5">Filter By</div>
        <div class="h-180px mt-20px w-90pr row justify-between ">
          <div v-if="categoriya != undefined  ? true :false " class="row w-40pr ">
            <div class=" w-100pr text-center text-h6">Kartigoriyalar</div>
            <div   class=" w-100pr row  justify-between">
              <div v-for="(categoriy ,i) in categoriya " :key="i" class="mt-15px" >
                <q-btn rounded @click="getFilter(i)" class=" fs-18px">{{categoriy.categoriya_nomi}}</q-btn>
              </div>
            </div> 
          </div>
          <div class="column w-40pr">
            <span class="text-h6">Tags</span>
            <div class="column mt-20px">
              <div>
                <q-btn @click="getCommen" class="btn mr-20px mb-20px" rounded label='cookies'/>
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
      <div class="w-100pr text-center fs-22px_md-20px_sm-18px mt-20px " >
        {{categoriyPproductName}}
      </div>
      <Suspense>
        <Shopcards v-if="visabeProduct" :products="products"   />
      </Suspense>
      <Shopcards v-if="visabeCateroriya" :products="categoriyPproduct"   />
    </div>
  </q-page>
</template>
<script>

import { ref , onMounted } from "vue";
import axios from "axios";
import Shopcards from 'src/components/ShopPage/Shopcards.vue'
import { mapState } from 'vuex';

export default {
  computed:{
    ...mapState(["costs"])
  },
  components: { Shopcards },
    setup() {
      const products=ref('')
      const categoriya=ref('')
      // const categoriyPproduct=ref('')
      onMounted(()=>{
        const getProduct = async () => {
          // asynxromic tarzda maxsulotlarni olish
          try {
            const Fetch_Categoriya_Id = await axios.get(`http://adminmax.pythonanywhere.com/productlar/`);
            products.value = Fetch_Categoriya_Id.data;
          }
          catch (err) {
            console.log(err);
          }

        };
        const getCategoriya = async () => {
          // asynxromic tarzda cartigoriyani olish
          try {
            const Fetch_Categoriya_Id = await axios.get(` http://adminmax.pythonanywhere.com/categoriya/`);
            categoriya.value = Fetch_Categoriya_Id.data;
          } 
          catch (err) {
            console.log(err);
          }
        };
        
        
        let timerId = setInterval(() => {getProduct(),getCategoriya()}, 1000);
        setTimeout(() => { clearInterval(timerId) }, 3000);
      
      })
      
      
      return {
        products,
        categoriya,
      };
    },
    data(){
      return{
        visabeProduct:true,
        visabeCateroriya:false,
        categoriyPproduct:"",
        categoriyPproductName:""
      }
    },
    methods:{

      getFilter(i){
        // for yordamida berilgan karigoriyni olib uning ichidagi maxsulotlarni  categoriyPproduct ga tenglashtirdim
        for(let j=0;j < this.categoriya.length;j++ ){
          if(this.categoriya[i].categoriya_nomi==this.categoriya[j].categoriya_nomi){
            this.categoriyPproduct=this.categoriya[j].mahsulot
            this.categoriyPproductName=this.categoriya[j].categoriya_nomi
            // Shopcards kamponentini ko'rinishini o'zgartirish v-if orqali
            this.visabeProduct=false
            this.visabeCateroriya=true
          }
        }
      }  
    }
     
}
</script>

<style lang="scss" scoped>
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
  .btn_radio{
    border: none;
    background: transparent;
  }
  @media screen and (max-width:800px) {
    .mt-7px{
      margin-top: 150px;
    }
  }
</style>
