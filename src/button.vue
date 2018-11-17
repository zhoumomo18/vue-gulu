<template>
     <button class="g-button" :class="[`icon-${iconPostion}`]" @click="changeIcon(iconclick)">
         <g-svg v-if="iconText" :name='iconText' :class="iconText"></g-svg>
         <slot></slot>
    </button>

</template>

<script>
export default {
  name: "g-button",
  data() {
    return {
      iconText:this.icon,
      iconTextNew:this.icon,
      iconclick:this.iconClick,
    };
  },
  props: {
    icon: {},
    iconPostion: {
      type: String,
      default: "left",
      validator(value) {
        return value === "right" || value === "left";
      }
    },
    iconClick:{
        type:String,
        default:'',
    }
  },
  methods: {   
    changeIcon(val) {
       if (!val) {return}
       this.iconText !== this.iconclick ? 
       this.iconText = this.iconclick : 
       this.iconText = this.iconTextNew
    }
  }
};
</script>

<style scoped lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
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
.loading {
  animation: spin 1s infinite linear;
}
</style>