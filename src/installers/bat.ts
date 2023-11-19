import { installHelper } from '~/utils/install-helper';

export const installBat = async () => {
  await installHelper({
    commandName: 'batcat',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y bat', { shell: true });
    },
  });
};
