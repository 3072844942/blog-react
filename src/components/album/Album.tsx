import * as React from 'react';
import {useEffect, useState} from "react";
import Banner from "../../contianer/banner/Banner";
import {connect} from "react-redux";
import Single from "../../contianer/body/Single";
import {getAlbums} from "../../action/AlbumAction";
import DetailedAlbumContainer from "../../contianer/album/DetailedAlbumContainer";

function Albums(props) {
    const [pageCover, setPageCover] = useState(null)

    useEffect(() => {
        props.blogInfo.pageList.forEach(item => {
            if (item.pageLabel === "album") {
                setPageCover(item.pageCover)
            }
        })
        if (props.albumList.length <= 0) props.getAlbums()
    }, [])


    return (
        <div>
            <Banner pageCover={pageCover} name={"相册"}></Banner>
            <Single>
                <div style={{
                    display: 'flex'
                }}>
                    {
                        props.albumList.map(item => <DetailedAlbumContainer {...item}>
                        </DetailedAlbumContainer>)
                    }
                </div>
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
        albumList: state.AlbumInfo.albumList
    }
}

const mapDispatchToProps = {
    getAlbums() {
        return getAlbums()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);