/* eslint-disable no-param-reassign */
export function formatToCellphone(celular: string): string {
  celular = celular.replace(/[^\d]/g, '');

  celular = celular.replace(/(\d{2})(\d{5})(\d{4})/,
    (_, arg1, arg2, arg3) => `(${arg1}) ${arg2}-${arg3}`);

  return celular;
}
