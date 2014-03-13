var accordion = [];

accordion[0] = []
accordion[0]['title'] = T('French Speaking Population (2011)');
accordion[0]['numLayers'] = 4;

accordion[1] = []
accordion[1]['title'] = T('Profiles By LHIN (2011)');
accordion[1]['numLayers'] = 3;

accordion[2] = []
accordion[2]['title'] = T('Health Services (2011)');
accordion[2]['numLayers'] = 10;

var layerData = [];

layerData[0] = [];
layerData[0]['infoWindowTitle'] = "<b>" + T("Mother Tongue") + "</b>";
layerData[0]['infoWindowBody'] = T("Dissemination Area(DA) #") + "${DAUID_1}" 
+ T(" is part of the ") + 
T("${GeoKey20_2}")+ "&nbsp" + "(" + "${GeoKey20_1}" + ")" + T(" Local Health Integration Network (LHIN).") +
"<p>" +  
"<table border=1 align='center'>"+
"<tr>"+
"<th align='center'>" + T("DA") + "</th>"+
"<th align='center'>" + T("French") + "</th>" +
"<th align='center'>" + T("English") + "</th>" +
"<th align='center'>" + T("Non Official") + "</th>" +
"<th align='center'>Total</th>"+
"</tr>"+
"<tr>"+
"<td class=first align='center'>${DAUID_1}</td>"+
"<td align='center'>${MTFrench}</td>"+
"<td class=first align='center'>${MTongueEng}</td>"+
"<td align='center'>${MTNonOFF}</td>"+
"<td class=first align='center'>${Detailedmo}</td>"+
"</tr>"+
"</table>" + "</p>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[0]['outFields'] = new Array("POPIN2011", "GeoKey20_2", "GeoKey20_1","Detailedmo", "DAUID_1", "MTFrench", "MTongueEng", "MTNonOFF" );

layerData[1] = [];
layerData[1]['infoWindowTitle'] = "<b>" + T("Knowledge of Official Language") + "</b>";
layerData[1]['infoWindowBody'] = T("Dissemination Area(DA) #") + "${DAUID_1}" 
+ T(" is part of the ") + 
T("${GeoKey20_2}") + "&nbsp" + "(" + "${GeoKey20_1}" + ")" + T(" Local Health Integration Network (LHIN).") +
"<p>" + 
"<table border=1 align='center'>"+
"<tr>"+
"<th align='center'>" + T("DA") + "</th>"+
"<th align='center'>" + T("French") + "</th>" +
"<th align='center'>" + T("English & French") + "</th>"+
"<th align='center'>" + T("Neither") +"</th>"+
"<th align='center'>Total</th>"+
"</tr>"+
"<tr>"+
"<td align='center'>${DAUID_1}</td>"+
"<td class=first align='center'>${KnowledgFr}</td>"+
"<td align='center'>${KnowlEngFr}</td>"+
"<td class=first align='center'>${KEngNorFre}</td>"+
"<td align='center'>${Knowledgeo}</td>"+
"</tr>"+
"</table>" + "</p>" +"<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[1]['outFields'] = new Array("GeoKey20_2", "GeoKey20_1", "POPIN2011", "DAUID_1", "KnowledgFr", "KnowlEngFr", "KEngNorFre", "Knowledgeo");

layerData[2] = [];
layerData[2]['infoWindowTitle'] = "<b>" + T("First Official Language Spoken") + "</b>";
layerData[2]['infoWindowBody'] = T("Dissemination Area(DA) #") + "${DAUID_1}" 
+ T(" is part of the ") + 
T("${GeoKey20_2}") + "&nbsp" + "(" + "${GeoKey20_1}" + ")" + T(" Local Health Integration Network (LHIN).") +
"<p>" +
"<table border=1 align='center'>"+
"<tr>"+
"<th align='center'>" + T("DA") + "</th>"+
"<th align='center'>" + T("French") + "</th>"+
"<th align='center'>" + T("English") + "</th>"+
"<th align='center'>" + T("English & French") + "</th>"+
"<th align='center'>" + T("Neither") + "</th>"+
"<th align='center'>Total</th>"+
"</tr>"+
"<tr>"+
"<td class=first align='center'>${DAUID_1}</td>"+
"<td align='center'>${FirstofFre}</td>"+
"<td class=first align='center'>${FirstofEng}</td>"+
"<td align='center'>${FirstoEngF}</td>"+
"<td class=first align='center'>${FOFENorF}</td>"+
"<td align='center'>${FirstoffTo}</td>"+
"</tr>"+
"</table>" + "</p>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[2]['outFields'] = new Array("GeoKey20_2", "GeoKey20_1", "POPIN2011", "DAUID_1", "FirstofFre", "FirstofEng", "FirstoEngF", "FOFENorF", "FirstoffTo");

layerData[3] = [];
layerData[3]['infoWindowTitle'] = "<b>" + T("Language Spoken Most Often at Home") + "</b>";
layerData[3]['infoWindowBody'] =T("Dissemination Area(DA) #") + "${DAUID_1}" 
+ T(" is part of the "