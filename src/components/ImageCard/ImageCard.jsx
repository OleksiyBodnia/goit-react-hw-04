import css from "./ImageCard.module.css"
export default function ImageCard({ data, onImageClick }) {
  const handleClick = () => {
    onImageClick(data.urls.regular);
  };

  return (
    <div onClick={handleClick}>
      <img src={data.urls.small} alt="photo" className={css.photo} />
    </div>
  );
}