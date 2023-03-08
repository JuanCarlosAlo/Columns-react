import CardContainer from "../cardContainer/CardContainer"
import { StyledMainContainer } from "./styles"
import { v4 } from "uuid"

const cardObj=[
    {
        profileImg: '/public/images/',
        cardname: 'ksdbhjf',
        quote:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem praesentium ducimus cupiditate perspiciatis vel, iste, debitis, possimus eius labore itaque consequatur eum recusandae nam est qui rem. Possimus, non distinctio.',
        fullText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem praesentium ducimus cupiditate perspiciatis vel, iste, debitis, possimus eius labore itaque consequatur eum recusandae nam est qui rem. Possimus, non distinctio.',
        bgColorCard: '',
        id: v4()
    },
    {
        profileImg: '/public/images/',
        cardname: '',
        quote:'',
        fullText:'',
        bgColorCard: '',
        id: v4()
    },
    {
        profileImg: '/public/images/',
        cardname: '',
        quote:'',
        fullText:'',
        bgColorCard: '',
        id: v4()
    },
    {
        profileImg: '/public/images/',
        cardname: '',
        quote:'',
        fullText:'',
        bgColorCard: '',
        id: v4()
    },
    {
        profileImg: '/public/images/',
        cardname: '',
        quote:'',
        fullText:'',
        bgColorCard: '',
        id: v4()
    },
]

const MainContainer =()=>{
    return(
        <StyledMainContainer>
            {cardObj.map(card=>
                <CardContainer
                {...card}
                key={card.id}
                
                />
            )}
        </StyledMainContainer>
    )
    
}

export default MainContainer