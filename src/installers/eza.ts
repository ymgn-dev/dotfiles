import { installHelper } from '~/utils/install-helper';

export const installEza = async () => {
  await installHelper({
    commandName: 'eza',
    execaAction: (execa) => {
      return execa(
        // https://github.com/eza-community/eza/blob/main/INSTALL.md#debian-and-ubuntu
        `
        sudo -S apt install -y gpg
        sudo mkdir -p /etc/apt/keyrings
        wget -qO- https://raw.githubusercontent.com/eza-community/eza/main/deb.asc | sudo gpg --dearmor -o /etc/apt/keyrings/gierens.gpg
        echo "deb [signed-by=/etc/apt/keyrings/gierens.gpg] http://deb.gierens.de stable main" | sudo tee /etc/apt/sources.list.d/gierens.list
        sudo chmod 644 /etc/apt/keyrings/gierens.gpg /etc/apt/sources.list.d/gierens.list
        sudo apt update
        sudo apt install -y eza
        `,
        { shell: true },
      );
    },
  });
};
