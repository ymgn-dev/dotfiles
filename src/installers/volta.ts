import { installHelper } from '~/utils/install-helper';

export const installVolta = async () => {
  await installHelper({
    commandName: 'volta',
    requirePassword: false,
    execaAction: (execa) => {
      return execa(
        `
        curl https://get.volta.sh | bash &&
        ~/.volta/bin/volta install node &&
        ~/.volta/bin/npm i -g @antfu/ni
        ~/.volta/bin/npm i -g @microsoft/inshellisense
        `,
        { shell: true },
      );
    },
  });
};
