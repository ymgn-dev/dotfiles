import { installHelper } from '~/utils/install-helper';

export const installLazygit = async () => {
  await installHelper({
    commandName: 'lazygit',
    execaAction: (execa) => {
      return execa(
        `
        curl -Lo lazygit.tar.gz "https://github.com/jesseduffield/lazygit/releases/latest/download/lazygit_0.40.2_Linux_x86_64.tar.gz"
        tar xf lazygit.tar.gz lazygit
        sudo -S install lazygit /usr/local/bin
        rm -rf lazygit lazygit.tar.gz
        `,
        { shell: true },
      );
    },
  });
};
