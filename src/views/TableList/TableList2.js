import React, { useState, useEffect } from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Table from 'components/Table/Table.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import api from '../../services/api';
import firebase from 'firebase';
const styles = {
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0',
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF',
    },
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1',
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [empolyees, setEmpolyes] = useState([]);

  // useEffect(() => {
  //   var firestore = firebase.firestore();
  //   var docRef = firestore.doc('users');
  //   docRef.get().then((doc) => {
  //     if (doc && doc.exists) setEmpolyes(doc.data());
  //   });
  // }, []);

  useEffect(() => {
    return firebase
      .database()
      .ref('users')
      .once('value')
      .then((snapshot) => {
        // var username =
        //   (snapshot.val()) || 'Anonymous';
        setEmpolyes(snapshot.val());
      })
      .catch((error) => {
        console.log('Ocorreu um erro: ', error);
      });
  }, []);

  const funcionarios = empolyees.map((obj) => {
    const { matricula, nome, email, empresa } = obj;
    return [matricula, nome, email, empresa];
  });

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>Funcionários</h4>
            <p className={classes.cardCategoryWhite}>
              lista de funcionários de acesso realizado
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={['Matricula', 'Nome', 'Email', 'Empresa']}
              tableData={funcionarios}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
