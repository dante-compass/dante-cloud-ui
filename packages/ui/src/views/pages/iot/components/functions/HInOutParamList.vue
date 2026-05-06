<template>
  <q-list dense bordered separator class="rounded-borders">
    <q-item v-for="(item, i) in entity" :key="i">
      <q-item-section top>
        <q-item-label class="q-mt-sm">
          参数名称:
          <span class="text-weight-medium">{{ item.name }}</span>
        </q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-btn class="gt-xs" size="12px" flat dense round icon="delete" color="red" @click="onDelete(item)" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import type { TslArgumentEntity } from "@herodotus/api";

import { remove } from "lodash-es";

defineOptions({
  name: "HParamList",
});

const entity = defineModel<Array<TslArgumentEntity>>({
  default: () => [],
});

const onDelete = (item: TslArgumentEntity) => {
  remove(entity.value, (i) => {
    return i.identifier === item.identifier;
  });
};
</script>
