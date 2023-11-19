# ymgn's dotfiles

Dotfiles of the Ubuntu users, by the Ubuntu users, for the Ubuntu users.

![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/logo.png)

## Requirements

```shell
# Install Bun
curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.13"
bun upgrade

# Install Git and clone the repository into your workspace directory.
sudo apt install git
mkdir -p ~/Workspace && git clone git@github.com:ymgn-dev/dotfiles.git ~/Workspace/dotfiles
```

## Usage

```shell
cd ~/Workspace/dotfiles
bun run install
```

## Installation Overview

| Commands | Details                              |
| -------- | ------------------------------------ |
| bat      | https://github.com/sharkdp/bat       |
| eza      | https://github.com/eza-community/eza |
| delta    | https://github.com/dandavison/delta  |
| fzf      | https://github.com/junegunn/fzf      |

| GUIs / TUIs                                                  | Details                                                                    |
| ------------------------------------------------------------ | -------------------------------------------------------------------------- |
| Neovim                                                       | https://neovim.io/                                                         |
| Visual Studio Code                                           | https://code.visualstudio.com/                                             |
| Tmux                                                         | https://github.com/tmux/tmux                                               |
| Lazygit                                                      | https://github.com/jesseduffield/lazygit                                   |
| Wezterm                                                      | https://wezfurlong.org/wezterm/index.html                                  |
| Docker                                                       | https://www.docker.com/                                                    |
| Thorium Reader                                               | https://www.edrlab.org/software/thorium-reader/                            |
| Google Chrome                                                | https://www.google.com/intl/en_US/chrome/                                  |
| VLC Media Player                                             | https://www.videolan.org/vlc/index.en.html                                 |
| GNOME Shell Extension Manager                                | https://mattjakeman.com/apps/extension-manager                             |
| usb-creator-gtk ‐ Ubuntu startup disk creation tool for Gtk+ | https://manpages.ubuntu.com/manpages/trusty/en/man8/usb-creator-gtk.8.html |

| Managers | Details                            |
| -------- | ---------------------------------- |
| GNU Stow | https://www.gnu.org/software/stow/ |
| Rye      | https://rye-up.com/                |
| Volta    | https://volta.sh/                  |

| Fonts   | Details                          |
| ------- | -------------------------------- |
| HackGen | https://github.com/yuru7/HackGen |

| Other          | Details                 |
| -------------- | ----------------------- |
| Symbolic Links | Managing it using Stow. |

## Additional Tasks

Please open the Extension Manager and enable the following extensions.

![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/extension-manager.png)

<details>
<summary>Here are the detailed settings for Tactile.</summary>

![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/tactile/tactile_layout1.png)
![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/tactile/tactile_layout2.png)
![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/tactile/tactile_layout3.png)
![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/tactile/tactile_keyboard_shortcuts.png)

</details>

And, we recommend manually installing these tools and commands.

Please follow the documentation for installation.

| Commands      | Details                                    |
| ------------- | ------------------------------------------ |
| inshellisense | https://github.com/microsoft/inshellisense |
