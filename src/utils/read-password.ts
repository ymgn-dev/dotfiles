import { createPrompt } from 'bun-promptx';

export let password = '';

export const readPassword = () => {
  const result = createPrompt('Enter password: ', { echoMode: 'password' });
  if (!result.value) return false;

  password = result.value;
  return true;
};
