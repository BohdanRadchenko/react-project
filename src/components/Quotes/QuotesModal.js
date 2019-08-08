import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
// import styles from './QuotesModal.module.css';

const quotes = [
  {
    title:
      '1. Заведите себе привычку вести учет доходов и расходов в электронном или письменном виде.',
    body: '',
  },
  {
    title:
      '2. Избавьтесь от кредитных карт, потребительских кредитов и прочих долгов.',
    body:
      ' Долги давят психологически, вгоняют людей в стресс и заставляют беспокоиться о завтрашнем дне. В итоге, за пользование чужими деньгами вы заплатите не только своими деньгами, но и своим здоровьем и своей энергией. ',
  },
  {
    title: '3. Вообще перестаньте брать деньги в долг. ',
    body:
      'При покупке товаров с помощью заемных средств люди обычно тратят в среднем на 30% больше, чем если бы они оплачивали ту же покупку своими собственными деньгами. К тому же купленная в кредит вещь обходится порой в несколько раз дороже своей истинной цены.',
  },
  {
    title: '4. Живите по средствам.',
    body:
      'Когда вы нарушаете это правило, вы теряете гармонию в собственной жизни. Вы тратите деньги, которых не заработали, Фактически, пользуясь тем, что вам не принадлежит, вы можете лишиться этого в любой момент! Осознайте разницу между своими потребностями — тем, что вам действительно нужно, и своими желаниями — тем, что «неплохо было бы иметь». Расставьте приоритеты так, чтобы сначала закрывать все потребности, а то что остается пускать на хотелки и развлечения. ',
  },
  {
    title: '5. Откажитесь от импульсивных покупок и необязательных трат.',
    body:
      'Составляйте список покупок перед походом в магазин и придерживайтесь его.',
  },
];

const RandomQuote = quotesMass => {
  return quotesMass[Math.floor(Math.random() * Math.floor(quotesMass.length))];
};

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const quote = RandomQuote(quotes);
  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">{quote.title}</h2>
          <p id="simple-modal-description">{quote.body}</p>
          {/* <button type="button" onClick={handleClose}>
            Close
          </button> */}
        </div>
      </Modal>
    </div>
  );
}
