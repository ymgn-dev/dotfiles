import { createPrompt } from 'bun-promptx';
import { execa } from 'execa';

export let password = '';

export const readPassword = async () => {
  const result = createPrompt('Enter password: ', { echoMode: 'password' });
  if (!result.value) return false;

  try {
    await execa('sudo -S true', { input: `${result.value}`, shell: true });
    password = result.value;
    return true;
  } catch {
    return false;
  }
};
