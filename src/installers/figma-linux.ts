import { installHelper } from '~/utils/install-helper';

export const installFigmaLinux = async () => {
  await installHelper({
    commandName: 'figma-linux',
    execaAction: (execa) => {
      return execa(
        `
        wget https://github.com/Figma-Linux/figma-linux/releases/download/v0.11.3/figma-linux_0.11.3_linux_amd64.deb -O figma.deb
        sudo -S apt install -y ./figma.deb
        rm ./figma.deb
        `,
        { shell: true },
      );
    },
  });
};
