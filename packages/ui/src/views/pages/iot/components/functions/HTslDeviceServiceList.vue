<template>
  <q-card>
    <q-card-section>
      <q-list bordered class="rounded-borders" padding>
        <q-item-label header>{{ header }}</q-item-label>
        <q-item v-for="(item, index) in items" :key="index" clickable v-ripple @click="onClick(item)">
          <q-item-section avatar>
            <q-icon color="primary" name="mdi-message-arrow-right" />
          </q-item-section>
          <q-item-section>
            <q-item-label lines="1">{{ item.name }}</q-item-label>
            <q-item-label caption lines="2">{{ item.identifier }}</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-icon color="grey" name="mdi-chevron-right" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { TslFunctionEntity } from "@herodotus/api";

import { ref, computed } from "vue";

defineOptions({
  name: "HTslDeviceServiceList",
});

const props = defineProps({
  modelValue: { type: Object as PropType<TslFunctionEntity>, default: () => ({}) },
  items: {
    type: Array as PropType<Array<TslFunctionEntity>>,
    default: () => [],
    required: true,
  },
  header: { type: String, required: true },
});

const emit = defineEmits(["update:modelValue"]);

const selected = computed({
  get: () => props.modelValue,
  set: (newValue) => {
    emit("update:modelValue", newValue);
  },
});

const items = ref<Array<TslFunctionEntity>>([]);

const onClick = (item: TslFunctionEntity) => {
  selected.value = item;
};
</script>
