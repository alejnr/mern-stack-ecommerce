import React, { Component } from 'react'
import Faq from 'react-faq-component'
import Meta from '../components/Meta'

const data = {
  title: 'FAQs',
  rows: [
    {
      title:
        "Siamo sempre a disposizione dei nostri clienti, ma prima di contattarci, ti preghiamo di vedere tra le domande elencate in questa sezione se c'è quella che fa al caso tuo.",
    },
    {
      title: 'Chi siamo?',
      content:
        "CentCellStore è una catena in franchising di prodotti venduti con la formula <strong>tutto a 100 euro</strong> e comprende negozi collocati in tutto il territorio nazionale e in zone altamente commerciali, inoltre il successo dell'iniziativa ci consente una costante espansione.",
    },
    {
      title: 'Cosa vendiamo?',
      content:
        'I nostri cellulari derivano da una ampia scelta costantemente assortita e di varie marche.',
    },
    {
      title: 'Perché i prezzi sono così bassi?',
      content:
        'Semplice. Acquistiamo in stock e a prezzi destinati alla grande distribuzione.',
    },
    {
      title: 'Quanto costa la spedizione?',
      content:
        'La spedizione è completamente gratuità per tutti gli articoli presenti sul nostro sito.',
    },
    {
      title: 'Quando arriva il mio ordine?',
      content:
        "La merce viene spedita dai nostri depositi, entro 5 giorni lavorativi dalla ricezione dell'ordine.",
    },
    {
      title: 'Che corriere utilizzate?',
      content:
        'Tutte le spedizioni sono tracciabili e assicurate per il 100% del valore e ci avvaliamo dei migliori corrieri nazionali.',
    },
    {
      title: 'Cosa succede se il corriere non trova nessuno a casa?',
      content:
        "Nel caso in cui non ci fosse nessuno in casa al momento dell'arrivo del corriere, quest'ultimo è tenuto a lasciare un avviso con un numero di telefono da richiamare per fissare la riconsegna.",
    },
    {
      title:
        "Cosa succede se l'articolo ricevuto è diverso da quanto ordinato?",
      content:
        "È POSSIBILE ESERCITARE IL DIFETTO DI CONFORMITÀ: L'ERRORE DEVE ESSERE COMUNICATO ENTRO 7 GIORNI, IL CONSEGUENTE RIMBORSO SARÀ EFFETTUATO AL RITORNO DEL PRODOTTO NEL NOSTRO MAGAZZINO.",
    },
    {
      title: "Sono un'azienda, posso ordinare grossi quantitativi?",
      content:
        'PER ORDINI CON GROSSI QUANTITATIVI È POSSIBILE CHIEDERE UN PREVENTIVO INVIANDO UNA MAIL A: r3ptrop@gmail.com',
    },
    {
      title: "I prezzi sul sito sono comprensivi d'iva?",
      content: 'Si. Tutti i prezzi si intendono IVA inclusa.',
    },
    {
      title: 'Posso ritirare il prodotto direttamente presso la Vostra sede?',
      content:
        'Il ritiro in sede non è previsto, non abbiamo lo-cali commerciali aperti al pubblico, ma solo uffici logistici.',
    },
  ],
}

export default class FaqScreen extends Component {
  render() {
    return (
      <div className='mt-3'>
        <Meta title={'Faqs | CentCellStore'} />
        <Faq
          data={data}
          styles={{ rowContentPaddingTop: '5px', rowTitleTextSize: '20px' }}
        />
      </div>
    )
  }
}
