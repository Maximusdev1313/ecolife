<template >
    <div class="w-100pr p-50px ">
        <div class="w-100pr text-center fs-22px">
            Buyurtmalar
        </div>
        <div class="w-100pr row justify-between wrap ">
           
            <div
                v-for="(order,i) in OrdersApi"
                :key="i">
                    <!-- bitta maxsulot xarid qilganlar uchun -->
                <q-card 
                    :class="order.ready" 
                    class="my-card w-300px p-4pr mt-50px "
                    v-if="order.orderForUser.length==1 ? true :false"
                >
                    

                    <q-card-section>                        
                        <q-expansion-item
                            v-for="product in order.orderForUser" :key="product"
                            expand-separator
                            icon="perm_identity"
                            label="Maxsulot"
                            :caption="product.product_name"
                            class="text-grey-7 br-5px bg-grey-2 q-mt-md"
                        >
                            <q-card>
                                <q-card-section >
                                    <div class="w-100pr">
                                        <div class="fs-16px">Nomi:{{product.product_name}}</div>
                                        <q-separator  size="1px" class="bg-grey-7" />
                                    </div>
                                    <div v-if="product.weight != null ? true : false" class="w-100pr">
                                        <div class="fs-16px">Vazni: {{product.weight}}</div>
                                        <q-separator  size="1px" class="bg-grey-7" />
                                    </div>
                                    <div v-if="product.quantity != null ? true : false" class="w-100pr">
                                        <div class="fs-16px">Soni:{{product.quantity}} </div>
                                        <q-separator  size="1px" class="bg-grey-7" />
                                    </div>
                                    <div v-if="product.litr != null ? true : false" class="w-100pr">
                                        <div class="fs-16px">Litri:{{product.litr}} </div>
                                        <q-separator  size="1px" class="bg-grey-7" />
                                    </div>
                                    <div class="w-100pr">
                                        <div class="fs-16px">Maxsulot narxi: {{ product.summa}} So'm </div>
                                        <q-separator  size="1px" class="bg-grey-7" />
                                    </div>
                                    <div class="w-100pr">
                                        <div v-if="product.quantity != null ? true : false" class="fs-16px">Jami maxsulot narxi: {{ product.summa * product.quantity}} So'm</div>
                                        <div v-if="product.weight != null ? true : false" class="fs-16px">Jami maxsulot narxi: {{ product.summa * product.weight}} So'm </div>
                                        <q-separator  size="1px" class="bg-grey-7" />
                                    </div>
                                </q-card-section>
                            </q-card>
                        </q-expansion-item>
                        <div >
                            <div class="q-mt-sm">
                                <div class="fs-18px ">Oluvchi: {{order.userName}}</div>
                                <q-separator  size="1px" class="bg-dark" />
                            </div>
                            <div  class="q-mt-sm">
                                <div class="fs-18px ">Tel Raqami: {{order.phoneNumber}}</div>
                                <q-separator  size="1px" class="bg-dark" />
                            </div>
                            <div class="q-mt-sm">
                                <div class="fs-18px ">Manzili: {{order.address}}</div>
                                <q-separator  size="1px" class="bg-dark" />
                            </div>
                            <div class="w-100pr">
                                <div class="fs-16px">Umumiy maxsulotlar Narxi :{{order.total}} </div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                        </div>
                    </q-card-section>
                    
                    <q-card-section class="q-pt-none ">
                        <div class="w-100pr row justify-center">
                            <q-btn @click="SetOut(i)" :disable="order.ready.length==5 ? false :true" class="bg-green text-white">Yetkazish</q-btn>
                        </div>                        
                    </q-card-section>
                </q-card>
                 <!-- ikki va undan ko'p maxsulot xarid qilganlar uchun -->
                <div 
                    class="dblcard mt-50px bg-w br-20px"  
                    v-if="order.orderForUser.length > 1 ? true :false" 
                    :class="order.ready" 
                >
                
                    <div  class="  row justify-around">
                        <div v-for="product in order.orderForUser" :key="product" class=" m-30px bg-white  br-10px products p-20px w-300px">
                            <q-expansion-item
                                class="bg-grey-2 br-5px m-10px "
                                expand-icon-toggle
                                expand-separator
                                icon="perm_identity"
                                label="Maxsulot"
                                :caption="product.product_name"
                            >
                                <q-card>
                                    <q-card-section>
                                        <div class="w-100pr">
                                        <div class="fs-16px">Nomi:{{product.product_name}}</div>
                                        <q-separator  size="1px" class="bg-grey-7" />
                                    </div>
                                    <div v-if="product.weight != null ? true : false" class="w-100pr">
                                        <div class="fs-16px">Vazni: {{product.weight}}</div>
                                        <q-separator  size="1px" class="bg-grey-7" />
                                    </div>
                                    <div v-if="product.quantity != null ? true : false" class="w-100pr">
                                        <div class="fs-16px">Soni:{{product.quantity}} </div>
                                        <q-separator  size="1px" class="bg-grey-7" />
                                    </div>
                                    <div v-if="product.litr != null ? true : false" class="w-100pr">
                                        <div class="fs-16px">Litri:{{product.litr}} </div>
                                        <q-separator  size="1px" class="bg-grey-7" />
                                    </div>
                                    <div class="w-100pr">
                                        <div class="fs-16px">Maxsulot narxi: {{ product.summa}} So'm </div>
                                        <q-separator  size="1px" class="bg-grey-7" />
                                    </div>
                                    <div class="w-100pr">
                                        <div v-if="product.quantity != null ? true : false" class="fs-16px">Jami maxsulot narxi: {{ product.summa * product.quantity}} So'm</div>
                                        <div v-if="product.weight != null ? true : false" class="fs-16px">Jami maxsulot narxi: {{ product.summa * product.weight}} So'm </div>
                                        <q-separator  size="1px" class="bg-grey-7" />
                                    </div>
                                    </q-card-section>
                                </q-card>
                            </q-expansion-item>
                        </div> 
                            
                        
                    </div>
                    <div class="w-100pr row justify-center pl-50px pr-50px">
                        <div class="w-100pr">
                            <div class="fs-16px">Oluvchi:{{order.userName}}</div>
                            <q-separator  size="1px" class="bg-grey-7" />
                        </div>
                        <div class="w-100pr">
                            <div class="fs-16px">Tel raqami: {{order.phoneNumber}}</div>
                            <q-separator  size="1px" class="bg-grey-7" />
                        </div>
                        <div class="w-100pr">
                            <div class="fs-16px">Manzili:{{order.address}} </div>
                            <q-separator  size="1px" class="bg-grey-7" />
                        </div>
                        <div class="w-100pr">
                            <div class="fs-16px">Umumiy maxsulotlar Narxi :{{order.total}} </div>
                            <q-separator  size="1px" class="bg-grey-7" />
                        </div>
                    </div>
                    <div class="w-100pr h-70px mt-20px  ">
                        <div class="w-100pr row justify-center">
                            <q-btn  @click="SetOut(i)" :disable="order.ready.length==5 ? false :true" padding="10px 20px" class="text-white bg-green">Yetkazish</q-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
import {ref, onMounted} from 'vue';
import axios from "axios";
export default {
    setup(){
        const OrdersApi=ref([]) 
        const a=ref(0)
        onMounted(()=>{
            const getComment = async () => {
                try {
                    const Fetch_Product = await axios.get('http://adminmax.pythonanywhere.com/user/');
                    OrdersApi.value = Fetch_Product.data;
                    console.log(OrdersApi.value[0].orderForUser.length);
                    
                } 
                catch (err) {
                    console.log(err);
                }

            };
            
            for(let i=0; i<2;i++){
                a.value++
                if(a.value==1){
                    let TimeOff=setInterval(() => getComment() , 1000);
                setTimeout(()=>{
                    clearInterval(TimeOff)
                },2000)
                }
                else{
                    setInterval(() => getComment() , 20000)
                }
            }
            
        })
        return{
            OrdersApi
        }
    },
    data() {
        return {
            
        }
    },
    methods:{
        ...mapMutations(["SET_OUT"]),
        SetOut(i){
            this.SET_OUT(i)
        },
    },
}
</script>
<style scoped>
    .bg-w{
        background: white;
    }
    .w-expansion{
        width: 50%;
    }
    .q-item{
        padding: 0px;
    }
    .q-card__section--vert {
    padding: 8px;
    } 
    .Preparation{
        background:  linear-gradient(
            to bottom,
            rgb(30, 0, 255),
            rgb(179, 0, 255),
            rgb(225, 0, 255),
            rgb(255, 0, 128) 
        );  
    }
    .ready{
        background:  linear-gradient(
            to bottom,
            red,
            rgb(255, 47, 0),
            rgb(255, 111, 0),
            rgb(255, 208, 0) 
        );  
    }
    .SetOut{
        background:  linear-gradient(
            to bottom,
            rgb(255, 128, 0),
            rgb(225, 255, 0),
            rgb(170, 255, 0),
            rgb(0, 255, 128) 
        ); 
    }
    .Delivered{
        background:  linear-gradient(
            to bottom,
            rgb(94, 255, 0),
            rgb(0, 255, 166),
            rgb(0, 170, 255) 
        ); 
    }
    .products{
        box-shadow: 2px 2px 35px 0px  rgb(189, 186, 186);
    }
    @media screen and (max-width:730px) {
        .justify-between{
            justify-content: center;
        }
        .w-btn{
            width: 100%;
            margin-bottom: 20px;
        }
        .pb-20px{
            padding-bottom: 0px;
        }
    }
    @media screen and (max-width:840px) {
        .dblcard{
            width:350px ;
        }
        .pl-50px{
            padding-left: 20px;
        }
        .pr-50px{
            padding-right: 20px;
        }
    }
    @media screen and (min-width:841px) and ( max-width:1200px) {
        .dblcard{
            width:750px ;
            
        }
    }
    
</style>
<!-- <div class="w-100pr row justify-center">
    <q-btn class="bg-green text-white">Yetkazish</q-btn>
</div> -->