import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state:{
      categoriy:'',
      costs:[],
      shot:"0.00",
      orders:[
        {  
          fullname:"Alimardon Mullojonov",
          address:"o'rta qishloq ko'chasi 22-uy",
          telnumber:"+998996399459",
          ready:"",
          product:[
            {
              productname:"olma",
              img:"https://cdn.quasar.dev/img/mountains.jpg",
              weight:"2kg", 
              amount:"2ta"
            },
            {
              productname:"olma",
              img:"https://cdn.quasar.dev/img/mountains.jpg",
              weight:"2kg", 
              amount:"2ta"
            },
          ]
        },
        {  
          clientfullname:"Alimardon Mullojonov",
          address:"o'rta qishloq ko'chasi 22-uy",
          telnumber:"+998996399459",
          ready:"",
          product:[
            {
              productname:"olma",
              img:"https://cdn.quasar.dev/img/mountains.jpg",
              weight:"2kg", 
              amount:"2ta"
            },
            {
              productname:"olma",
              img:"https://cdn.quasar.dev/img/mountains.jpg",
              weight:"2kg", 
              amount:"2ta"
            },
          ]
        },
        {  
          clientfullname:"Alimardon Mullojonov",
          address:"o'rta qishloq ko'chasi 22-uy",
          telnumber:"+998996399459",
          ready:"",
          product:[
            {
              productname:"olma",
              img:"https://cdn.quasar.dev/img/mountains.jpg",
              weight:"2kg", 
              amount:"2ta"
            },
          ]
        },
        {  
          clientfullname:"Alimardon Mullojonov",
          address:"o'rta qishloq ko'chasi 22-uy",
          telnumber:"+998996399459",
          ready:"",
          product:[
            {
              productname:"olma",
              img:"https://cdn.quasar.dev/img/mountains.jpg",
              weight:"2kg", 
              amount:"2ta"
            },
          ]
        },
        {  
          clientfullname:"Alimardon Mullojonov",
          address:"o'rta qishloq ko'chasi 22-uy",
          telnumber:"+998996399459",
          ready:"",
          product:[
            {
              productname:"olma",
              img:"https://cdn.quasar.dev/img/mountains.jpg",
              weight:"2kg", 
              amount:"2ta"
            },
          ],
          salom:"salom"
        },
        {  
          clientfullname:"Alimardon Mullojonov",
          address:"o'rta qishloq ko'chasi 22-uy",
          telnumber:"+998996399459",
          ready:"",
          product:[
            {
              productname:"olma",
              img:"https://cdn.quasar.dev/img/mountains.jpg",
              weight:"2kg", 
              amount:"2ta"
            },
          ],
          salom:"salom"
        },
        {  
          clientfullname:"Alimardon Mullojonov",
          address:"o'rta qishloq ko'chasi 22-uy",
          telnumber:"+998996399459",
          ready:"",
          product:[
            {
              productname:"olma",
              img:"https://cdn.quasar.dev/img/mountains.jpg",
              weight:"2kg", 
              amount:"2ta"
            },
          ],
        },
        
      ],
    },
    
    mutations:{
      // cartigoriyani chaqirib olish
      FETCH_CATEGORIYA:(state,elements)=>{
        state.categoriy==elements
        console.log(state.categoriy);
      } ,
      // main yoki maxsulotnig pagesidan bu yerga malumot kelib state ichidagi costs obyektiga malumot kelib tushyabdi
      ADD_BACKET:(state,cost)=>{
        state.costs.push(cost)
        console.log(state.costs);
         
      },
      // bu yerda umumiy shot xisoblanadi calculation shot
      CALCULATION_SHOT:(state)=>{
        state.shot=0
        for(let i=0;i< state.costs.length; i++){
          state.shot+=state.costs[i].overallPrice*1
        }
        console.log(state.shot);
      },
      // backed pageda maxsulotni olishdan oldingi o'zgarishlar 
      EDIT_BACKET:(state,i,modifiedCost)=>{
        state.costs[i]=modifiedCost
      },
      // maxsulot sonini o'zgartirish 1- qo'shish 2- ayrish
      INCREMENT:(state,i)=>{
        console.log("pojiuy"+i);
        state.costs[i].amount++
        state.costs[i].overallPrice=Math.round10(state.costs[i].amount*state.costs[i].price , -2)
      },
      DECREMENT:(state,i)=>{
        state.costs[i].amount--
        state.costs[i].overallPrice=Math.round10(state.costs[i].amount*state.costs[i].price , -2)
      },
      // karzinkaga qo'shilgan malumotlarin o'chirish uchun
      REMOWE:(state,i)=>{
        state.costs.splice(i ,1 )
      },
      // register pageda malumotlarni jo'natish tugmasi bosilganda xaridorning ma'lumotlar va xarajatlar ro'yxati state ichidagi orders ichiga kelib tushadi
      SET_ORDER:(state,order)=>{
        state.orders.unshift(order)  
        state.costs=[]
      },
      // ordersga malumot qo'shish
      // admin paga
      PREPARATION:(state,i)=>{
        state.orders[i].ready="Preparation"

      },
      READY:(state,i)=>{
        state.orders[i].ready="Ready"

      },
      SET_OUT:(state ,i)=>{
        state.orders[i].ready="SetOut"
      },
      Delivered:(state ,i)=>{
        state.orders[i].ready="Delivered"
      },
      


    },
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
