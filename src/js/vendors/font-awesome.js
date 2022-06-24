import { library, dom } from '@fortawesome/fontawesome-svg-core';

// Icons
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

library.add(faTelegram, faLinkedin, faGithub);
const icons = [faTelegram, faLinkedin, faGithub, faXmark];

library.add(icons);
dom.watch();
