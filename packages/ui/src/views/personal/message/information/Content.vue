<template>
  <h-detail-container :title="receiverName">
    <h-send-message-field
      :receiver-id="receiverId"
      :receiver-name="receiverName"
      :receiver-avatar="receiverAvatar"
      :dialogue-id="dialogueId"
      @send="onSendMessage()"
    ></h-send-message-field>

    <q-separator class="q-mt-md" />

    <q-list class="rounded-borders">
      <div v-for="item in tableRows" :key="item.detailId">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <h-user-avatar :id="item.senderId" :avatar="item.senderAvatar"></h-user-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">{{ item.senderName }}</q-item-label>
            <q-item-label caption lines="2">
              {{ item.content }}
            </q-item-label>
          </q-item-section>

          <q-item-section side top>{{ moment(item.createTime).fromNow() }}</q-item-section>
        </q-item>

        <q-separator />
      </div>
    </q-list>
    <h-row justify="center" class="q-mt-md">
      <h-column :cols="4">
        <h-pagination v-model="pagination.page" :max="totalPages" />
      </h-column>
    </h-row>
  </h-detail-container>
</template>

<script lang="ts">
import type { DialogueDetailEntity, DialogueDetailConditions } from '@herodotus/api';

import { HDetailContainer, HUserAvatar } from '@/components';
import { HSendMessageField } from '@/components';
import { moment } from '@herodotus/core';
import { API } from '@/configurations';
import { useEditFinish } from '@herodotus/framework';
import { useTableItem, useTable } from '@/composables/hooks';

export default defineComponent({
  name: 'MessageInformationContent',

  components: {
    HDetailContainer,
    HUserAvatar,
    HSendMessageField,
  },

  setup(props) {
    const { onFinish } = useEditFinish();
    const { editedItem } = useTableItem(API.core.dialogueContact());

    const { tableRows, totalPages, pagination, loading, toEdit, toCreate, findItems, deleteItemById, conditions } =
      useTable<DialogueDetailConditions, DialogueDetailEntity>(
        API.core.dialogueDetail(),
        'MessageDialogueDetail',
        false,
        { direction: 'ASC', properties: ['createTime'] },
        false,
      );

    const receiverId = ref('');
    const receiverName = ref('');
    const receiverAvatar = ref('');
    const dialogueId = ref('');

    const onSendMessage = () => {
      onFinish();
    };

    onMounted(() => {
      // TODO: 不知道为什么，在HSendMessageField 上直接使用 editedItem 就会出错
      dialogueId.value = editedItem.value.dialogue.dialogueId;
      receiverId.value = editedItem.value.senderId;
      receiverName.value = editedItem.value.senderName;
      receiverAvatar.value = editedItem.value.senderAvatar;
      conditions.value.dialogueId = dialogueId.value;
      findItems({ pagination: pagination.value, getCellValue: (col: any, row: any) => {} });
    });

    return {
      editedItem,
      tableRows,
      totalPages,
      pagination,
      moment,
      receiverId,
      receiverName,
      receiverAvatar,
      dialogueId,
      onSendMessage,
    };
  },
});
</script>
