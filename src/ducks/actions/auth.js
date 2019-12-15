export const SAVE_AUTH = 'SAVE_AUTH';
export function saveAuth(auth) {
  return {
    type: SAVE_AUTH,
    auth
  };
}
