import { installHelper } from '~/utils/install-helper';

export const installRye = async () => {
  await installHelper({
    commandName: 'rye',
    execaAction: (execa) => {
      // https://github.com/mitsuhiko/rye/issues/246
      return execa('curl -sSf https://rye-up.com/get | RYE_INSTALL_OPTION="--yes" bash', { shell: true });
    },
  });
};
