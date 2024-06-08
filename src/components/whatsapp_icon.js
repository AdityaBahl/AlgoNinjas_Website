import { whatsapp_icon } from "../pages/mls_constants";

const ChatWithUs = () => {
  window.open("https://wa.me/qr/VGZ2UFB2MP4FI1", "_blank");
};
const Whatsapp_icon = () => {
  return (
    <div>
      <img
        src={whatsapp_icon}
        id="whatsapp_icon"
        alt="whatsapp icon"
        onClick={ChatWithUs}
      />
    </div>
  );
};
export default Whatsapp_icon;
