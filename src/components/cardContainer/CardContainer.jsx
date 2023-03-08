import { StyledCardContainer } from "./styles"

const CardContainer=({profileImg,cardname,quote,fullText,bgColorCard})=>{
    return(
 
    <StyledCardContainer bgColorCard={bgColorCard}>
        <img src={profileImg} alt="" />
        <div>
            <p>{cardname}</p>
            <p>Verified Graduate</p>
        </div>
   
    <p>{quote}</p>
    <p>{fullText}</p>
    </StyledCardContainer>
   
    )
}

export default CardContainer