import { StyledCardContainer } from "./styles"

const CardContainer=({profileImg,Cardname,quote,fullText})=>{
    return(
 
    <StyledCardContainer>
        <img src={profileImg} alt="" />
        <div>
            <p>{Cardname}</p>
            <p>Verified Graduate</p>
        </div>
   
    <p>{quote}</p>
    <p>{fullText}</p>
    </StyledCardContainer>
   
    )
}

export default CardContainer