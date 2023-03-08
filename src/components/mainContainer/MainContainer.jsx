import CardContainer from "../cardContainer/CardContainer"
import { StyledMainContainer } from "./styles"
import { v4 } from "uuid"

const cardsObj=[
    {
        id: v4(),
        profileImg: '/public/images/image-daniel.jpg',
        cardname: 'Daniel Clifford',
        quote:'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
        fullText:'“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the  best - and most grueling - time of my life. Since completing the course, I’ve  successfully switched careers, working as a Software Engineer at a VR startup. ”',
        bgColorCard: 'rgba(115, 63, 200, 1)',
        column: '1 / 3',
        row: '1 / 1',
        quoteColor: '#fff',
        textColor: 'rgba(207, 207, 207, 0.7)',
        bgImg: true
        
    },
    {
        id: v4(),
        profileImg: '/public/images/image-jonathan.jpg',
        cardname: 'Jonathan Walters',
        quote:'The team was very supportive and kept me motivated',
        fullText:'“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. “',
        bgColorCard: 'rgba(72, 85, 106, 1)',
        column: '3 / 4',
        row: '1 / 1',
        quoteColor: '#fff',
        textColor: 'rgba(207, 207, 207, 0.7)',
        bgImg: false
    },
    {
        id: v4(),
        profileImg: '/public/images/image-kira.jpg',
        cardname: 'Kira Whittle',
        quote:'Such a life-changing experience. Highly recommended!',
        fullText:'“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!  ”',
        bgColorCard: 'rgba(255, 255, 255, 1)',
        column: '4 / 4',
        row: '1 / 3',
        quoteColor: 'rgba(72, 85, 106, 1)',
        textColor: 'rgba(72, 85, 106, 0.7)',
        borderImg: 'rgba(167, 117, 241, 1)',
        bgImg: false
    },
    {
        id: v4(),
        profileImg: '/public/images/image-jeanette.jpg',
        cardname: 'Jeanette Harmon',
        quote:'An overall wonderful and rewarding experience',
        fullText:'“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”',
        bgColorCard: 'rgba(255, 255, 255, 1)',
        column: '1 / 2',
        row: '2 / 2',
        quoteColor: 'rgba(72, 85, 106, 1)',
        textColor: 'rgba(72, 85, 106, 0.7)',
        bgImg: false
       
    },
    {
        id: v4(),
        profileImg: '/public/images/image-patrick.jpg',
        cardname: 'Patrick Abrams',
        quote:'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
        fullText:'“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.  ”',
        bgColorCard: 'rgba(25, 32, 45, 1)',
        column: '2 / 4',
        row: '2 / 2',
        quoteColor: '#fff',
        textColor: 'rgba(207, 207, 207, 0.7)',
        bgImg: false
    },
]

const MainContainer =()=>{
    return(
        <StyledMainContainer>
            {cardsObj.map(card=>
                <CardContainer
                {...card}
                key={card.id}
                
                />
            )}
        </StyledMainContainer>
    )
    
}

export default MainContainer