import { FunctionComponent } from "react";
import headerlogo from "../assets/headerrlogo.png";
import Vector2 from "../assets/Vector2.png";
import Icon_R from "../assets/Icon_R.png";
import Notification from "../assets/Notification.png";
import Avatar from "../assets/Avatar.png";
import Icons from "../assets/Icons.png";
import track_changes from "../assets/track_changes.png";
import { useState } from "react";
import SidePannel from "../components/SidePannel";
import Tracker from "../components/Tracker";
import DataEntry from "../components/DataEntry";


export type HeaderType = {
  className?: string;
};





const MainPage: FunctionComponent<HeaderType> = ({
  className = "font-sans ",
}) => {
  const [visible, setVisible] = useState(false);
  const [tracker , settracker] = useState(false)
  const [dataentry , setdataentry] = useState(false)
  const toggleButton = () => {
    settracker(!tracker)
    setdataentry(!dataentry);
  }
  return (
    <div className="flex">
      {visible ? <SidePannel /> : null}
      <div>
        <div
          className={` w-fill-available h-fit-content bg-celestial-hue-celestial-light box-border max-w-full flex flex-col items-start justify-start p-6 gap-[20px] text-left text-mini text-celestial-grey-cg-700 font-semibold-12  ${className}`}
        >
          <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-4 ">
            <div className="flex flex-row items-center justify-start gap-[40px]">
              <div className="flex flex-row items-center justify-start gap-[20px]">
                <div className="overflow-hidden flex flex-col items-start justify-start py-[7px] px-0">
                  <img
                    className="w-[18px] relative h-[17px] object-cover"
                    alt=""
                    src={headerlogo}
                    onClick={() => setVisible(!visible)}
                  />
                </div>
                <div className="relative leading-[150%] font-semibold">
                  View Name
                </div>
              </div>
              <div className="rounded-9xs box-border h-[39px] flex flex-row items-center justify-center py-2 px-4 gap-[10px] text-xs border-[1px] border-solid border-silver-100">
                <img
                  className="w-3.5 relative h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src={Vector2}
                />
                <div className="relative leading-[150%]">
                  North India Region
                </div>
                <img
                  className="w-3.5 relative h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src={Icon_R}
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[16px] text-sm text-grey">
              <div className="rounded-8xs flex flex-row items-start justify-start p-1.5">
                <img
                  className="w-[22px] relative h-[22px]"
                  alt=""
                  src={Notification}
                />
              </div>
              <div className="flex flex-row items-center justify-end gap-[12px]">
                <div className="relative leading-[150%] font-semibold">
                  John Doe
                </div>
                <img
                  className="w-8 relative rounded-[50%] h-8 object-cover"
                  alt=""
                  src={Avatar}
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-smi text-celestial-hue-celestial-light">
            <div className="flex flex-row items-start justify-start gap-[48px]">
              <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-textui-green">
                <img className="w-4 relative h-4" alt="" src={Icons} />
                <b onClick={toggleButton} className="relative tracking-[0.02em] leading-[150%] uppercase mix-blend-normal">
                  DATA ENTRY
                </b>
              </div>

              <div className="flex flex-row items-center justify-start gap-[8px] opacity-[0.7] text-black18">
                <img
                  className="w-5 relative h-5 hidden"
                  alt=""
                  src="/icons2.svg"
                />
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0"
                  alt=""
                  src={track_changes}
                />
                <b onClick={toggleButton} 
                className="hover:cursor relative tracking-[0.02em] leading-[150%] uppercase opacity-[0.7] mix-blend-normal">
                  TRACKER
                </b>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[16px] text-base text-celestial-grey-cg-700">
              <div className="flex flex-row items-center justify-end gap-[12px]">
                <div className="relative leading-[150%] font-semibold">
                  For:
                </div>
                <div className="flex flex-row items-center justify-start gap-[20px] text-mini">
                  <div className="rounded-9xs hidden flex-row items-center justify-center py-3 px-4 gap-[10px]">
                    <img
                      className="w-3.5 relative h-3.5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/icons5.svg"
                    />
                    <b className="relative leading-[150%]">{`Save & Next`}</b>
                  </div>
                  <div className="rounded-9xs flex flex-row items-center justify-center py-2 px-4 gap-[10px] border-[1px] border-solid border-silver-100">
                    <img
                      className="w-3.5 relative h-3.5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/icon--l1.svg"
                    />
                    <b className="relative leading-[150%]">FY 2023-24</b>
                    <img
                      className="w-3.5 relative h-3.5 overflow-hidden shrink-0"
                      alt=""
                      src="/icon--r.svg"
                    />
                  </div>
                  <div className="rounded-9xs hidden flex-row items-center justify-center py-2 px-4 gap-[10px] text-grey border-[1px] border-solid border-silver-100">
                    <img
                      className="w-3.5 relative h-3.5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/icon--l2.svg"
                    />
                    <b className="relative leading-[150%]">Select a month</b>
                    <img
                      className="w-3.5 relative h-3.5 overflow-hidden shrink-0"
                      alt=""
                      src={Avatar}
                    />
                  </div>
                </div>
              </div>
              <b className="relative leading-[150%]">Submit for Approval</b>
            </div>
          </div>
        </div>
        {dataentry ? <DataEntry /> : <Tracker />}
      </div>
    </div>
  );
};

export default MainPage;
