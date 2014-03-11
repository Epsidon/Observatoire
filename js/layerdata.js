var accordion = [];

accordion[0] = []
accordion[0]['title'] = T('French Speaking Population (2011)');
accordion[0]['numLayers'] = 4;

accordion[1] = []
accordion[1]['title'] = T('Profiles By LHIN (2011)');
accordion[1]['numLayers'] = 3;

accordion[2] = []
accordion[2]['title'] = T('Health Services (2011)');
accordion[2]['numLayers'] = 11;

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
+ T(" is part of the ") + 
T("${GeoKey20_2}") + "&nbsp" + "(" + "${GeoKey20_1}" + ")" + T(" Local Health Integration Network (LHIN).") +
"<p>" + 
"<table border=1 align='center'>"+
"<tr>"+
"<th align='center'>" + T("DA") + "</th>"+
"<th align='center'>" + T("French") + "</th>"+
"<th align='center'>" + T("English") + "</th>"+
"<th align='center'>" + T("Non Official") + "</th>"+
"<th align='center'>Total</th>"+
"</tr>"+
"<tr>"+
"<td align='center'>${DAUID_1}</td>"+
"<td class=first align='center'>${DLSHFre}</td>"+
"<td align='center'>${DLSHEn}</td>"+
"<td class=first align='center'>${DLSHNON}</td>"+
"<td align='center' align='center'>${DLAthomeTo}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[3]['outFields'] = new Array("GeoKey20_2", "GeoKey20_1", "POPIN2011", "DAUID_1", "DLSHFre", "DLSHEn", "DLSHNON", "DLAthomeTo");

layerData[4] = [];
layerData[4]['infoWindowTitle'] = "<b>" + T("Health Professionals By LHIN") + "</b>";
layerData[4]['infoWindowBody'] = "${HR035b08_E}" + "&nbsp" + "(" + "${HR035b08_H}" + ")" + "<p>"+ "<b>"+ T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}" + "<br>" + "</p>" + 
"<table border=1>"+
"<tr>"+
"<th align='center'>" + T("Speciality") + "</th>"+
"<th align='center'>" + T("French") + "</th>"+
"<th align='center'>" + T("English") + "</th>"+
"<th align='center'>" + T("Others") + "</th>"+
"</tr>"+
"<tr>"+
"<td class=first align='center'>" + T("Audiologists") + "</td>"+
"<td align='center'>${LHINProf_3}</td>"+
"<td class=first align='center'>${LHINProf_4}</td>"+
"<td align='center'>${LHINProf_5}</td>"+
"</tr>"+
"<tr>"+
"<td align='center'>" + T("Chiropodists") + "</td>"+
"<td class=first align='center'>${LHINProf_6}</td>"+
"<td align='center'>${LHINProf_7}</td>"+
"<td class=first align='center'>${LHINProf_8}</td>"+
"</tr>"+
"<tr>"+
"<td class=first align='center'>" + T("Chiropractors") + "</td>"+
"<td align='center'>${LHINProf_9}</td>"+
"<td class=first align='center'>${LHINPro_10}</td>"+
"<td align='center'>${LHINPro_11}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Dental Hygienists") + "</td>"+
"<td class=first align='center'>${LHINPro_12}</td>"+
"<td align='center'>${LHINPro_13}</td>"+
"<td class=first align='center'>${LHINPro_14}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Dental Technologists") + "</td>"+
"<td align='center'>${LHINPro_15}</td>"+
"<td class=first align='center'>${LHINPro_16}</td>"+
"<td align='center'>${LHINPro_17}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Dentists") + "</td>"+
"<td class=first align='center'>${LHINPro_18}</td>"+
"<td align='center'>${LHINPro_19}</td>"+
"<td class=first align='center'>${LHINPro_20}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Denturists") + "</td>"+
"<td align='center'>${LHINPro_21}</td>"+
"<td class=first align='center'>${LHINPro_22}</td>"+
"<td align='center'>${LHINPro_23}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Dietitians") + "</td>"+
"<td class=first align='center'>${LHINPro_24}</td>"+
"<td align='center'>${LHINPro_25}</td>"+
"<td class=first align='center'>${LHINPro_26}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Massage Therapists") + "</td>"+
"<td align='center'>${LHINPro_27}</td>"+
"<td class=first align='center'>${LHINPro_28}</td>"+
"<td align='center'>${LHINPro_29}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Medical Laboratory Technologists") + "</td>"+
"<td class=first align='center'>${LHINPro_30}</td>"+
"<td align='center'>${LHINPro_31}</td>"+
"<td class=first align='center'>${LHINPro_32}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Medical Radiation Technologists") + "</td>"+
"<td align='center'>${LHINPro_33}</td>"+
"<td class=first align='center'>${LHINPro_34}</td>"+
"<td align='center' align='center'>${LHINPro_35}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Midwives") + "</td>"+
"<td class=first align='center'>${LHINPro_36}</td>"+
"<td align='center'>${LHINPro_37}</td>"+
"<td class=first align='center'>${LHINPro_38}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Nurse Practitioners") + "</td>"+
"<td align='center'>${LHINPro_39}</td>"+
"<td class=first align='center'>${LHINPro_40}</td>"+
"<td align='center'>${LHINPro_41}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Occupational Therapists") + "</td>"+
"<td class=first align='center'>${LHINPro_42}</td>"+
"<td align='center'>${LHINPro_43}</td>"+
"<td class=first align='center'>${LHINPro_44}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Opticians") + "</td>"+
"<td align='center'>${LHINPro_45}</td>"+
"<td class=first align='center'>${LHINPro_46}</td>"+
"<td align='center'>${LHINPro_47}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Optometrists") + "</td>"+
"<td class=first align='center'>${LHINPro_48}</td>"+
"<td align='center'>${LHINPro_49}</td>"+
"<td class=first align='center'>${LHINPro_50}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Pharmacists") + "</td>"+
"<td align='center'>${LHINPro_51}</td>"+
"<td class=first align='center'>${LHINPro_52}</td>"+
"<td align='center'>${LHINPro_53}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Family Physicians") + "</td>"+
"<td class=first align='center'>${LHINPro_54}</td>"+
"<td align='center'>${LHINPro_55}</td>"+
"<td class=first align='center'></td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Specialist Physicians") + "</td>"+
"<td align='center'>${LHINPro_56}</td>"+
"<td class=first align='center'>${LHINPro_57}</td>"+
"<td></td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Physiotherapists") + "</td>"+
"<td class=first align='center'>${LHINPro_58}</td>"+
"<td align='center'>${LHINPro_59}</td>"+
"<td class=first align='center'>${LHINPro_60}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Psychologists") + "</td>"+
"<td align='center'>${LHINPro_61}</td>"+
"<td class=first align='center'>${LHINPro_62}</td>"+
"<td align='center'>${LHINPro_63}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Registered Nurses") + "</td>"+
"<td class=first align='center'>${LHINPro_64}</td>"+
"<td align='center'>${LHINPro_65}</td>"+
"<td class=first align='center'>${LHINPro_66}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Registered Practical Nurses") + "</td>"+
"<td align='center'>${LHINPro_67}</td>"+
"<td class=first align='center'>${LHINPro_68}</td>"+
"<td align='center'>${LHINPro_69}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Respiratory Therapists") + "</td>"+
"<td class=first align='center'>${lHIN_csv_R}</td>"+
"<td align='center'>${lHIN_csv_2}</td>"+
"<td class=first align='center'>${lHIN_csv_3}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Speech Language Pathologists") + "</td>"+
"<td align='center'>${LHINPro_70}</td>"+
"<td class=first align='center'>${LHINPro_71}</td>"+
"<td align='center'>${LHINPro_72}</td>"+
"</tr>"+
"</table>" + 
"<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";

layerData[4]['outFields'] = new Array( "HR035b08_E", "HR035b08_H", "LHINProf_2", "LHINProf_3", "LHINProf_4", "LHINProf_5",
"LHINProf_6", "LHINProf_7", "LHINProf_8", "LHINProf_9", "LHINPro_10", "LHINPro_11", "LHINPro_12", 
"LHINPro_13", "LHINPro_14", "LHINPro_15", "LHINPro_16", "LHINPro_17", "LHINPro_18", "LHINPro_19", "LHINPro_20",
 "LHINPro_21", "LHINPro_22", "LHINPro_23", "LHINPro_24", "LHINPro_25", "LHINPro_26", "LHINPro_27", 
 "LHINPro_28", "LHINPro_29", "LHINPro_30", "LHINPro_31", "LHINPro_32", "LHINPro_33", "LHINPro_34", 
 "LHINPro_35", "LHINPro_36", "LHINPro_37", "LHINPro_38", "LHINPro_39", "LHINPro_40", "LHINPro_41",
 "LHINPro_42", "LHINPro_43", 
 "LHINPro_44", "LHINPro_45", "LHINPro_46", "LHINPro_47", "LHINPro_48", "LHINPro_49", "LHINPro_50",
 "LHINPro_51", "LHINPro_52", "LHINPro_53", "LHINPro_54", "LHINPro_55", "LHINPro_56", "LHINPro_57",
 "LHINPro_58", "LHINPro_59", "LHINPro_60",
 "LHINPro_61", "LHINPro_62", "LHINPro_63", "LHINPro_64", "LHINPro_65", 
 "LHINPro_66", "LHINPro_67", "LHINPro_68", "LHINPro_69", "lHIN_csv_R", "lHIN_csv_2", 
 "lHIN_csv_3", "LHINPro_70", "LHINPro_71", "LHINPro_72"
);

layerData[5] = [];
layerData[5]['infoWindowTitle'] = "<b>" + T("Socio-Economic Profiles") + "</b>";
layerData[5]['infoWindowBody'] ="${FRE_LABEL}" + "&nbsp" + "(" + "${HRUID2007}" + ")" +
"<b>" + "<p>" + T("Taux global de non-réponse (TNR) = ") + "</b>" + "${SociEcoP_1}" + "</p>" +
"<table border=1>"+
"<tr>"+
"<th align='center'></th>"+
"<th align='center'>" + T("French Only") + "</th>" +
"<th align='center'>" + T("English Only") + "</th>" +
"<th align='center'>" + T("French & English") + "</th>" +
"<th align='center'>" + T("Neither Official Language") + "</th>" +
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Population") + "</td>"+
"<td align='center'>${SociEcoP_2}</td>"+
"<td class=first align='center'>${SociEcoP_3}</td>"+
"<td align='center'>${SociEcoP_4}</td>"+
"<td class=first align='center'>${SociEcoP_5}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Proportion of the total population") + "</td>"+
"<td align='center'>${FrTotPerc }" + "%" + "</td>"+
"<td class=first align='center'>${AngTotPerc}" + "%" + "</td>"+
"<td align='center'>${FrAngTotPe}" + "%" + "</td>"+
"<td class=first align='center'>${AucPerc}" + "%" + "</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Age groups") + "</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("0 to 19 years old") + "</td>"+
"<td align='center'>${SociEcoP_6}</td>"+
"<td class=first align='center'>${SociEcoP_9}</td>"+
"<td align='center'>${SociEco_12}</td>"+
"<td class=first align='center'>${SociEco_15}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("20 to 64 years old") + "</td>"+
"<td align='center'>${SociEcoP_7}</td>"+
"<td class=first align='center'>${SociEco_10}</td>"+
"<td align='center'>${SociEco_13}</td>"+
"<td class=first align='center'>${SociEco_16}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("65 years old and above") + "</td>"+
"<td align='center'>${SociEcoP_8}</td>"+
"<td class=first align='center'>${SociEco_11}</td>"+
"<td align='center'>${SociEco_14}</td>"+
"<td class=first align='center'>${SociEco_17}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Education") + "</td>" +
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("No certificate, diploma or degree") + "</td>"+
"<td align='center'>${SociEco_18}</td>"+
"<td class=first align='center'>${SociEco_23}</td>"+
"<td align='center'>${SociEco_28}</td>"+
"<td class=first align='center'>${SociEco_33}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("High school diploma") + "</td>"+
"<td align='center'>${SociEco_19}</td>"+
"<td class=first align='center'>${SociEco_24}</td>"+
"<td align='center'>${SociEco_29}</td>"+
"<td class=first align='center'>${SociEco_34}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("College certificate/diploma") + "</td>"+
"<td align='center'>${SociEco_21}</td>"+
"<td class=first align='center'>${SociEco_26}</td>"+
"<td align='center'>${SociEco_31}</td>"+
"<td class=first align='center'>${SociEco_36}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("") + "</td>"+
"<td align='center'>${SociEco_22}</td>"+
"<td class=first align='center'>${SociEco_27}</td>"+
"<td align='center'>${SociEco_32}</td>"+
"<td class=first align='center'>${SociEco_37}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Immigrants") + "</td>"+
"<td align='center'>${SociEco_38}</td>"+
"<td class=first align='center'>${SociEco_39}</td>"+
"<td align='center'>${SociEco_40}</td>"+
"<td class=first align='center'>${SociEco_41}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Low income person") + "</td>"+
"<td align='center'>${SociEco_42}</td>"+
"<td class=first align='center'>${SociEco_43}</td>"+
"<td align='center'>${SociEco_44}</td>"+
"<td class=first align='center'>${SociEco_45}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Person living alone") + "</td>"+
"<td align='center'>${SociEco_46 }</td>"+
"<td class=first align='center'>${SociEco_47}</td>"+
"<td align='center'>${SociEco_48}</td>"+
"<td class=first align='center'>${SociEco_49}</td>"+
"</tr>"+
"</table>" + 
"<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[5]['outFields'] = new Array("HRUID2007", "FRE_LABEL", "SociEcoP_1", "SociEcoP_1",
"SociEcoP_2", "SociEcoP_3", "SociEcoP_4", "SociEcoP_5", 
"FrTotPerc", "AngTotPerc", "AucPerc",
"SociEcoP_6", "SociEcoP_9", "SociEco_12",
"SociEco_15", "SociEcoP_7", "SociEco_10",
"SociEco_13", "SociEco_16", "SociEcoP_8",
"SociEco_11", "SociEco_14", "SociEco_17",
"SociEco_18", "SociEco_23", "SociEco_28",
"SociEco_33", "SociEco_19", "SociEco_24",
"SociEco_29", "SociEco_34", "SociEco_21",
"SociEco_26", "SociEco_31", "SociEco_36",
"SociEco_22", "SociEco_27", "SociEco_32",
"SociEco_37", "SociEco_38", "SociEco_39",
"SociEco_40", "SociEco_41", "SociEco_42",
"SociEco_43", "SociEco_44", "SociEco_45",
"SociEco_46", "SociEco_47", "SociEco_48",
"SociEco_49"
 );
 
layerData[6] = [];
layerData[6]['infoWindowTitle'] = "<b>" + T("Health Profiles") + "</b>";
layerData[6]['infoWindowBody'] ="${EnglishL_1}" + "&nbsp" + "(" + "${EnglishLab}" + ")" +
"<br>" + "<b>" + T("Canadian Community Health Survey Combined Cycles 2001 to 2012") + "</b>" + "</br>" +
"<table border=1>"+
"<tr>"+
"<th align='center'></th>"+
"<th align='center'>" + T("French") + "</th>"+
"<th align='center'>" + T("English") + "</th>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Perceived health, fair or poor (%)") + "</td>"+
"<td align='center'>${Health__20}</td>"+
"<td class=first align='center'>${Health_P_1}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Perceived mental health, fair or poor (%)") + "</td>"+
"<td align='center'>${Health__21}</td>"+
"<td class=first align='center'>${Health_P_2}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Perceived life stress, quite a bit or extremely stressful (%)") + "</td>"+
"<td align='center'>${Health__22}</td>"+
"<td class=first align='center'>${Health_P_3}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Participation and activity limitation, sometimes or often (%)") + "</td>"+
"<td align='center'>${Health_P_4}</td>"+
"<td class=first align='center'>${Health__14}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("At least one chronic disease (%)") + "</td>"+
"<td align='center'>${Health__24}</td>"+
"<td class=first align='center'>${Health_P_5}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Body mass index (BMI) (18 or older), overweight or obese (%)") + "</td>"+
"<td align='center'>${Health__25}</td>"+
"<td class=first align='center'>${Health_P_6}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Fruit and vegetable consumption, less than 5 times per day (%)") + "</td>"+
"<td align='center'>${Health__26}</td>"+
"<td class=first align='center'>${Health_P_7}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Current smoker, daily or occasional (%)") + "</td>"+
"<td align='center'>${Health__29}</td>"+
"<td class=first align='center'>${Health_P_8}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Type of drinker, regular (%)") + "</td>"+
"<td align='center'>${Health__30}</td>"+
"<td class=first align='center'>${Health_P_9}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Regular medical doctor (%)") + "</td>"+
"<td align='center'>${Health__31}</td>"+
"<td class=first align='center'>${Health__10}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Language spoken with medical doctor, English (%)") + "</td>"+
"<td align='center'>${Health__32}</td>"+
"<td class=first align='center'>${Health__11}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Contact with a family medicine physician or a nurse in the past 12 months (%)") + "</td>"+
"<td align='center'>${Health__33}</td>"+
"<td class=first align='center'>${Health__12}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Required health care in the past 12 months  (%)") + "</td>"+
"<td align='center'>${Health__34}</td>"+
"<td class=first align='center'>${Health__13}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Difficulties obtaining health care in the past 12 months  (%)") + "</td>"+
"<td align='center'>${Health__35}</td>"+
"<td class=first align='center'>${Health__14}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Perceived access to health care in Ontario, good or excellent (%)") + "</td>"+
"<td align='center'>${Health__36}</td>"+
"<td class=first align='center'>${Health__15}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Perceived quality of health care in Ontario, good or excellent (%)") + "</td>"+
"<td align='center'>${Health__37}</td>"+
"<td class=first align='center'>${Health__16}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Perceived access to health care in community, good or excellent (%)") + "</td>"+
"<td align='center'>${Health__38}</td>"+
"<td class=first align='center'>${Health__17}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Perceived quality health care in community , good or excellent (%)") + "</td>"+
"<td align='center'>${Health__39}</td>"+
"<td class=first align='center'>${Health__18}</td>"+
"</tr>"+
"<tr>" +
"<td class=first align='center'>" + T("Sense of community belonging, very strong or somewhat strong (%)") + "</td>"+
"<td align='center'>${Health__40}</td>"+
"<td class=first align='center'>${Health__19}</td>"+
"</tr>"+
"</table>" + 
"<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[6]['outFields'] = new Array( "EnglishL_1", "EnglishLab", "Health__26",
"Health__32", "Health__11", "Health_P_1", "Health__20",
"Health__33", "Health__12", "Health__34", "Health__13",
"Health__35", "Health__14", "Health__36", "Health__15", 
"Health__25", "Health_P_6", "Fruits_F", "Health_P_7", 
"Health__29", "Health_P_8", "Health__30", "Health_P_9",
"Health__21", "Health_P_2", "Health__22", "Health_P_3", 
"Health_P_4", "Health__14", "Health__24", "Health_P_5", 
"Health__31", "Health__10", "Health__37", "Health__16",
"Health__38", "Health__17", "Health__39", "Health__18", 
"Health__40", "Health__19", "", ""
 );

layerData[7] = [];
layerData[7]['infoWindowTitle'] = "<b>" + T("All Hospitals") + "</b>";
layerData[7]['infoWindowBody'] ="${All_Hospitals_and_Health_Units.LHIN_NAME}"+ "&nbsp" +
 "(" + "${LHINS.csv.LHINCode2013}" + ")" + 
"<table border=1>" +
"<tr>"+
"<th align='center'>Health Unit Name</th>"+
"<th align='center'>City</th>"+
"<th align='center'>Address</th>"+
"<th align='center'>Postal Code</th>"+
"</tr>"+
"<tr>"+
"<td align='center'>${All_Hospitals_and_Health_Units.C_NAME_ENG}</td>"+
"<td class=first align='center'>${All_Hospitals_and_Health_Units.CITY}</td>"+
"<td align='center'>${All_Hospitals_and_Health_Units.ADDRESS_1}</td>"+
"<td class=first align='center'>${All_Hospitals_and_Health_Units.POSTALCODE}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[7]['outFields'] = new Array("All_Hospitals_and_Health_Units.LHIN_NAME", "LHINS.csv.LHINCode2013",
"All_Hospitals_and_Health_Units.C_NAME_ENG", "All_Hospitals_and_Health_Units.CITY", "All_Hospitals_and_Health_Units.ADDRESS_1",
"All_Hospitals_and_Health_Units.POSTALCODE" );

layerData[8] = [];
layerData[8]['infoWindowTitle'] = "<b>" + T("General Rehabilitation Hospital") + "</b>";
layerData[8]['infoWindowBody'] =  "${LHIN_NAME}"+ "&nbsp" +
 "(" + "${LHINProfil}" + ")" + "<p>" + "<b>" + 
 T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +
 "<p><b>"+ "<p>" + "<table border=1>"+ "</p>" +
"<tr>"+
"<th align='center'>Health Unit Name</th>"+
"<th align='center'>City</th>"+
"<th align='center' >Address</th>"+
"<th align='center'>Postal Code</th>"+
"</tr>"+
"<tr>"+
"<td align='center'>${C_NAME_ENG}</td>"+
"<td class=first align='center'>${CITY}</td>"+
"<td align='center'>${ADDRESS_1}</td>"+
"<td class=first align='center'>${POSTALCODE}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[8]['outFields'] = new Array("LHIN_NAME", "LHINProf_2 ", "LHINProfil" , "C_NAME_ENG", "CITY", "ADDRESS_1", "POSTALCODE");

layerData[9] = [];
layerData[9]['infoWindowTitle'] = "<b>" + T("Mental Health Unit") + "</b>";
layerData[9]['infoWindowBody'] = "${LHIN_NAME}"+ "&nbsp" + "(" + "${LHINInfo_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + "<table border=1>"+ "</p>" +
"<tr>"+
"<th align='center'>Health Unit Name</th>"+
"<th align='center'>City</th>"+
"<th align='center'>Address</th>"+
"<th align='center'>Postal Code</th>"+
"</tr>"+
"<tr>"+
"<td class=first align='center'>${C_NAME_ENG}</td>"+
"<td align='center'>${CITY}</td>"+
"<td class=first align='center'>${ADDRESS_1}</td>"+
"<td align='center'>${POSTALCODE}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[9]['outFields'] = new Array("LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[10] = [];
layerData[10]['infoWindowTitle'] = "<b>" + T("Special Rehabilitation Hospital") + "</b>";
layerData[10]['infoWindowBody'] ="${LHIN_NAME}"+ "&nbsp" + "(" + "${LHINInfo_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + "<table border=1>"+ "</p>" +
"<tr>"+
"<th align='center'>Health Unit Name</th>"+
"<th align='center'>City</th>"+
"<th align='center'>Address</th>"+
"<th align='center'>Postal Code</th>"+
"</tr>"+
"<tr>"+
"<td align='center'>${C_NAME_ENG}</td>"+
"<td class=first align='center'>${CITY}</td>"+
"<td align='center'>${ADDRESS_1}</td>"+
"<td class=first align='center'>${POSTALCODE}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[10]['outFields'] = new Array("LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[11] = [];
layerData[11]['infoWindowTitle'] = "<b>" + T("Acute Care Treatment Hospital") + "</b>";
layerData[11]['infoWindowBody'] = "${LHIN_NAME}"+ "&nbsp" + "(" + "${LHINInfo_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + "<table border=1>"+ "</p>" +
"<tr>"+
"<th align='center'>Health Unit Name</th>"+
"<th align='center'>City</th>"+
"<th align='center'>Address</th>"+
"<th align='center'>Postal Code</th>"+
"</tr>"+
"<tr>"+
"<td class=first align='center'>${C_NAME_ENG}</td>"+
"<td align='center'>${CITY}</td>"+
"<td class=first align='center'>${ADDRESS_1}</td>"+
"<td align='center'>${POSTALCODE}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[11]['outFields'] = new Array("LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[12] = [];
layerData[12]['infoWindowTitle'] = "<b>" + T("Ambulatory Care") + "</b>";
layerData[12]['infoWindowBody']= "${LHIN_NAME}"+ "&nbsp" + "(" + "${LHINInfo_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + "<table border=1>"+ "</p>" +
"<tr>"+
"<th align='center'>Health Unit Name</th>"+
"<th align='center'>City</th>"+
"<th align='center'>Address</th>"+
"<th align='center'>Postal Code</th>"+
"</tr>"+
"<tr>"+
"<td align='center'>${C_NAME_ENG}</td>"+
"<td class=first align='center'>${CITY}</td>"+
"<td align='center'>${ADDRESS_1}</td>"+
"<td class=first align='center'>${POSTALCODE}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[12]['outFields'] = new Array("LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[13] = [];
layerData[13]['infoWindowTitle'] = "<b>" + T("Chronic Care Treatment Hospital") + "</b>";
layerData[13]['infoWindowBody'] ="${LHIN_NAME}"+ "&nbsp" + "(" + "${LHINInfo_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + 
"<table border=1>"+ "</p>" +
"<tr>"+
"<th align='center'>Health Unit Name</th>"+
"<th align='center'>City</th>"+
"<th align='center'>Address</th>"+
"<th align='center'>Postal Code</th>"+
"</tr>"+
"<tr>"+
"<td class=first align='center'>${C_NAME_ENG}</td>"+
"<td align='center'>${CITY}</td>"+
"<td class=first align='center'>${ADDRESS_1}</td>"+
"<td align='center'>${POSTALCODE}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[13]['outFields'] = new Array("LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[14] = [];
layerData[14]['infoWindowTitle'] = "<b>" + T("No FLS Obligation") + "</b>";
layerData[14]['infoWindowBody'] ="${LHIN_NAME}"+ 
"<table border=1>"+
"<tr>"+
"<th align='center'>Health Unit Name</th>"+
"<th align='center'>City</th>"+
"<th align='center'>Address</th>"+
"<th align='center'>Postal Code</th>"+
"</tr>"+
"<tr>"+
"<td class=first align='center'>${C_NAME_ENG}</td>"+
"<td align='center'>${CITY}</td>"+
"<td class=first align='center'>${ADDRESS_1}</td>"+
"<td align='center'>${POSTALCODE}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[14]['outFields'] = new Array("LHIN_NAME","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[15] = [];
layerData[15]['infoWindowTitle'] = "<b>" + T("FLS Identified") + "</b>";
layerData[15]['infoWindowBody'] ="${LHIN_NAME}"+ 
"<table border=1>"+
"<tr>"+
"<th align='center'>Health Unit Name</th>"+
"<th align='center'>City</th>"+
"<th align='center'>Address</th>"+
"<th align='center'>Postal Code</th>"+
"</tr>"+
"<tr>"+
"<td class=first align='center'>${C_NAME_ENG}</td>"+
"<td align='center'>${CITY}</td>"+
"<td class=first align='center'>${ADDRESS_1}</td>"+
"<td align='center'>${POSTALCODE}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[15]['outFields'] = new Array("LHIN_NAME","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[16] = [];
layerData[16]['infoWindowTitle'] = "<b>" + T("FLS Designated Partial") + "</b>";
layerData[16]['infoWindowBody'] ="${LHIN_NAME}"+ 
"<table border=1>"+
"<tr>"+
"<th align='center'>Health Unit Name</th>"+
"<th align='center'>City</th>"+
"<th align='center'>Address</th>"+
"<th align='center'>Postal Code</th>"+
"</tr>"+
"<tr>"+
"<td class=first align='center'>${C_NAME_ENG}</td>"+
"<td align='center'>${CITY}</td>"+
"<td class=first align='center'>${ADDRESS_1}</td>"+
"<td align='center'>${POSTALCODE}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[16]['outFields'] = new Array("LHIN_NAME","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[17] = [];
layerData[17]['infoWindowTitle'] = "<b>" + T("FLS Designated All") + "</b>";
layerData[17]['infoWindowBody'] ="${LHIN_NAME}"+ 
"<table border=1>"+
"<tr>"+
"<th align='center'>Health Unit Name</th>"+
"<th align='center'>City</th>"+
"<th align='center'>Address</th>"+
"<th align='center'>Postal Code</th>"+
"</tr>"+
"<tr>"+
"<td class=first align='center'>${C_NAME_ENG}</td>"+
"<td align='center'>${CITY}</td>"+
"<td class=first align='center'>${ADDRESS_1}</td>"+
"<td align='center'>${POSTALCODE}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[17]['outFields'] = new Array("LHIN_NAME","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");


layerData[18] = [];
layerData[18]['infoWindowTitle'] = "<b>" + T("Local Health Integration Network (LHIN)") + "</b>";
layerData[18]['infoWindowBody'] = "<p>" + "<table border=1>"+ "</p>" +
"<tr>"+
"<th align='center'></th>"+
"<th align='center'>French</th>"+
"<th align='center'>English</th>"+
"<th align='center'>English & French</th>"+
"<th align='center'>Neither</th>"+
"<th align='center'>Total</th>"+
"</tr>"+
"<tr>"+
"<td class=first align='center'>" + T("Population Number") + "</td>"+
"<td align='center'>${SociEcoP_2}</td>"+
"<td class=first align='center'>${SociEcoP_3}</td>"+
"<td align='center'>${SociEcoP_4}</td>"+
"<td align='center'>${SociEcoP_5}</td>"+
"<td align='center'>${Total}</td>"+
"</tr>"+
"<tr>"+
"<td class=first align='center'>" + T("Population Proportion") + "</td>"+
"<td align='center'>${FrTotPerc}</td>"+
"<td class=first align='center'>${AngTotPerc}</td>"+
"<td align='center'>${FrAngTotPe}</td>"+
"<td align='center'>${AucPerc}</td>"+
"<td align='center'>" + T("100%") + "</td>"+
"</tr>"+
"</table>" + T("Source: 2011 National Household Survey") +
"<p>" + T("Champlain Global non-response rate (GNR) = ") + "${SociEcoP_1}"+ "</p>" +
"<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + 
T("Methodological Notes") + "</a>" + "</p>";

layerData[18]['outFields'] = new Array("SociEcoP_1", "SociEcoP_2", "SociEcoP_3", 
"SociEcoP_4", "SociEcoP_5", "Total", "FrTotPerc", "AngTotPerc", "FrAngTotPe", "AucPerc");

layerData[19] = [];
layerData[19]['infoWindowTitle'] = "<b>" + T("Ontario") + "</b>";
layerData[19]['infoWindowBody'] ="${HR035b08_E}"+ "&nbsp" + "(" + "${HR035b08_H}" + ")" + 
 "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[19]['outFields'] = new Array("HR035b08_E", "HR035b08_H" );


var layerToRegion = [];
layerToRegion[0] = 0;
layerToRegion[1] = 0;
layerToRegion[2] = 0;
layerToRegion[3] = 0;
layerToRegion[4] = 1;
layerToRegion[5] = 1;
layerToRegion[6] = 1;
layerToRegion[7] = 2;
layerToRegion[8] = 2;
layerToRegion[9] = 2;
layerToRegion[10] = 2;
layerToRegion[11] = 2;
layerToRegion[12] = 2;
layerToRegion[13] = 2;
layerToRegion[14] = 2;
layerToRegion[15] = 2;
layerToRegion[16] = 2;
layerToRegion[17] = 2;

var servicePointBuffers = [];
servicePointBuffers[7] = [39,46];
servicePointBuffers[8] = [25,32];
servicePointBuffers[9] = [53,60];
servicePointBuffers[10] = [67,74];
servicePointBuffers[11] = [81,88];
servicePointBuffers[12] = [95,102];
servicePointBuffers[13] = [109,116];
servicePointBuffers[14] = [123,130];
servicePointBuffers[15] = [144,137];
servicePointBuffers[16] = [151,158];
servicePointBuffers[17] = [165,172];

var layerInfoWindow = new Array();
var layerTemplate = new Array();
var mapLayer = new Array();

var defaultLayer = 19;

var activeLayer = defaultLayer;
var inLayer = 0;
var numLayers = 20;

var map;
var symbol;
var infoTemplate;

var legendsArray = [];
var hospitalsLegendArray = [];

var firstTimeUpdateLayerIsCalled = 1;

var thisMapLayer = 'not initialized';

var numServicePointLayers = 0;

var mapAddress = 'http://216.48.92.42/arcgis/rest/services/DAMapGeoportalFLS/MapServer/';
 
 
var layersLabels = [
T('Mother Tongue'), T('Knowledge of Official Language'), T('First Official Language Spoken'), T('Language Spoken Most Often at Home'),
T('Health Professionals by LHIN'), T('Socio-Economic Profiles'), T('Health Profiles'),
T('All Hospitals and Health Units'), 
T('General Rehabilitation Hospital'), T('Mental Health Units') , T('Special Rehabilitation Hospital'), 
T('Acute Care Treatment Hospital'), T('Ambulatory Care'), T('Chronic Care Treatment Hospital'), T('No FLS Obligation'), T('FLS Identified'),
T('FLS Designated Partial'), T('FLS Designated All'), T('Local Health Integration Network (LHIN)'), T('Ontario'), T('Ontario')];
  
var legendLabel = [T('Mother Tongue = French'), T('Knowledge of Official Language = French Only'), T('First Official Language Spoken = French'), T('Language Spoken Most Often at Home = French'),
T('Health Professionals by LHIN'), T('Socio-Economic Profiles'), T('Health Profiles'), T('All Hospitals and Health Units'), 
T('General Rehabilitation Hospital'), T('Mental Health Units') , T('Special Rehabilitation Hospital'), 
T('Acute Care Treatment Hospital'), T('Ambulatory Care'), T('Chronic Care Treatment Hospital'), T('No FLS Obligation'), T('FLS Identified'),
T('FLS Designated Partial'), T('FLS Designated All'), T('% for which First Official Language Spoken = French'), T('Ontario LHIN Information'), T('Ontario LHIN Information')];
var mapLayerLabel = 'Ontario';
var mapServicePointLabel = '';
var LayerLegend = 'Ontario LHIN Information';
var mapServicePointLegendLabel = '';
var accordionHeaders = {7 : 'Hospitals By Services Offered', 14 : 'Hospitals By French Language Service (FLS) Designation'};