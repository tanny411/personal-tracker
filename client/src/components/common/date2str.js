//Utility date to string function

export default function date2str(date) {
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");
  let str = year + "-" + month + "-" + day;
  return str;
}
