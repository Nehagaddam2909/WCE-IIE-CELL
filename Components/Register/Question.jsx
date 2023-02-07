const Question = ({ logo, title, desc }) => {
  return (
    <div className="flex space-x-4">
      <label>{title}</label>
      <div className="tooltip1">
        <img src={logo} className="pr-2" />

        <div className="tooltiptext">{desc}</div>
      </div>
      <textarea
        accept=".pdf,.docx"
        className="p-1 outline outline-1 bg-gray-50"
      />
    </div>
  );
};

export default Question;
