import styled, { css } from 'styled-components';

const StyledCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 3rem;
	background-color: ${({ bgColorCard }) => bgColorCard};
	border-radius: 2rem;
	background-image: ${({ bgImg }) => {
		if (bgImg) {
			return `
				url('/public/images/bg-pattern-quotation.svg');
			`;
		}
	}};
	background-repeat: no-repeat;
	background-position: 200px top;
	background-size: 155px 155px;

	@media screen and (min-width: 768px) {
		grid-column: ${({ column }) => column};
		grid-row: ${({ row }) => row};
		background-position: 550px top;
	}
`;

const StyledImgCard = styled.img`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	border: solid 2px rgba(167, 117, 241, 1);
`;

const StyledUserContainer = styled.div`
	display: flex;
	gap: 2rem;
`;
const StyledNameText = styled.div`
	color: ${({ quoteColor }) => quoteColor};
`;
const StyledNameContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const StyledQuote = styled.p`
	font-size: 1.6rem;
	color: ${({ quoteColor }) => quoteColor};
`;

const StyledText = styled.p`
	font-size: 1rem;
	color: ${({ textColor }) => textColor};
`;

export {
	StyledCardContainer,
	StyledImgCard,
	StyledUserContainer,
	StyledNameContainer,
	StyledQuote,
	StyledText,
	StyledNameText
};
