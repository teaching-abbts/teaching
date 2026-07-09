<template>
  <v-dialog v-model="isOpen" max-width="420">
    <v-card>
      <v-card-title>{{ t("teacher-access") }}</v-card-title>
      <v-card-text>
        <v-alert
          v-if="errorMessage"
          class="mb-3"
          density="comfortable"
          type="error"
          variant="tonal"
        >
          {{ errorMessage }}
        </v-alert>
        <v-text-field
          v-model="passphrase"
          :append-inner-icon="icons.teacherLogin"
          :label="t('teacher-passphrase')"
          :placeholder="t('teacher-passphrase-placeholder')"
          type="password"
          variant="outlined"
          @keydown.enter="login"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn variant="text" @click="isOpen = false">{{ t("close") }}</v-btn>
        <v-btn color="primary" @click="login">{{ t("login") }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { icons } from "@/constants/icons";
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const authStore = useAuthStore();
const { t } = useI18n();

const isOpen = defineModel<boolean>({ required: true });
const passphrase = ref("");
const errorMessage = ref("");

function login() {
  const isValid = authStore.loginTeacher(passphrase.value);
  if (!isValid) {
    errorMessage.value = t("teacher-passphrase-invalid");
    return;
  }

  passphrase.value = "";
  errorMessage.value = "";
  isOpen.value = false;
}
</script>
