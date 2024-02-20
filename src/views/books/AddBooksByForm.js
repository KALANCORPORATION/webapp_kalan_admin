import React, { useState, useEffect } from 'react';
import { Header } from "../../components/Header";
import  NavBar  from "../../components/NavBar";
import Calendar from 'react-calendar';
import Select from 'react-select'; 
import BookController from '../../controllers/book/bookController';
import "../../styles/books/AddBooksByForm.css"
import BookService from '../../services/book/bookService'

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [auteur, setAuteur] = useState('');
  const [datePublish, setDatePublish] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [edition, setEdition] = useState(null);
  const [resume, setResume] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryOptions, setCountryOptions] = useState([]);
  const token = localStorage.getItem('accessToken');

  const fetchCountryList = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      const countries = data.map((country) => ({
        value: country.cca2,
        label: `${country.name.common} (${country.cca2})`,
        flag: country.flags?.png,
      }));
      setCountryOptions(countries);
    } catch (error) {
      console.error('Error fetching country list:', error);
    }
  };

  const genreOptions = [
    'récit d’aventures',
    'roman',
    'fantastique',
    'récit autochtone traditionnel',
    'discours',
    'conte',
    'fable',
    'légende ou mythe',
    'nouvelle',
    'mémoires',
    'récit de vie',
    'récit de voyage',
    'récit historique',
    'Autre',
  ];


  useEffect(() => {
    fetchCountryList();
  }, []);
  
  const CustomCountryOption = ({ innerProps, label, data }) => (
    <div {...innerProps}>
      <img className="country-flag" src={data.flag} alt={`${label} flag`} />
      <span>{label}</span>
    </div>
  );

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
    };

    const handleCalendarIconClick = () => {
        setShowCalendar(true);
    };

    const handleDateChange = (date) => {
        const formattedDate = date.toLocaleDateString('fr-FR'); 
        setDatePublish(formattedDate);
        setShowCalendar(false);
    };

    const handleCreateBook = async (formData) => {
        try {
            console.log('Access token:', token);
            console.log('Form data:', formData);
            return await BookController.addNewBookToSpace(formData);
            
        } catch (error) {
            console.error('Error creating book:', error.message);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
        title,
        auteur,
        datePublish,
        genre: selectedGenre.value,
        edition,
        resume,
        selectedCountry: selectedCountry ? selectedCountry.value : null,

        };
        console.log('form dtatt', formData)

        handleCreateBook(formData);
    
    }

  return (
    <div className="container">
            <Header/>
        <main>
            <section>
                    <div>
                    <img className="logo-return" alt="" src="/Group 260.png" />
                    <h2 className='info'>Informations</h2>
                        <hr  class='divider'></hr>
                    </div>
                <form className="form" onSubmit={handleSubmit}>

                    <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Titre"
                    />

                    <input
                    type="text"
                    value={auteur}
                    onChange={(e) => setAuteur(e.target.value)}
                    placeholder="Auteur"
                    />

                <div className="date-container">
                    <input
                        type="text"
                        value={datePublish}
                        onChange={(e) => setDatePublish(e.target.value)}
                        placeholder="Date de Publication"
                    />
                    <img
                        className="calendar-icon"
                        alt=""
                        src="/Group 8.png"
                        onClick={handleCalendarIconClick}
                    />
                    {showCalendar && (
                        <div className="calendar-popup">
                        <Calendar onChange={handleDateChange} value={datePublish} />
                        </div>
                    )}
                </div>
                    
                <Select
                    className="genre-select"
                    value={selectedGenre}
                    onChange={(selectedOption) => setSelectedGenre(selectedOption)}
                    options={genreOptions.map((genre) => ({ value: genre, label: genre }))}
                    placeholder="Genre"
                    />

                    <input
                    type="text"
                    value={edition}
                    onChange={(e) => setEdition(e.target.value)}
                    placeholder="Edition"
                    /> 

                    <input
                    type="text"
                    value={resume}
                    onChange={(e) => setResume(e.target.value)}
                    placeholder="Resume"
                    /> 

                    <Select
                    className="country-select"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    options={countryOptions}
                    placeholder="Pays"
                    components={{ Option: CustomCountryOption }}
                    />

                </form>
                <div className="button-container">
                    <button className='add-button' onClick={handleSubmit} type="submit">
                    <img className="icon-add-adherent" alt="" src="/ajouter-un-utilisateur 2.png" />
                        Ajouter</button>
                </div>
            </section>
        </main>
            <NavBar />
    </div>
  );
};

export default AddBook ;