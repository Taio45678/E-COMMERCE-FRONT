import React from "react";
import { Typography, Button, Box, TextField, } from '@mui/material';
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function MisDatos() {

  const [isEditing, setIsEditing] = useState(false);
  const{user} = useAuth0();
  const [password, setPassword] = useState('***********');
  const [address, setAddress] = useState('Calle falsa 123');
  const [phone, setPhone] = useState('1234567890');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Aquí puedes agregar la lógica para guardar la contraseña editada
    // Puedes usar el estado para obtener el nuevo valor del campo de contraseña
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Aquí puedes agregar la lógica para cancelar la edición
    // Puedes usar el estado para restaurar el valor original del campo de contraseña
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };


  return (
    <Box>
      <Typography
        variant="h1"
        fontSize="2rem"
        sx={{
          backgroundColor: 'black',
          color: 'red',
          padding: '10px',
          borderRadius: '4px',
          display: 'inline-block',
        }}
      >
        Datos de cuenta
      </Typography>

      <Box>
        <Box>
          <Typography variant="h2" fontSize="1.5rem" sx={{ mt: 3, }}>
            Usuario
            {/* <Button style={{ color: "red", marginLeft: "30px" }}>editar</Button> */}
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            defaultValue={user.name}
            sx={{ width: "400px"}}
            disabled
          />

        </Box>
        <Box>
          <Typography variant="h2" fontSize="1.5rem" sx={{ mt: 3, }}>
            Email
            {/* <Button style={{ color: "red", marginLeft: "30px" }}>editar</Button> */}
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            defaultValue={user.email}
            disabled
            sx={{ width: "400px", mt: 1, }}
          />

        </Box>
      </Box>
      <Typography
          variant="h1"
          fontSize="2rem"
          sx={{
            backgroundColor: 'black',
            color: 'red',
            padding: '10px',
            borderRadius: '4px',
            display: 'inline-block',
            mt: 5,
          }}
        >
          Datos personales
        </Typography>

      <Box>
        {/* <Box>
          <Typography variant="h2" fontSize="1.5rem">
            Nombre y Apellido{" "}
            <Button style={{ color: "red", marginLeft: "30px" }}>editar</Button>
          </Typography>
          <Typography variant="body1" fontSize="1rem">Nombre Completo</Typography>
        </Box> */}
        <Box>
          <Typography variant="h2" fontSize="1.5rem" sx={{ mt: 3, }}>
            Edad
            {/* <Button style={{ color: "red", marginLeft: "30px" }}>editar</Button> */}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              variant="outlined"
              size="small"
              defaultValue="27"
              disabled
              sx={{ width: "50px", mt: 1, }}
            />
            <Typography variant="body1" sx={{ marginLeft: "10px", mt: 1, }}>
              años
            </Typography>
          </Box>

        </Box>
        <Box>
      <Typography variant="h2" fontSize="1.5rem" sx={{ mt: 3 }}>
        Dirección
        {isEditing ? (
          <>
            <Button
              style={{ color: "red", marginLeft: "30px" }}
              onClick={handleSaveClick}
            >
              Guardar
            </Button>
            <Button
              style={{ color: "red", marginLeft: "10px" }}
              onClick={handleCancelClick}
            >
              Cancelar
            </Button>
          </>
        ) : (
          <Button
            style={{ color: "red", marginLeft: "30px" }}
            onClick={handleEditClick}
          >
            Editar
          </Button>
        )}
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        value={address}
        onChange={handleAddressChange}
        fullWidth
        disabled={!isEditing}
      />
    </Box>
        <Box>
      <Typography variant="h2" fontSize="1.5rem" sx={{ mt: 3 }}>
        Teléfono
        {isEditing ? (
          <>
            <Button
              style={{ color: "red", marginLeft: "30px" }}
              onClick={handleSaveClick}
            >
              Guardar
            </Button>
            <Button
              style={{ color: "red", marginLeft: "10px" }}
              onClick={handleCancelClick}
            >
              Cancelar
            </Button>
          </>
        ) : (
          <Button
            style={{ color: "red", marginLeft: "30px" }}
            onClick={handleEditClick}
          >
            Editar
          </Button>
        )}
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        value={phone}
        onChange={handlePhoneChange}
        fullWidth
        disabled={!isEditing}
      />
    </Box>
        <Box>
        <Typography variant="h2" fontSize="1.5rem" sx={{ mt: 3 }}>
        Contraseña
        {isEditing ? (
          <>
            <Button
              style={{ color: "red", marginLeft: "30px" }}
              onClick={handleSaveClick}
            >
              Guardar
            </Button>
            <Button
              style={{ color: "red", marginLeft: "10px" }}
              onClick={handleCancelClick}
            >
              Cancelar
            </Button>
          </>
        ) : (
          <Button
            style={{ color: "red", marginLeft: "30px" }}
            onClick={handleEditClick}
          >
            Editar
          </Button>
        )}
      </Typography>
      <TextField
        variant="filled"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        InputProps={{
          readOnly: !isEditing,
          disableUnderline: true,
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />

        </Box>
      </Box>
      {/* <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
        <Button variant="contained" 
         sx={{ width: "250px", height: "50px", backgroundColor: "#e91e63", color: "black", }}>
          <Typography variant="h1" fontSize="20px">Guardar cambios</Typography>
        </Button>
      </Box> */}

    </Box>
  );
  

}

