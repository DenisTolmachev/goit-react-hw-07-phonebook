import {
  ContactListList,
  ContactListItem,
  ContactsListText,
} from './ContactList.styled';
import { Button } from 'components/common/Button.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentContacts, deleteCurrentContact } from 'store/contactsOperations';
import { getItems, getFilter } from 'store/contactsSelectors';
import { useEffect } from 'react';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  console.log(items);

useEffect(() => {
  dispatch(getCurrentContacts());
}, [dispatch]);

  const deleteItems = id => {
    dispatch(deleteCurrentContact(id));
  };

  const getFilteredContacts = () => {
    const normalizedContacts = filter.toLowerCase();
    return items.filter(item =>
      item.name.toLowerCase().includes(normalizedContacts)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ContactListList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactsListText>
            <span>{name}: </span>
            <span>{number}</span>
          </ContactsListText>
          <Button type="button" onClick={() => deleteItems(id)}>
            Delete
          </Button>
        </ContactListItem>
      ))}
    </ContactListList>
  );
};
