import { installHelper } from '~/utils/install-helper';

export const installUsbCreatorGtk = async () => {
  await installHelper({
    commandName: 'usb-creator-gtk',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y usb-creator-gtk', { shell: true });
    },
  });
};
