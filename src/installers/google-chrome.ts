import { installHelper } from '~/utils/install-helper';

export const installGoogleChrome = async () => {
  await installHelper({
    commandName: 'google-chrome',
    execaAction: (execa) => {
      return execa(
        `
        wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -O chrome.deb
        sudo -S apt install -y ./chrome.deb
        rm ./chrome.deb
        `,
        { shell: true },
      );
    },
  });
};
