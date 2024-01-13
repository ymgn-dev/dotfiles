import { execa } from 'execa';
import { installHelper } from '~/utils/install-helper';

export const installCdk = async () => {
  await installHelper({
    commandName: 'cdk',
    requirePassword: false,
    execaAction: (execa) => {
      return execa('~/.volta/bin/npm i -g aws-cdk', { shell: true });
    },
    overrideExistsMethod: async () => {
      try {
        await execa('ls ~/.volta/bin/cdk', { shell: true });
        return true;
      } catch {
        return false;
      }
    },
  });
};
