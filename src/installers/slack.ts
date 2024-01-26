import { installHelper } from '~/utils/install-helper';

export const installSlack = async () => {
  await installHelper({
    commandName: 'slack',
    execaAction: (execa) => {
      return execa(
        `
        wget https://downloads.slack-edge.com/releases/linux/4.36.138/prod/x64/slack-desktop-4.36.138-amd64.deb -O slack.deb
        sudo -S apt install -y ./slack.deb
        rm ./slack.deb
        `,
        { shell: true },
      );
    },
  });
};
