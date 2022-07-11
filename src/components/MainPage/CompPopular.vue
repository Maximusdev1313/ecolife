<template>
  <div>
    <div class="w-100pr h-80px bg-white q-mt-lg row content-center">
      <div>
        <div class="text-h5">Popular Categories</div>
        <div class="text-grey">Add Popular Categories to weekly line up</div>
      </div>
    </div>

    <div class="
        w-100pr
        mb-50px
        bg-white
        row
        wrap
        justify-between
        items-start
        content-start
      ">
      <router-link :to="'/shop/'+categoriy.id" v-for="(categoriy , i) in categoriya" :key="i">
        <div class="q-mt-lg" >
          <q-img v-for="categoriyaImg in categoriy.rasmlar" :key="categoriyaImg" :src="categoriyaImg.link" width="400px" height="160px">
            <div class="w-100pr h-100pr row items-center" style="background: none">
              <div class="text-fresh q-ml-md w-40pr h-70pr" style="background: none">
                <div class="text-h6 text-weight-medium text-black">
                  {{ categoriy.categoriya_nomi }}
                </div>
                <div v-for="categoriyaImg in categoriy.rasmlar" :key="categoriyaImg" class="text-grey">
                  {{ categoriyaImg.title }}
                </div>
                <div class="a">
                  <a href="">{{ categoriy.a }}</a>
                </div>
              </div>
            </div>
          </q-img>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { ref , onMounted } from "vue";
import axios from "axios";
export default {
  setup(){
    const categoriya=ref([])
         onMounted(()=>{
      const getComment = async () => {
        try {
          const Fetch_Categoriya = await axios.get('http://adminmax.pythonanywhere.com/categoriya/');
          categoriya.value = Fetch_Categoriya.data;
        } 
        catch (err) {
          console.log(err);
        }
      };
       let timerId = setInterval(() => { getComment()}, 1000);
      setTimeout(() => { clearInterval(timerId) }, 2000);
      
      }
  
    )
  
      return{
        categoriya,
      } 
  },
  
  
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: rgb(83, 81, 81);
  font-size: 14px;
}

.text-fresh {
  line-height: 2;
}

.a a:hover {
  margin-left: 10px;
  color: green;
  transition: 1s;
}
</style>
