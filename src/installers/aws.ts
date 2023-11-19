import { installHelper } from '~/utils/install-helper';

export const installAws = async () => {
  await installHelper({
    commandName: 'aws',
    execaAction: (execa) => {
      return execa(
        `
        curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
        unzip awscliv2.zip
        sudo -S ./aws/install
        rm -rf ./aws*
        `,
        { shell: true },
      );
    },
  });
};
