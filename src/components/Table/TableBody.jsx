export default function TableBody(props) {
  const { id, name, date, abbreviation, scale, officialrate } = props;
  return (
    <>
      <div className="tracks">
        <div className="track table-list test" id="">
          <div className="entry">
            <h3>{id}</h3>
          </div>
          <div className="entry">
            <h3>{date}</h3>
          </div>
          <div className="entry">
            <h3>{name}</h3>
          </div>
          <div className="entry">
            <h3>{abbreviation}</h3>
          </div>
          <div className="entry">
            <h3>{scale}</h3>
          </div>
          <div className="entry">
            <h3>{officialrate}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
