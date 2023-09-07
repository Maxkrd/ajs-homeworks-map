export default function orderByProps(object, props) {
  const result = [];
  for (const prop in object) {
    if (props.includes(prop)) {
      result.push({ key: prop, value: object[prop] });
    }
  }
  const sortedProps = Object.keys(object).sort();
  for (const prop of sortedProps) {
    if (!props.includes(prop)) {
      result.push({ key: prop, value: object[prop] });
    }
  }
  return result;
}
