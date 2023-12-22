import { installHelper } from '~/utils/install-helper';

export const installFirebase = async () => {
  await installHelper({
    commandName: 'firebase',
    execaAction: (execa) => {
      return execa('curl -sL https://firebase.tools | upgrade=true bash', { shell: true });
    },
  });
};
