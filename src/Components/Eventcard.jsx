import { React } from "react";
import { useNavigate } from "react-router-dom";
import { TbReportMoney } from "react-icons/tb";

function Eventcard({ data, primary, status, category }) {
    const navigate = useNavigate();
    const clickhandler = (e) => {
        navigate(`/events/${data.name}?category=${category}`);
    };
    return (
        <div className="event-card" style={{ borderTopColor: primary }}>
            <div className="backdrop"></div>
            <div className="backdropImg">
                <img src={ data.pics.primary} alt={`${data.title} backdrop`}></img>
            </div>
            <div className="event-card-body-outer">
                {data.type !== "flagship" && !data.free && (
                        <TbReportMoney id="general-event"></TbReportMoney>
                    )}
                <div className="event-card-header">
                    {/* <span>{data.type === "flagship" && status === 1 ? data.name.slice(0, -1) : data.title}</span> */}
                    <span>{data.title}</span>
                </div>

                <div className="event-card-body">
                    {status === 0 ? (
                        <span>Coming Soon...</span>
                    ) : (
                        <span>{data.carddescription}</span>
                    )}
                </div>
                {status === 1 && (
                    <div
                        className="read-more"
                        style={{ backgroundColor: primary }}
                        onClick={clickhandler}
                    >
                        <button>View<i className="fa fas-angle-right"></i>{" "}
                        </button>
                    </div>)}
            </div>
        </div>
    )
}

export default Eventcard;