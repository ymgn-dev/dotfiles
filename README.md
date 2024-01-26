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
curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.14"
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

| Managers | Details                            |
| -------- | ---------------------------------- |
| Rye      | https://rye-up.com/                |
| GNU Stow | https://www.gnu.org/software/stow/ |
| Volta    | https://volta.sh/                  |

| Commands      | Details                                    |
| ------------- | ------------------------------------------ |
| AWS CLI       | https://aws.amazon.com/cli/?nc1=h_ls       |
| AWS CDK       | https://aws.amazon.com/cdk/?nc1=h_ls       |
| bat           | https://github.com/sharkdp/bat             |
| delta         | https://github.com/dandavison/delta        |
| eza           | https://github.com/eza-community/eza       |
| FFmpeg        | https://ffmpeg.org/                        |
| Firebase CLI  | https://firebase.google.com/docs/cli       |
| fzf           | https://github.com/junegunn/fzf            |
| inshellisense | https://github.com/microsoft/inshellisense |
| ni            | https://github.com/antfu/ni                |
| Terraform     | https://developer.hashicorp.com/terraform  |
| tree          | http://mama.indstate.edu/users/ice/tree/   |
| XSel          | https://github.com/kfish/xsel              |

| GUIs / TUIs                                | Details                                                                    |
| ------------------------------------------ | -------------------------------------------------------------------------- |
| Visual Studio Code                         | https://code.visualstudio.com/                                             |
| Docker                                     | https://www.docker.com/                                                    |
| GNOME Shell Extension Manager              | https://mattjakeman.com/apps/extension-manager                             |
| Google Chrome                              | https://www.google.com/intl/en_US/chrome/                                  |
| Inkscape                                   | https://inkscape.org/                                                      |
| Lazygit                                    | https://github.com/jesseduffield/lazygit                                   |
| mkusb                                      | https://help.ubuntu.com/community/mkusb                                    |
| Thorium Reader                             | https://www.edrlab.org/software/thorium-reader/                            |
| Tmux                                       | https://github.com/tmux/tmux                                               |
| Ubuntu startup disk creation tool for Gtk+ | https://manpages.ubuntu.com/manpages/trusty/en/man8/usb-creator-gtk.8.html |
| VLC Media Player                           | https://www.videolan.org/vlc/index.en.html                                 |
| Wezterm                                    | https://wezfurlong.org/wezterm/index.html                                  |
| Slack                                      | https://slack.com/                                                         |

| Fonts          | Details                                 |
| -------------- | --------------------------------------- |
| HackGen        | https://github.com/yuru7/HackGen        |
| Intel One Mono | https://github.com/intel/intel-one-mono |

| Other          | Details                 |
| -------------- | ----------------------- |
| Symbolic Links | Managing it using Stow. |

## Additional Tasks

### Translate the directory name into English

```shell
LANG=C xdg-user-dirs-gtk-update
```

### Extension Manager

Please open the Extension Manager and enable the following extensions.

![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/extension-manager.png)

<details>
<summary>Here are the detailed settings for Tactile.</summary>

![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/tactile/tactile_layout1.png)
![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/tactile/tactile_layout2.png)
![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/tactile/tactile_layout3.png)
![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/tactile/tactile_layout4.png)
![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/tactile/tactile_keyboard_shortcuts.png)
![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/tactile/tactile_advanced.png)

</details>

<details>
<summary>Here are the detailed settings for Pano.</summary>

![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/pano/pano_keyboard_shortcuts.png)

</details>

### Visual Studio Code Settings

https://github.com/ymgn-dev/vscode-settings

In this repository, I am sharing my Visual Studio Code configuration files.
You can use the same settings by overwriting your local configuration files with these.
