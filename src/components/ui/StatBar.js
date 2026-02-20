export default function StatBar({ percentage, label, widthClass }) {
  return (
    <div className="col-xs-3 col-sm-3 col-md-3">
      <div className="statistics_split" style={{ margin: 0, padding: 0 }}>
        <div
          className={`${widthClass} h-full float-left relative bg-[#e7512f] border-2 border-[#e7512f]`}
          style={{ margin: 0, padding: 0 }}
        >
          <a className="tooltips" href="#" onClick={(e) => e.preventDefault()}>
            {percentage}%
          </a>
        </div>
      </div>
    </div>
  );
}
