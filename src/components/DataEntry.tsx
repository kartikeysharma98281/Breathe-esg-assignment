import { FunctionComponent } from "react";
import Action2 from "../assets/Action2.png"
import Action3 from "../assets/Action3.png"

export type DataEntryType = {
  className?: string;
};

const assessments = [
  {
    title: "Assessment 1",
    type: "BRSR",
    suppliers: "20",
    score: "-",
    risk: { level: "Medium", color: "bg-warning-amber" },
    status: { text: "pending", color: "bg-indianred" },
    result: "-",
  },
  {
    title: "Assessment 2",
    type: "BRSR",
    suppliers: "25",
    score: "98",
    risk: { level: "Low", color: "bg-blockui-green" },
    status: { text: "complete", color: "bg-forestgreen" },
    result: "View",
  },
  {
    title: "Assessment 3",
    type: "BRSR",
    suppliers: "35",
    score: "22",
    risk: { level: "High", color: "bg-error-red-trial" },
    status: { text: "complete", color: "bg-forestgreen" },
    result: "View",
  },
  {
    title: "Assessment 3",
    type: "Custom",
    suppliers: "49",
    score: "23",
    risk: { level: "Medium", color: "bg-warning-amber" },
    status: { text: "complete", color: "bg-forestgreen" },
    result: "View",
  },
  {
    title: "Assessment 3",
    type: "Custom",
    suppliers: "100",
    score: "42",
    risk: { level: "Medium", color: "bg-warning-amber" },
    status: { text: "complete", color: "bg-forestgreen" },
    result: "View",
  },
];

const DataEntry: FunctionComponent<DataEntryType> = ({ className = " font-sans" }) => {
  return (
    <div
      className={`w-[1200px] rounded-lg box-border max-w-full h-[335px] overflow-hidden flex flex-col items-start justify-start text-left text-base text-textui-green font-semibold-12 border-[1px] border-solid border-grey-lightest ${className}`}
    >
      <div className="self-stretch bg-grey-light-block flex flex-col items-start justify-start py-0 px-6 text-xs text-celestial-grey-cg-700">
        <div className="self-stretch flex flex-row items-start justify-between py-4 px-0 text-center items-center ">
          {["ASSESSMENT TITLE", "TYPE", "NO. OF SUPPLIERS", "SCORE", "RISK CLASSIFICATION", "STATUS", "Result", "ACTIONS"].map((header, index) => (
            <b key={index} className="w-[125px] relative leading-[150%] uppercase inline-block shrink-0">
              {header}
            </b>
          ))}
        </div>
      </div>
      {assessments.map((assessment, index) => (
        <div key={index} className="self-stretch bg-celestial-hue-celestial-light flex flex-row items-center justify-center py-4 px-6">
          <div className="flex-1 flex flex-row items-center justify-between">
            {/* <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="/cell-11.svg" /> */}

  <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-checked-checkbox"  />
            <div className="w-[125px] flex flex-row items-center justify-start">
              <div className="relative leading-[150%] font-semibold">{assessment.title}</div>
            </div>
            <div className="w-[100px] flex flex-row items-center justify-start text-celestial-grey-cg-700">
              <div className="flex-1 relative leading-[150%]">{assessment.type}</div>
            </div>
            <div className="w-[108px] flex flex-row items-center justify-start text-celestial-grey-cg-700">
              <div className="relative leading-[150%]">{assessment.suppliers}</div>
            </div>
            <div className="w-[77px] flex flex-row items-center justify-start text-celestial-grey-cg-700">
              <div className="relative leading-[150%]">{assessment.score}</div>
            </div>
            <div className="w-[127px] flex flex-row items-center justify-start gap-[6px] text-celestial-grey-cg-500">
              <div className={`w-2.5 relative rounded-[50%] ${assessment.risk.color} h-2.5`} />
              <div className="relative leading-[150%]">{assessment.risk.level}</div>
            </div>
            <div className={`w-[77px] flex flex-row items-center justify-start gap-[4px] text-3xs ${assessment.status.color}`}>
              <div className="flex flex-row items-center justify-start">
                <div className="rounded-9xs flex flex-row items-center justify-center py-1 px-2">
                  <div className="relative leading-[150%] uppercase font-semibold">{assessment.status.text}</div>
                </div>
              </div>
            </div>
            <div className="w-[77px] flex flex-row items-center justify-start">
              <div className="relative leading-[150%] font-semibold">{assessment.result}</div>
            </div>
            <div className="w-[77px] flex flex-row items-center justify-end gap-[16px]">
              <img className="w-4 relative h-4 overflow-hidden shrink-0" alt="" src={Action3} />
              <img className="w-4 relative h-4 overflow-hidden shrink-0" alt="" src={Action2} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataEntry;
