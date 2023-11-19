import {
  installBat,
  installCode,
  installDelta,
  installDocker,
  installEza,
  installFzf,
  installGnomeShellExtensionManager,
  installGoogleChrome,
  installHackGenFont,
  installLazygit,
  installNvim,
  installRye,
  installStow,
  installThorium,
  installTmux,
  installUsbCreatorGtk,
  installVlc,
  installVolta,
  installWezterm,
} from './installers';
import { createSymbolicLinks, logger, prepareForInstallation, readPassword, renderEnding, renderTitle } from './utils';

const main = async () => {
  console.clear();
  renderTitle();

  if (!(await readPassword())) {
    throw new Error('Please enter correct password.');
  }
  await prepareForInstallation();

  // Commands
  await installBat();
  await installEza();
  await installDelta();
  await installFzf();

  // GUIs / TUIs
  await installNvim();
  await installCode();
  await installTmux();
  await installLazygit();
  await installWezterm();
  await installDocker();
  await installThorium();
  await installGoogleChrome();
  await installVlc();
  await installGnomeShellExtensionManager();
  await installUsbCreatorGtk();

  // Managers
  await installStow();
  await installRye();
  await installVolta();

  // Fonts
  await installHackGenFont();

  // Symbolic link
  await createSymbolicLinks();

  renderEnding();
  process.exit(0);
};

main().catch((err) => {
  logger.error('Aborting installation...');
  if (err instanceof Error) {
    logger.error(err);
  } else {
    logger.error('An unknown error has occurred.');
  }
  process.exit(1);
});
