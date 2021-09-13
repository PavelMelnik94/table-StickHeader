export default function TableHead({ name }) {
  return (
    <>
      {!name ? (
        "Загружаем данные.."
      ) : (
        <div className="track">
          <div className="heading">{name}</div>
        </div>
      )}
    </>
  );
}
