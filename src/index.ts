import {
  installAws,
  installBat,
  installCode,
  installDelta,
  installDocker,
  installEza,
  installFzf,
  installGnomeShellExtensionManager,
  installGoogleChrome,
  installHackGenFont,
  installInkscape,
  installInshellisense,
  installIntelOneMonoFont,
  installLazygit,
  installNi,
  installRye,
  installStow,
  installThorium,
  installTmux,
  installUsbCreatorGtk,
  installVlc,
  installVolta,
  installWezterm,
  installXsel,
} from './installers';
import { createSymbolicLinks, logger, prepareForInstallation, readPassword, renderEnding, renderTitle } from './utils';

const main = async () => {
  console.clear();
  renderTitle();

  if (!(await readPassword())) {
    throw new Error('Please enter correct password.');
  }
  await prepareForInstallation();

  // Managers
  logger.info('\nManagers');
  await installStow();
  await installRye();
  await installVolta();

  // Commands
  logger.info('\nCommands');
  await installBat();
  await installEza();
  await installDelta();
  await installFzf();
  await installInshellisense();
  await installNi();
  await installXsel();
  await installAws();

  // GUIs / TUIs
  logger.info('\nGUIs / TUIs');
  await installCode();
  await installTmux();
  await installLazygit();
  await installWezterm();
  await installDocker();
  await installThorium();
  await installGoogleChrome();
  await installVlc();
  await installInkscape();
  await installGnomeShellExtensionManager();
  await installUsbCreatorGtk();

  // Fonts
  logger.info('\nFonts');
  await installHackGenFont();
  await installIntelOneMonoFont();

  // Symbolic link
  logger.info('\nSymbolic links');
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
