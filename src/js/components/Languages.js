import React, {Component, Fragment} from 'react';
import InfoBlock from "./InfoBlock";
import Data from "../../assets/json/languages";

class Languages extends Component {
    render() {
        let children = Data["children"].map(
            (item) => (
                <Fragment>
                    <div className="col-sm-6 col-md-4 col-lg-3 my-2">
                        <div className="btn btn-block btn-light p-2 shadow-sm border rounded">
                            <h6 className="opensans-title">
                                {item["name"]}
                            </h6>

                            <div className="progress rounded" style={{'height': '8px'}}>
                                <div className="progress-bar" role="progressbar" style={{'width': item["progress"] + '%'}}
                                     aria-valuenow={item["progress"]} aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        );

        return (
            <InfoBlock title={Data["title"]} content={(
                <div className="row">
                    {children}
                </div>
            )}/>
        );
    }
}

export default Languages;
