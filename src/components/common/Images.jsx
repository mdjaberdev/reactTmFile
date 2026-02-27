const Images = ({ imgSrc, imgAlt, className }) => {
  return (
    <div>
      <img src={imgSrc} alt={imgAlt} className={`${className}`} />
    </div>
  );
};

export default Images;
