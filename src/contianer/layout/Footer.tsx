import * as React from 'react';

import './Footer.scss'
import {connect} from "react-redux";

function Footer(props) {
    return (
        <div className={["Footer"].join(' ')}>
            <div className={["info"].join(' ')}>
                <div>@{props.blogInfo.websiteConfig.websiteCreateTime}
                    - {props.today}
                    by {props.blogInfo.websiteConfig.websiteAuthor }
                </div>
                <div>
                    <a href={"https://beian.miit.gov.cn/"} target={"_blank"} rel="noreferrer">
                        {props.blogInfo.websiteConfig.websiteRecordNo}
                    </a>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state :any) => {
    return {
        blogInfo: state.BlogInfo.blogInfo,
        today: new Date().getDate()
    }
}

export default connect(mapStateToProps)(Footer);