<template>
  <h-column lg="2" md="2" sm="1" xs="1" :color="color">
    <q-card>
      <q-card-section class="q-pa-sm">
        <q-item class="q-pb-none q-pt-xs" :href="link" target="_blank">
          <q-item-section>
            <q-item-label class="text-h6" style="font-weight: 500; letter-spacing: 3px">{{ description }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon :name="icon" :color="color" size="30px"></q-icon>
          </q-item-section>
        </q-item>
      </q-card-section>
    </q-card>
  </h-column>
</template>

<script setup lang="ts">
defineOptions({ name: 'LinkBox' });

interface Props {
  description?: string;
  icon?: string;
  color?: string;
  link?: string;
}

defineProps<Props>();
</script>
