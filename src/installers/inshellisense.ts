import { execa } from 'execa';
import { installHelper } from '~/utils/install-helper';

export const installInshellisense = async () => {
  await installHelper({
    commandName: 'inshellisense',
    requirePassword: false,
    execaAction: (execa) => {
      return execa(
        `
        ~/.volta/bin/npm i -g node-gyp
        ~/.volta/bin/npm i -g @microsoft/inshellisense
        `,
        { shell: true },
      );
    },
    overrideExistsMethod: async () => {
      try {
        await execa('ls ~/.volta/bin/inshellisense', { shell: true });
        return true;
      } catch {
        return false;
      }
    },
  });
};
