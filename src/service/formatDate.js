import { compareAsc, format } from 'date-fns';

function formatDate(date) {
  return format(new Date(date), 'Pp');
}

export default formatDate;
