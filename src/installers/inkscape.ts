import { installHelper } from '~/utils/install-helper';

export const installInkscape = async () => {
  await installHelper({
    commandName: 'inkscape',
    execaAction: (execa) => {
      return execa(
        `
        sudo -S add-apt-repository ppa:inkscape.dev/stable
        sudo -S apt update
        sudo -S apt install -y inkscape
        `,
        { shell: true },
      );
    },
  });
};
