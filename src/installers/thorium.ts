import { installHelper } from '~/utils/install-helper';

export const installThorium = async () => {
  await installHelper({
    commandName: 'thorium',
    execaAction: (execa) => {
      return execa(
        `
        wget "https://www.edrlab.org/software/thorium-reader/github/debian" -O thorium.deb
        sudo -S apt install -y ./thorium.deb
        rm -rf thorium*
        `,
        { shell: true },
      );
    },
  });
};
