import React from 'react'
import Meta from '../components/Meta'

function RefundScreen() {
  return (
    <div>
      <Meta title={'Politica Di Reso | CentCellStore'} />
      <h1 className='border-bottom text-uppercase mb-4'>Politica Di Reso</h1>
      <p>
        Vogliamo che tu sia pienamente soddisfatto del tuo acquisto su
        CentCellStore e la nostra app. Ci impegniamo per fornire ai clienti la
        più piacevole delle esperienze di shopping. Siamo sempre disponibili e
        felici di aiutare per qualsiasi domanda. Se hai bisogno di richiedere un
        rimborso, contatta il nostro team entro 30 giorni dalla consegna o
        dall'ultima data stimata di consegna.
      </p>
      <h3 className='text-dark border-bottom mb-4'>
        Come funzionano le politiche di reso?
      </h3>
      <p>
        Per avviare un reso, vai alla pagina Contattaci, inserisci tutte le
        informazioni necessarie, il nostro team elaborerà la tua richiesta di
        rimborso il prima possibile su tua richiesta.
      </p>
      <ul>
        <li>
          I clienti possono richiedere il rimborso del loro ordine entro 30
          giorni dalla consegna o dall'ultima data stimata di consegna.
        </li>
        <li>
          Il nostro team si impegna a rispondere a tutte le richieste entro 2
          giorni lavorativi. Siamo sempre disponibili ad aiutarti!
        </li>
        <li>
          Una volta che un ordine è stato effettuato, se cambi idea puoi
          annullare l'ordine nella sezione I miei ordini, finché l'ordine non
          sia ancora stato spedito.
        </li>
        <li>
          Dopo la spedizione di un articolo, siamo spiacenti che non sia più
          possibile cancellare l'ordine.
        </li>
      </ul>
      <h3 className='text-dark border-bottom mb-4'>
        La tua richiesta di rimborso può essere respinta se:
      </h3>
      <ul>
        <li>
          Siano passati più di 30 giorni da quando ti sono stati consegnati gli
          articoli.
        </li>
        <li>
          Tu abbia spedito gli articoli senza aver ricevuto l'indirizzo del
          venditore dal nostro team.
        </li>
        <li>
          Tu non sia riuscito a fornire un numero di tracciabilità valido e le
          informazioni relative necessarie.
        </li>
      </ul>
      <h3 className='text-dark border-bottom mb-4'>
        Come riceverò il mio rimborso?
      </h3>
      <ul>
        <li>
          I rimborsi vengono accreditati tramite il metodo di pagamento usato
          per l'acquisto dell'articolo.
        </li>
        <li>
          Normalmente, puoi aspettarti l'accredito del rimborso da parte del tuo
          fornitore dei servizi di pagamento entro 14 giorni lavorativi. Se non
          riesci a individuare il rimborso, ti consigliamo di contattare il tuo
          fornitore dei servizi di pagamento per ulteriore assistenza.
        </li>
      </ul>
    </div>
  )
}

export default RefundScreen
