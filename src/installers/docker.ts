import { installHelper } from '~/utils/install-helper';

export const installDocker = async () => {
  await installHelper({
    commandName: 'docker',
    execaAction: (execa) => {
      return execa(
        `
        # Add Docker's official GPG key:
        sudo -S apt update
        sudo -S apt install ca-certificates curl gnupg
        sudo -S install -m 0755 -d /etc/apt/keyrings
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo -S gpg --dearmor -o /etc/apt/keyrings/docker.gpg
        sudo -S chmod a+r /etc/apt/keyrings/docker.gpg

        # Add the repository to Apt sources:
        echo \
        "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
        "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
        sudo -S tee /etc/apt/sources.list.d/docker.list > /dev/null
        sudo -S apt-get update
        sudo -S apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
        `,
        { shell: true },
      );
    },
  });
};
