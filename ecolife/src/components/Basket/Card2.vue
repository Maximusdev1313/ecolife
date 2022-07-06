<template>
<div>
    <CompTotal/>
    <CompPersonal class="w-100pr mt-100px"/>  
</div>
</template>

<script>
import CompPersonal from '../Registration/CompPersonal.vue';
import CompTotal from '../Registration/CompTotel.vue'
export default {
    components: { CompPersonal, CompTotal }
}
</script>

<style scoped>
.btn {
  border: none;
}



.contier {
  border-bottom: 1px solid grey;
}
</style>
