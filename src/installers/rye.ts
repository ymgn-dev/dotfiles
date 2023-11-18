import { installHelper } from '~/utils/install-helper';

export const installRye = async () => {
  await installHelper({
    commandName: 'rye',
    execaAction: (execa) => {
      return execa('curl -sSf https://rye-up.com/get | bash', { shell: true });
    },
  });
};
