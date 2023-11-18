import { installHelper } from '~/utils/install-helper';

export const installStow = async () => {
  await installHelper({
    commandName: 'stow',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y stow', { shell: true });
    },
  });
};
