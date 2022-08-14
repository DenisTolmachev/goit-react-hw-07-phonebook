import styled from 'styled-components';

export const ContactListList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ContactListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

export const ContactsListText = styled.p`
  margin: 0;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.ml};
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ContactsListButton = styled.button`
  border: none;
`;
