import { installHelper } from '~/utils/install-helper';

export const installDelta = async () => {
  await installHelper({
    commandName: 'delta',
    execaAction: (execa) => {
      return execa(
        `
        wget "https://github.com/dandavison/delta/releases/download/0.16.5/git-delta-musl_0.16.5_amd64.deb" -O delta.deb
        sudo -S apt install -y ./delta.deb
        rm ./delta.deb
        `,
        { shell: true },
      );
    },
  });
};
