import { installHelper } from '~/utils/install-helper';

export const installWezterm = async () => {
  await installHelper({
    commandName: 'wezterm',
    execaAction: (execa) => {
      return execa(
        `
        wget "https://github.com/wez/wezterm/releases/download/20230712-072601-f4abf8fd/wezterm-20230712-072601-f4abf8fd.Ubuntu22.04.deb" -O wezterm.deb
        sudo -S apt install -y ./wezterm.deb
        rm -rf wezterm*
        `,
        { shell: true },
      );
    },
  });
};
