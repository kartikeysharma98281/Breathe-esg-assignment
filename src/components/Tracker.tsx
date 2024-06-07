import { FunctionComponent } from "react";
// import TrackerCard from "./TrackerCard";
import TrackerCard from "../assets/Tracker-Card.png";
import TrackerCard1 from "../assets/Tracker-Card (1).png";
import TrckerTable from "./TrackerTabel";
// import SidePannel from "./SidePannel";


export type ESGMetricsEnvironmentWatType = {
  className?: string;
};

const Tracker: FunctionComponent<
  ESGMetricsEnvironmentWatType
> = ({ className = "" }) => {
  return (    
    <div
      className={`w-[1452px] bg-page-bg max-w-full overflow-hidden flex flex-col items-start justify-start  pr-[31px] pl-[19px] pb-[23px] box-border gap-[29px] leading-[normal] tracking-[normal] mq450:pl-5 mq450:box-border mq725:pl-[94px] mq725:box-border ${className}`}
      >

      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-left text-mini text-grey font-semibold-12">
        <div className="flex-1 flex flex-row items-start justify-between pt-20 px-0 pb-[5px] box-border relative max-w-full">
          {/* <div className="w-[112px] flex flex-row items-start justify-end gap-[16px] max-w-full"> */}
          <div className="flex ">

          <img src={TrackerCard} />
          <img src={TrackerCard1} />
          </div>
            <div className="relative text-xs leading-[150%] inline-block min-w-[129px] whitespace-nowrap">
              Autosaved at 12:31 pm
            </div>
          {/* </div> */}
        </div>
      </section>
      <TrckerTable />
    </div>
  );
};

export default Tracker;
