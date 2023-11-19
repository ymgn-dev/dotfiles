import { execa } from 'execa';
import { installHelper } from '~/utils/install-helper';

export const installHackGenFont = async () => {
  await installHelper({
    commandName: 'HackGenConsoleNF Font',
    execaAction: (execa) => {
      return execa(
        `
        wget "https://github.com/yuru7/HackGen/releases/download/v2.9.0/HackGen_NF_v2.9.0.zip"
        unzip ./HackGen_NF_v2.9.0.zip
        sudo cp -r ./HackGen_NF_v2.9.0/*.ttf /usr/local/share/fonts
        rm -rf ./HackGen_NF*
        fc-cache -vf
        `,
        { shell: true },
      );
    },
    overrideExistsMethod: async () => {
      try {
        await execa('ls /usr/local/share/fonts/HackGen*.ttf', { shell: true });
        return true;
      } catch {
        return false;
      }
    },
  });
};

// https://github.com/intel/intel-one-mono/releases/download/V1.3.0/ttf.zip
export const installIntelOneMonoFont = async () => {
  await installHelper({
    commandName: 'Intel One Mono Font',
    execaAction: (execa) => {
      return execa(
        `
        wget "https://github.com/intel/intel-one-mono/releases/download/V1.3.0/ttf.zip"
        unzip ./ttf.zip
        sudo cp -r ./ttf/*.ttf /usr/local/share/fonts
        rm -rf ./ttf*
        fc-cache -vf
        `,
        { shell: true },
      );
    },
    overrideExistsMethod: async () => {
      try {
        await execa('ls /usr/local/share/fonts/IntelOneMono*.ttf', { shell: true });
        return true;
      } catch {
        return false;
      }
    },
  });
};
