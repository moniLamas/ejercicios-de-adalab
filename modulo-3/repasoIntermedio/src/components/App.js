import { useState } from "react";
import "../styles/App.scss";
import initialData from "../data/contacts.json";

function App() {
  const [data, setData] = useState(initialData);

  const [search, setSearch] = useState("");
  const [newName, setNewName] = useState("");
  const [newLastname, setNewLastname] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const hadleChangeSearch = (ev) => {
    //funcion para cambiar el valor de la variable estado search con el valor que introduce la usuaria, lo utilizamos para filtrar el array de datos[data]
    setSearch(ev.currentTarget.value);
    //si hago un console.log mostrará el valor introducido por la usuaria
  };

  const handleChangeName = (ev) => {
    setNewName(ev.currentTarget.value);
  };

  const handleChangeLastname = (ev) => {
    setNewLastname(ev.currentTarget.value);
  };
  const handleChangePhone = (ev) => {
    setNewPhone(ev.currentTarget.value);
  };
  const handleChangeEmail = (ev) => {
    setNewEmail(ev.currentTarget.value);
  };

  const handleClick = (ev) => {
    ev.preventDefault();

    const newContact = {
      name: newName,
      lastname: newLastname,
      phone: newPhone,
      email: newEmail,
    };

    //el spread añadiende un nuevo objeto {newContact} al array [data]
    setData([...data, newContact]);

    setNewName("");
    setNewLastname("");
    setNewPhone("");
    setNewEmail("");
  };
  //data.filter().map()
  const htmlContactList = data
    .filter(
      //filtramos nombre y apellido con el operador ||
      (contact) =>
        //includes nos busca el valor search dentro del valor contact.name-lastname
        contact.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        contact.lastname
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
    )
    .map((oneContact, index) => (
      <li className="contact__item" key={index}>
        <p className="contact__name">
          <label className="contact__label">Nombre:</label>
          {oneContact.name} {oneContact.lastName}
        </p>
        <p className="contact__phone">
          <label className="contact__label">Teléfono:</label>
          <a
            href={`tel: ${oneContact.phone}`}
            title={`Pulsa aquí para llamar a ${oneContact.name}`}
          >
            {oneContact.phone}
          </a>
        </p>
        <p className="contact__mail">
          <label className="contact__label">Email:</label>
          <a
            href={`mailto: ${oneContact.email}`}
            title={`Pulsa aquí para escribir a ${oneContact.email} `}
          >
            {oneContact.email}
          </a>
        </p>
      </li>
    ));

  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Mi agenda de contactos</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre"
            onChange={hadleChangeSearch}
            //variable estado para tener controlado el valor que introduce el usuario
            value={search}
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className="contact__list">{htmlContactList};</ul>

        {/* new contact */}
        <form className="new-contact__form">
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            onChange={handleChangeName}
            value={newName}
          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
            onChange={handleChangeLastname}
            value={newLastname}
          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
            onChange={handleChangePhone}
            value={newPhone}
          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChangeEmail}
            value={newEmail}
          />
          <input
            className="new-contact__btn"
            type="submit"
            value="Añadir"
            onClick={handleClick}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
