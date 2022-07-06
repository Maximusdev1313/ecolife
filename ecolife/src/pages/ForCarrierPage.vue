<template>
    <div class="bg-grey-3">
        <Report/>
        <Suspense>
          <ProductForCarrier/>
        </Suspense>
        
    </div>
</template>
<script>
import Report from 'src/components/ForAdminPage/Report.vue';
import ProductForCarrier from 'src/components/ForAdminPage/ProductForCarrier.vue';
export default {
  components: { Report, ProductForCarrier },
    
}
</script>
<style lang="">
    
</style>