import { StyledCardContainer, StyledImgCard, StyledNameContainer, StyledNameText, StyledQuote, StyledText, StyledUserContainer } from "./styles"

const CardContainer=({profileImg,cardname,quote,fullText,bgColorCard,column,row,quoteColor,textColor,bgImg})=>{
    return(
 
    <StyledCardContainer bgColorCard={bgColorCard} column={column} row={row} bgImg={bgImg}>
       
        <StyledUserContainer>
        <StyledImgCard src={profileImg} alt="" />

            <StyledNameContainer>
                <StyledNameText quoteColor={quoteColor}>{cardname}</StyledNameText>
                <StyledNameText quoteColor={quoteColor}>Verified Graduate</StyledNameText>
            </StyledNameContainer>
            
        </StyledUserContainer>
   
    <StyledQuote quoteColor={quoteColor}>{quote}</StyledQuote>
    <StyledText textColor={textColor}>{fullText}</StyledText>
    </StyledCardContainer>
   
    )
}

export default CardContainer