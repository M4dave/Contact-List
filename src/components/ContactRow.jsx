export default function ContactRow({ setSelectedContactId, contact }) {
    return (
      <tr style={{ cursor: "pointer" }}
        onClick={() => {
          setSelectedContactId(contact.id);
        }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }