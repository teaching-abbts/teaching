import { computed, ref } from "vue";
import { defineStore } from "pinia";

const SESSION_KEY = "teacher-session";

function readTeacherSession(): boolean {
  if (globalThis.window === undefined) {
    return false;
  }

  return globalThis.window.sessionStorage.getItem(SESSION_KEY) === "1";
}

export const useAuthStore = defineStore("auth", () => {
  const isTeacherMode = ref(readTeacherSession());

  const isStudentMode = computed(() => !isTeacherMode.value);

  function loginTeacher(passphrase: string): boolean {
    const configured = import.meta.env.VITE_TEACHER_PASSPHRASE?.trim();

    if (!configured || configured !== passphrase.trim()) {
      return false;
    }

    isTeacherMode.value = true;
    if (globalThis.window !== undefined) {
      globalThis.window.sessionStorage.setItem(SESSION_KEY, "1");
    }

    return true;
  }

  function logoutTeacher(): void {
    isTeacherMode.value = false;
    if (globalThis.window !== undefined) {
      globalThis.window.sessionStorage.removeItem(SESSION_KEY);
    }
  }

  return {
    isTeacherMode,
    isStudentMode,
    loginTeacher,
    logoutTeacher,
  };
});
