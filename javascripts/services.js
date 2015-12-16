
app = angular.module('eplanApp');


//
// Service
//
eplanApp.service("eplanUtility", function($location) {
	var self = this;
  return {
    getApiHost: function() {
      var apiHost = "http://localhost:64010";
      var host = $location.host();
      if (host != 'localhost') {
        // change route to subdomain "<protocol>://api.<host>"
        // =>   different service / look at .htaccess !
        // remove the subdomain
        host = host.match(/[^\.]*\.[^.]*$/)[0];
        apiHost = $location.protocol() + "://api." + host;
        var port = $location.port();
        if (port) {
          apiHost += ":" + port;
        }
      }
      return apiHost;
    },

    getProductGroup: function(id) {
    	return this.getProductGroups().find( function(pg) {
    		return pg.id == id;
    	});
    },

    getProductGroups: function() {
			return [
				{id:0, name:"Undefiniert"},
				{id:1, name:"Allgemeine"},
				{id:2, name:"Relais, Schütze"},
				{id:3, name:"Klemmen"},
				{id:4, name:"Stecker"},
				{id:5, name:"Umformer"},
				{id:6, name:"Schutzeinrichtungen"},
				{id:7, name:"Röhren, Halbleiter"},
				{id:8, name:"Meldeeinrichtungen"},
				{id:9, name:"Motoren"},
				{id:10, name:"Messgeräte, Prüfeinrichtungen"},
				{id:11, name:"Widerstände"},
				{id:12, name:"Sensorik, Schalter und Taster"},
				{id:13, name:"Transformatoren"},
				{id:14, name:"Modulatoren"},
				{id:15, name:"Elektrisch betätigte mechanische Einrichtungen"},
				{id:16, name:"Elektrotechnik Sonderbauteile"},
				{id:17, name:"Verschiedenes"},
				{id:18, name:"Kondensatoren"},
				{id:19, name:"Logikbauteile"},
				{id:20, name:"Spannungsquelle und Generator"},
				{id:21, name:"Induktivitäten"},
				{id:22, name:"Verstärker, Regler"},
				{id:23, name:"Starkstrom-Schaltgeräte"},
				{id:24, name:"Abschlüsse, Filter"},
				{id:25, name:"Übertragungswege"},
				{id:26, name:"SPS"},
				{id:29, name:"Kabel"},
				{id:30, name:"Aggregate und Anlagen"},
				{id:32, name:"Aktoren, allgemein"},
				{id:33, name:"Fluidmotor"},
				{id:34, name:"Filter"},
				{id:35, name:"Fluid Control Terminal"},
				{id:36, name:"Kupplungen"},
				{id:37, name:"Verbindungen"},
				{id:38, name:"Messanschlüsse"},
				{id:39, name:"Messgeräte"},
				{id:40, name:"Pumpen"},
				{id:41, name:"Signalaufnehmer"},
				{id:42, name:"Fluid Sonderbauteile"},
				{id:43, name:"Speicher"},
				{id:44, name:"Ventile"},
				{id:46, name:"Wärmetauscher"},
				{id:47, name:"Zubehör"},
				{id:48, name:"Anschlussplatten"},
				{id:49, name:"Gehäuse"},
				{id:50, name:"Gehäusezubehör Außenanbau"},
				{id:51, name:"Gehäusezubehör Innenanbau"},
				{id:52, name:"Verschlusssysteme"},
				{id:53, name:"Kabelkanäle"},
				{id:54, name:"Sammelschienen"},
				{id:55, name:"Schaltschrank"},
				{id:56, name:"Abzugshaube"},
				{id:57, name:"Elektrolysezelle"},
				{id:58, name:"Lagerung"},
				{id:59, name:"Schornstein"},
				{id:61, name:"Antriebsmaschine"},
				{id:62, name:"Absperrarmatur"},
				{id:63, name:"Dreiwegearmatur"},
				{id:64, name:"Rückschlagarmatur"},
				{id:65, name:"Behälter"},
				{id:66, name:"Behälteranschluss"},
				{id:67, name:"Abscheider"},
				{id:68, name:"Filter"},
				{id:69, name:"Sieb"},
				{id:70, name:"Förderer"},
				{id:71, name:"Heber"},
				{id:72, name:"Transporter"},
				{id:73, name:"Behälter-Mantel"},
				{id:74, name:"Behälter-Rohrschlange"},
				{id:75, name:"Dampfkessel"},
				{id:76, name:"Kühler"},
				{id:77, name:"Ofen"},
				{id:78, name:"Trockner"},
				{id:79, name:"Verdampfer"},
				{id:80, name:"Wärmetauscher"},
				{id:81, name:"Kneter"},
				{id:82, name:"Mischer"},
				{id:83, name:"Rührer"},
				{id:84, name:"Kompressor / Verdichter"},
				{id:85, name:"Pumpen"},
				{id:86, name:"Vakuumpumpe"},
				{id:87, name:"Ventilator"},
				{id:89, name:"Rohrleitungsteil"},
				{id:91, name:"Zentrifuge"},
				{id:92, name:"Messeinrichtung"},
				{id:93, name:"Waage"},
				{id:94, name:"Formgeber"},
				{id:95, name:"Sichter"},
				{id:96, name:"Sortierer"},
				{id:97, name:"Zerkleinerer"},
				{id:98, name:"Zuteiler"},
				{id:99, name:"Feldverteiler"},
				{id:100, name:"Verbindungen"},
				{id:101, name:"Montageplatten"},
				{id:102, name:"Heizung"},
				{id:103, name:"Leuchte"},
				{id:104, name:"Heizung"},
				{id:105, name:"Zylinder"},
				{id:106, name:"Bremse"},
				{id:107, name:"Gleichrichter"},
				{id:108, name:"Bremse"},
				{id:109, name:"Kupplungen"},
				{id:110, name:"Ventile"},
				{id:111, name:"Druckübersetzer"},
				{id:112, name:"Abscheider"},
				{id:113, name:"Leitungsverteiler / -verbinder"},
				{id:114, name:"Zubehör"},
				{id:115, name:"Meldeeinrichtungen"},
				{id:116, name:"Benutzerdefinierte Schiene"},
				{id:117, name:"19 Zoll-Ausbautechnik"},
				{id:118, name:"Strecke (Topologie)"},
				{id:119, name:"Verlegepunkt (Topologie)"},
				{id:121, name:"Verbindungen"},
				{id:125, name:"Verlegezubehör"},
				{id:126, name:"Montageanordnung"},
				{id:127, name:"Leitungen / Pakete"},
				{id:128, name:"Leitungen / Pakete"}
			];
		}
  } // return
});
