import chalk from 'chalk';
import { execa } from 'execa';
import { password } from './read-password';
import { spinner } from './spinner';

export const prepareForInstallation = async () => {
  try {
    spinner.start(chalk.grey('Preparing for installation.'));
    await execa(`echo ${password}`, { shell: true }).pipeStdout?.(
      execa(
        `
        sudo -S apt update &&
        sudo -S apt upgrade -y &&
        sudo -S apt full-upgrade -y &&
        sudo apt autoremove -y &&
        sudo -S apt autoclean -y
        sudo -S apt install -y git curl wget build-essential software-properties-common
        # Necessary for Pano
        sudo -S apt install -y gir1.2-gda-5.0 gir1.2-gsound-1.0
        `,
        { shell: true },
      ),
    );
    spinner.stop(chalk.green('Preparation for installation is complete.'));
  } catch (e) {
    spinner.stop(chalk.red(`An error has occurred. ${e}`));
    throw e;
  }
};
