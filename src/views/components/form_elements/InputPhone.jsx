import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function InputPhone({ country, value, onChange }) {
  // console.log(country, value);
  return (
    <PhoneInput
      // country={country}
      value={value}
      onChange={(phone, countryData) => {
        onChange && onChange(countryData.dialCode, phone);
      }}
      containerClass="custom_number_container"
      inputClass="form-control"
      inputStyle={{ borderRadius: 50, width: "100%" }}
    />
  );
}
