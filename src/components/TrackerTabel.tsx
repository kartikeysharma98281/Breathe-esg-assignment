import { FunctionComponent } from "react";
import search from "../assets/search.png";

export type TrackerTableType = {
  className?: string;

};


const data = [
  {
    month: "Jan2023",
    status: {text: "PENDING APPROVAL (1/12)", color:"text-red-500" , bgColor:"bg-red-200"},
    completion: "20%",
    businessUnit: "Business Unit 1",

  },
  {
    month: "Feb2023",
    status: {text:"APPROVED (2/12)",color:"text-green-800" , bgColor:"bg-green-200"},
    completion: "30%",
    businessUnit: "Business Unit 1",
  },
  {
    month: "Mar2023",
    status: {text: "INCOMPLETE (4/12)" , color:"text-[#F09948]" , bgColor:"bg-[#ffead7]"},
    completion: "50%",
    businessUnit: "Business Unit 1",
  },
];

const TrackerTable: FunctionComponent<TrackerTableType> = ({
  className = "font-sans",
}) => {
  return (<>
    <div className="w-[193px] flex flex-row items-center justify-start py-[13px] px-3 box-border gap-[8px]">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                  src={search}
                />
                <input
                  className="w-[calc(100%_-_40px)] [border:none] [outline:none] font-regular-16 text-xs bg-[transparent] h-[18px] flex-1 relative leading-[150%] text-grey-darker text-left inline-block min-w-[87px] p-0"
                  placeholder="Search for a business unit"
                  type="text"
                />
              </div>
    <div
      className={`w-full max-w-4xl rounded-lg box-border h-[335px] overflow-hidden flex flex-col items-start justify-start text-left text-base text-textui-green font-semibold-12 border-[1px]  ${className}`}
    >
      
      <div className="self-stretch bg-grey-light-block flex flex-col items-start justify-start py-0 px-6 text-xs text-celestial-grey-cg-700">
        <div className="self-stretch flex flex-row items-start justify-between py-4 px-0 text-center items-center">
          {["Month", "Status", "Completion", "Business Unit"].map(
            (header, index) => (
              <b
                key={index}
                className="flex-1 relative leading-[150%] uppercase inline-block shrink-0"
              >
                {header}
              </b>
            )
          )}
        </div>
      </div>
      {data.map((entry, index) => (
        <div
          key={index}
          className="pl-[20px] self-stretch bg-celestial-hue-celestial-light flex flex-row items-center justify-center py-4 px-6"
        >
          <div className="flex-1 flex flex-row items-center justify-between">
            
            <div className="flex-1 flex flex-row items-center justify-start text-celestial-grey-cg-700">
              <div className="relative leading-[150%]">
                {entry.month}
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-start text-celestial-grey-cg-700">
              <div className={`relative leading-[150%] p-1 rounded-md text-xs ${entry.status.color} ${entry.status.bgColor} `}>{entry.status.text}</div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-start text-celestial-grey-cg-700">
              <div className="relative leading-[150%] pl-[68px]">{entry.completion}</div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-start text-celestial-grey-cg-700">
              <div className="relative leading-[150%] pl-[47px]">
                {entry.businessUnit}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default TrackerTable;
