import styled from 'styled-components';

const StyledMainContainer = styled.div`
	display: grid;

	grid-template: repeat(9, 1fr);
	gap: 2rem;
	padding: 2rem;
	@media screen and (min-width: 768px) {
		height: 800px;
		padding: 5rem;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 50%;
	}
`;

export { StyledMainContainer };
