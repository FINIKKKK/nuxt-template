<template>
  <div class="toggle" @click="onToggle" :class="`${model && 'active'}`">
    <div class="toggle_button"></div>
  </div>
</template>

<!-- ----------------------------------------------------- -->
<!-- ----------------------------------------------------- -->

<script lang="ts" setup>
/**
 * Пропсы ----------------
 */
const props = defineProps<{
  modelValue: boolean;
}>();

/**
 * События ----------------
 */
const emits = defineEmits(['update:modelValue', 'onToggle']);

// Значение
const model = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits('update:modelValue', val);
  },
});

/**
 * Методы ----------------
 */
// Переключить
const onToggle = () => {
  emits('onToggle');
  model.value = !model.value;
};
</script>

<!-- ----------------------------------------------------- -->
<!-- ----------------------------------------------------- -->

<style lang="scss" scoped>
.toggle {
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 20px;
  background-color: rgba($gray, 0.3);
  cursor: pointer;
  transition: 0.2s;
  &.active {
    background-color: $blue;
  }
}

.toggle_button {
  position: absolute;
  top: 12.4%;
  width: 40%;
  height: 75%;
  bottom: 4px;
  left: 5%;
  background-color: $white;
  border-radius: 19px;
  transition: 0.3s;
}

.toggle.active {
  .toggle_button {
    left: 55%;
  }
}
</style>
