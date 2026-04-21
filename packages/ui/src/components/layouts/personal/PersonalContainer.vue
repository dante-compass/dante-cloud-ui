<template>
  <h-container wider="center" :offset="6">
    <h-row class="justify-center">
      <h-column :cols="2">
        <q-page-container>
          <q-page class="q-pt-md">
            <q-card>
              <q-item>
                <q-item-section avatar>
                  <h-user-avatar rounded size="48px" from-store></h-user-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label class="text-h5">{{ username }}</q-item-label>
                </q-item-section>
              </q-item>

              <q-list bordered padding class="rounded-borders">
                <layout-menu-items :items="menuItems" :level="0"></layout-menu-items>
              </q-list>
            </q-card>
          </q-page>
        </q-page-container>
      </h-column>
      <h-column :cols="10"><layout-container></layout-container></h-column>
    </h-row>
  </h-container>
</template>

<script setup lang="ts">
import { useAuthenticationStore, useElementStore } from "@herodotus/framework";

import { LayoutContainer, HUserAvatar } from "../common";

defineOptions({ name: "PersonalContainer", components: { LayoutContainer, HUserAvatar } });

const authenticationStore = useAuthenticationStore();

const username = authenticationStore.username;

const store = useElementStore();

const menuItems = computed(() => {
  return store.personalMenus;
});
</script>
