<template>
  <q-list v-if="hasDialogue" separator>
    <q-item v-for="(item, index) in items" :key="index">
      <q-item-section>
        <q-item-label>{{ item.senderName }}</q-item-label>
        <q-item-label caption lines="2">{{ item.content }}.</q-item-label>
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>{{ convertDate(item.createTime as Date) }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
  <h-center-label v-else text="暂没有新消息"></h-center-label>
</template>

<script setup lang="ts">
import { NotificationCategoryEnum } from "@herodotus/api";
import { useNotifications } from "@/composables/hooks";

defineOptions({ name: "HAppDialogueNotification" });

const { items, hasDialogue, convertDate } = useNotifications(NotificationCategoryEnum.DIALOGUE);
</script>
