import { execa } from 'execa';

export const existsCommand = async (command: string) => {
  try {
    await execa(`command -v ${command}`, { shell: true });
    return true;
  } catch {
    return false;
  }
};
