# ymgn's dotfiles

Dotfiles of the Ubuntu user, by the Ubuntu user, for the Ubuntu user.

![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/logo.png)

## Requirements

- Install curl and git

```shell
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git
```

- Install Bun

```shell
curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.13"
```

- Clone this repository into your workspace directory.

```shell
mkdir -p ~/Workspace
git clone git@github.com:ymgn-dev/dotfiles.git ~/Workspace/dotfiles
```

## Usage

```shell
cd ~/Workspace/dotfiles
bun install
```

## Installation Overview

| Commands | Details                              |
| -------- | ------------------------------------ |
| bat      | https://github.com/sharkdp/bat       |
| eza      | https://github.com/eza-community/eza |
| delta    | https://github.com/dandavison/delta  |
| fzf      | https://github.com/junegunn/fzf      |

| GUIs / TUIs                                | Details                                                                    |
| ------------------------------------------ | -------------------------------------------------------------------------- |
| Visual Studio Code                         | https://code.visualstudio.com/                                             |
| Tmux                                       | https://github.com/tmux/tmux                                               |
| Lazygit                                    | https://github.com/jesseduffield/lazygit                                   |
| Wezterm                                    | https://wezfurlong.org/wezterm/index.html                                  |
| Docker                                     | https://www.docker.com/                                                    |
| Thorium Reader                             | https://www.edrlab.org/software/thorium-reader/                            |
| Google Chrome                              | https://www.google.com/intl/en_US/chrome/                                  |
| VLC Media Player                           | https://www.videolan.org/vlc/index.en.html                                 |
| Inkscape                                   | https://inkscape.org/                                                      |
| GNOME Shell Extension Manager              | https://mattjakeman.com/apps/extension-manager                             |
| Ubuntu startup disk creation tool for Gtk+ | https://manpages.ubuntu.com/manpages/trusty/en/man8/usb-creator-gtk.8.html |

| Managers | Details                            |
| -------- | ---------------------------------- |
| GNU Stow | https://www.gnu.org/software/stow/ |
| Rye      | https://rye-up.com/                |
| Volta    | https://volta.sh/                  |

| Fonts          | Details                                 |
| -------------- | --------------------------------------- |
| HackGen        | https://github.com/yuru7/HackGen        |
| Intel One Mono | https://github.com/intel/intel-one-mono |

| Other          | Details                 |
| -------------- | ----------------------- |
| Symbolic Links | Managing it using Stow. |

## Additional Tasks

### Extension Manager

Please open the Extension Manager and enable the following extensions.

![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/extension-manager.png)

<details>
<summary>Here are the detailed settings for Tactile.</summary>

![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/tactile/tactile_layout1.png)
![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/tactile/tactile_layout2.png)
![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/tactile/tactile_layout3.png)
![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/tactile/tactile_keyboard_shortcuts.png)

</details>

### Manual Installation

And, we recommend manually installing these tools and commands.
Please follow the documentation for installation.

| Commands      | Details                                    |
| ------------- | ------------------------------------------ |
| inshellisense | https://github.com/microsoft/inshellisense |

### Visual Studio Code Settings

https://github.com/ymgn-dev/vscode-settings

In this repository, I am sharing my Visual Studio Code configuration files.
You can use the same settings by overwriting your local configuration files with these.
