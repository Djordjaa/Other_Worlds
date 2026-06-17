SUPSI 2026  
Corso d’interaction design, CV429.01  
Docenti: A. Gysin, G. Profeta

Progetto 1: La conquista dello spazio

# Other Worlds

**Autore:** Djordja Krsteva  
[Other Worlds](https://djordjaa.github.io/Other_Worlds/)

## Introduzione e tema

**Other Worlds** è una visualizzazione dati interattiva di 11 esopianeti confermati, costruita a partire dai dati pubblici del [NASA Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/).

Al momento, alcuni siti offrono un’esperienza di visualizzazione degli esopianeti, ma risultano spesso un po’ dispersivi o poco comprensibili nell’immediato. L’obiettivo del progetto è quindi quello di trasformare questi dati in un’esperienza esplorabile e chiara anche per chi non conosce concetti avanzati.

Il tema specifico è la varietà dei mondi oltre il sistema solare. Gli 11 pianeti selezionati non rappresentano una classifica di importanza o abitabilità, ma una selezione di casi estremi che evidenziano la diversità delle condizioni osservate, tra cui pianeti con temperature molto elevate o composizioni atipiche.

Il progetto nasce in occasione del **70° anniversario della NASA (1958–2028)**, come contributo alle celebrazioni della conquista dello spazio previste per il 2028.

<img width="1728" height="961" alt="Overview" src="https://github.com/user-attachments/assets/43494aae-3b19-49e8-98f2-45b3b2a4e63d" />

## Riferimenti progettuali

Come base concettuale ho preso spunto dalla generous interface di Mitchell Whitelaw, cioè un modo di presentare i dati che punta sull'esplorazione libera piuttosto che sulla semplice consultazione. L’interfaccia si ispira a strumenti di monitoraggio scientifico reali (come [NASA Eyes on Exoplanets](https://eyes.nasa.gov/apps/exo/)) e all’estetica delle interfacce HUD. Infine, per la narrazione visiva, mi sono ispirata ai contenuti del sito The Pudding e alle varie esplorazioni interattive della NASA.
Per quanto riguarda la scelta su cosa inserire nei tooltip contestuali, mi sono basata su alcune delle domande che si fa il pubblico generale su questo tema, guardando i commenti sotto vari video sui social e direttamente su NASA Eyes on Exoplanets.

## Design dell’interfaccia e modalità di interazione

La prima volta che si visita il sito appare un breve testo introduttivo tramite animazione typewriter e nello sfondo sono visibili delle particelle luminose che evocano la vastità dell'archivio NASA (oltre 6’298 esopianeti), che in seguito si attenuano per far comparire gli 11 pianeti uno alla volta.

L’interfaccia è un **canvas 3D a schermo intero** con gli 11 pianeti disposti orizzontalmente in ordine di temperatura superficiale crescente. In basso, c'è una barra che riporta il nome e la temperatura di ciascun pianeta; sopra di essa, una linea della temperatura va da `← Cooler` a `Hotter →`.

- **Hover:** Compare un riquadro con nome e breve descrizione.
- **Click:** La visuale esegue uno zoom sul pianeta, apre un pannello dati sul lato sinistro e nasconde gli altri elementi.
- **Pannello Dati:** Segue una gerarchia fissa (tipo di pianeta, nome, frase descrittiva e dati fisici). Include una barra della temperatura comparativa rispetto alla Terra e un link diretto al NASA Exoplanet Archive.

I termini tecnici sono cliccabili tramite **badge [?]** che aprono tooltip contestuali. Questo sistema permette di accedere a definizioni semplificate (come il metodo di scoperta) senza appesantire la lettura principale. Per tornare alla visualizzazione completa si utilizza il tasto `ESC` o la `X` in alto a destra.


In termini di scelte visive:

- **Colori:** Per lo sfondo viene utilizzato il nero e il bianco per il testo, in modo da richiamare il contesto spaziale e rendere i pianeti distinguibili.
- **Tipografia:** **IBM Plex Mono** e **IBM Plex Sans** per il testo descrittivo.
- **Visualizzazione:** Gli esopianeti non hanno fotografie e la NASA stessa utilizza solo delle possibili rappresentazioni; di conseguenza non sono state usate texture illustrative, ma gli **shader** sono stati creati direttamente dai parametri fisici disponibili nell’archivio NASA.

<img width="1728" height="961" alt="Planet_Detail_1" src="https://github.com/user-attachments/assets/3d3b8021-91f2-4dac-8a9b-d786d2dadd1f" />
<img width="1728" height="961" alt="Planet_Detail_tooltip" src="https://github.com/user-attachments/assets/d0acade2-7057-438d-b22c-04630645e0b8" />


https://github.com/user-attachments/assets/2ad3abb8-0f4b-4b7f-ba19-4a5866cebbb6


## Tecnologia usata

Il progetto è sviluppato in **HTML, CSS e JavaScript vanilla**, senza l’uso di framework.

Per quanto riguarda le informazioni ho preso i dati dall'archivio NASA e li ho inseriti direttamente in JavaScript dentro un array di oggetti. Questo array serve a gestire sia i testi, che gli elementi grafici.

- **Rendering 3D:** Gestito tramite **Three.js (r128)**, con una camera prospettica a FOV 38°. I pianeti sono stati disposti orizzontalmente in ordine di temperatura, tutti con la stessa dimensione di base per essere leggibili in un'unica schermata, tranne WASP-12 b che è stato allungato via codice per mostrare l'effetto della sua stella.
- **Superfici:** Generate proceduralmente tramite **shader GLSL** (simplex noise e Fractal Brownian Motion). Sono state usate funzioni matematiche per simulare visivamente le caratteristiche fisiche, come la pioggia di ferro su WASP-76 b o il vento di vetro.
- **Animazioni:** Transizioni gestite tramite **GSAP**.

#### Esempio Shader: WASP-76 b

```glsl
// Simula l'asimmetria giorno/notte e la pioggia di ferro
float dayFace = smoothstep(-0.2, 0.4, vP.x);

// Lato giorno: arancione-giallo, riscaldato dalla stella
vec3 day = mix(vec3(0.75, 0.28, 0.04), vec3(1.0, 0.58, 0.12), n);

// Lato notte: arancione scuro con striature di ferro condensato
vec3 night = mix(vec3(0.18, 0.03, 0.01), vec3(0.38, 0.08, 0.03), n);
float iron = smoothstep(0.58, 0.82, fbm(p * 5.0 + vec3(uT * 0.02, 0.0, 0.0), 4) * 0.5 + 0.5);
night = mix(night, vec3(0.58, 0.48, 0.38), iron * 0.65);

// Fusione lato giorno e notte in base alla posizione
vec3 col = mix(night, day, dayFace);
```

## Target e contesto d’uso

Il target primario include utenti generici senza formazione specifica, oltre a studenti e appassionati di astronomia. Il progetto può essere utilizzato in contesti espositivi o didattici come applicazione web interattiva fruibile tramite mouse e tastiera.
