import { useEffect, useRef } from "react";
const Testing = (props) => {
  const ref = useRef(null);
  const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  if (!props.show) return null;
  console.log('first')

  return (
    <div ref={ref} className="info-box">
      {props.message}
     <h1> scsd</h1>
    </div>
  );
};

export default Testing;
