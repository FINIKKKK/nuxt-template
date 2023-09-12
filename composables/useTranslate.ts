/**
 * Хук для перевода страниц
 */
export const useTranslate = async (component: string) => {
  const lang = useCookie('lang'); // Значение в куках

  let t;
  try {
    // Импортируем нужный файл
    t = await import(`~/lang/${component}.ts`);
  } catch (error) {
    console.error(`Ошибка при импорте модуля ${component}:`, error);
  }

  // Возвращаем нужный объект
  return t.default?.[lang.value || 'ru'];
};
