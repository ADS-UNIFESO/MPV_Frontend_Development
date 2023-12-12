import * as React from 'react';
import * as Components from './Components';
import styles from "./styles.module.css";
import backgroundImage from "assets/images/firstAcessBackground.png";
import tempLogoCard from "assets/images/tempLogo.svg";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';

const UserCard = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.card}>
      <div className={styles.imageBox2}>
        <img
          src={tempLogoCard}
          alt='Logo Card'
        />
        <h4>{children}</h4>
      </div>
      <h3>{">"}</h3>
    </button>
  );
};


export default function MaxWidthDialogLogin({ type }) {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const [filteredId, filteredBanner, background, revertPosition, anchor] = type;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  const [signIn, toggle] = React.useState(true);

  return (
    <React.Fragment>
      <Dialog
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Criar Conta</Components.Title>
                      <Components.Input type='text' placeholder='Nome' />
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Senha' />
                      <Components.Button>Cadastrar</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>LOGIN</Components.Title>
                       <Components.Input type='email' placeholder='Email' />
                       <Components.Input type='password' placeholder='Senha' />
                       <Components.Anchor href='#'>Esqueceu sua senha?</Components.Anchor>
                       <Components.Button>ENTRAR</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title2>Bem vindo de volta!</Components.Title2>
                      <Components.Paragraph>
                        Para se manter conectado conosco, faça login com suas informações pessoais
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                        Entrar
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title2>Olá, Amigo!</Components.Title2>
                        <Components.Paragraph>
                          Insira seus dados pessoais e comece a jornada conosco
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Cadastre-se
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>
          </Components.Container>
          </Dialog>
      {filteredBanner.map((banner) => (
        <section className={styles.page}>
          <image
            className={styles.imageBox}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className={styles.content}>
            <div className={styles.welcome}>
              <h3>Bem-vindo ao Painel de Publicações Acadêmicas</h3>
              <p>Por favor, faça o login para continuar o seu acesso.</p>
            </div>

            <div className={styles.cards}>
              <UserCard onClick={handleClickOpen} children={"Entrar como colaborador"} />
              <UserCard onClick={handleClickOpen} children={"Entrar como visitante"} />
            </div>

            <a
              className={styles.a}
              href='/candidato_colaborador'
            >
              Quero ser colaborador
            </a>
          </div>
        </section>
      ))}
    </React.Fragment>
  );
}



