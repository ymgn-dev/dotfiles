import { installHelper } from '~/utils/install-helper';

export const installGnomeShellExtensionManager = async () => {
  await installHelper({
    commandName: 'extension-manager',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y gnome-shell-extension-manager', { shell: true });
    },
  });
};
