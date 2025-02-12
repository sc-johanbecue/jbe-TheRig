/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React from 'react';
import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Login: LinkField;
  Register: LinkField;
}

type EuroConsumersArticleProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const EuroConsumersArticleDefaultComponent = (props: EuroConsumersArticleProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">EuroConsumers Header</span>
    </div>
  </div>
);

export const Default = (props: EuroConsumersArticleProps): JSX.Element => {
  if (props.fields) {
    return (
      <>
        <div id="step-by-step__content" className="main flex__row">
          <script type="application/json" id="scroll-to-target-settings">
            {
              // "callbacks": {
              // "beforeScroll": "EC.HubStepByStep.SetAnchor",
              // "easing": "easeIn",
              // "duration": 0
              // }
            }
          </script>

          <div
            id="step-by-step__navigation"
            className="step-by-step__navigation flex__col-xs-12 flex__col-lg-4"
          >
            <div
              className="step-by-step__navigation__inner"
              style={{ position: 'fixed', top: '190px', width: '323.325px;' }}
            >
              <div className="step-by-step__navigation__inner-wrapper padding-medium">
                <span className="step-by-step__navigation__title stronger margin--bottom-small">
                  <i className="icon icon-book-opened"></i>Stap-voor-stap gids{' '}
                </span>
                <ul
                  data-selector="step-by-step-navigation"
                  className="no-margin margin--top-large desktop-only"
                >
                  <li>
                    <Link
                      data-plugin="scrollToTarget"
                      data-plugin-settings="#scroll-to-target-settings"
                      href="#welke-type-van-koelkast-zoek-je"
                      title="Welke type van koelkast zoek je?"
                      ga-event-category="Navigating in Hub"
                      ga-event-action="cold appliance"
                      ga-event-label="advice: Welke type van koelkast zoek je?"
                      className="has-plugin active"
                    >
                      Welke type van koelkast zoek je?
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-plugin="scrollToTarget"
                      data-plugin-settings="#scroll-to-target-settings"
                      href="#functies-waarmee-je-rekening-moet-houden"
                      title="Functies waarmee je rekening moet houden"
                      ga-event-category="Navigating in Hub"
                      ga-event-action="cold appliance"
                      ga-event-label="advice: Functies waarmee je rekening moet houden"
                      className="has-plugin"
                    >
                      Functies waarmee je rekening moet houden
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-plugin="scrollToTarget"
                      data-plugin-settings="#scroll-to-target-settings"
                      href="#merken-van-koelkasten-vergelijken"
                      title="Merken van koelkasten vergelijken"
                      ga-event-category="Navigating in Hub"
                      ga-event-action="cold appliance"
                      ga-event-label="advice: Merken van koelkasten vergelijken"
                      className="has-plugin"
                    >
                      Merken van koelkasten vergelijken
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-plugin="scrollToTarget"
                      data-plugin-settings="#scroll-to-target-settings"
                      href="#veelgestelde-vragen"
                      title="Veelgestelde vragen"
                      ga-event-category="Navigating in Hub"
                      ga-event-action="cold appliance"
                      ga-event-label="advice: Veelgestelde vragen"
                      className="has-plugin"
                    >
                      Veelgestelde vragen
                    </Link>
                  </li>
                </ul>
                <div className="hide-on-desktop form form--group">
                  <div className="form__item form__item--string">
                    <div className="has-uniform fixedWidth">
                      <span style={{ userSelect: 'none' }}>Welke type van koelkast zoek je?</span>
                      <select
                        className="form__field--select"
                        data-selector="step-by-step-navigation-mobile"
                      >
                        <option
                          value="#welke-type-van-koelkast-zoek-je"
                          ga-event-category="Navigating in Hub"
                          ga-event-action="cold appliance"
                          ga-event-label="advice: Welke type van koelkast zoek je?"
                        >
                          Welke type van koelkast zoek je?
                        </option>
                        <option
                          value="#functies-waarmee-je-rekening-moet-houden"
                          ga-event-category="Navigating in Hub"
                          ga-event-action="cold appliance"
                          ga-event-label="advice: Functies waarmee je rekening moet houden"
                        >
                          Functies waarmee je rekening moet houden
                        </option>
                        <option
                          value="#merken-van-koelkasten-vergelijken"
                          ga-event-category="Navigating in Hub"
                          ga-event-action="cold appliance"
                          ga-event-label="advice: Merken van koelkasten vergelijken"
                        >
                          Merken van koelkasten vergelijken
                        </option>
                        <option
                          value="#veelgestelde-vragen"
                          ga-event-category="Navigating in Hub"
                          ga-event-action="cold appliance"
                          ga-event-label="advice: Veelgestelde vragen"
                        >
                          Veelgestelde vragen
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="step-by-step__guide"
            className="flex__col-xs-12 flex__col-xs-12 flex__col-lg-8 margin--left-auto margin--bottom-xlarge"
            data-selector="for-scraping"
          >
            <div
              data-type="ALineAdviceParagraphController"
              data-rendering="AdviceParagraph"
              data-datasource="{E26E3014-E9F9-47C3-9E0B-C1527D08E4B8}"
              className=""
            >
              <div
                data-plugin="waypointScroll"
                data-plugin-settings="#46cd431f-4664-4c7b-81cc-ee9a1af4cad2-waypoint-settings"
                id="welke-type-van-koelkast-zoek-je"
                className="step-by-step__guide padding--top-medium padding--bottom-medium has-plugin"
                data-selector="search-content-scraper"
              >
                <h2 className="stronger">Welke type van koelkast zoek je?</h2>
                <h3>Koel- en vriescombinatie (2 deuren)</h3>
                <p>
                  De meeste gezinnen hebben een <strong>tweedeurskoelkast</strong>, waarbij koelkast
                  en diepvriezer afzonderlijke compartimenten onder elkaar zijn.
                </p>
                <ul>
                  <li>
                    Bij een <strong>combi-top-toestel</strong> bevindt het vriesgedeelte zich boven
                    de koelkast, bij een combi-bottom eronder.
                  </li>
                  <li>
                    <strong>Combi-bottom-toestellen</strong> zijn het populairst in ons land. We
                    richten{' '}
                    <Link href="/huishoudelektro/koelkasten/vergelijker">
                      <b>onze test</b>
                    </Link>
                    &nbsp;vooral op dit type apparaat. Ze hebben meestal een groter vriesvak dan de
                    combi-top, al verlies je een beetje ruimte doordat er lades in zitten, wat bij
                    de combi-top niet het geval is.
                  </li>
                </ul>
                <h3>Inbouwmodel (1 of 2 deuren)</h3>
                <p>
                  Wil je dat je koelkast volledig opgaat in je keukeninterieur, dan moet je kiezen
                  voor een <strong>inbouwmodel</strong>. In tegenstelling tot een vrijstaande
                  koelkast moet die in een nis worden geplaatst. Dit type is ook uitgerust met een{' '}
                  <b>specifiek ventilatiesysteem</b>.
                </p>
                <p>
                  Toestellen die <strong>volledig ingebouwd</strong> zijn, dus niet enkel in een{' '}
                  <strong>nis geplaatst</strong> maar ook afgewerkt met een{' '}
                  <strong>meubelpaneel</strong>, doen je keuken er mooi als één geheel uitzien.
                  Interessant als je de ruimte in je keuken optimaal wilt benutten en ze als één
                  harmonieus geheel wilt laten ogen. Veelal wordt gekozen voor een ééndeursmodel van
                  122 cm hoog, al kan ook een combi-bottom model van zo’n 178 cm of een kleiner
                  model van 82 cm (onder het aanrecht) worden ingebouwd. Jammer genoeg is het
                  energieverbruik van veel van inbouwkoelkasten 178 cm voor verbetering vatbaar. Je
                  leest er meer over in ons{' '}
                  <Link href="/huishoudelektro/koelkasten/dossier/inbouwmodellen">
                    <b>dossier inbouwkoelkasten</b>
                  </Link>
                  .
                </p>
                <h3>Tafelmodel (1 deur)</h3>
                <p>
                  Er zijn ook de zogenoemde <strong>tafelmodellen</strong>, met een hoogte tot 90
                  cm. Ze hebben één deur en kunnen een vriesvak bevatten. Tafelmodellen worden vaak
                  gebruikt als<b> tweede koelkast</b> of voor op een studentenkot.
                </p>
                <h3>Amerikaanse koelkast (2 of 3 deuren)</h3>
                <p>
                  Als je veel ruimte hebt, kun je kiezen voor een zogenoemde &ldquo;
                  <Link href="/huishoudelektro/koelkasten/dossier/amerikaanse-koelkast">
                    <b>Amerikaanse koelkast</b>
                  </Link>
                  &ldquo;: een model waarbij koelkast en diepvriezer naast elkaar staan, met elk een
                  aparte deur (een &ldquo;side-by-side&ldquo; koelkast).
                </p>
                <ul>
                  <li>
                    Al is er een verschil tussen de echte <strong>Amerikaanse side-by-side</strong>{' '}
                    en de Europese. De eerste is doorgaans 178 cm hoog en in totaal 90 cm breed, met
                    een smal vriesgedeelte aan de linkerkant (waarbij je soms ook nog eens ruimte
                    verliest door de ijsblokjesmaker/waterverdeler).
                  </li>
                  <li>
                    De <strong>Europese variant</strong> bestaat uit twee aparte, gelijkwaardige
                    delen van elk 60 cm breed. Zij staan naast elkaar als één geheel.
                  </li>
                  <li>
                    Het &ldquo;<strong>French door</strong>&ldquo;-type combineert het
                    combi-bottom-principe met dat van een Amerikaanse side-by-side-koelkast:
                    bovenaan is er een koelcompartiment van zo’n 90 cm breed met twee openzwaaiende
                    deuren, onderaan is er het vriesgedeelte met een of twee lades (of één
                    frontpaneel waarachter dan twee lades zitten).
                  </li>
                </ul>
                <div>&nbsp;</div>
              </div>
              <Link
                className="block step-by-step__scroll-to-top hide-on-desktop has-plugin"
                data-plugin="scrollToTarget"
                href="#step-by-step__navigation"
              >
                Terug naar boven
              </Link>
              {/* <script type="application/json" id="46cd431f-4664-4c7b-81cc-ee9a1af4cad2-waypoint-settings">
        {
        "offset": 150,
        "once": false,
        "callbackIn": "EC.HubStepByStep.WaypointIn",
        "callbackOut": "EC.HubStepByStep.WaypointOut"
        }
    </script> */}
            </div>
            <div
              data-type="ALineCrossLinkingBannerController"
              data-rendering="GeneralCrossLinkingBanner"
              data-datasource="{8914665B-6673-469C-8EAE-87A13FB3A9C4}"
              className="padding--bottom-small padding--top-small section"
            >
              <div className="constrained">
                <aside className="nba-panel margin--top-large margin--bottom-xlarge padding--top-large padding--bottom-large">
                  <div className="flex__row">
                    <div className="flex__col flex__col-xs-12 flex__col-md-5 relative">
                      <Link
                        href="/huishoudelektro/koelkasten/vergelijker?int_campaign=product-hub&amp;int_source=hubv2&amp;int_medium=hub-advice&amp;int_content=results-page&amp;int_term=cross-linking-banner"
                        className="relative "
                      >
                        <span className="nba-panel__tag">Vergelijker</span>
                        <img
                          data-src="/-/media/ta/images/home/home appliances/cold appliance/comment-choisir/guide-achat-78815733.jpg?rev=a23e4723-0f6d-400e-8d69-2e9cfd5f6ed0&amp;la=nl-BE&amp;h=155&amp;mw=275&amp;w=275&amp;hash=D417258C3FA2CD3EDE69613856CDAD59"
                          className="no-margin has-plugin"
                          height="155"
                          alt="We hebben 40 koelkasten met diepvriezer onderaan getest. "
                          data-plugin="imageComponent"
                          width="275"
                          fetchPriority="low"
                          src="/-/media/ta/ta-logos-2022/placeholder_ta_615.jpg?rev=5c232392-5ab1-4501-86a8-ecc03960779a&amp;h=162&amp;w=275&amp;hash=26BE1D883D3CA3D8886EA31FC02000BC"
                        />
                      </Link>
                    </div>
                    <div className="flex__col flex__col-xs-12 flex__col-md-7">
                      <Link
                        href="/huishoudelektro/koelkasten/vergelijker?int_campaign=product-hub&amp;int_source=hubv2&amp;int_medium=hub-advice&amp;int_content=results-page&amp;int_term=cross-linking-banner"
                        className="link-underline-never"
                      >
                        <h3 className="stronger no-margin">
                          Op zoek naar de beste koelkast met diepvriezer onderaan?
                        </h3>
                      </Link>
                      <p>We hebben meer dan 40 koelkasten met diepvriezer onderaan getest.&nbsp;</p>
                      <p className="no-margin">
                        <Link
                          href="/huishoudelektro/koelkasten/vergelijker?int_campaign=product-hub&amp;int_source=hubv2&amp;int_medium=hub-advice&amp;int_content=results-page&amp;int_term=cross-linking-banner"
                          title="Vergelijk en kies"
                          className="btn btn--primary"
                        >
                          Vergelijk en kies
                        </Link>
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
            <div
              data-type="ALineAdviceParagraphController"
              data-rendering="AdviceParagraph"
              data-datasource="{CB3D33FD-263F-4966-ABAA-6C7F2FEB4D03}"
              className=""
            >
              <div
                data-plugin="waypointScroll"
                data-plugin-settings="#776cf53c-74f1-460a-bb73-f3e6f33321f2-waypoint-settings"
                id="functies-waarmee-je-rekening-moet-houden"
                className="step-by-step__guide padding--top-medium padding--bottom-medium has-plugin"
                data-selector="search-content-scraper"
              >
                <h2 className="stronger">Functies waarmee je rekening moet houden</h2>
                <h3>Afmetingen en capaciteit</h3>
                <h4>Grootte van de koelkast</h4>
                <p>
                  Zoek je een kleine frigo voor een studentenkot of een kitchenette, dan ga je het
                  best voor een tafelmodel. Neem bij de aankoop altijd goed de maten op, zodat je de
                  beschikbare ruimte optimaal benut. Kleine tafelmodellen zijn 50 à 55 cm breed en
                  80 à 90 cm hoog.
                </p>
                <p style={{ textAlign: 'center' }}>
                  <img
                    alt="capaciteit-afmetingen-koelkasten-test-aankoop"
                    src="/-/media/ta/images/home/home appliances/cold appliance/comment-choisir/capaciteit-afmetingen-koelkast.png?rev=299d6753-80ff-4ebf-9759-83725ef058c4&amp;h=250&amp;w=700&amp;hash=09B172EA01E853244A68AA4621A3AF3B&amp;mw=960"
                    style={{ maxWidth: '700px' }}
                  />
                </p>
                <h4>Welke inhoud moet je koelkast hebben?</h4>
                <div>
                  De inhoud van een koelkast of diepvriezer wordt weergegeven in liter. Koop je
                  toestel niet te groot, want dit verbruikt onnodig veel energie, maar ook niet te
                  klein, want voedsel mag niet te dicht opeen liggen of tegen de wanden omdat er
                  voor een goede koeling voldoende luchtcirculatie rond de etenswaren moet zijn.
                </div>
                <p>
                  Voor een gezin van<strong> 2 of 3 personen</strong> zal een combitoestel zeker
                  volstaan. Telt je gezin echter <strong>6 personen of meer</strong>, dan heb je
                  wellicht nood aan een grotere koelkast. In dat geval is een koelkast zonder
                  vriesgedeelte wellicht interessanter en ga je beter voor een afzonderlijke
                  diepvrieskist of -kast.
                </p>
                <p>
                  Vooraleer je naar de winkel gaat, moet je steeds goed opmeten hoe groot de
                  beschikbare ruimte voor de koelkast is. Houd er ook rekening mee dat je steeds
                  extra ruimte rond het toestel moet voorzien, waarin lucht kan circuleren. Dit
                  garandeert de goede werking van het toestel. Sla er zeker de aanbevelingen van de
                  fabrikant op na!
                </p>
                <h4>Extra tips:</h4>
                <ul>
                  <li>
                    Het is altijd raadzaam om de binnenkant van de koelkast te analyseren om de
                    afmetingen te controleren.
                  </li>
                  <li>
                    Vertrouw niet op het koelkastvolume op het etiket, want producenten overschatten
                    dit volume soms met 20%.
                  </li>
                </ul>
                <p>
                  <strong>Afmetingen en capaciteit</strong> van de koelkasten{' '}
                  <strong>per type</strong>:
                </p>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Type toestel</strong>
                      </td>
                      <td>
                        <strong>Hoogte</strong>
                      </td>
                      <td>
                        <strong>Breedte</strong>
                      </td>
                      <td>
                        <strong>Diepte</strong>
                      </td>
                      <td>
                        <strong>Capaciteit</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Amerikaanse koelkast</td>
                      <td>180 cm</td>
                      <td>Tussen 90 en 120 cm</td>
                      <td>70 cm</td>
                      <td>Tussen 500 en 670 liter</td>
                    </tr>
                    <tr>
                      <td>Inbouwmodel (1 deur)</td>
                      <td>Tussen 120 en 150 cm</td>
                      <td>Tussen 54 en 60 cm</td>
                      <td>55 cm</td>
                      <td>Tussen 130 en 450 liter</td>
                    </tr>
                    <tr>
                      <td>Combi-model (2 deuren)</td>
                      <td>Tussen 140 en 200 cm</td>
                      <td>Tussen 55 en 65 cm</td>
                      <td>55 cm</td>
                      <td>Tussen 140 en 450 liter</td>
                    </tr>
                    <tr>
                      <td>Tafelmodel</td>
                      <td>Tussen 80 en 90 cm</td>
                      <td>Tussen 50 en 55 cm</td>
                      <td>55 cm</td>
                      <td>Tussen 70 en 100 liter</td>
                    </tr>
                  </tbody>
                </table>
                <h3>Speciale functies en zones</h3>
                <p>
                  Niet alleen het model of type van koelkast is van belang bij je keuze, ook de{' '}
                  <strong>uitrustingsgraad</strong>. Een koelkast met diverse zones en functies om
                  verschillende soorten etenswaren op de optimale temperatuur te bewaren zal een
                  positief effect hebben op de <strong>houdbaarheid van de voeding</strong>&nbsp;en
                  op je <strong>elektricteitsfactuur</strong>.
                </p>
                <h4>No Frost-technologie voor het diepvriesgedeelte</h4>
                <p>
                  Een probleem bij zowel diepvriezers als in het diepvriesgedeelte van een koelkast
                  is het ijslaagje dat zich na verloop van tijd aan de binnenzijde vormt. Dat
                  beïnvloedt de prestaties van het toestel en bijgevolg ook het energieverbruik. Je
                  moet je toestel dus ontdooien zodra er zich een ijslaagje vormt bij zogenaamde
                  statische toestellen. Om dit tegen te gaan, hebben bepaalde modellen de No
                  Frost-technologie ingebouwd gekregen. Deze technologie voorkomt dat er zich een
                  laag ijs vormt in je diepvriezer. De keerzijde van de medaille is dat het
                  energieverbruik hierdoor hoger ligt. De <strong>Low Frost-technologie</strong>{' '}
                  biedt mogelijk een compromis. De ijslaag vormt zich minder snel in een statisch
                  toestel en toch verslindt het minder energie dan de No Frost-technologie omdat de
                  circulerende lucht minder droog is.
                </p>
                <h4>&ldquo;Superfrost&ldquo; of &ldquo;Superfreeze&ldquo;</h4>
                <p>
                  Een andere extra functie heet, al naargelang het model en het merk,
                  &ldquo;Superfrost&ldquo; of &ldquo;Superfreeze&ldquo;. Dit houdt in dat de
                  temperatuur van het vriesvak tijdelijk wordt verlaagd (tot onder -18° C) om (grote
                  hoeveelheden) voeding snel te kunnen invriezen. Afhankelijk van het model moet
                  deze functie tussen 0 en 24 uur op voorhand, volg hierbij de instructies, worden
                  ingeschakeld. Sommige toestellen schakelen de functie nadien automatisch uit, maar
                  sommige ook niet. Bij die laatste moet je dit dus zeker zelf doen, want deze
                  snelvriesfunctie slorpt veel energie op.
                </p>
                <h4>Koelkast met &ldquo;hybride&ldquo; zone</h4>
                <p>
                  Meer en meer koelvriescombinaties zijn uitgerust met een &ldquo;hybride&ldquo;
                  zone die uit twee compartimenten bestaat onderdaan de koelkast. In het ene
                  compartiment kan je zelf de vochtigheidsgraad instellen om groenten te bewaren.
                  Elke fabrikant heeft wel zijn eigen naam voor deze speciale vershoudzone:
                  Biofresh, LongFresh, Chillersafe, Hydrofresh, Cool Select Zone ... In het andere
                  compartiment waarin de temperatuur schommelt rond de 0° C kun je vlees of vis
                  bewaren.
                </p>
                <h3>Het geluid</h3>
                <p>
                  De decibellen waarmee rekening moet worden gehouden bij de beoordeling van
                  koelkastgeluid, worden ook op het etiket aangegeven. Houd er rekening mee dat een
                  normaal gesprek tussen twee mensen rond de 50 dB is, een fluistering is 40 dB.
                </p>
                <h3>Energieverbruik</h3>
                <p>
                  Een koelkast en/of diepvriezer verbruikt heel wat energie. Een eerste vereiste om
                  dat verbruik te beperken, is dat je een toestel op maat koopt, en geen toestel dat
                  eigenlijk te groot is voor jou of je gezin.
                </p>
                <p>
                  Vervolgens kun je kiezen tussen de verschillende energieklassen. Tot 2020 ging de
                  schaal van A+++ tot G. Omdat de meeste toestellen zich echter in de hoogste
                  klassen bevonden, heeft de EU besloten om de labels te herzien.&nbsp;Het nieuwe
                  energielabel werd ingevoerd op 1 november 2020 en is vanaf 1 maart 2021 verplicht
                  op nieuwe toestellen in de winkels. De schaal gaat van A tot G, met A als de
                  zuinigste energieklasse.
                  <br />
                  Raadpleeg{' '}
                  <Link href="/huishoudelektro/koelkasten/dossier/een-zuinige-koelkast-kiezen">
                    ons dossier
                  </Link>
                  &nbsp;om meer te lezen over deze herziening, om te ontdekken hoe je het
                  energielabel moet interpreteren en om het verbruik volgens het nieuwe label te
                  berekenen.
                </p>
                <p>
                  Doordat de toestellen op basis van andere meetmethoden en strengere normen in
                  energieklassen worden ingedeeld, kun je koelkasten met het nieuwe label niet
                  vergelijken met toestellen met het oude label van A+++ tot G. Als je echter twee
                  gelijkaardige koelkasten met nieuw label onderling vergelijkt, zul je zien dat
                  toestellen van een hogere energieklasse minder stroom verbruiken, wat je zult
                  merken aan je energiefactuur
                </p>
                <p>
                  Opgelet, het energielabel zegt niet alles. Je moet ook rekening houden met andere
                  factoren zoals volume, type, constructiematerialen, verschillende
                  koude-instellingen ... Zo zal een Amerikaanse koelkast met gunstig label a priori
                  meer verbruiken dan een kleinere koelvriescombinatie met een lager label. Dat komt
                  omdat de Amerikaanse koelkast volumineuzer is en meer koelopties heeft (een
                  ijsblokjes- of waterdispenser bijvoorbeeld), wat het energieverbruik doet oplopen.
                </p>
              </div>
              <Link
                className="block step-by-step__scroll-to-top hide-on-desktop has-plugin"
                data-plugin="scrollToTarget"
                href="#step-by-step__navigation"
              >
                Terug naar boven
              </Link>
              <script
                type="application/json"
                id="776cf53c-74f1-460a-bb73-f3e6f33321f2-waypoint-settings"
              >
                {/* {
        "offset": 150,
        "once": false,
        "callbackIn": "EC.HubStepByStep.WaypointIn",
        "callbackOut": "EC.HubStepByStep.WaypointOut"
        } */}
              </script>
            </div>

            <div
              data-type="ALineCrossLinkingBannerController"
              data-rendering="GeneralCrossLinkingBanner"
              data-datasource="{7F8E8C0D-68FC-4EB2-9C88-3D6DC573215C}"
              className="padding--bottom-small padding--top-small section"
            >
              <div className="constrained">
                <aside className="nba-panel margin--top-large margin--bottom-xlarge padding--top-large padding--bottom-large">
                  <div className="flex__row">
                    <div className="flex__col flex__col-xs-12 flex__col-md-5 relative">
                      <Link
                        href="/huishoudelektro/koelkasten/dossier/een-zuinige-koelkast-kiezen?int_campaign=product-hub&amp;int_source=hubv2&amp;int_medium=hub-advice&amp;int_content=dossier&amp;int_term=cross-linking-banner"
                        className="relative "
                      >
                        <span className="nba-panel__tag">Dossier</span>
                        <img
                          data-src="/-/media/ta/images/minisites/labels énergie/frigos labels.jpg?rev=c180175d-014a-4b61-8697-a879a2ffd640&amp;la=nl-BE&amp;h=155&amp;mw=275&amp;w=275&amp;hash=AE9454CEA8BA3511B7E08A3ED4C6ADC1"
                          className="no-margin has-plugin"
                          height="155"
                          alt="zuinigheid koelkast"
                          data-plugin="imageComponent"
                          width="275"
                          fetchPriority="low"
                          src="/-/media/ta/ta-logos-2022/placeholder_ta_615.jpg?rev=5c232392-5ab1-4501-86a8-ecc03960779a&amp;h=162&amp;w=275&amp;hash=26BE1D883D3CA3D8886EA31FC02000BC"
                        />{' '}
                      </Link>
                    </div>
                    <div className="flex__col flex__col-xs-12 flex__col-md-7">
                      <Link
                        href="/huishoudelektro/koelkasten/dossier/een-zuinige-koelkast-kiezen?int_campaign=product-hub&amp;int_source=hubv2&amp;int_medium=hub-advice&amp;int_content=dossier&amp;int_term=cross-linking-banner"
                        className="link-underline-never"
                      >
                        <h3 className="stronger no-margin">Een zuinige koelkast kiezen</h3>
                      </Link>
                      <p>
                        Hoeveel elektriciteit een koelkast verbruikt, lees je af van het
                        energielabel. Vanaf november 2020 kon je het nieuwe, herziene label al bij
                        sommige toestellen aantreffen. Sinds 1 maart 2021 werd het officieel van
                        kracht.
                      </p>
                      <p className="no-margin">
                        <Link
                          href="/huishoudelektro/koelkasten/dossier/een-zuinige-koelkast-kiezen?int_campaign=product-hub&amp;int_source=hubv2&amp;int_medium=hub-advice&amp;int_content=dossier&amp;int_term=cross-linking-banner"
                          title="Lees meer over het nieuw energielabel "
                          className="btn btn--primary"
                        >
                          Lees meer over het nieuw energielabel{' '}
                        </Link>
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>

            <div
              data-type="ALineAdviceParagraphController"
              data-rendering="AdviceParagraph"
              data-datasource="{902990E5-4DBB-46FE-9674-13DA27BCC7CB}"
              className=""
            >
              <div
                data-plugin="waypointScroll"
                data-plugin-settings="#45df589c-b2f5-42e9-adf7-1bdd001349c6-waypoint-settings"
                id="merken-van-koelkasten-vergelijken"
                className="step-by-step__guide padding--top-medium padding--bottom-medium has-plugin"
                data-selector="search-content-scraper"
              >
                <h2 className="stronger">Merken van koelkasten vergelijken</h2>
                <p>
                  <strong>Samsung</strong>,<strong> Siemens</strong>,<strong> Bosch</strong>,
                  <strong> Liebherr</strong>,<strong> LG</strong>, <strong>Whirlpool</strong>,
                  <strong> AEG</strong>,<strong> Beko</strong> ... Allemaal bekende merken, maar
                  zijn hun koelkasten en diepvriezers van goede kwaliteit? Om je helpen bij de keuze
                  van een merk, maar ook een type van toestel, hebben we op grote schaal grondige
                  tests gedaan. Zo ontdek je{' '}
                  <strong>welke merken het meest betrouwbaar zijn</strong>.
                </p>
                <p>
                  Onze laboratoriumtests zijn erop gericht om je te loodsen naar de koelkast van je
                  dromen, dat wil zeggen een toestel met een lange levensduur dat een goede
                  opbergcapaciteit combineert met een laag verbruik, gebruikscomfort en een optimale
                  temperatuurregeling. Zoals eerder al gezegd, testen we voornamelijk
                  koelvriescombinaties met diepvriesgedeelte onderaan (combi-bottoms), aangezien die
                  het <strong>meest verkocht worden in ons land</strong>.
                </p>
                <p>
                  De toestellen van de verschillende merken vertegenwoordigd op de Belgische markt
                  worden door onze experts uitgebreid getest. Op basis van de resultaten krijgen ze
                  een score op 100, die overeenkomt met een bepaald kwaliteitsniveau: “slechte,
                  redelijke, goede of uitstekende kwaliteit. We nemen in ons eindoordeel ook de
                  scores op van de enquêtes over merktevredenheid en –betrouwbaarheid.
                </p>
                <p>
                  In onze koopwijzer kun je gericht zoeken door te filteren op prijs, kwaliteit,
                  tevredenheidsindex ... Zo vind je gemakkelijk de{' '}
                  <Link href="/huishoudelektro/koelkasten/vergelijker">
                    koelkast die voor jou de beste keuze is.
                  </Link>
                </p>
              </div>
              <Link
                className="block step-by-step__scroll-to-top hide-on-desktop has-plugin"
                data-plugin="scrollToTarget"
                href="#step-by-step__navigation"
              >
                Terug naar boven
              </Link>
              <script
                type="application/json"
                id="45df589c-b2f5-42e9-adf7-1bdd001349c6-waypoint-settings"
              >
                {/* {
        "offset": 150,
        "once": false,
        "callbackIn": "EC.HubStepByStep.WaypointIn",
        "callbackOut": "EC.HubStepByStep.WaypointOut"
        } */}
              </script>
            </div>

            <div
              data-type="ALineCrossLinkingBannerController"
              data-rendering="GeneralCrossLinkingBanner"
              data-datasource="{A6483021-0ACA-45DC-8070-64018772141D}"
              className="padding--bottom-small padding--top-small section"
            >
              <div className="constrained">
                <aside className="nba-panel margin--top-large margin--bottom-xlarge padding--top-large padding--bottom-large">
                  <div className="flex__row">
                    <div className="flex__col flex__col-xs-12 flex__col-md-5 relative">
                      <Link
                        href="/huishoudelektro/koelkasten/dossier/betrouwbaarheid-koelkasten?int_campaign=product-hub&amp;int_source=hubv2&amp;int_medium=hub-advice&amp;int_content=dossier&amp;int_term=cross-linking-banner"
                        className="relative "
                      >
                        <span className="nba-panel__tag">Dossier</span>
                        <img
                          data-src="/-/media/ta/images/home/home appliances/cold appliance/dossier/betrouwbaarheid - fiabilite des marques/a,-e-,-71859.jpg?rev=744be4cc-bcdd-4a72-874f-a1784b3fbd39&amp;la=nl-BE&amp;h=155&amp;mw=275&amp;w=275&amp;hash=208C297F8CB10B0C697E6C7CF58C446C"
                          className="no-margin has-plugin"
                          height="155"
                          alt="Betrouwbaarheid"
                          data-plugin="imageComponent"
                          width="275"
                          fetchPriority="low"
                          src="/-/media/ta/ta-logos-2022/placeholder_ta_615.jpg?rev=5c232392-5ab1-4501-86a8-ecc03960779a&amp;h=162&amp;w=275&amp;hash=26BE1D883D3CA3D8886EA31FC02000BC"
                        />{' '}
                      </Link>
                    </div>
                    <div className="flex__col flex__col-xs-12 flex__col-md-7">
                      <Link
                        href="/huishoudelektro/koelkasten/dossier/betrouwbaarheid-koelkasten?int_campaign=product-hub&amp;int_source=hubv2&amp;int_medium=hub-advice&amp;int_content=dossier&amp;int_term=cross-linking-banner"
                        className="link-underline-never"
                      >
                        <h3 className="stronger no-margin">Betrouwbaarheid van de koelkasten</h3>
                      </Link>
                      <p>
                        Een koelkast is een hele investering, dus kies je het best voor een
                        betrouwbaar merk. Om te weten welke merken je het minst in de steek laten,
                        hebben we een enquête afgenomen bij zo&quot;n 46 000 gebruikers.
                      </p>
                      <p className="no-margin">
                        <Link
                          href="/huishoudelektro/koelkasten/dossier/betrouwbaarheid-koelkasten?int_campaign=product-hub&amp;int_source=hubv2&amp;int_medium=hub-advice&amp;int_content=dossier&amp;int_term=cross-linking-banner"
                          title=" Naar de betrouwbare merken"
                          className="btn btn--primary"
                        >
                          {' '}
                          Naar de betrouwbare merken
                        </Link>
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>

            <div
              data-type="ALineAdviceFaqController"
              data-rendering="AdviceFAQcontainer"
              data-datasource="{4E7739F7-A2E0-4229-80B1-4B67F3508952}"
              className=""
            >
              <div
                data-plugin="waypointScroll"
                data-plugin-settings="#faq-waypoint-settings"
                id="veelgestelde-vragen"
                className="step-by-step__guide padding--top-medium padding--bottom-medium has-plugin"
              >
                <h2 className="stronger advice-container">Veelgestelde vragen</h2>
                <div className="article-paragraph-container__segment-content">
                  <p>We beantwoorden je veelgestelde vragen over de aankoop van een koelkast.</p>
                  <div data-plugin="collapsible" className="has-plugin">
                    <div
                      className="collapsible__item "
                      data-active="false"
                      data-selector="search-content-scraper"
                    >
                      <h3
                        className="no-margin collapsible__head strong block "
                        id="collapsibleTrigger-7298"
                        aria-expanded="false"
                        aria-controls="collapsibleContent-1310"
                        role="button"
                      >
                        <i className="icon-chevron-down icon--heavy"></i>Hoeveel kost een koelkast?
                      </h3>
                      <div
                        className="collapsible__content"
                        id="collapsibleContent-1310"
                        role="region"
                        aria-labelledby="collapsibleTrigger-7298"
                        style={{ display: 'none' }}
                      >
                        <p>
                          Als je ervoor kiest om een nieuwe koelkast te kopen, weet dan dat er
                          toestellen te vinden zijn in alle prijzen. Je vindt een kleiner model voor
                          € 100 (bv. een tafelkoelkast), maar ook erg grote, moderne en goed
                          uitgeruste modellen van wel € 6 500. Die prijs is volledig afhankelijk van
                          het type koelkast dat je kiest, van de maat, het type technologie, het
                          energieverbruik, het merk en van de winkel waar je het toestel
                          uiteindelijk koopt.
                        </p>
                      </div>
                    </div>

                    <div
                      className="collapsible__item "
                      data-active="false"
                      data-selector="search-content-scraper"
                    >
                      <h3
                        className="no-margin collapsible__head strong block "
                        id="collapsibleTrigger-3202"
                        aria-expanded="false"
                        aria-controls="collapsibleContent-4686"
                        role="button"
                      >
                        <i className="icon-chevron-down icon--heavy"></i>Is een tweedehands koelkast
                        een goed idee?
                      </h3>
                      <div
                        className="collapsible__content"
                        id="collapsibleContent-4686"
                        role="region"
                        aria-labelledby="collapsibleTrigger-3202"
                        style={{ display: 'none' }}
                      >
                        <p></p>
                        <p>
                          Soms biedt zich de kans aan om een tweedehands koelkast te kopen tegen een
                          zacht prijsje. Doorgaans raden we een tweedehands huishoudapparaat enkel
                          aan voor sporadisch gebruik, ook al verbruikt het wat meer dan een nieuw
                          toestel. Zo kan bijvoorbeeld een tweedehands wasmachine je prima diensten
                          bewijzen als je pakweg maar een keer wast per week.
                        </p>
                        <p>
                          Wordt je huishoudtoestel daarentegen intensief gebruikt, wat bij een
                          koelkast zeker het geval is aangezien ze 24 op 24 en 7 op 7 is
                          ingeschakeld, dan kies je het best voor een nieuw en goed presterend
                          toestel. Een flink deel van de aankoopprijs zul je door de jaren heel
                          kunnen terugwinnen dankzij het lagere energieverbruik.
                        </p>
                        <p></p>
                      </div>
                    </div>

                    <div
                      className="collapsible__item "
                      data-active="false"
                      data-selector="search-content-scraper"
                    >
                      <h3
                        className="no-margin collapsible__head strong block "
                        id="collapsibleTrigger-2494"
                        aria-expanded="false"
                        aria-controls="collapsibleContent-5111"
                        role="button"
                      >
                        <i className="icon-chevron-down icon--heavy"></i>Waar een nieuwe koelkast
                        kopen?
                      </h3>
                      <div
                        className="collapsible__content"
                        id="collapsibleContent-5111"
                        role="region"
                        aria-labelledby="collapsibleTrigger-2494"
                        style={{ display: 'none' }}
                      >
                        <p>
                          Met onze tools kun je flink wat geld uitsparen. Kijk in de eerste plaats
                          naar het{' '}
                          <Link href="https://www.test-aankoop.be/applicaties/detail?app=besteprijs">
                            label &ldquo;Beste Koop&ldquo;
                          </Link>
                          . Die onderscheiding leidt je naar het toestel met de beste
                          prijs-kwaliteitverhouding. Je komt te weten in welke fysieke of
                          onlinewinkel je er de laagste prijs voor betaalt.
                          <br />
                          <br />
                          Heb je nog niet beslist welk merk van koelkast je wilt kopen? Kijk naar de
                          testresultaten van de populaire{' '}
                          <Link className="wysiwyg" href="/huishoudelektro/koelkasten/vergelijker">
                            koelvriescombinaties met diepvriesgedeelte onderaan
                          </Link>
                          &nbsp;(combi-bottoms).
                          <br />
                        </p>
                        <div>&nbsp;</div>
                        <p></p>
                      </div>
                    </div>

                    <div
                      className="collapsible__item "
                      data-active="false"
                      data-selector="search-content-scraper"
                    >
                      <h3
                        className="no-margin collapsible__head strong block "
                        id="collapsibleTrigger-4838"
                        aria-expanded="false"
                        aria-controls="collapsibleContent-4155"
                        role="button"
                      >
                        <i className="icon-chevron-down icon--heavy"></i>Welke garantie heb ik op
                        mijn koelkast?
                      </h3>
                      <div
                        className="collapsible__content"
                        id="collapsibleContent-4155"
                        role="region"
                        aria-labelledby="collapsibleTrigger-4838"
                        style={{ display: 'none' }}
                      >
                        <p></p>
                        <p>
                          Sinds 2004 geldt een wettelijke garantie van twee jaar op alle
                          huishoudtoestellen die in België zijn gekocht. In de eerste twee jaar na
                          aankoop mag je steeds de kosteloze reparatie of de vervanging van de
                          koelkast eisen. Duikt het probleem op in de eerste zes maanden, dan hoef
                          je enkel het defect aan te tonen. Nadien moet je kunnen aantonen dat het
                          gebrek bestond bij de aankoop, wat zonder expertise bijna onmogelijk is.
                        </p>
                        <p>
                          De meeste fabrikanten van huishoudtoestellen hebben, bovenop de wettelijke
                          garantie, een eigen fabrieksgarantie, ook commerciële waarborg genoemd.
                          Als je moeilijkheden ondervindt om bij de verkoper je wettelijke garantie
                          te doen gelden als een panne plots opduikt na meer dan zes maanden, kun je
                          je altijd nog tot de fabrikant wenden. De meeste grote merken zoals Bosch,
                          Whirlpool, Siemens, Samsung ... bieden een dergelijke commerciële garantie
                          onder bepaalde voorwaarden.
                        </p>
                        <p>
                          Bovendien zal de verkoper bij aankoop van de koelkast vaak voorstellen een
                          contract te tekenen voor een verlengde garantietermijn (gewoonlijk tot
                          drie jaar).
                        </p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  className="block step-by-step__scroll-to-top hide-on-desktop has-plugin"
                  data-plugin="scrollToTarget"
                  href="#step-by-step__navigation"
                >
                  Terug naar boven
                </Link>
              </div>
              <script type="application/json" id="faq-waypoint-settings">
                {/* {
        "offset": 150,
        "once": false,
        "callbackIn": "EC.HubStepByStep.WaypointIn",
        "callbackOut": "EC.HubStepByStep.WaypointOut"
        } */}
              </script>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <EuroConsumersArticleDefaultComponent {...props} />;
};
