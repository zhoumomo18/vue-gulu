<template>
     <button class="g-button" :class="[`icon-${iconPostion}`]">
         <g-svg v-if="icon" :name='icon'></g-svg>
        <slot></slot>
    </button>

</template>

<script>
export default {
  name: "g-button",
  props: {
    icon: {},
    iconPostion: {
      type: String,
      default: "left",
      validator(value) {
        return value === "right" || value === "left";
      }
    }
  }
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
  & > .icon {
    margin-right: 0.15em;
  }
  &:focus {
    outline: none;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.15em;
      margin-right: 0;
    }
  }
}
</style>