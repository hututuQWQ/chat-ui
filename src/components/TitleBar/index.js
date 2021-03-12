import React from "react";
import PropTypes from "prop-types";
import StyledTitleBar, { Title } from "./style";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Text from "components/Text";

function TitleBar({children,...rest}) {
  return (
    <StyledTitleBar {...rest}>
      <Title>
        <Paragraph size="large"> 慕容天宇 </Paragraph>
        <Paragraph type="secondary">
          <Text> 离线 </Text>
          <Text> 最后阅读：3小时 </Text>
        </Paragraph>
      </Title>
    </StyledTitleBar>
  );
}

TitleBar.propTypes = {
  children: PropTypes.any
};

export default TitleBar;
