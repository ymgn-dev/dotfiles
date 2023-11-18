import { installHelper } from '~/utils/install-helper';

export const installFzf = async () => {
  await installHelper({
    commandName: 'fzf',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y fzf', { shell: true });
    },
  });
};
