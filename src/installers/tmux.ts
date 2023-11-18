import { installHelper } from '~/utils/install-helper';

export const installTmux = async () => {
  await installHelper({
    commandName: 'tmux',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y tmux', { shell: true });
    },
  });
};
