import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faMinusCircle,
    faCircleNotch,
    faAtom,
 } from '@fortawesome/free-solid-svg-icons';

import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    library.add(faTrash, faSignOutAlt, faEdit, faMinusCircle, faCircleNotch, faAtom);
}

export default Icons;