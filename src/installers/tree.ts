import { installHelper } from '~/utils/install-helper';

export const installTree = async () => {
  await installHelper({
    commandName: 'tree',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y tree', { shell: true });
    },
  });
};
