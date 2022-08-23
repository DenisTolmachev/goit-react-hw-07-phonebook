import {
  ContactListList,
  ContactListItem,
  ContactsListText,
} from './ContactList.styled';
import { Button } from 'components/common/Button.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCurrentContacts,
  deleteCurrentContact,
} from 'store/contacts/contactsOperations';
import { getItems, getFilter } from 'store/contacts/contactsSelectors';
import { useEffect } from 'react';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentContacts());
  }, [dispatch]);

  const deleteItems = id => {
    dispatch(deleteCurrentContact(id));
  };

  console.log(items);
  const normalizeContact = filter.toLowerCase();
  const filteredContacts = items.filter(item =>
    item.name.toLowerCase().includes(normalizeContact)
  );

  console.log(filteredContacts);

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
