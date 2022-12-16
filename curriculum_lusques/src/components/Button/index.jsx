import style from "./Button.module.scss";

export default function Button({ outline, txtButton = "insira um texto" }) {
  const ButtonFill = () => {
    return (
      <div
        type="button"
        className="button py-2 px-4 text-white d-inline-block rounded-3 headline-sm bg-blue-400 hover-blue-outline-300"
      >
        {txtButton}
      </div>
    );
  };
  const ButtonOutline = () => {
    return (
      <div
        type="button"
        className="button py-2 px-4 d-inline-block rounded-3 headline-sm text-gray-100
        hover-gray-outline-200"
      >
        {txtButton}
      </div>
    );
  };
  return outline ? <ButtonOutline /> : <ButtonFill />;
}
