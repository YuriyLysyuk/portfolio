import { library, dom } from '@fortawesome/fontawesome-svg-core';

// Icons
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram';
import { faVk } from '@fortawesome/free-brands-svg-icons/faVk';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

library.add(faTelegram, faVk, faGithub);
dom.watch();
