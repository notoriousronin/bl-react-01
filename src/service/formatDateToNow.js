import formatDistanceToNow from 'date-fns/formatDistanceToNow';

function formaDateToNow(date) {
  return formatDistanceToNow(new Date(date));
}

export default formaDateToNow;
