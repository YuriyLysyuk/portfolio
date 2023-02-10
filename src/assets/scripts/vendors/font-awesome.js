import { library, dom } from '@fortawesome/fontawesome-svg-core';

// Icons
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons/faJsSquare';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5';
import { faSass } from '@fortawesome/free-brands-svg-icons/faSass';
import { faPhp } from '@fortawesome/free-brands-svg-icons/faPhp';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import { faHandSpock } from '@fortawesome/free-solid-svg-icons/faHandSpock';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faUpRightFromSquare';
import { faDog } from '@fortawesome/free-solid-svg-icons/faDog';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';

const icons = [
  faTelegram,
  faLinkedin,
  faGithub,
  faJsSquare,
  faHtml5,
  faSass,
  faPhp,
  faHandSpock,
  faXmark,
  faCode,
  faCaretRight,
  faEnvelope,
  faPhone,
  faUpRightFromSquare,
  faDog,
  faGlobe,
  faReact,
];

library.add(icons);
dom.watch();
