import styled from "styled-components";
import FlexBox from "../../common/ui/FlexBox";
import { Body2 } from "../../common/ui/Headings";

const Wrapper=styled(FlexBox)`
padding:1rem;
width:10rem;
background-color:white;
box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.1);
border-radius:0.5rem;
row-gap:0.5rem;
`

const Option=styled(FlexBox)`

`

const ClickAblesOpt = ({ onHighlightClick }) => {
  return (
    <Wrapper column>
        <Option><Body2>Move to tomorrow</Body2></Option>
        <Option onClick={onHighlightClick}><Body2>Highlight</Body2></Option>
        <Option><Body2>Edit</Body2></Option>
        <Option><Body2>Delete</Body2></Option>
    </Wrapper>
  );
};


export default ClickAblesOpt