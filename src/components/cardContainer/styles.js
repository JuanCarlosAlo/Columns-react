import styled from 'styled-components';

const StyledCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0%;
	background-color: ${({ bgColorCard }) => bgColorCard};
`;

export { StyledCardContainer };
