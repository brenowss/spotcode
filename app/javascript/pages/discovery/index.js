import React, { Fragment } from 'react';
import SectionWrapper from '../../components/shared/section_wrapper'
import Discovery from '../../components/discovery';
import NavbarFooter from '../../components/shared/navbar_footer';

const DiscoveryScreen = () => {
    return (
        <Fragment>
            <SectionWrapper>
            <Discovery />
            <NavbarFooter />
            </SectionWrapper>
        </Fragment>
    )
}

export default DiscoveryScreen;