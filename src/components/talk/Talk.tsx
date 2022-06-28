import * as React from 'react';
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import Banner from "../../contianer/banner/Banner";
import Single from "../../contianer/body/Single";
import {getTalks} from "../../action/TalkInfoAction";
import DetailedTalkContainer from "../../contianer/talk/DetailedTalkContainer";

function Talk(props) {
    const [pageCover, setPageCover] = useState(null)

    useEffect(() => {
        props.blogInfo.pageList.forEach(item => {
            if (item.pageLabel === "talk") {
                setPageCover(item.pageCover)
            }
        })
        if (props.talkList.length <= 0) props.getTalks()
    })

    return (
        <div>
            <Banner pageCover={pageCover} name={"说说"}></Banner>
            <Single>
                {
                    props.talkList.map(item =>
                        <DetailedTalkContainer {...item}></DetailedTalkContainer>
                    )
                }
                {/*占位, 使底部有富裕*/}
                <div style={{
                    minHeight: '50px'
                }}></div>
            </Single>
        </div>
    );
}

const mapStateToProps = (state:any) => {
    return {
        blogInfo: state.BlogInfo.blogInfo,
        talkList: state.TalkInfo.talkList
    }
}

const mapDispatchToProps = {
    getTalks() {
        return getTalks();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Talk);