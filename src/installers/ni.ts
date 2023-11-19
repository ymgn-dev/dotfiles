import { execa } from 'execa';
import { installHelper } from '~/utils/install-helper';

export const installNi = async () => {
  await installHelper({
    commandName: 'ni',
    requirePassword: false,
    execaAction: (execa) => {
      return execa('~/.volta/bin/npm i -g @antfu/ni', { shell: true });
    },
    overrideExistsMethod: async () => {
      try {
        await execa('ls ~/.volta/bin/ni', { shell: true });
        return true;
      } catch {
        return false;
      }
    },
  });
};
