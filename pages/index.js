import React from 'react';
import MainMenu from '../components/Common/MainMenu';
import MainFooter from '../components/Common/MainFooter';
import styled from "styled-components";
import Banner from '../components/Banner';
import WhoWeAre from '../components/WhoWeAre';
import Otherinformations from '../components/OtherInformations';


export default function index() {
  return (
    <div>
      <MainMenu/>
      <Banner/>
      <WhoWeAre/>
      <Otherinformations/>
      <MainFooter/>
    </div>
  )
}
