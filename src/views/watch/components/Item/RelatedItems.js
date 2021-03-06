import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdAccessTime, MdPlaylistPlay } from 'react-icons/all';

import AvatarInfo from '../../../shared/components/AvatarInfo';

const RelatedItems = ({ item }) => {
  const {
    id,
    snippet,
    statistics,
  } = item;

  return (
    <Container>
      <ContentBox to={`/watch/${id}`}>
        <Thumb>
          <img src={snippet?.thumbnails?.medium?.url} alt="" />
          <Screen>
            <Button><MdAccessTime /></Button>
            <Button><MdPlaylistPlay /></Button>
          </Screen>
        </Thumb>

        <Desc>
          <AvatarInfo
            title={snippet?.title}
            name={snippet?.channelTitle}
            views={statistics?.viewCount}
            publishedAt={snippet?.publishedAt}
            component="relatedVideos"
          />
        </Desc>
      </ContentBox>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 8px;

  @media screen and (min-width: 1113px) {
    width: 402px;
  }
`;

const ContentBox = styled(Link)`
  display: flex;
  position: relative;
  height: 94px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    svg {
      opacity: 1;
    }
  }
  
`;

const Thumb = styled.div`
  position: relative;
  width: 168px;
  height: 94px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Screen = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;

`;

const Button = styled.div`
  svg {
    background: #111;
    width: 20px;
    height: 20px;
    fill: #fff;
    opacity: 0;
    transition: 0.2s;
  }

`;

const Desc = styled.div`
  height: 94px;
  margin-left: 8px;
  padding-right: 24px;
`;

export default RelatedItems;
