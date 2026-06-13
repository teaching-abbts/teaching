import { computed, ref } from "vue";
import { defineStore } from "pinia";

const SESSION_KEY = "teacher-session";

function readTeacherSession(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return window.sessionStorage.getItem(SESSION_KEY) === "1";
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
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(SESSION_KEY, "1");
    }

    return true;
  }

  function logoutTeacher(): void {
    isTeacherMode.value = false;
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem(SESSION_KEY);
    }
  }

  return {
    isTeacherMode,
    isStudentMode,
    loginTeacher,
    logoutTeacher,
  };
});
