import { installHelper } from '~/utils/install-helper';

export const installCode = async () => {
  await installHelper({
    commandName: 'code',
    execaAction: (execa) => {
      return execa(
        `
        sudo -S apt-get install -y wget gpg
        wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
        sudo -S install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
        sudo -S sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
        rm -f packages.microsoft.gpg
        sudo -S apt install -y apt-transport-https
        sudo -S apt update
        sudo -S apt install -y code
        `,
        { shell: true },
      );
    },
  });
};
