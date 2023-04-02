import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const FormContainer = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '500px',
  margin: '0 auto',
  gap: '1rem',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: '1rem',
}));

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handlePhoneNumberChange = ({ target: { value } }) => {
    let phoneNumber = value.replace(/\D/g, ''); // remove all non-numeric characters from the input
    let formattedPhoneNumber;

    if (phoneNumber.length <= 10) {
      // if the phone number is 10 digits or less, format it as a US phone number
      formattedPhoneNumber = phoneNumber.replace(
        /(\d{3})(\d{3})(\d{4})/,
        '($1) $2-$3'
      );
    } else {
      // otherwise, format as international phone number
      formattedPhoneNumber = phoneNumber.replace(
        /(\d{1,3})(\d{1,3})(\d{1,4})(\d{1,4})/,
        '+$1 $2 $3-$4'
      );
    }
    setPhoneNumber(formattedPhoneNumber);
  };

  const handleAdditionalNotesChange = (e) => {
    setAdditionalNotes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation here
    if (!email || !name || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    }

    const emailSubject = `Inquiry: ${name} (${email})`;
    const emailBody = JSON.stringify({
      email,
      name,
      message,
      phoneNumber,
      additionalNotes,
    });

    window.location.href = `mailto:hello@cyanbluecreative.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <Box sx={{ maxWidth: '60vw', margin: 'auto', mt: 1 }}>
      <FormContainer onSubmit={handleSubmit}>
        <Typography variant='h4' component='h1'>
          Say hello
        </Typography>

        <TextField
          required
          label='Email'
          type='email'
          value={email}
          onChange={handleEmailChange}
          margin='normal'
          error={emailError}
          helperText={emailError ? 'Please enter a valid email address.' : null}
        />

        <TextField
          required
          label='Name'
          type='text'
          value={name}
          onChange={handleNameChange}
          margin='normal'
        />

        <TextField
          required
          label='Message'
          multiline
          rows={4}
          value={message}
          onChange={handleMessageChange}
          margin='normal'
        />

        <TextField
          label='Phone Number'
          type='tel'
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          margin='normal'
        />

        <TextField
          label='Additional Notes'
          multiline
          rows={4}
          value={additionalNotes}
          onChange={handleAdditionalNotesChange}
          margin='normal'
        />

        <SubmitButton
          variant='contained'
          color='primary'
          type='submit'
          sx={{ mb: 2 }}
        >
          Send
        </SubmitButton>
      </FormContainer>
    </Box>
  );
};

export default ContactForm;
