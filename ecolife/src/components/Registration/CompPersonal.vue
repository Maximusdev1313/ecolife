<template> 
  <div class="w-100pr row justify-center"> 
    <!-- bosh sarlavha --> 
    <div 
      class=" w-100pr
        justify-center 
        content-center 
        shadow-up 
        q-pb-xl
        login 
      " 
    > 
      <div class="w-100pr h-480px q-ml-md items-center"> 
        <br /> 
        <div class=" text-grey contact text-h5 text-weight-bolder text-center"> 
          Shaxsiy ma'lumotlar
        </div> 
        <!-- inputlar boshlanishi --> 
          <div class="mt-10px text-red text-center">
          Iltimos siz bilan qayta bog'lanishimiz uchun ma'lumotlarni <br> aniqlik bilan to'ldiring
        </div>
        <br /> 
        <form> 
          <div class="q-mt-xl q-ml-md items-start content-start"> 
            <q-input 
              type="text" 
              class="w-90pr mb-40px" 
              v-model="fullname" 
              label="Ismingiz" 
              :dense="dense" 
            /> 
            <q-input 
              type="number" 
              class="w-90pr mb-40px" 
              v-model="telnumber" 
              label="Raqamingiz" 
              :dense="dense" 

            /> 
          </div> 
        </form> 
 
        <!-- <div class="q-mt-xl q-ml-md"> 
          <form> 
            <q-input 
              class="w-90pr" 
              type="text" 
              v-model="address" 
              label="Address" 
              :dense="dense" 
            /> 
          </form> 
        </div>  -->
 
        <div class="q-mt-xl w-100pr row justify-center "> 
          <q-btn class="btn mt-50px" @click="getLocation">Lakatsiyani jo'natish  <q-icon name="location_on" class="ml-10px" color="yellow" size="20px"></q-icon></q-btn>
        </div> 
        <br /> 
        <div class="row q-mt-md justify-center"> 
          <q-btn color="secondary" @click="setOrder()" label="Ma'lumotlarni yuborish" /> 
        </div> 
      

        <!-- inputlar tugashi --> 
      </div> 
      <br /> 
    </div> 
    <!-- bosh sarlavha tugashi --> 
  </div> 
</template> 
<script> 
import { mapMutations, mapState } from 'vuex';
import {ref} from 'vue'
export default { 

  setup(){
  const location = ref([])
  const latitude = ref('')
  const longitude = ref('')
  const p = ref('')
  const getLocation = ()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position);
        location.value = position
        console.log(location.value.coords.latitude);
        latitude.value = location.value.coords.latitude
        console.log(latitude.value);
        longitude.value = location.value.coords.longitude
        console.log(longitude.value);
        // p.value = `https://www.google.si/maps/dir/40.341373,71.819171/40.3131747,71.8182588/@${latitude.value},${longitude.value},18.42z/data=!4m4!4m3!1m1!4e1!1m0`
        // console.log(p.value);
      })
      //  40.3138542
      //  40.3131747
    }
    else{
      console.log('error');
    }
  }

  return{
    getLocation
  }
  },
  data() { 
    return {   
      fullname: "", 
      telnumber: "", 
      address: "",
  
      dense:true, 
    }; 
  }, 
  computed:{
    ...mapState(["costs"])
  },
  methods:{
    ...mapMutations(["SET_ORDER","CALCULATION_SHOT"]),
    setOrder(){
      if(this.costs.length >=1){
        const order= {
          fullname:this.fullname,
          address:this.address,
          telnumber:this.telnumber,
          ready:"",
          location:this.location,
          product:this.costs
        }
        this.SET_ORDER(order)
        this.CALCULATION_SHOT()
        alert("Sizning buyurtmangiz qabul qilindi tez orada adminlarimiz siz bilan  bog'lanishadi")
        this.setolder=false

      }
      else{
        alert("sizda hech qanday buyurtma yo'q")
      }

    }
  }
}; 
</script>
<style scoped>
.shadow-up{
  box-shadow: 3px 3px 15px 0px rgb(186, 185, 185);
}
.login{
  border-radius: 20px 0px 20px 0px;
}
.btn{
  background: linear-gradient(
   to left,
    rgba(132, 0, 255, 0.63),
    rgba(174, 0, 255, 0.63),
    rgba(255, 0, 191, 0.61)
  );
   color: beige;
}
.btn:active{
  background: linear-gradient(
   to left,
    rgba(132, 0, 255 ),
    rgba(174, 0, 255),
    rgba(255, 0, 191 )
  );
  color: beige;
}
</style>