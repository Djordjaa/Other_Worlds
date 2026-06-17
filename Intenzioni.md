# Other_Worlds  
Progetto 1 – La conquista dello spazio  
Corso di Interaction Design


**Il Concetto**    
Il NASA Exoplanet Archive contiene oltre 6000 pianeti confermati, con dati su temperatura, dimensioni e distanza. Purtroppo, però, è uno strumento per ricercatori: tabelle, parametri tecnici, nessun contesto narrativo.
Con questo progetto vorrei trasformare quei dati in un'esperienza interattiva 3D attraverso una selezione di pianeti rappresentativi, dai più peculiari e inabitabili fino ai più simili alla Terra. L’idea è che l'utente possa muoversi nello spazio, cliccare sui pianeti e scoprire le loro caratteristiche una alla volta. Prima viene mostrato quanto sia difficile trovare le condizioni giuste per la vita, poi i candidati più promettenti, partendo dalla Terra. 

**Target**  
pubblico generalista, persone curiose, appassionati di spazio.  


**Lingua**   
Inglese.


**Obiettivi**  
    - Far capire cosa sono gli esopianeti e che ne esistono migliaia  
    - Far emergere da quella visualizzazione la loro diversità (temperatura, dimensioni, condizioni) e la rarità di quelli abitabili  
    - Rispondere implicitamente alla domanda: perché si fa questa ricerca, a cosa serve studiare gli esopianeti  


**I Dati**  
Fonte: NASA Exoplanet Archive — archivio ufficiale NASA.  
Formato: CSV esportato direttamente dalla piattaforma.  
Parametri scelti:  
| Parametro | Descrizione | Uso nel progetto |
| :--- | :--- | :--- |
| `pl_name` | Nome del pianeta | Schede di dettaglio |
| `pl_rade` | Raggio in raggi terrestri | Dimensione visiva, confronto con la Terra |
| `pl_eqt` | Temperatura di equilibrio stimata (K) | Colore e atmosfera visiva del pianeta |
| `sy_dist` | Distanza in anni luce | Posizionamento, tempo di viaggio calcolato |
| `disc_year` | Anno di scoperta | Contesto nella scheda di dettaglio |
| `discoverymethod` | Metodo di scoperta | Informazione nella scheda di dettaglio |
  
Dato aggiuntivo calcolato: tempo di viaggio dalla Terra a diverse velocità


**I Pianeti**  
La selezione è composta da 10 pianeti più la Terra come punto di partenza. Ogni pianeta rappresenta una categoria diversa di “impossibile”, fino ad arrivare ai due più simili alla Terra conosciuti:  
KELT-9 b  
WASP-76 b  
HD 189733 b  
WASP-12 b  
Kepler-16 b  
TOI-3757 b  
55 Cancri e  
TrES-2 b  
Kepler-186 f  
TRAPPIST-1 e  


**Struttura e Interazione**  
Il sito è una pagina singola a scroll orizzontale (da decidere) e occupa l’intero schermo.
  
**Intro**  
Schermata di apertura con titolo, una frase e il numero totale di esopianeti confermati, con una breve spiegazione degli esopianeti.
  
**L'esperienza**  
Scena 3D navigabile con Three.js. I pianeti sono posizionati nello spazio come sfere con colori e dimensioni basati sui dati reali. L’utente si muove tra un pianeta e l’altro con scroll orizzontale o frecce. Cliccando su un pianeta appare una scheda con i dati principali e il confronto con la Terra. Idealmente, alcuni pianeti hanno animazioni legate alla loro peculiarità, come le particelle di ferro su WASP-76b.
  
**Fine**  
Alla fine una schermata finale in cui si visualizzano i 10 pianeti su 6.138 confermati (da decidere).
