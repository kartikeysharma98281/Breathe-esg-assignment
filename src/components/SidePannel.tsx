import { FunctionComponent } from "react";
import sidepannellogo from "../assets/SidepannelLogo.png"
import bar_chart from "../assets/bar_chart.png"
import auto_graph from "../assets/auto_graph.png"
import grid_view from "../assets/grid_view.png"
import logout from "../assets/logout.png"
import materials from "../assets/Materials.png"
import pie_chart from "../assets/pie_chart.png"
import summarize from "../assets/summarize.png"
import supervised_user_circle from "../assets/supervised_user_circle.png"
import track_changes from "../assets/track_changes.png"
import icon from "../assets/Vector.png"



export type SidePannelType = {
  className?: string;
};

const SidePannel: FunctionComponent<SidePannelType> = ({ className = "font-sans" }) => {
  return (
    <div
      className={`w-[205px] bg-black18 h-[833px] flex flex-col items-start justify-start pt-6 px-6 pb-10 box-border relative gap-[80px] text-left text-xs text-celestial-hue-celestial-light font-regular-12 ${className}`}
    >
      <div className="overflow-hidden flex flex-col items-start justify-start py-[7px] px-0 z-[0]">
        <img
          className="w-[141px] relative h-[17px] object-cover"
          alt=""
          src={sidepannellogo}
        />
      </div>
      <div className="w-[158px] flex flex-col items-start justify-start gap-[24px] z-[1]">
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0 opacity-[0.7]"
            alt=""
            src={bar_chart}
          />
          <div className="self-stretch w-[113px] relative leading-[150%] inline-block shrink-0 opacity-[0.7]">
            Dashboard
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0 opacity-[0.7]"
            alt=""
            src={grid_view}
          />
          <div className="self-stretch w-[113px] relative leading-[150%] inline-block shrink-0 opacity-[0.7]">
            Entity Manager
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[12px] text-textui-green">
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0"
            alt=""
            src={pie_chart}
          />
          <div className="self-stretch w-[113px] relative leading-[150%] font-semibold inline-block shrink-0">
            Data Manager
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0 opacity-[0.7]"
            alt=""
            src={summarize}
          />
          <div className="self-stretch w-[113px] relative leading-[150%] inline-block shrink-0 opacity-[0.7]">
            Reporting
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img
            className="w-5 relative h-5 opacity-[0.7]"
            alt=""
            src={materials}
          />
          <div className="self-stretch w-[113px] relative leading-[150%] inline-block shrink-0 opacity-[0.7]">
            Materiality
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0 opacity-[0.7]"
            alt=""
            src={supervised_user_circle}
          />
          <div className="self-stretch w-[113px] relative leading-[150%] inline-block shrink-0 opacity-[0.7]">
            Suppliers
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0 opacity-[0.7]"
            alt=""
            src={auto_graph}
          />
          <div className="self-stretch w-[113px] relative leading-[150%] inline-block shrink-0 opacity-[0.7]">
            Analytics
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0 opacity-[0.7]"
            alt=""
            src={track_changes}
          />
          <div className="self-stretch w-[113px] relative leading-[150%] inline-block shrink-0 opacity-[0.7]">
            Targets
          </div>
        </div>
        <div className="hidden flex-row items-center justify-start gap-[12px]">
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0 opacity-[0.7]"
            alt=""
            src="/assured-workload."
          />
          <div className="self-stretch w-[113px] relative leading-[150%] inline-block shrink-0 opacity-[0.7]">
            NGO Management
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[12px] text-error-red-trial">
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0 opacity-[0.7]"
            alt=""
            src={logout}
          />
          <div className="self-stretch w-[113px] relative leading-[150%] inline-block shrink-0 opacity-[0.7]">
            Logout
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-mediumseagreen hidden flex-col items-start justify-start pt-3 px-4 pb-0 gap-[12px] z-[2]">
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="w-[132px] relative leading-[150%] inline-block mix-blend-normal">
            Need Help?
          </div>
          <div className="w-[136px] relative leading-[150%] text-green-accent inline-block mix-blend-normal">
            <span>{`Contact us at `}</span>
            <span className="[text-decoration:underline] font-semibold">
              support@breatheesg.in
            </span>
          </div>
        </div>
        <img
          className="w-[129px] relative h-[84px] overflow-hidden shrink-0 object-contain opacity-[0.9]"
          alt=""
          src="/illustration."
        />
      </div>
      <img
        className="w-6 absolute !m-[0] top-[44px] left-[194px] rounded-xl h-6 overflow-hidden shrink-0 z-[3]"
        alt=""
        src={icon}
      />
    </div>
  );
};

export default SidePannel;

