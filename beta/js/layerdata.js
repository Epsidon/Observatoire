var accordion = [];
var layerData = [];

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


var servicePointBuffers = [];
servicePointBuffers[7] = [38,45];
servicePointBuffers[8] = [24,31];
servicePointBuffers[9] = [52,59];
servicePointBuffers[10] = [66,73];
servicePointBuffers[11] = [80,87];
servicePointBuffers[12] = [94,101];
servicePointBuffers[13] = [108,115];
servicePointBuffers[14] = [129,122];
servicePointBuffers[15] = [136,143];
servicePointBuffers[16] = [150,157];


var layerInfoWindow = new Array();
var layerTemplate = new Array();
var mapLayer = new Array();

var defaultLayer = 17;

var activeLayer = defaultLayer;
var inLayer = 0;
var numLayers = 18;

var map;
var symbol;
var infoTemplate;

var legendsArray = [];
var hospitalsLegendArray = [];

var firstTimeUpdateLayerIsCalled = 1;

var thisMapLayer = 'not initialized';

var numServicePointLayers = 0;

var mapAddress = 'http://216.48.92.42/arcgis/rest/services/DAOntarioRLISS/MapServer/';
 
var mapLayerLabel = 'Ontario';
var mapServicePointLabel = '';
var LayerLegend = translator.T('Ontario LHIN Information');
var mapServicePointLegendLabel = '';
//var accordionHeaders = {7 : translator.T('Hospitals By Services Offered'), 14 : translator.T('Hospitals By French Language Service (FLS) Designation')};


translateMap();

function translateMap()
{
	accordion[0] = []
	accordion[0]['title'] = translator.T('French Speaking Population (2011)');
	accordion[0]['numLayers'] = 4;

	accordion[1] = []
	accordion[1]['title'] = translator.T('Profiles By LHIN (2011)');
	accordion[1]['numLayers'] = 3;

	accordion[2] = []
	accordion[2]['title'] = translator.T('Health Services (2011)');
	accordion[2]['numLayers'] = 10;


	layerData[0] = [];
	layerData[0]['infoWindowTitle'] = "<b>" + translator.T("Mother Tongue") + "</b>";
	layerData[0]['infoWindowBody'] = translator.T("Dissemination Area(DA) #") + "${DAUID_1}" 
	+ translator.T(" is part of the ") + "<span class='spanToTranslate hidden'>${GeoKey20_2}</span>" + 
	"&nbsp" + "(" + "${GeoKey20_1}" + ")" + translator.T(" Local Health Integration Network (LHIN).") +
	"<p>" +  
	"<table class='table table-striped' border=1 align='center'>"+
	"<tr>"+
	"<th>" + translator.T("DA") + "</th>"+
	"<th>" + translator.T("French") + "</th>" +
	"<th>" + translator.T("English") + "</th>" +
	"<th>" + translator.T("Non Official") + "</th>" +
	"<th>Total</th>"+
	"</tr>"+
	"<tr>"+
	"<td>${DAUID_1}</td>"+
	"<td>${MTFrench}</td>"+
	"<td>${MTongueEng}</td>"+
	"<td>${MTNonOFF}</td>"+
	"<td>${Detailedmo}</td>"+
	"</tr>"+
	"</table>" + "</p>" + "<p>" + "<a class=methodologicalNote href=http://216.48.92.42:8080/notes.html target=_blank >" + translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[0]['outFields'] = new Array("POPIN2011", "GeoKey20_2", "GeoKey20_1","Detailedmo", "DAUID_1", "MTFrench", "MTongueEng", "MTNonOFF" );

	layerData[1] = [];
	layerData[1]['infoWindowTitle'] = "<b>" + translator.T("Knowledge of Official Language") + "</b>";
	layerData[1]['infoWindowBody'] = translator.T("Dissemination Area(DA) #") + "${DAUID_1}" 
	+ translator.T(" is part of the ") + "<span class='spanToTranslate hidden'>${GeoKey20_2}</span>"
	+ "&nbsp" + "(" + "${GeoKey20_1}" + ")" + translator.T(" Local Health Integration Network (LHIN).") +
	"<p>" + 
	"<table class='table table-striped' border=1 align='center'>"+
	"<tr>"+
	"<th>" + translator.T("DA") + "</th>"+
	"<th>" + translator.T("French") + "</th>" +
	"<th>" + translator.T("English") + "</th>" +
	"<th>" + translator.T("English & French") + "</th>"+
	"<th>" + translator.T("Neither") +"</th>"+
	"<th>Total</th>"+
	"</tr>"+
	"<tr>"+
	"<td>${DAUID_1}</td>"+
	"<td>${KnowledgFr}</td>"+
	"<td>${KnowlefEng}</td>"+
	"<td>${KnowlEngFr}</td>"+
	"<td>${KEngNorFre}</td>"+
	"<td align='center'>${Knowledgeo}</td>"+
	"</tr>"+
	"</table>" + "</p>" +"<p>" + "<a class=methodologicalNote href=http://216.48.92.42:8080/notes.html target=_blank >" + translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[1]['outFields'] = new Array("KnowlefEng","GeoKey20_2", "GeoKey20_1", "POPIN2011", "DAUID_1", "KnowledgFr", "KnowlEngFr", "KEngNorFre", "Knowledgeo");

	layerData[2] = [];
	layerData[2]['infoWindowTitle'] = "<b>" + translator.T("First Official Language Spoken") + "</b>";
	layerData[2]['infoWindowBody'] = translator.T("Dissemination Area(DA) #") + "${DAUID_1}" 
	+ translator.T(" is part of the ") + "<span class='spanToTranslate hidden'>${GeoKey20_2}</span>"
	+ "&nbsp" + "(" + "${GeoKey20_1}" + ")" + translator.T(" Local Health Integration Network (LHIN).") +
	"<p>" +
	"<table class='table table-striped' border=1 align='center'>"+
	"<tr>"+
	"<th>" + translator.T("DA") + "</th>"+
	"<th>" + translator.T("French") + "</th>"+
	"<th>" + translator.T("English") + "</th>"+
	"<th>" + translator.T("English & French") + "</th>"+
	"<th>" + translator.T("Neither") + "</th>"+
	"<th>Total</th>"+
	"</tr>"+
	"<tr>"+
	"<td>${DAUID_1}</td>"+
	"<td>${FirstofFre}</td>"+
	"<td>${FirstofEng}</td>"+
	"<td>${FirstoEngF}</td>"+
	"<td>${FOFENorF}</td>"+
	"<td>${FirstoffTo}</td>"+
	"</tr>"+
	"</table>" + "</p>" + "<p>" + "<a class=methodologicalNote href=http://216.48.92.42:8080/notes.html target=_blank >" + translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[2]['outFields'] = new Array("GeoKey20_2", "GeoKey20_1", "POPIN2011", "DAUID_1", "FirstofFre", "FirstofEng", "FirstoEngF", "FOFENorF", "FirstoffTo");

	layerData[3] = [];
	layerData[3]['infoWindowTitle'] = "<b>" + translator.T("Language Spoken Most Often at Home") + "</b>";
	layerData[3]['infoWindowBody'] =translator.T("Dissemination Area(DA) #") + "${DAUID_1}" 
	+ translator.T(" is part of the ") + "<span class='spanToTranslate hidden'>${GeoKey20_2}</span>"
	+ "&nbsp" + "(" + "${GeoKey20_1}" + ")" + translator.T(" Local Health Integration Network (LHIN).") +
	"<p>" + 
	"<table class='table table-striped' border=1 align='center'>"+
	"<tr>"+
	"<th>" + translator.T("DA") + "</th>"+
	"<th>" + translator.T("French") + "</th>"+
	"<th>" + translator.T("English") + "</th>"+
	"<th>" + translator.T("Non Official") + "</th>"+
	"<th>Total</th>"+
	"</tr>"+
	"<tr>"+
	"<td>${DAUID_1}</td>"+
	"<td>${DLSHFre}</td>"+
	"<td>${DLSHEn}</td>"+
	"<td>${DLSHNON}</td>"+
	"<td>${DLAthomeTo}</td>"+
	"</tr>"+
	"</table>" + "<p>" + "<a class=methodologicalNote href=http://216.48.92.42:8080/notes.html target=_blank >" + translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[3]['outFields'] = new Array("GeoKey20_2", "GeoKey20_1", "POPIN2011", "DAUID_1", "DLSHFre", "DLSHEn", "DLSHNON", "DLAthomeTo");

	layerData[4] = [];
	layerData[4]['infoWindowTitle'] = "<b>" + translator.T("Health professions by LHIN") + "</b>";
	layerData[4]['infoWindowBody'] = "<span class='spanToTranslate hidden popupTextStyle'>${HR035b08_E}</span>" +
	"&nbsp" + 
	"<span class='spanToTranslate hidden popupTextStyle'>(" + "${HR035b08_H}" + ")" + 
	"<p>"+ "<b>"+ translator.T("Total Population in 2011: ") +  "&nbsp" + "</b>" + "${LHINProf_2}" + "<br>" + "</p>" +  "</span>" +
	"<table border=1 class='table table-striped'>" +
	"<tr>"+
	"<th>" + translator.T("Speciality") + "</th>"+
	"<th align='center'>" + translator.T("French") + "</th>"+
	"<th align='center'>" + translator.T("English") + "</th>"+
	"<th align='center'>" + translator.T("Others") + "</th>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>" + translator.T("Audiologists") + "</td>"+
	"<td align='center'>${LHINPro_75}</td>"+
	"<td align='center'>${LHINPro_76}</td>"+
	"<td align='center'>${LHINPro_77}</td>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>" + translator.T("Chiropodists") + "</td>"+
	"<td align='center'>${LHINPro_78}</td>"+
	"<td align='center'>${LHINPro_79}</td>"+
	"<td align='center'>${LHINPro_80}</td>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>" + translator.T("Chiropractors") + "</td>"+
	"<td align='center'>${LHINPro_81}</td>"+
	"<td align='center'>${LHINPro_82}</td>"+
	"<td align='center'>${LHINPro_83}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Dental Hygienists") + "</td>"+
	"<td align='center'>${LHINPro_84}</td>"+
	"<td align='center'>${LHINPro_85}</td>"+
	"<td align='center'>${LHINPro_86}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Dental Technologists") + "</td>"+
	"<td align='center'>${LHINPro_87}</td>"+
	"<td align='center'>${LHINPro_88}</td>"+
	"<td align='center'>${LHINPro_89}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Dentists") + "</td>"+
	"<td align='center'>${LHINPro_90}</td>"+
	"<td align='center'>${LHINPro_91}</td>"+
	"<td align='center'>${LHINPro_92}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Denturists") + "</td>"+
	"<td align='center'>${LHINPro_93}</td>"+
	"<td align='center'>${LHINPro_94}</td>"+
	"<td align='center'>${LHINPro_95}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Dietitians") + "</td>"+
	"<td align='center'>${LHINPro_96}</td>"+
	"<td align='center'>${LHINPro_97}</td>"+
	"<td align='center'>${LHINPro_98}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Massage Therapists") + "</td>"+
	"<td align='center'>${LHINPro_99}</td>"+
	"<td align='center'>${LHINPr_100}</td>"+
	"<td align='center'>${LHINPr_101}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Medical Laboratory Technologists") + "</td>"+
	"<td align='center'>${LHINPr_102}</td>"+
	"<td align='center'>${LHINPr_103}</td>"+
	"<td align='center'>${LHINPr_104}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Medical Radiation Technologists") + "</td>"+
	"<td align='center'>${LHINPr_105}</td>"+
	"<td align='center'>${LHINPr_106}</td>"+
	"<td align='center' align='center'>${LHINPr_107}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Midwives") + "</td>"+
	"<td align='center'>${LHINPr_108}</td>"+
	"<td align='center'>${LHINPr_109}</td>"+
	"<td align='center'>${LHINPr_110}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Nurse Practitioners") + "</td>"+
	"<td align='center'>${LHINPr_111}</td>"+
	"<td align='center'>${LHINPr_112}</td>"+
	"<td align='center'>${LHINPr_113}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Occupational Therapists") + "</td>"+
	"<td align='center'>${LHINPr_114}</td>"+
	"<td align='center'>${LHINPr_115}</td>"+
	"<td align='center'>${LHINPr_116}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Opticians") + "</td>"+
	"<td align='center'>${LHINPr_117}</td>"+
	"<td align='center'>${LHINPr_118}</td>"+
	"<td align='center'>${LHINPr_119}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Optometrists") + "</td>"+
	"<td align='center'>${LHINPr_120}</td>"+
	"<td align='center'>${LHINPr_121}</td>"+
	"<td align='center'>${LHINPr_122}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Pharmacists") + "</td>"+
	"<td align='center'>${LHINPr_123}</td>"+
	"<td align='center'>${LHINPr_124}</td>"+
	"<td align='center'>${LHINPr_125}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Family Physicians") + "</td>"+
	"<td align='center'>${LHINPr_126}</td>"+
	"<td align='center'>${LHINPr_127}</td>"+
	"<td align='center'></td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Specialist Physicians") + "</td>"+
	"<td align='center'>${LHINPr_128}</td>"+
	"<td align='center'>${LHINPr_129}</td>"+
	"<td></td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Physiotherapists") + "</td>"+
	"<td align='center'>${LHINPr_130}</td>"+
	"<td align='center'>${LHINPr_131}</td>"+
	"<td align='center'>${LHINPr_132}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Psychologists") + "</td>"+
	"<td align='center'>${LHINPr_133}</td>"+
	"<td align='center'>${LHINPr_134}</td>"+
	"<td align='center'>${LHINPr_135}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Registered Nurses") + "</td>"+
	"<td align='center'>${LHINPr_136}</td>"+
	"<td align='center'>${LHINPr_137}</td>"+
	"<td align='center'>${LHINPr_138}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Registered Practical Nurses") + "</td>"+
	"<td align='center'>${LHINPr_139}</td>"+
	"<td align='center'>${LHINPr_140}</td>"+
	"<td align='center'>${LHINPr_141}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Respiratory Therapists") + "</td>"+
	"<td align='center'>${LHINPr_142}</td>"+
	"<td align='center'>${LHINPr_143}</td>"+
	"<td align='center'>${LHINPr_144}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Speech Language Pathologists") + "</td>"+
	"<td align='center'>${LHINPr_145}</td>"+
	"<td align='center'>${LHINPr_146}</td>"+
	"<td align='center'>${LHINPr_147}</td>"+
	"</tr>"+
	"</table>" + 
	"<p>" + "<a class=methodologicalNote href=http://216.48.92.42:8080/notes.html target=_blank >" + translator.T("Methodological Notes") + "</a>" + "</p>";

	layerData[4]['outFields'] = new Array( "HR035b08_E", "HR035b08_H", "LHINProf_2", 
	"LHINPro_75", "LHINPro_76", "LHINPro_77", "LHINPro_78", "LHINPro_79", "LHINPro_80", "LHINPro_81",
	"LHINPro_82", "LHINPro_83", "LHINPro_84", "LHINPro_85", "LHINPro_86", "LHINPro_87", "LHINPro_88", 
	"LHINPro_89", "LHINPro_90", "LHINPro_91", "LHINPro_92", "LHINPro_93", "LHINPro_94", "LHINPro_95", 
	"LHINPro_96", "LHINPro_97", "LHINPro_98", "LHINPro_99", "LHINPr_100", "LHINPr_101", "LHINPr_102",
	"LHINPr_103", "LHINPr_104", "LHINPr_105", "LHINPr_106", "LHINPr_107", "LHINPr_108", "LHINPr_110",
	"LHINPr_109", "LHINPr_111", "LHINPr_112", "LHINPr_113", "LHINPr_114", "LHINPr_115", "LHINPr_116", 
	"LHINPr_117", "LHINPr_118", "LHINPr_119", "LHINPr_120", "LHINPr_121",
	"LHINPr_122", "LHINPr_123", "LHINPr_124", "LHINPr_125", "LHINPr_126",
	"LHINPr_127", "LHINPr_128", "LHINPr_129", "LHINPr_130", "LHINPr_131",
	"LHINPr_132", "LHINPr_133", "LHINPr_134", "LHINPr_135", "LHINPr_136", "LHINPr_137",
	"LHINPr_138", "LHINPr_139", "LHINPr_140", "LHINPr_141", "LHINPr_142", "LHINPr_143", "LHINPr_144",
	"LHINPr_145", "LHINPr_146", "LHINPr_147"
	);

	layerData[5] = [];
	layerData[5]['infoWindowTitle'] = "<b>" + translator.T("Sociodemographic Profile") + "</b>";
	layerData[5]['infoWindowBody'] = "<span class='spanToTranslate hidden popupTextStyle'>${Export_Output_6.EnglishL_1}</span>" + 
	"&nbsp" + "<span class='popupTextStyle'>(" + "${Export_Output_6.HRUID2007}" + ")" +
	"<b>" + "<p>" + translator.T("Global Non-Response Rate (GNR) = ") + "</b>" + "${Export_Output_6.SociEcoP_1}" + "</p>" + "</span>" +
	"<table border=1 class='table table-striped'>"+
	"<tr>"+
	"<th align='center' id='emptyHeader'></th>"+
	"<th align='center'>" + translator.T("French Only") + "</th>" +
	"<th align='center'>" + translator.T("English Only") + "</th>" +
	"<th align='center'>" + translator.T("French & English") + "</th>" +
	"<th align='center'>" + translator.T("Neither Official Language") + "</th>" +
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Population") + "</td>"+
	"<td align='center'>${Export_Output_6.SociEcoP_2}</td>"+
	"<td align='center'>${Export_Output_6.SociEcoP_3}</td>"+
	"<td align='center'>${Export_Output_6.SociEcoP_4}</td>"+
	"<td align='center'>${Export_Output_6.SociEcoP_5}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Proportion of the total population") + "</td>"+
	"<td align='center'>${Export_Output_6.socio_csv1}" + "%" + "</td>"+
	"<td align='center'>${Export_Output_6.socio_cs_1}" + "%" + "</td>"+
	"<td align='center'>${Export_Output_6.socio_cs_2}" + "%" + "</td>"+
	"<td align='center'>${Export_Output_6.socio_cs_3}" + "%" + "</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Age groups") + "</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("0 to 19 years old") + "</td>"+
	"<td align='center'>${Export_Output_6.SociEcoP_6}</td>"+
	"<td align='center'>${Export_Output_6.SociEcoP_9}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_12}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_15}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("20 to 64 years old") + "</td>"+
	"<td align='center'>${Export_Output_6.SociEcoP_7}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_10}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_13}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_16}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("65 years old and above") + "</td>"+
	"<td align='center'>${Export_Output_6.SociEcoP_8}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_11}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_14}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_17}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Education") + "</td>" +
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("No certificate, diploma or degree") + "</td>"+
	"<td align='center'>${Export_Output_6.SociEco_18}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_23}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_28}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_33}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("High school diploma") + "</td>"+
	"<td align='center'>${Export_Output_6.SociEco_19}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_24}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_29}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_34}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("College certificate/diploma") + "</td>"+
	"<td align='center'>${Export_Output_6.SociEco_21}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_26}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_31}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_36}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("University certificate/diploma degree") + "</td>"+
	"<td align='center'>${Export_Output_6.SociEco_22}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_27}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_32}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_37}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Immigrants") + "</td>"+
	"<td align='center'>${Export_Output_6.SociEco_38}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_39}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_40}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_41}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Low income person") + "</td>"+
	"<td align='center'>${Export_Output_6.SociEco_42}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_43}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_44}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_45}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Person living alone") + "</td>"+
	"<td align='center'>${Export_Output_6.SociEco_46}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_47}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_48}</td>"+
	"<td align='center'>${Export_Output_6.SociEco_49}</td>"+
	"</tr>"+
	"</table>" + 
	"<p>" + "<a class=methodologicalNote href=http://216.48.92.42:8080/notes.html target=_blank >" + translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[5]['outFields'] = new Array("Export_Output_6.EnglishL_1", "Export_Output_6.HRUID2007", "Export_Output_6.SociEcoP_1",
	 "Export_Output_6.SociEcoP_2",
	"Export_Output_6.SociEcoP_3",
	"Export_Output_6.SociEcoP_4",
	"Export_Output_6.SociEcoP_5",
	"Export_Output_6.socio_csv1",
	"Export_Output_6.socio_cs_1",
	"Export_Output_6.socio_cs_2",
	"Export_Output_6.socio_cs_3",
	"Export_Output_6.SociEcoP_6",
	"Export_Output_6.SociEcoP_9",
	"Export_Output_6.SociEco_12",
	"Export_Output_6.SociEco_15",
	"Export_Output_6.SociEcoP_7","Export_Output_6.SociEco_10", "Export_Output_6.SociEco_13", "Export_Output_6.SociEco_16",
	"Export_Output_6.SociEcoP_8", "Export_Output_6.SociEco_11", "Export_Output_6.SociEco_14", "Export_Output_6.SociEco_17",
	"Export_Output_6.SociEco_18","Export_Output_6.SociEco_36","Export_Output_6.SociEco_22","Export_Output_6.SociEco_27",
	"Export_Output_6.SociEco_23", "Export_Output_6.SociEco_28", "Export_Output_6.SociEco_33", "Export_Output_6.SociEco_19", 
	"Export_Output_6.SociEco_24","Export_Output_6.SociEco_21", "Export_Output_6.SociEco_26","Export_Output_6.SociEco_32",
	"Export_Output_6.SociEco_29", "Export_Output_6.SociEco_34", "Export_Output_6.SociEco_31", "Export_Output_6.SociEco_49",
	"Export_Output_6.SociEco_37", "Export_Output_6.SociEco_38","Export_Output_6.SociEco_39","Export_Output_6.SociEco_40",
	"Export_Output_6.SociEco_41", "Export_Output_6.SociEco_42", "Export_Output_6.SociEco_43", "Export_Output_6.SociEco_44", 
	"Export_Output_6.SociEco_45", "Export_Output_6.SociEco_46", "Export_Output_6.SociEco_47", "Export_Output_6.SociEco_48");
	 
	layerData[6] = [];
	layerData[6]['infoWindowTitle'] = "<b>" + translator.T("Health Profiles") + "</b>";
	layerData[6]['infoWindowBody'] = "<span class='spanToTranslate hidden popupTextStyle'>${HR035b08_E}</span>" +
	"&nbsp" + "<span class='spanToTranslate hidden popupTextStyle'>(" + "${HR035b08_H}" + ")" + "</span>" +
	"<br>" + "<b>" + translator.T("Canadian Community Health Survey Combined Cycles 2001 to 2012") + "</b>" + "</br>" + "</span>" +
	"<table border=1 class='table table-striped'>"+
	"<tr>"+
	"<th align='center'></th>"+
	"<th align='center'>" + translator.T("French") + "</th>"+
	"<th align='center'>" + translator.T("English") + "</th>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Perceived health, fair or poor (%)") + "</td>"+
	"<td align='center'>${HealthP_20}</td>"+
	"<td align='center'>${HealthPr_1}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Perceived mental health, fair or poor (%)") + "</td>"+
	"<td align='center'>${HealthP_21}</td>"+
	"<td align='center'>${HealthPr_2}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Perceived life stress, quite a bit or extremely stressful (%)") + "</td>"+
	"<td align='center'>${HealthP_22}</td>"+
	"<td align='center'>${HealthPr_3}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Participation and activity limitation, sometimes or often (%)") + "</td>"+
	"<td align='center'>${TES4_csv_D}</td>"+
	"<td align='center'>${HealthPr_4}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("At least one chronic disease (%)") + "</td>"+
	"<td align='center'>${TES4_csv_C}</td>"+
	"<td align='center'>${HealthPr_5}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Body mass index (BMI) (18 or older), overweight or obese (%)") + "</td>"+
	"<td align='center'>${HealthP_25}</td>"+
	"<td align='center'>${HealthPr_6}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Fruit and vegetable consumption, less than 5 times per day (%)") + "</td>"+
	"<td align='center'>${HealthP_26}</td>"+
	"<td align='center'>${HealthPr_7}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Current smoker, daily or occasional (%)") + "</td>"+
	"<td align='center'>${HealthP_29}</td>"+
	"<td align='center'>${HealthPr_8}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Type of drinker, regular (%)") + "</td>"+
	"<td align='center'>${TES4_csv_B}</td>"+
	"<td align='center'>${HealthPr_9}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Regular medical doctor (%)") + "</td>"+
	"<td align='center'>${HealthP_31}</td>"+
	"<td align='center'>${HealthP_10}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Language spoken with medical doctor, English (%)") + "</td>"+
	"<td align='center'>${TES4_csv_M}</td>"+
	"<td align='center'>${HealthP_11}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Contact with a family medicine physician or a nurse in the past 12 months (%)") + "</td>"+
	"<td align='center'>${HealthP_33}</td>"+
	"<td align='center'>${HealthP_12}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Required health care in the past 12 months  (%)") + "</td>"+
	"<td align='center'>${TES4_csv_1}</td>"+
	"<td align='center'>${HealthP_13}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Difficulties obtaining health care in the past 12 months  (%)") + "</td>"+
	"<td align='center'>${HealthP_35}</td>"+
	"<td align='center'>${HealthP_14}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Perceived access to health care in Ontario, good or excellent (%)") + "</td>"+
	"<td align='center'>${TES4_csv_A}</td>"+
	"<td align='center'>${HealthP_15}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Perceived quality of health care in Ontario, good or excellent (%)") + "</td>"+
	"<td align='center'>${HealthP_37}</td>"+
	"<td align='center'>${HealthP_16}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Perceived access to health care in community, good or excellent (%)") + "</td>"+
	"<td align='center'>${TES4_csv_3}</td>"+
	"<td align='center'>${HealthP_17}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Perceived quality health care in community , good or excellent (%)") + "</td>"+
	"<td align='center'>${HealthP_39}</td>"+
	"<td align='center'>${HealthP_18}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Sense of community belonging, very strong or somewhat strong (%)") + "</td>"+
	"<td align='center'>${HealthP_40}</td>"+
	"<td align='center'>${HealthP_19}</td>"+
	"</tr>"+
	"</table>" + 
	"<br>" + 
	translator.T("E = Use with caution") +  "</br>" +
	"<n>" +translator.T("F = Too unreliable to be published") + "</n>" +
	"</br>" +
	"<p>" + "<a class=methodologicalNote href=http://216.48.92.42:8080/notes.html target=_blank >" + translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[6]['outFields'] = new Array( 
	"HR035b08_E", "HR035b08_H", "HealthP_20", "HealthPr_1", "HealthP_21",
	 "HealthPr_2", "HealthP_22", "HealthPr_3", "TES4_csv_D", 
	"HealthPr_4", "TES4_csv_C", "HealthPr_5", "HealthP_25", "HealthPr_6", 
	"HealthP_26", "HealthPr_7", "HealthP_29", "HealthPr_8", 
	"TES4_csv_B", "HealthPr_9", "Health__31", "HealthP_10", "TES4_csv_M", 
	"HealthP_11", "HealthP_33", "HealthP_12", "TES4_csv_1", 
	"HealthP_13", "HealthP_35", "HealthP_14", "TES4_csv_A", 
	"HealthP_15", "HealthP_37", "HealthP_16", "TES4_csv_3", "HealthP_17", 
	"HealthP_39", "HealthP_18", "HealthP_40", "HealthP_19", "HealthP_31"
	 );

	layerData[7] = [];
	layerData[7]['infoWindowTitle'] = "<b>" + translator.T("All Hospitals") + "</b>";
	layerData[7]['infoWindowBody'] = "<span class='spanToTranslate hidden'>${LHIN_NAME}</span>" + "&nbsp" +
	/*  "(" + "${LHINS.csv.LHINCode2013}" + ")" +  */
	"<table border=1 class='table table-striped'>" +
	"<tr>"+
	"<th align='center'>" + translator.T("Hospital") + "</th>"+
	"<th align='center'>" + translator.T("City") + "</th>"+
	"<th align='center'>" + translator.T("Address") + "</th>"+
	"<th align='center'>" + translator.T("Postal Code") + "</th>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>${C_NAME_ENG}</td>"+
	"<td align='center'>${CITY}</td>"+
	"<td align='center'>${ADDRESS_1}</td>"+
	"<td align='center'>${POSTALCODE}</td>"+
	"</tr>"+
	"</table>" + "<p>" + "<a class=methodologicalNote href=http://216.48.92.42:8080/notes.html target=_blank >" + translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[7]['outFields'] = new Array("LHIN_NAME", "C_NAME_ENG", "CITY", "ADDRESS_1",
	"POSTALCODE" );

	layerData[8] = [];
	layerData[8]['infoWindowTitle'] = "<b>" + translator.T("General Rehabilitation Hospital") + "</b>";
	layerData[8]['infoWindowBody'] = "<span class='spanToTranslate hidden'>${LHIN_NAME}</span>" + "&nbsp" +
	 "(" + "${LHINProfil}" + ")" + "<p>" + "<b>" + 
	 translator.T("Total Population in 2011: ") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +
	 "<p><b>"+ "<p>" + "<table border=1 class='table table-striped'>"+ "</p>" +
	"<tr>"+
	"<th align='center'>" + translator.T("Hospital") + "</th>"+
	"<th align='center'>" + translator.T("City") + "</th>"+
	"<th align='center'>" + translator.T("Address") + "</th>"+
	"<th align='center'>" + translator.T("Postal Code") + "</th>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>${C_NAME_ENG}</td>"+
	"<td align='center'>${CITY}</td>"+
	"<td align='center'>${ADDRESS_1}</td>"+
	"<td align='center'>${POSTALCODE}</td>"+
	"</tr>"+
	"</table>" + "<p>" + "<a class=methodologicalNote href=http://216.48.92.42:8080/notes.html target=_blank >" + translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[8]['outFields'] = new Array("LHIN_NAME", "LHINProf_2", "LHINProfil" , "C_NAME_ENG", "CITY", "ADDRESS_1", "POSTALCODE");

	layerData[9] = [];
	layerData[9]['infoWindowTitle'] = "<b>" + translator.T("Mental Health Units") + "</b>";
	layerData[9]['infoWindowBody'] = "<span class='spanToTranslate hidden'>${LHIN_NAME}</span>" + "&nbsp" + "(" + "${LHINProfil}" + ")" + "<p>" + "<b>" + translator.T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" +
	"<table border=1 class='table table-striped'>"+ "</p>" +
	"<tr>"+
	"<th align='center'>" + translator.T("Hospital") + "</th>"+
	"<th align='center'>" + translator.T("City") + "</th>"+
	"<th align='center'>" + translator.T("Address") + "</th>"+
	"<th align='center'>" + translator.T("Postal Code") + "</th>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>${C_NAME_ENG}</td>"+
	"<td align='center'>${CITY}</td>"+
	"<td align='center'>${ADDRESS_1}</td>"+
	"<td align='center'>${POSTALCODE}</td>"+
	"</tr>"+
	"</table>" + "<p>" + "<a class=methodologicalNote href=http://216.48.92.42:8080/notes.html target=_blank >" + translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[9]['outFields'] = new Array("LHINProfil","LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

	layerData[10] = [];
	layerData[10]['infoWindowTitle'] = "<b>" + translator.T("Special Rehabilitation Hospital") + "</b>";
	layerData[10]['infoWindowBody'] = "<span class='spanToTranslate hidden'>${LHIN_NAME}</span>" + "&nbsp" + "(" + "${LHINInform}" + ")" + "<p>" + "<b>" + translator.T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + 
	"<table border=1 class='table table-striped'>"+ "</p>" +
	"<tr>"+
	"<th align='center'>" + translator.T("Hospital") + "</th>"+
	"<th align='center'>" + translator.T("City") + "</th>"+
	"<th align='center'>" + translator.T("Address") + "</th>"+
	"<th align='center'>" + translator.T("Postal Code") + "</th>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>${C_NAME_ENG}</td>"+
	"<td align='center'>${CITY}</td>"+
	"<td align='center'>${ADDRESS_1}</td>"+
	"<td align='center'>${POSTALCODE}</td>"+
	"</tr>"+
	"</table>" + "<p>" + "<a class=methodologicalNote href=http://216.48.92.42:8080/notes.html target=_blank >" + translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[10]['outFields'] = new Array("LHINInform","LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

	layerData[11] = [];
	layerData[11]['infoWindowTitle'] = "<b>" + translator.T("Acute Care Treatment Hospital") + "</b>";
	layerData[11]['infoWindowBody'] = "<span class='spanToTranslate hidden'>${LHIN_NAME}</span>" + "&nbsp" + "(" + "${LHINInform}" + ")" + "<p>" + "<b>" + translator.T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + 
	"<table border=1 class='table table-striped'>"+ "</p>" +
	"<tr>"+
	"<th align='center'>" + translator.T("Hospital") + "</th>"+
	"<th align='center'>" + translator.T("City") + "</th>"+
	"<th align='center'>" + translator.T("Address") + "</th>"+
	"<th align='center'>" + translator.T("Postal Code") + "</th>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>${C_NAME_ENG}</td>"+
	"<td align='center'>${CITY}</td>"+
	"<td align='center'>${ADDRESS_1}</td>"+
	"<td align='center'>${POSTALCODE}</td>"+
	"</tr>"+
	"</table>" + "<p>" + "<a class=methodologicalNote href=http://216.48.92.42:8080/notes.html target=_blank >" + translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[11]['outFields'] = new Array("LHINInform","LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

	layerData[12] = [];
	layerData[12]['infoWindowTitle'] = "<b>" + translator.T("Ambulatory Care") + "</b>";
	layerData[12]['infoWindowBody']= "<span class='spanToTranslate hidden'>${LHIN_NAME}</span>" + "&nbsp" + "(" + "${LHINInform}" + ")" + "<p>" + "<b>" + translator.T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + 
	"<table border=1 class='table table-striped'>"+ "</p>" +
	"<tr>"+
	"<th align='center'>" + translator.T("Hospital") + "</th>"+
	"<th align='center'>" + translator.T("City") + "</th>"+
	"<th align='center'>" + translator.T("Address") + "</th>"+
	"<th align='center'>" + translator.T("Postal Code") + "</th>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>${C_NAME_ENG}</td>"+
	"<td align='center'>${CITY}</td>"+
	"<td align='center'>${ADDRESS_1}</td>"+
	"<td align='center'>${POSTALCODE}</td>"+
	"</tr>"+
	"</table>" + "<p>" + "<a class=methodologicalNote href=http://216.48.92.42:8080/notes.html target=_blank >" + translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[12]['outFields'] = new Array("LHINInform","LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

	layerData[13] = [];
	layerData[13]['infoWindowTitle'] = "<b>" + translator.T("Chronic Care Treatment Hospital") + "</b>";
	layerData[13]['infoWindowBody'] = "<span class='spanToTranslate hidden'>${LHIN_NAME}</span>" + "&nbsp" + "(" + "${LHINInform}" + ")" + "<p>" + "<b>" + translator.T("Total Population in 2011:") + "&nbsp" + "</b>" + "${LHINProf_2}"+ "</p>" +"<p><b>"+ "<p>" + 
	"<table border=1 class='table table-striped'>"+ "</p>" +
	"<tr>"+
	"<th align='center'>" + translator.T("Hospital") + "</th>"+
	"<th align='center'>" + translator.T("City") + "</th>"+
	"<th align='center'>" + translator.T("Address") + "</th>"+
	"<th align='center'>" + translator.T("Postal Code") + "</th>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>${C_NAME_ENG}</td>"+
	"<td align='center'>${CITY}</td>"+
	"<td align='center'>${ADDRESS_1}</td>"+
	"<td align='center'>${POSTALCODE}</td>"+
	"</tr>"+
	"</table>" + "<p>" + "<a class=methodologicalNote href=http://216.48.92.42:8080/notes.html target=_blank >" + translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[13]['outFields'] = new Array("LHINInform","LHIN_NAME", "LHINInfo_1" , "LHINProf_2","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

	
	layerData[14] = [];
	layerData[14]['infoWindowTitle'] = "<b>" + translator.T("FLS Designated All") + "</b>";
	layerData[14]['infoWindowBody'] = "<span class='spanToTranslate hidden'>${LHIN_NAME}</span>" + 
	"<table border=1 class='table table-striped'>"+
	"<tr>"+
	"<th align='center'>" + translator.T("Hospital") + "</th>"+
	"<th align='center'>" + translator.T("City") + "</th>"+
	"<th align='center'>" + translator.T("Address") + "</th>"+
	"<th align='center'>" + translator.T("Postal Code") + "</th>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>${C_NAME_ENG}</td>"+
	"<td align='center'>${CITY}</td>"+
	"<td align='center'>${ADDRESS_1}</td>"+
	"<td align='center'>${POSTALCODE}</td>"+
	"</tr>"+
	"</table>" + "<p>" + "<a class=methodologicalNote href=http://216.48.92.42:8080/notes.html target=_blank >" + translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[14]['outFields'] = new Array("LHIN_NAME","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

	layerData[15] = [];
	layerData[15]['infoWindowTitle'] = "<b>" + translator.T("FLS Designated Partial") + "</b>";
	layerData[15]['infoWindowBody'] = "<span class='spanToTranslate hidden'>${LHIN_NAME}</span>" + 
	"<table border=1 class='table table-striped'>"+
	"<tr>"+
	"<th align='center'>" + translator.T("Hospital") + "</th>"+
	"<th align='center'>" + translator.T("City") + "</th>"+
	"<th align='center'>" + translator.T("Address") + "</th>"+
	"<th align='center'>" + translator.T("Postal Code") + "</th>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>${C_NAME_ENG}</td>"+
	"<td align='center'>${CITY}</td>"+
	"<td align='center'>${ADDRESS_1}</td>"+
	"<td align='center'>${POSTALCODE}</td>"+
	"</tr>"+
	"</table>" + "<p>" + "<a class=methodologicalNote href=http://216.48.92.42:8080/notes.html target=_blank >" + translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[15]['outFields'] = new Array("LHIN_NAME","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

	
	layerData[16] = [];
	layerData[16]['infoWindowTitle'] = "<b>" + translator.T("Local Health Integration Network (LHIN)") + "</b>";
	layerData[16]['infoWindowBody'] = "<p>" + "<table border=1 class='table table-striped'>"+ "</p>" +
	"<tr>"+
	"<th align='center'></th>"+
	"<th align='center'>" + translator.T("French") + "</th>"+
	"<th align='center'>" + translator.T("English") + "</th>"+
	"<th align='center'>" + translator.T("English & French") + "</th>"+
	"<th align='center'>" + translator.T("Neither") + "</th>"+
	"<th align='center'>" + translator.T("Total") + "</th>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>" + translator.T("Population Number") + "</td>"+
	"<td align='center'>${Export_Output_7.SociEcoP_2}</td>"+
	"<td align='center'>${Export_Output_7.SociEcoP_3}</td>"+
	"<td align='center'>${Export_Output_7.SociEcoP_4}</td>"+
	"<td align='center'>${Export_Output_7.SociEcoP_5}</td>"+
	"<td align='center'>${Export_Output_7.Total}</td>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>" + translator.T("Population Proportion") + "</td>"+
	"<td align='center'>" + "${Export_Output_7.socio_csv1}" + "%" + "</td>"+
	"<td align='center'>" + "${Export_Output_7.socio_cs_1}" + "%" + "</td>"+
	"<td align='center'>" + "${Export_Output_7.socio_cs_2}" + "%" + "</td>"+
	"<td align='center'>" + "${Export_Output_7.socio_cs_3}" + "%" + "</td>"+
	"<td align='center'>" + translator.T("100%") + "</td>"+
	"</tr>"+
	"</table>" + translator.T("Source: 2011 National Household Survey") +
	"<p>" + "${Export_Output_7.FRE_LABEL}" + translator.T(" Global non-response rate (GNR) = ") + "${Export_Output_7.SociEcoP_1}"+ "</p>" +
	"<span class='spanToTranslate hidden'></span>" +
	"<p>" + "<a class=methodologicalNote href=http://216.48.92.42:8080/notes.html target=_blank >" + 
	translator.T("Methodological Notes") + "</a>" + "</p>";

	layerData[16]['outFields'] = new Array("Export_Output_7.SociEcoP_2", "Export_Output_7.SociEcoP_3", "Export_Output_7.SociEcoP_4", "Export_Output_7.SociEcoP_5"
	,"Export_Output_7.Total", "Export_Output_7.socio_csv1", "Export_Output_7.socio_cs_1", "Export_Output_7.socio_cs_2",
	"Export_Output_7.socio_cs_3", "Export_Output_7.SociEcoP_1");

	layerData[17] = [];
	layerData[17]['infoWindowTitle'] = "<b>" + translator.T("Ontario") + "</b>";
	layerData[17]['infoWindowBody'] ="<span class='spanToTranslate hidden popupTextStylepopupTextStyle'>${HR035b08_E}"+ "&nbsp" + "(" + "${HR035b08_H}" + ")" + "</span>" +
	 "<p>" + "<a class=methodologicalNote href=http://216.48.92.42:8080/notes.html target=_blank >" + translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[17]['outFields'] = new Array("HR035b08_E", "HR035b08_H" );

	layersLabels = [
		translator.T('Mother Tongue'), translator.T('Knowledge of Official Language'), translator.T('First Official Language Spoken'), translator.T('Language Spoken Most Often at Home'),
		translator.T('Health Professions by LHIN '), translator.T('Sociodemographic Profile'), translator.T('Health Profiles'),
		translator.T('All Hospitals and Health Units'), 
		translator.T('General Rehabilitation Hospital'), translator.T('Mental Health Units') , translator.T('Special Rehabilitation Hospital'), 
		translator.T('Acute Care Treatment Hospital'), translator.T('Ambulatory Care'), translator.T('Chronic Care Treatment Hospital'), translator.T('FLS Designated All'),
		translator.T('FLS Designated Partial'), translator.T('Local Health Integration Network (LHIN)'), translator.T('Ontario'), translator.T('Ontario')];
	  
	legendLabel = [translator.T('Mother Tongue: French'), translator.T('Knowledge of Official Language: French Only'), translator.T('First Official Language Spoken: French'), translator.T('Language Spoken Most Often at Home: French'),
		translator.T(' Health Professions by LHIN '), translator.T('Sociodemographic Profile'), translator.T('Health Profiles'), translator.T('All Hospitals and Health Units'), 
		translator.T('General Rehabilitation Hospital'), translator.T('Mental Health Units') , translator.T('Special Rehabilitation Hospital'), 
		translator.T('Acute Care Treatment Hospital'), translator.T('Ambulatory Care'), translator.T('Chronic Care Treatment Hospital'), translator.T('FLS Designated All'),
		translator.T('FLS Designated Partial'), translator.T('First Official Language Spoken: French'), translator.T('Ontario LHIN Information'), translator.T('Ontario LHIN Information')];
}

