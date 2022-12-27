import style from "./Button.module.scss";

export default function Button({
  outline,
  txtButton = "insira um texto",
  className,
}) {
  const ButtonFill = () => {
    return (
      <div
        type="button"
        className={`button py-2 px-4 text-white d-inline-block rounded-3 headline-md title-res-lg bg-blue-400 hover-blue-outline-300 ${className}`}
      >
        {txtButton}
      </div>
    );
  };
  const ButtonOutline = () => {
    return (
      <div
        type="button"
        className={`button button-outline py-2 px-4 d-inline-block rounded-3 headline-md title-res-lg text-gray-100
        hover-gray-outline-200 ${className}`}
      >
        {txtButton}
      </div>
    );
  };
  return outline ? <ButtonOutline /> : <ButtonFill />;
}
