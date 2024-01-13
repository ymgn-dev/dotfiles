import { installHelper } from '~/utils/install-helper';

export const installTerraform = async () => {
  await installHelper({
    commandName: 'terraform',
    execaAction: (execa) => {
      return execa(
        `
        curl "https://releases.hashicorp.com/terraform/1.6.6/terraform_1.6.6_linux_amd64.zip" -o "terraform.zip"
        unzip terraform.zip
        sudo -S install terraform /usr/local/bin
        rm -rf ./terraform*
        `,
        { shell: true },
      );
    },
  });
};
