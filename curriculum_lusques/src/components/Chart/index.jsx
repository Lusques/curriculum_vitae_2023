import Button from "../Button";
import style from "./Chart.module.scss";

const information = [
  {
    title: "Layouts Responsivos | Out/2021 1",
    info: "Uso de css e mediaquery para desenvolver layouts responsivos. 1",
    link: "Link",
  },
  {
    title: "Layouts Responsivos | Out/2021 2",
    info: "Uso de css e mediaquery para desenvolver layouts responsivos. 2",
    link: "Link",
  },
  {
    title: "Layouts Responsivos | Out/2021 3",
    info: "Uso de css e mediaquery para desenvolver layouts responsivos. 3",
    link: "Link",
  },
  {
    title: "Layouts Responsivos | Out/2021 3",
    info: "Uso de css e mediaquery para desenvolver layouts responsivos. 3",
    sublist: [
      {
        title: "Sublista - Layouts Responsivos | Out/2021 3",
        info: "Uso de css e mediaquery para desenvolver layouts responsivos. 3",
      },
      {
        title: "Sublista - Layouts Responsivos | Out/2021 3",
        info: "Uso de css e mediaquery para desenvolver layouts responsivos. 3",
      },
    ],
  },
];
const ListItem = (item) => {
  return (
    <>
      <li className={`mb-3 ${style.list_item}`}>
        {item.title ? <p className="title-md">{item.title}</p> : null}
        {item.info ? <p className="body-sm">{item.info}</p> : null}
        {item.link ? (
          <a href={item.link} target="__blank">
            <Button className="body-res-sm" txtButton="Certificado" outline />
          </a>
        ) : null}
        {item.sublist ? Sublist(item.sublist) : null}
      </li>
    </>
  );
};
const Sublist = (elements) => {
  return (
    <>
      <ul className={`list-unstyled text-white ${style.list} ${style.sublist}`}>
        {elements.map((item, i) => (
          <>{ListItem(item)}</>
        ))}
      </ul>
    </>
  );
};

export default function Chart({ array = information }) {
  return (
    <ul className={`list-unstyled text-white ${style.list}`}>
      {array.map((item, i) => (
        <>{ListItem(item)}</>
      ))}
    </ul>
  );
}
