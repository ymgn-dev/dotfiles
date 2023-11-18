import { installHelper } from '~/utils/install-helper';

export const installNvim = async () => {
  await installHelper({
    commandName: 'nvim',
    execaAction: (execa) => {
      return execa(
        `
        sudo -S add-apt-repository ppa:neovim-ppa/unstable
        sudo -S apt update
        sudo -S apt install -y neovim python3-neovim ripgrep python-dev python-pip python3-dev python3-pip python3.11-venv
      
        sudo -S update-alternatives --install /usr/bin/vi vi /usr/bin/nvim 60
        sudo -S update-alternatives --config vi
        sudo -S update-alternatives --install /usr/bin/vim vim /usr/bin/nvim 60
        sudo -S update-alternatives --config vim
        sudo -S update-alternatives --install /usr/bin/editor editor /usr/bin/nvim 60
        sudo -S update-alternatives --config editor
        `,
        { shell: true },
      );
    },
  });
};
