import { installHelper } from '~/utils/install-helper';

export const installMkusb = async () => {
  await installHelper({
    commandName: 'mkusb',
    execaAction: (execa) => {
      return execa(
        `
        sudo -S add-apt-repository ppa:mkusb/ppa
        sudo -S apt update
        sudo -S apt install -y mkusb
        `,
        { shell: true },
      );
    },
  });
};
