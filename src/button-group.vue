<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'buttonGroup',
    mounted(){
    //    console.log(this.$el); 拿到所有便签
    //    console.log(this.$children); 拿到模板
    //    console.log(this.$el.children);     拿到模板下面的标签名
     for (let node of this.$el.children){
         let name = node.nodeName.toLowerCase()
         if (name !== 'button') {
             console.warn(`g-button-group的子元素应该是g-button，但是您写的是${name}`);
         }
     }
    }
}
</script>
<style lang="scss" scoped>
    .g-button-group{
        display: inline-flex;
        vertical-align: middle;
        > .g-button{
            border-radius: 0;
            margin-left: -1px;
           &:last-child{
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
           }
           &:first-child{
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
           }
           &:hover{
               z-index: 1;
               position: relative;
           }
        }
    
    }
</style>


