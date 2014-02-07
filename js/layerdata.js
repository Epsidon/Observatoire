var accordion = [];

accordion[0] = []
accordion[0]['title'] = T('French Speaking Population (2011)');
accordion[0]['numLayers'] = 4;

accordion[1] = []
accordion[1]['title'] = T('Profiles By LHIN (2011)');
accordion[1]['numLayers'] = 1;

accordion[2] = []
accordion[2]['title'] = T('Health Services (2011)');
accordion[2]['numLayers'] = 7;

var layerData = [];

layerData[0] = [];
layerData[0]['infoWindowTitle'] = "<b>" + T("Mother Tongue") + "</b>";
layerData[0]['infoWindowBody'] = "${GeoKey20_2}"+ "&nbsp" + "(" + "${GeoKey20_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${POPIN2011}"+ "</p>"+  
"<table border=1>"+
"<tr>"+
"<th>DA</th>"+
"<th>French</th>"+
"<th>English</th>"+
"<th>Non Official</th>"+
"<th>Total</th>"+
"</tr>"+
"<tr>"+
"<td class=first>${DAUID_1}</td>"+
"<td>${MTFrench}</td>"+
"<td class=first>${MTongueEng}</td>"+
"<td>${MTNonOFF}</td>"+
"<td class=first>${Detailedmo}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[0]['outFields'] = new Array("POPIN2011", "GeoKey20_2", "GeoKey20_1","Detailedmo", "DAUID_1", "MTFrench", "MTongueEng", "MTNonOFF" );

layerData[1] = [];
layerData[1]['infoWindowTitle'] = "<b>" + T("Knowledge of Official Language") + "</b>";
layerData[1]['infoWindowBody'] = "${GeoKey20_2}"+ "&nbsp" + "(" + "${GeoKey20_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${POPIN2011}"+ "</p>"+  
"<table border=1>"+
"<tr>"+
"<th>DA</th>"+
"<th>French</th>"+
"<th>English & French</th>"+
"<th>Neither</th>"+
"<th>Total</th>"+
"</tr>"+
"<tr>"+
"<td>${DAUID_1}</td>"+
"<td class=first>${KnowledgFr}</td>"+
"<td>${KnowlEngFr}</td>"+
"<td class=first>${KEngNorFre}</td>"+
"<td>${Knowledgeo}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[1]['outFields'] = new Array("GeoKey20_2", "GeoKey20_1", "POPIN2011", "DAUID_1", "KnowledgFr", "KnowlEngFr", "KEngNorFre", "Knowledgeo");

layerData[2] = [];
layerData[2]['infoWindowTitle'] = "<b>" + T("First Official Language Spoken") + "</b>";
layerData[2]['infoWindowBody'] =  "${GeoKey20_2}"+ "&nbsp" + "(" + "${GeoKey20_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${POPIN2011}"+ "</p>"+  
"<table border=1>"+
"<tr>"+
"<th>DA</th>"+
"<th>French</th>"+
"<th>English</th>"+
"<th>English & French</th>"+
"<th>Neither</th>"+
"<th>Total</th>"+
"</tr>"+
"<tr>"+
"<td class=first>${DAUID_1}</td>"+
"<td>${FirstofFre}</td>"+
"<td class=first>${FirstofEng}</td>"+
"<td>${FirstoEngF}</td>"+
"<td class=first>${FOFENorF}</td>"+
"<td>${FirstoffTo}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[2]['outFields'] = new Array("GeoKey20_2", "GeoKey20_1", "POPIN2011", "DAUID_1", "FirstofFre", "FirstofEng", "FirstoEngF", "FOFENorF", "FirstoffTo");

layerData[3] = [];
layerData[3]['infoWindowTitle'] = "<b>" + T("Language Spoken Most Often at Home") + "</b>";
layerData[3]['infoWindowBody'] = "${GeoKey20_2}"+ "&nbsp" + "(" + "${GeoKey20_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${POPIN2011}"+ "</p>"+  
"<table border=1>"+
"<tr>"+
"<th>DA</th>"+
"<th>French</th>"+
"<th>English</th>"+
"<th>Non Official</th>"+
"<th>Total</th>"+
"</tr>"+
"<tr>"+
"<td>${DAUID_1}</td>"+
"<td class=first>${DLSHFre}</td>"+
"<td>${DLSHEn}</td>"+
"<td class=first>${DLSHNON}</td>"+
"<td>${DLAthomeTo}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[3]['outFields'] = new Array("GeoKey20_2", "GeoKey20_1", "POPIN2011", "DAUID_1", "DLSHFre", "DLSHEn", "DLSHNON", "DLAthomeTo");

layerData[4] = [];
layerData[4]['infoWindowTitle'] = "<b>" + T("Profession by LHIN") + "</b>";
layerData[4]['infoWindowBody'] = "${LHINProfile20112_csv_LHINNames}" + "&nbsp" + "(" + "${LHINProfile20112_csv_LHINCode2013}" + ")" + "<p>"+ "<b>"+ T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProfile20112_csv_Pop2011}" + "<br>" + "</p>" + 
"<table border=1>"+
"<tr>"+
"<th>Speciality</th>"+
"<th>French</th>"+
"<th>English</th>"+
"<th>Others</th>"+
"</tr>"+
"<tr>"+
"<td class=first>Audiologists</td>"+
"<td>${LHINProfile20112_csv_Audiologists_French}</td>"+
"<td class=first>${LHINProfile20112_csv_Audiologists_English}</td>"+
"<td>${LHINProfile20112_csv_Audiologists_Others}</td>"+
"</tr>"+
"<tr>"+
"<td>Chiropodists</td>"+
"<td class=first>${LHINProfile20112_csv_Chiropodists_French}</td>"+
"<td>${LHINProfile20112_csv_Chiropodists_English}</td>"+
"<td class=first>${LHINProfile20112_csv_Chiropodists_Others}</td>"+
"</tr>"+
"<tr>"+
"<td class=first>Chiropractor</td>"+
"<td>${LHINProfile20112_csv_Chiropractor_French}</td>"+
"<td class=first>${LHINProfile20112_csv_Chiropractor_English}</td>"+
"<td>${LHINProfile20112_csv_Chiropractor_Others}</td>"+
"</tr>"+

"<tr>"+
"<td>DentalHygienists</td>"+
"<td class=first>${LHINProfile20112_csv_DentalHygienists_French}</td>"+
"<td>${LHINProfile20112_csv_DentalHygienists_English}</td>"+
"<td class=first>${LHINProfile20112_csv_DentalHygienists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first>DentalTechnologists</td>"+
"<td>${LHINProfile20112_csv_DentalTechnologists_French}</td>"+
"<td class=first>${LHINProfile20112_csv_DentalTechnologists_English}</td>"+
"<td>${LHINProfile20112_csv_DentalTechnologists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td>Dentists</td>"+
"<td class=first>${LHINProfile20112_csv_Dentists_French}</td>"+
"<td>${LHINProfile20112_csv_Dentists_English}</td>"+
"<td class=first>${LHINProfile20112_csv_Dentists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first>Denturists</td>"+
"<td>${LHINProfile20112_csv_Denturists_French}</td>"+
"<td class=first>${LHINProfile20112_csv_Denturists_English}</td>"+
"<td>${LHINProfile20112_csv_Denturists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td>Dietitians</td>"+
"<td class=first>${LHINProfile20112_csv_Dietitians_French}</td>"+
"<td>${LHINProfile20112_csv_Dietitians_English}</td>"+
"<td class=first>${LHINProfile20112_csv_Dietitians_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first>MassageTherapists</td>"+
"<td>${LHINProfile20112_csv_MassageTherapists_French}</td>"+
"<td class=first>${LHINProfile20112_csv_MassageTherapists_English}</td>"+
"<td>${LHINProfile20112_csv_MassageTherapists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td>MedicalLaboratoryTechnologists</td>"+
"<td class=first>${LHINProfile20112_csv_MedicalLaboratoryTechnologists_French}</td>"+
"<td>${LHINProfile20112_csv_MedicalLaboratoryTechnologists_English}</td>"+
"<td class=first>${LHINProfile20112_csv_MedicalLaboratoryTechnologists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first>MedicalRadiationTechnologists</td>"+
"<td>${LHINProfile20112_csv_MedicalRadiationTechnologists_French}</td>"+
"<td class=first>${LHINProfile20112_csv_MedicalRadiationTechnologists_English}</td>"+
"<td>${LHINProfile20112_csv_MedicalRadiationTechnologists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td>Midwives</td>"+
"<td class=first>${LHINProfile20112_csv_Midwives_French}</td>"+
"<td>${LHINProfile20112_csv_Midwives_English}</td>"+
"<td class=first>${LHINProfile20112_csv_Midwives_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first>NursePractitioners</td>"+
"<td>${LHINProfile20112_csv_NursePractitioners_French}</td>"+
"<td class=first>${LHINProfile20112_csv_NursePractitioners_English}</td>"+
"<td>${LHINProfile20112_csv_NursePractitioners_Others}</td>"+
"</tr>"+

"<tr>"+
"<td>OccupationalTherapists</td>"+
"<td class=first>${LHINProfile20112_csv_OccupationalTherapists_French}</td>"+
"<td>${LHINProfile20112_csv_OccupationalTherapists_English}</td>"+
"<td class=first>${LHINProfile20112_csv_OccupationalTherapists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first>Opticians</td>"+
"<td>${LHINProfile20112_csv_Opticians_French}</td>"+
"<td class=first>${LHINProfile20112_csv_Opticians_English}</td>"+
"<td>${LHINProfile20112_csv_Opticians_Others}</td>"+
"</tr>"+

"<tr>"+
"<td>Optometrists</td>"+
"<td class=first>${LHINProfile20112_csv_Optometrists_French}</td>"+
"<td>${LHINProfile20112_csv_Optometrists_English}</td>"+
"<td class=first>${LHINProfile20112_csv_Optometrists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first>Pharmacists</td>"+
"<td>${LHINProfile20112_csv_Pharmacists_French}</td>"+
"<td class=first>${LHINProfile20112_csv_Pharmacists_English}</td>"+
"<td>${LHINProfile20112_csv_Pharmacists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td>PhysiciansGP</td>"+
"<td class=first>${LHINProfile20112_csv_PhysiciansGP_French}</td>"+
"<td>${LHINProfile20112_csv_PhysiciansGP_English}</td>"+
"<td class=first></td>"+
"</tr>"+

"<tr>"+
"<td class=first>PhysiciansSpec</td>"+
"<td>${LHINProfile20112_csv_PhysiciansSpec_French}</td>"+

"<td class=first>${LHINProfile20112_csv_PhysiciansSpec_English}</td>"+
"<td></td>"+
"</tr>"+

"<tr>"+
"<td>Physiotherapists</td>"+
"<td class=first>${LHINProfile20112_csv_Physiotherapists_French}</td>"+
"<td>${LHINProfile20112_csv_Physiotherapists_English}</td>"+
"<td class=first>${LHINProfile20112_csv_Physiotherapists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first>Psychologists</td>"+
"<td>${LHINProfile20112_csv_Psychologists_French}</td>"+
"<td class=first>${LHINProfile20112_csv_Psychologists_English}</td>"+
"<td>${LHINProfile20112_csv_Psychologists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td>RegisteredNurses</td>"+
"<td class=first>${LHINProfile20112_csv_RegisteredNurses_French}</td>"+
"<td>${LHINProfile20112_csv_RegisteredNurses_English}</td>"+
"<td class=first>${LHINProfile20112_csv_RegisteredNurses_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first>RegisteredPracticalNurses</td>"+
"<td>${LHINProfile20112_csv_RegisteredPracticalNurses_French}</td>"+
"<td class=first>${LHINProfile20112_csv_RegisteredPracticalNurses_English}</td>"+
"<td>${LHINProfile20112_csv_RegisteredPracticalNurses_Others}</td>"+
"</tr>"+

"<tr>"+
"<td>RespiratoryTherapists</td>"+
"<td class=first>${LHINProfile20112_csv_RespiratoryTherapists_French}</td>"+
"<td>${LHINProfile20112_csv_RespiratoryTherapists_English}</td>"+
"<td class=first>${LHINProfile20112_csv_RespiratoryTherapists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first>SpeechLanguagePathologists</td>"+
"<td>${LHINProfile20112_csv_SpeechLanguagePathologists_French}</td>"+
"<td class=first>${LHINProfile20112_csv_SpeechLanguagePathologists_English}</td>"+
"<td>${LHINProfile20112_csv_SpeechLanguagePathologists_Others}</td>"+
"</tr>"+
"</table>" + 
"<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";

layerData[4]['outFields'] = new Array("LHINProfile20112_csv_LHINCode2013",
"LHINProfile20112_csv_LHINNames",
"LHINProfile20112_csv_Pop2011",
"LHINProfile20112_csv_Audiologists_French",
"LHINProfile20112_csv_Audiologists_English",
"LHINProfile20112_csv_Audiologists_Others",
"LHINProfile20112_csv_Chiropodists_French",
"LHINProfile20112_csv_Chiropodists_English",
"LHINProfile20112_csv_Chiropodists_Others",
"LHINProfile20112_csv_Chiropractor_French",
"LHINProfile20112_csv_Chiropractor_English",
"LHINProfile20112_csv_Chiropractor_Others",
"LHINProfile20112_csv_DentalHygienists_French",
"LHINProfile20112_csv_DentalHygienists_English",
"LHINProfile20112_csv_DentalHygienists_Others",
"LHINProfile20112_csv_DentalTechnologists_French",
"LHINProfile20112_csv_DentalTechnologists_English",
"LHINProfile20112_csv_DentalTechnologists_Others",
"LHINProfile20112_csv_Dentists_French",
"LHINProfile20112_csv_Dentists_English",
"LHINProfile20112_csv_Dentists_Others",
"LHINProfile20112_csv_Denturists_French",
"LHINProfile20112_csv_Denturists_English",
"LHINProfile20112_csv_Denturists_Others",
"LHINProfile20112_csv_Dietitians_French",
"LHINProfile20112_csv_Dietitians_English",
"LHINProfile20112_csv_Dietitians_Others",
"LHINProfile20112_csv_MassageTherapists_French",
"LHINProfile20112_csv_MassageTherapists_English",
"LHINProfile20112_csv_MassageTherapists_Others",
"LHINProfile20112_csv_MedicalLaboratoryTechnologists_French",
"LHINProfile20112_csv_MedicalLaboratoryTechnologists_English",
"LHINProfile20112_csv_MedicalLaboratoryTechnologists_Others",
"LHINProfile20112_csv_MedicalRadiationTechnologists_French",
"LHINProfile20112_csv_MedicalRadiationTechnologists_English",
"LHINProfile20112_csv_MedicalRadiationTechnologists_Others",
"LHINProfile20112_csv_Midwives_French",
"LHINProfile20112_csv_Midwives_English",
"LHINProfile20112_csv_Midwives_Others",
"LHINProfile20112_csv_NursePractitioners_French",
"LHINProfile20112_csv_NursePractitioners_English",
"LHINProfile20112_csv_NursePractitioners_Others",
"LHINProfile20112_csv_OccupationalTherapists_French", 
"LHINProfile20112_csv_OccupationalTherapists_English",
"LHINProfile20112_csv_OccupationalTherapists_Others",
"LHINProfile20112_csv_Opticians_French",
"LHINProfile20112_csv_Opticians_English",
"LHINProfile20112_csv_Opticians_Others",
"LHINProfile20112_csv_Optometrists_French",
"LHINProfile20112_csv_Optometrists_English",
"LHINProfile20112_csv_Optometrists_Others",
"LHINProfile20112_csv_Pharmacists_French",
"LHINProfile20112_csv_Pharmacists_English",
"LHINProfile20112_csv_Pharmacists_Others",
"LHINProfile20112_csv_PhysiciansGP_French",
"LHINProfile20112_csv_PhysiciansGP_English",
"LHINProfile20112_csv_PhysiciansSpec_French",
"LHINProfile20112_csv_PhysiciansSpec_English",
"LHINProfile20112_csv_Physiotherapists_French",
"LHINProfile20112_csv_Physiotherapists_English",
"LHINProfile20112_csv_Physiotherapists_Others",
"LHINProfile20112_csv_Psychologists_French",
"LHINProfile20112_csv_Psychologists_English",
"LHINProfile20112_csv_Psychologists_Others",
"LHINProfile20112_csv_RegisteredNurses_French", 
"LHINProfile20112_csv_RegisteredNurses_English",
"LHINProfile20112_csv_RegisteredNurses_Others",
"LHINProfile20112_csv_RegisteredPracticalNurses_French",
"LHINProfile20112_csv_RegisteredPracticalNurses_English",
"LHINProfile20112_csv_RegisteredPracticalNurses_Others",
"LHINProfile20112_csv_RespiratoryTherapists_French",
"LHINProfile20112_csv_RespiratoryTherapists_English",
"LHINProfile20112_csv_RespiratoryTherapists_Others",
"LHINProfile20112_csv_SpeechLanguagePathologists_French",
"LHINProfile20112_csv_SpeechLanguagePathologists_English",
"LHINProfile20112_csv_SpeechLanguagePathologists_Others");

layerData[5] = [];
layerData[5]['infoWindowTitle'] = "<b>" + T("All Hospitals") + "</b>";
layerData[5]['infoWindowBody'] ="${LHIN_NAME}"+ "&nbsp" + "(" + "${LHINInfo_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + "<table border=1>"+ "</p>" +
"<tr>"+
"<th>Health Unit Name</th>"+
"<th>City</th>"+
"<th>Address</th>"+
"<th>Postal Code</th>"+
"</tr>"+
"<tr>"+
"<td>${C_NAME_ENG}</td>"+
"<td class=first>${CITY}</td>"+
"<td>${ADDRESS_1}</td>"+
"<td class=first>${POSTALCODE}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[5]['outFields'] = new Array("LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[6] = [];
layerData[6]['infoWindowTitle'] = "<b>" + T("General Rehabilitation Hospital") + "</b>";
layerData[6]['infoWindowBody'] =  "${LHIN_NAME}"+ "&nbsp" + "(" + "${LHINInfo_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + "<table border=1>"+ "</p>" +
"<tr>"+
"<th>Health Unit Name</th>"+
"<th>City</th>"+
"<th>Address</th>"+
"<th>Postal Code</th>"+
"</tr>"+
"<tr>"+
"<td>${C_NAME_ENG}</td>"+
"<td class=first>${CITY}</td>"+
"<td>${ADDRESS_1}</td>"+
"<td class=first>${POSTALCODE}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[6]['outFields'] = new Array("LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[7] = [];
layerData[7]['infoWindowTitle'] = "<b>" + T("Mental Health Unit") + "</b>";
layerData[7]['infoWindowBody'] = "${LHIN_NAME}"+ "&nbsp" + "(" + "${LHINInfo_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + "<table border=1>"+ "</p>" +
"<tr>"+
"<th>Health Unit Name</th>"+
"<th>City</th>"+
"<th>Address</th>"+
"<th>Postal Code</th>"+
"</tr>"+
"<tr>"+
"<td class=first>${C_NAME_ENG}</td>"+
"<td>${CITY}</td>"+
"<td class=first>${ADDRESS_1}</td>"+
"<td>${POSTALCODE}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[7]['outFields'] = new Array("LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[8] = [];
layerData[8]['infoWindowTitle'] = "<b>" + T("Special Rehabilitation Hospital") + "</b>";
layerData[8]['infoWindowBody'] ="${LHIN_NAME}"+ "&nbsp" + "(" + "${LHINInfo_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + "<table border=1>"+ "</p>" +
"<tr>"+
"<th>Health Unit Name</th>"+
"<th>City</th>"+
"<th>Address</th>"+
"<th>Postal Code</th>"+
"</tr>"+
"<tr>"+
"<td>${C_NAME_ENG}</td>"+
"<td class=first>${CITY}</td>"+
"<td>${ADDRESS_1}</td>"+
"<td class=first>${POSTALCODE}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[8]['outFields'] = new Array("LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[9] = [];
layerData[9]['infoWindowTitle'] = "<b>" + T("Acute Care Treatment Hospital") + "</b>";
layerData[9]['infoWindowBody'] = "${LHIN_NAME}"+ "&nbsp" + "(" + "${LHINInfo_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + "<table border=1>"+ "</p>" +
"<tr>"+
"<th>Health Unit Name</th>"+
"<th>City</th>"+
"<th>Address</th>"+
"<th>Postal Code</th>"+
"</tr>"+
"<tr>"+
"<td class=first>${C_NAME_ENG}</td>"+
"<td>${CITY}</td>"+
"<td class=first>${ADDRESS_1}</td>"+
"<td>${POSTALCODE}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[9]['outFields'] = new Array("LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[10] = [];
layerData[10]['infoWindowTitle'] = "<b>" + T("Ambulatory Care") + "</b>";
layerData[10]['infoWindowBody']= "${LHIN_NAME}"+ "&nbsp" + "(" + "${LHINInfo_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + "<table border=1>"+ "</p>" +
"<tr>"+
"<th>Health Unit Name</th>"+
"<th>City</th>"+
"<th>Address</th>"+
"<th>Postal Code</th>"+
"</tr>"+
"<tr>"+
"<td>${C_NAME_ENG}</td>"+
"<td class=first>${CITY}</td>"+
"<td>${ADDRESS_1}</td>"+
"<td class=first>${POSTALCODE}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[10]['outFields'] = new Array("LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[11] = [];
layerData[11]['infoWindowTitle'] = "<b>" + T("Chronic Care Treatment Hospital") + "</b>";
layerData[11]['infoWindowBody'] ="${LHIN_NAME}"+ "&nbsp" + "(" + "${LHINInfo_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + "<table border=1>"+ "</p>" +
"<tr>"+
"<th>Health Unit Name</th>"+
"<th>City</th>"+
"<th>Address</th>"+
"<th>Postal Code</th>"+
"</tr>"+
"<tr>"+
"<td class=first>${C_NAME_ENG}</td>"+
"<td>${CITY}</td>"+
"<td class=first>${ADDRESS_1}</td>"+
"<td>${POSTALCODE}</td>"+
"</tr>"+
"</table>" + "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[11]['outFields'] = new Array("LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[16] = [];
layerData[16]['infoWindowTitle'] = "<b>" + T("Ontario") + "</b>";
layerData[16]['infoWindowBody'] ="${LHINProfile20112_csv_LHINNames}"+ "&nbsp" + "(" + "${LHINProfile20112_csv_LHINCode2013}" + ")" + 
 "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[16]['outFields'] = new Array("LHINProfile20112_csv_LHINNames", "LHINProfile20112_csv_LHINCode2013" );


var layerToRegion = [];
layerToRegion[0] = 0;
layerToRegion[1] = 0;
layerToRegion[2] = 0;
layerToRegion[3] = 0;
layerToRegion[4] = 1;
layerToRegion[5] = 2;
layerToRegion[6] = 2;
layerToRegion[7] = 2;
layerToRegion[8] = 2;
layerToRegion[9] = 2;
layerToRegion[10] = 2;
layerToRegion[11] = 2;

/* layerToRegion[12] = 3;
layerToRegion[13] = 3;
layerToRegion[14] = 3;
layerToRegion[15] = 3;
layerToRegion[16] = 3; */

var layerType = {
	'0' : 'FeatureLayer',
	'1' : 'FeatureLayer',
	'2' : 'FeatureLayer',
	'3' : 'FeatureLayer',
	'4' : 'FeatureLayer',
	'5' : 'FeatureLayer',
	'6' : 'FeatureLayer',
	'7' : 'FeatureLayer',
	'8' : 'FeatureLayer',
	'9' : 'FeatureLayer',
	'10' : 'FeatureLayer',
	'11' : 'FeatureLayer',
	'12' : 'ArcGISDynamicMapServiceLayer', 
	'13' : 'ArcGISDynamicMapServiceLayer',
	'14' : 'ArcGISDynamicMapServiceLayer',
	'15' : 'ArcGISDynamicMapServiceLayer',
	'16' : 'FeatureLayer',
	}

var servicePointBuffers = [];
servicePointBuffers[5] = [36,43];
servicePointBuffers[6] = [22,29];
servicePointBuffers[7] = [50,57];
servicePointBuffers[8] = [64,71];
servicePointBuffers[9] = [78,85];
servicePointBuffers[10] = [92,99];
servicePointBuffers[11] = [106,113];

var layerInfoWindow = new Array();
var layerTemplate = new Array();
var mapLayer = new Array();

var defaultLayer = 16;

var activeLayer = defaultLayer;
var inLayer = 0;
var numLayers = 17;

var map;
var symbol;
var infoTemplate;

var legendsArray = [];

var firstTimeUpdateLayerIsCalled = 1;

var thisMapLayer = 'not initialized';

var numServicePointLayers = 0;

var mapAddress = 'http://216.48.92.42/arcgis/rest/services/DAMap3/MapServer/';
var mapAddress2 = 'http://216.48.92.42/arcgis/rest/services/MotherTongueHeatMap/MapServer/';
var mapAddress3 = 'http://216.48.92.42/arcgis/rest/services/KnowledgeOfOfficialLanguageHeatMap/MapServer/';
var mapAddress4 = 'http://216.48.92.42/arcgis/rest/services/FirstOfficialLanguageHeatMap/MapServer/';
var mapAddress5 = 'http://216.48.92.42/arcgis/rest/services/LanguageSpokenMostOftenAtHomeHeatMap/MapServer/';

