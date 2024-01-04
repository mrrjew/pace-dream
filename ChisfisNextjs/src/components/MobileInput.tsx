import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface IMobileInputProps {
  phone: string;
  country: string;
  onChange: (phone: string) => void;
}

export const MobileInput: React.FC<IMobileInputProps> = (
  props: IMobileInputProps
) => {
  const { phone, country, onChange } = props;

  return <PhoneInput country={country} value={phone} onChange={onChange} />;
};
