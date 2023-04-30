function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_open-pic ${card.name ? "popup_opened" : ""}`}>
      <figure className="popup__figure">
        <button
          className="popup__button-close"
          type="button"
          onClick={onClose}
        />
        <img className="popup__image" src={card.link} alt={card.name} />
        <figcaption className="popup__image-descr">{card.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
