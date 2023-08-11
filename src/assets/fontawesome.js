// start fontawesome support
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret, faSpinner } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faSpinner);
// end fotawesome icon supoort

export default FontAwesomeIcon;