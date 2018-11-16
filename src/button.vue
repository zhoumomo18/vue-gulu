<template>
     <button class="g-button" :class="[`icon-${iconPostion}`]">
        <svg class="icon" v-if='icon'><use :xlink:href=`#icon-${icon}`></use></svg>
        <slot></slot>
    </button>

</template>

<script>
export default {
  name: "button",
  props:['icon','iconPostion']
};
</script>

<style scoped lang="scss">
.g-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  line-height: 1em;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  & > .icon{
    margin-right: .15em
  }
  &:focus {outline: none;}
  &.icon-right{
    > .icon{order: 2; margin-left: .15em; margin-right: 0}
  }
}
</style>