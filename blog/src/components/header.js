import React from 'react';
import styled from 'styled-components';
import { Flex, Heading } from 'rebass/styled-components';
import { Bus } from '@styled-icons/boxicons-regular/Bus';
import { palette } from 'styled-theme';

const HeaderContainer = styled(Flex)`
  background-color: ${palette('primary', 0)};
  color: ${palette('text', 0)};
  padding: 20px;
`;

const Icon = styled(Bus)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Header = () => {
  return (
    <HeaderContainer alignItems="center" justifyContent="space-between">
      <Flex alignItems="center">
        <Icon />
        <Heading as="h1" fontSize={[3, 4]}>
          Bus Booking
        </Heading>
      </Flex>
      {/* Other components or navigation */}
    </HeaderContainer>
  );
};

export default Header;