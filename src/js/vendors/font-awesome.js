import { library, dom } from '@fortawesome/fontawesome-svg-core';

// Icons
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

library.add(faTelegram, faLinkedin, faGithub);
dom.watch();
