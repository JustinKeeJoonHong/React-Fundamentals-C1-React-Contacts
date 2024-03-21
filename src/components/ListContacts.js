const ListContacts = ({ contacts }) => {
  return (
    <ol className="contact-list">
      {contacts.map((contact) => (
        <li>{contact.name}</li>
      ))}
    </ol>
  );
};

export default ListContacts;
