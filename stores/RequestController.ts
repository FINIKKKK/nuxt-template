import { defineStore } from 'pinia';

interface TError {
  [key: string]: any;
}

interface TLoading {
  [key: string]: boolean;
}

/**
 * --------------------------------
 * Хранилище данных запросов
 * --------------------------------
 */
export const useRequestStore = defineStore('requestController', () => {
  /**
   * Свойства ----------------
   */
  const errors: Ref<TError> = ref({}); // Ошибки
  const loading: Ref<TLoading> = ref({}); // Загрузка

  /**
   * Методы ----------------
   */
  const addErrors = (value: TError) => {
    const key = Object.keys(value)[0];
    errors.value[key] = value[key];
  };
  const addIsLoading = (value: TLoading) => {
    const key = Object.keys(value)[0];
    loading.value[key] = value[key];
  };

  // Возращаем данные
  return {
    errors,
    loading,
    addErrors,
    addIsLoading,
  };
});
