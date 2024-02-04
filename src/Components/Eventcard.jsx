import { React } from "react";
import { useNavigate } from "react-router-dom";
import { TbReportMoney } from "react-icons/tb";

function Eventcard({ data, primary, status }) {
    const navigate = useNavigate();
    const clickhandler = (e) => {
        navigate(`/events/${data.name}`);
    };

    return (
        <div className="event-card" style={{ borderTopColor: primary }}>
            {/* {data.color=="red" && (<div className="disabled"></div>)} */}
            <div className="backdrop"></div>
            <div className="backdropImg">
                <img src={data.type === "flagship" && status === 1 ? "https://img.freepik.com/free-vector/gradient-mystery-box-illustration_23-2149491633.jpg" : data.pics.primary} alt={`${data.title} backdrop`}></img>
            </div>
            <div className="event-card-body-outer">
                {data.type !== "flagship" &&
                    data.name !== "Tune_up" &&
                    data.name !== "Snap_Quest" &&
                    data.name !== "Spill_Some_Ink" &&
                    data.name !== "Modelling" &&
                    data.name !== "Arts_N_Emotion" && (
                        <TbReportMoney id="general-event"></TbReportMoney>
                    )}
                <div className="event-card-header">
                    <span>{data.type === "flagship" && status === 1 ? data.name.slice(0, -1) : data.title}</span>
                </div>

                <div className="event-card-body">
                    {status === 1 ? (
                        <span>Coming Soon...</span>
                    ) : (
                        <span>{data.carddescription}</span>
                    )}
                </div>
                {status !== 1 && (
                    <div
                        className="read-more"
                        style={{ backgroundColor: primary }}
                        onClick={clickhandler}
                    >
                        <button>
                            View<i className="fa fas-angle-right"></i>{" "}
                        </button>
                    </div>)}
            </div>
        </div>
    )
}
export default Eventcard;