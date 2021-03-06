import React from 'react';
import styled from 'styled-components';
import { MdThumbDown, MdThumbUp } from 'react-icons/md';
import moment from 'moment';

const CommentAvatar = ({
  imageUrl,
  name,
  comment,
  like,
  publishedAt,
}) => (
  <Container>
    <Thumb>
      <img src={imageUrl} alt="" />
    </Thumb>
    <Desc>
      <Name>
        {name}
        <Published>
          {moment(publishedAt).fromNow()}
        </Published>
      </Name>
      <Comment>{comment}</Comment>
      <Response>
        <Icon>
          <MdThumbUp />
        </Icon>
        <Count>
          {like}
        </Count>
        <Icon>
          <MdThumbDown />
        </Icon>
      </Response>
    </Desc>
  </Container>
)

const Container = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const Thumb = styled.div`
  flex-shrink: 0;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Desc = styled.div`
  flex: 1;
  margin-left: 16px;

`;

const Name = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: 500;
  color: rgb(3, 3, 3);
  transition: 0.3s;
  line-height: 18px;


  &:hover {
    color: #333;
  }
`;

const Comment = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgb(3, 3, 3);
`;
const Published = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #606060;
  margin: 0 0 2px 4px;
`;

const Response = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  padding: 8px;
  svg {
    width: 16px;
    height: 16px;
  }
`;

const Count = styled.div`
  margin-right: 8px;
  font-size: 12px;
  font-weight: 400;
  color: #606060;
`;
export default CommentAvatar;
