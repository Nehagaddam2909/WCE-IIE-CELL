const Question = ({ logo, title, desc }) => {
  return (
    <div className="grid grid-cols-2 space-x-4">
      <label>{title} &nbsp;
      <div className="tooltip1">
        <img src={logo} className="pr-2" />

        <div className="tooltiptext">{desc}</div>
      </div></label>
      <textarea
        accept=".pdf,.docx"
        className="p-1 outline outline-1 bg-gray-50 h-10"
      />
    </div>
  );
};

export default Question;
