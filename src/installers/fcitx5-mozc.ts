import { installHelper } from '~/utils/install-helper';

export const installFcitx5Mozc = async () => {
  await installHelper({
    commandName: 'fcitx5',
    execaAction: (execa) => {
      return execa(
        `
        sudo -S apt install -y fcitx5-mozc
        im-config -n fcitx5
        `,
        { shell: true },
      );
    },
  });
};
