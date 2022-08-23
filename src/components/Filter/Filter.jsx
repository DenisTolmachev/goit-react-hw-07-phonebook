import { FilterLabelTitle, FilterFormLabel, FilteInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filteredContacts } from 'store/contacts/contactsActions';
import { getFilter } from 'store/contacts/contactsSelectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filteredContacts(e.target.value));
  };

  return (
    <FilterFormLabel>
      <FilterLabelTitle>Find contacts by name:</FilterLabelTitle>
      <FilteInput
        type="text"
        placeholder="Enter name"
        value={filter}
        onChange={handleFilter}
      />
    </FilterFormLabel>
  );
};
