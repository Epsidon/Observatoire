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
layerData[0]['infoWindowBody'] = T("Dissemination Area(DA) #") + "${DAUID_1}" 
+ T(" is part of the ") + 
"${GeoKey20_2}"+ "&nbsp" + "(" + "${GeoKey20_1}" + ")" + T(" Local Health Integration Network (LHIN).") +
"<p>" +  
"<table border=1 align='center'>"+
"<tr>"+
"<th align='center'>DA</th>"+
"<th align='center'>French</th>"+
"<th align='center'>English</th>"+
"<th align='center'>Non Official</th>"+
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
"${GeoKey20_2}"+ "&nbsp" + "(" + "${GeoKey20_1}" + ")" + T(" Local Health Integration Network (LHIN).") +
"<p>" + 
"<table border=1 align='center'>"+
"<tr>"+
"<th align='center'>DA</th>"+
"<th align='center'>French</th>"+
"<th align='center'>English & French</th>"+
"<th align='center'>Neither</th>"+
"<th align='center'>Total</th>"+
"</tr>"+
"<tr>"+
"<td align='center'>${DAUID_1}</td>"+
"<td class=first align='center'>${KnowledgFr}</td>"+
"<td align='center'>${KnowlEngFr}</td>"+
"<td class=first align='center'>${KEngNorFre}</td>"+
"<td align='center'>${Knowledgeo}</td>"+
"</tr>"+
"</table>" + + "</p>" +"<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[1]['outFields'] = new Array("GeoKey20_2", "GeoKey20_1", "POPIN2011", "DAUID_1", "KnowledgFr", "KnowlEngFr", "KEngNorFre", "Knowledgeo");

layerData[2] = [];
layerData[2]['infoWindowTitle'] = "<b>" + T("First Official Language Spoken") + "</b>";
layerData[2]['infoWindowBody'] = T("Dissemination Area(DA) #") + "${DAUID_1}" 
+ T(" is part of the ") + 
"${GeoKey20_2}"+ "&nbsp" + "(" + "${GeoKey20_1}" + ")" + T(" Local Health Integration Network (LHIN).") +
"<p>" +
"<table border=1 align='center'>"+
"<tr>"+
"<th align='center'>DA</th>"+
"<th align='center'>French</th>"+
"<th align='center'>English</th>"+
"<th align='center'>English & French</th>"+
"<th align='center'>Neither</th>"+
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
"${GeoKey20_2}"+ "&nbsp" + "(" + "${GeoKey20_1}" + ")" + T(" Local Health Integration Network (LHIN).") +
"<p>" + 
"<table border=1 align='center'>"+
"<tr>"+
"<th align='center'>DA</th>"+
"<th align='center'>French</th>"+
"<th align='center'>English</th>"+
"<th align='center'>Non Official</th>"+
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
layerData[4]['infoWindowTitle'] = "<b>" + T("Profession by LHIN") + "</b>";
layerData[4]['infoWindowBody'] = "${LHINProfile20112_csv_LHINNames}" + "&nbsp" + "(" + "${LHINProfile20112_csv_LHINCode2013}" + ")" + "<p>"+ "<b>"+ T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProfile20112_csv_Pop2011}" + "<br>" + "</p>" + 
"<table border=1>"+
"<tr>"+
"<th align='center'>Speciality</th>"+
"<th align='center'>French</th>"+
"<th align='center'>English</th>"+
"<th align='center'>Others</th>"+
"</tr>"+
"<tr>"+
"<td class=first align='center'>" + T("Audiologists") + "</td>"+
"<td align='center'>${LHINProfile20112_csv_Audiologists_French}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_Audiologists_English}</td>"+
"<td align='center'>${LHINProfile20112_csv_Audiologists_Others}</td>"+
"</tr>"+
"<tr>"+
"<td align='center'>" + T("Chiropodists") + "</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_Chiropodists_French}</td>"+
"<td align='center'>${LHINProfile20112_csv_Chiropodists_English}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_Chiropodists_Others}</td>"+
"</tr>"+
"<tr>"+
"<td class=first align='center'>" + T("Chiropractors") + "</td>"+
"<td align='center'>${LHINProfile20112_csv_Chiropractor_French}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_Chiropractor_English}</td>"+
"<td align='center'>${LHINProfile20112_csv_Chiropractor_Others}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Dental Hygienists") + "</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_DentalHygienists_French}</td>"+
"<td align='center'>${LHINProfile20112_csv_DentalHygienists_English}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_DentalHygienists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Dental Technologists") + "</td>"+
"<td align='center'>${LHINProfile20112_csv_DentalTechnologists_French}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_DentalTechnologists_English}</td>"+
"<td align='center'>${LHINProfile20112_csv_DentalTechnologists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Dentists") + "</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_Dentists_French}</td>"+
"<td align='center'>${LHINProfile20112_csv_Dentists_English}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_Dentists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Denturists") + "</td>"+
"<td align='center'>${LHINProfile20112_csv_Denturists_French}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_Denturists_English}</td>"+
"<td align='center'>${LHINProfile20112_csv_Denturists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Dietitians") + "</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_Dietitians_French}</td>"+
"<td align='center'>${LHINProfile20112_csv_Dietitians_English}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_Dietitians_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Massage Therapists") + "</td>"+
"<td align='center'>${LHINProfile20112_csv_MassageTherapists_French}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_MassageTherapists_English}</td>"+
"<td align='center'>${LHINProfile20112_csv_MassageTherapists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Medical Laboratory Technologists") + "</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_MedicalLaboratoryTechnologists_French}</td>"+
"<td align='center'>${LHINProfile20112_csv_MedicalLaboratoryTechnologists_English}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_MedicalLaboratoryTechnologists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Medical Radiation Technologists") + "</td>"+
"<td align='center'>${LHINProfile20112_csv_MedicalRadiationTechnologists_French}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_MedicalRadiationTechnologists_English}</td>"+
"<td align='center' align='center'>${LHINProfile20112_csv_MedicalRadiationTechnologists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Midwives") + "</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_Midwives_French}</td>"+
"<td align='center'>${LHINProfile20112_csv_Midwives_English}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_Midwives_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Nurse Practitioners") + "</td>"+
"<td align='center'>${LHINProfile20112_csv_NursePractitioners_French}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_NursePractitioners_English}</td>"+
"<td align='center'>${LHINProfile20112_csv_NursePractitioners_Others}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Occupational Therapists") + "</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_OccupationalTherapists_French}</td>"+
"<td align='center'>${LHINProfile20112_csv_OccupationalTherapists_English}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_OccupationalTherapists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Opticians") + "</td>"+
"<td align='center'>${LHINProfile20112_csv_Opticians_French}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_Opticians_English}</td>"+
"<td align='center'>${LHINProfile20112_csv_Opticians_Others}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Optometrists") + "</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_Optometrists_French}</td>"+
"<td align='center'>${LHINProfile20112_csv_Optometrists_English}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_Optometrists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Pharmacists") + "</td>"+
"<td align='center'>${LHINProfile20112_csv_Pharmacists_French}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_Pharmacists_English}</td>"+
"<td align='center'>${LHINProfile20112_csv_Pharmacists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Physicians GP") + "</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_PhysiciansGP_French}</td>"+
"<td align='center'>${LHINProfile20112_csv_PhysiciansGP_English}</td>"+
"<td class=first align='center'></td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Physicians Spec") + "</td>"+
"<td align='center'>${LHINProfile20112_csv_PhysiciansSpec_French}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_PhysiciansSpec_English}</td>"+
"<td></td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Physiotherapists") + "</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_Physiotherapists_French}</td>"+
"<td align='center'>${LHINProfile20112_csv_Physiotherapists_English}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_Physiotherapists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Psychologists") + "</td>"+
"<td align='center'>${LHINProfile20112_csv_Psychologists_French}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_Psychologists_English}</td>"+
"<td align='center'>${LHINProfile20112_csv_Psychologists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Registered Nurses") + "</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_RegisteredNurses_French}</td>"+
"<td align='center'>${LHINProfile20112_csv_RegisteredNurses_English}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_RegisteredNurses_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Registered Practical Nurses") + "</td>"+
"<td align='center'>${LHINProfile20112_csv_RegisteredPracticalNurses_French}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_RegisteredPracticalNurses_English}</td>"+
"<td align='center'>${LHINProfile20112_csv_RegisteredPracticalNurses_Others}</td>"+
"</tr>"+

"<tr>"+
"<td align='center'>" + T("Respiratory Therapists") + "</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_RespiratoryTherapists_French}</td>"+
"<td align='center'>${LHINProfile20112_csv_RespiratoryTherapists_English}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_RespiratoryTherapists_Others}</td>"+
"</tr>"+

"<tr>"+
"<td class=first align='center'>" + T("Speech Language Pathologists") + "</td>"+
"<td align='center'>${LHINProfile20112_csv_SpeechLanguagePathologists_French}</td>"+
"<td class=first align='center'>${LHINProfile20112_csv_SpeechLanguagePathologists_English}</td>"+
"<td align='center'>${LHINProfile20112_csv_SpeechLanguagePathologists_Others}</td>"+
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
layerData[5]['outFields'] = new Array("LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[6] = [];
layerData[6]['infoWindowTitle'] = "<b>" + T("General Rehabilitation Hospital") + "</b>";
layerData[6]['infoWindowBody'] =  "${LHIN_NAME}"+ "&nbsp" + "(" + "${LHINInfo_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + "<table border=1>"+ "</p>" +
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
layerData[6]['outFields'] = new Array("LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[7] = [];
layerData[7]['infoWindowTitle'] = "<b>" + T("Mental Health Unit") + "</b>";
layerData[7]['infoWindowBody'] = "${LHIN_NAME}"+ "&nbsp" + "(" + "${LHINInfo_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + "<table border=1>"+ "</p>" +
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
layerData[7]['outFields'] = new Array("LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[8] = [];
layerData[8]['infoWindowTitle'] = "<b>" + T("Special Rehabilitation Hospital") + "</b>";
layerData[8]['infoWindowBody'] ="${LHIN_NAME}"+ "&nbsp" + "(" + "${LHINInfo_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + "<table border=1>"+ "</p>" +
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
layerData[8]['outFields'] = new Array("LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

layerData[9] = [];
layerData[9]['infoWindowTitle'] = "<b>" + T("Acute Care Treatment Hospital") + "</b>";
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
layerData[10]['infoWindowTitle'] = "<b>" + T("Ambulatory Care") + "</b>";
layerData[10]['infoWindowBody']= "${LHIN_NAME}"+ "&nbsp" + "(" + "${LHINInfo_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + "<table border=1>"+ "</p>" +
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
layerData[11]['infoWindowTitle'] = "<b>" + T("Chronic Care Treatment Hospital") + "</b>";
layerData[11]['infoWindowBody'] ="${LHIN_NAME}"+ "&nbsp" + "(" + "${LHINInfo_1}" + ")" + "<p>" + "<b>" + T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + "<table border=1>"+ "</p>" +
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
layerData[12]['infoWindowTitle'] = "<b>" + T("Ontario") + "</b>";
layerData[12]['infoWindowBody'] ="${LHINProfile20112_csv_LHINNames}"+ "&nbsp" + "(" + "${LHINProfile20112_csv_LHINCode2013}" + ")" + 
 "<p>" + "<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>" + "</p>";
layerData[12]['outFields'] = new Array("LHINProfile20112_csv_LHINNames", "LHINProfile20112_csv_LHINCode2013" );


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

/* var layerType = {
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
	} */

var servicePointBuffers = [];
servicePointBuffers[5] = [32,39];
servicePointBuffers[6] = [18,25];
servicePointBuffers[7] = [46,53];
servicePointBuffers[8] = [60,67];
servicePointBuffers[9] = [74,81];
servicePointBuffers[10] = [88,95];
servicePointBuffers[11] = [109,102];

var layerInfoWindow = new Array();
var layerTemplate = new Array();
var mapLayer = new Array();

var defaultLayer = 12;

var activeLayer = defaultLayer;
var inLayer = 0;
var numLayers = 13;

var map;
var symbol;
var infoTemplate;

var legendsArray = [];

var firstTimeUpdateLayerIsCalled = 1;

var thisMapLayer = 'not initialized';

var numServicePointLayers = 0;

var mapAddress = 'http://216.48.92.42/arcgis/rest/services/DAFrenchMap/MapServer/';
/* var mapAddress2 = 'http://216.48.92.42/arcgis/rest/services/MotherTongueHeatMap/MapServer/';
var mapAddress3 = 'http://216.48.92.42/arcgis/rest/services/KnowledgeOfOfficialLanguageHeatMap/MapServer/';
var mapAddress4 = 'http://216.48.92.42/arcgis/rest/services/FirstOfficialLanguageHeatMap/MapServer/';
var mapAddress5 = 'http://216.48.92.42/arcgis/rest/services/LanguageSpokenMostOftenAtHomeHeatMap/MapServer/'; */

