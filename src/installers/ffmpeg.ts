import { installHelper } from '~/utils/install-helper';

export const installFfmpeg = async () => {
  await installHelper({
    commandName: 'ffmpeg',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y ffmpeg', { shell: true });
    },
  });
};
