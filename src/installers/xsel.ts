import { installHelper } from '~/utils/install-helper';

export const installXsel = async () => {
  await installHelper({
    commandName: 'xsel',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y xsel', { shell: true });
    },
  });
};
