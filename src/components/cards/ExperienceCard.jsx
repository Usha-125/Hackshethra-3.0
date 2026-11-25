import React from "react";
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import styled,{useTheme} from "styled-components";
const Role=styled.h3`font-size:17px;font-weight:600;color:${({theme})=>theme.text_primary};line-height:1.5;`;
const Time=styled.p`font-size:15px!important;font-weight:500!important;color:${({theme})=>theme.text_secondary};margin:4px 0 0!important;`;
export default function ExperienceCard({experience}){const theme=useTheme();return <VerticalTimelineElement iconStyle={{background:theme.primary,boxShadow:"none"}} contentStyle={{background:theme.card,color:theme.text_primary,border:"1px solid "+theme.border_color,boxShadow:"none",borderRadius:12}} contentArrowStyle={{borderRight:"7px solid "+theme.card}}><Role>{experience.role}</Role><Time>{experience.company}</Time></VerticalTimelineElement>;}
