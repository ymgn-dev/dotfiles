import { installHelper } from '~/utils/install-helper';

export const installVlc = async () => {
  await installHelper({
    commandName: 'vlc',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y vlc', { shell: true });
    },
  });
};
