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


var servicePointBuffers = [];
servicePointBuffers[7] = [47,40];
servicePointBuffers[8] = [33,26];
servicePointBuffers[9] = [61,54];
servicePointBuffers[10] = [75,68];
servicePointBuffers[11] = [89,82];
servicePointBuffers[12] = [103,96];
servicePointBuffers[13] = [117,110];
servicePointBuffers[14] = [131,124];
servicePointBuffers[15] = [145,138];
//servicePointBuffers[16] = [150,157];


var layerInfoWindow = new Array();
var layerTemplate = new Array();
var mapLayer = new Array();

var defaultLayer = 20;

var activeLayer = defaultLayer;
var inLayer = 0;
var numLayers = 21;

var map;
var symbol;
var infoTemplate;

var legendsArray = [];
var hospitalsLegendArray = [];

var firstTimeUpdateLayerIsCalled = 1;

var thisMapLayer = 'not initialized';

var numServicePointLayers = 0;

var mapAddress = 'http://216.48.92.42/arcgis/rest/services/test8/MapServer/';
 
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
	accordion[2]['numLayers'] = 9;


	layerData[0] = [];
	layerData[0]['infoWindowTitle'] = "<b>" + translator.T("Mother Tongue") + "</b>";
	layerData[0]['infoWindowBody'] = translator.T("Dissemination Area(DA) #") + "${DAUID_1}" 
	+ translator.T(" is part of the ") + "<span class='spanToTranslate hidden'>${GeoKey20_2}</span>" + 
	"&nbsp" + "(" + "${GeoKey20_1}" + ")" + translator.T(" Local Health Integration Network (LHIN).") +
	"<p>" +  
	"<table class='table table-striped' border=1 align='center'>"+
	"<tr>"+
	"<th>" + translator.T("DA") + "</th>"+
	"<th>" + translator.T("French only") + "</th>" +
	"<th>" + translator.T("English only") + "</th>" +
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
	"</table>" + "</p>" + "<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";
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
	"<th>" + translator.T("French only") + "</th>" +
	"<th>" + translator.T("English only") + "</th>" +
	"<th>" + translator.T("French & English") + "</th>"+
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
	"</table>" + "</p>" + "<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";
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
	"<th>" + translator.T("French only") + "</th>"+
	"<th>" + translator.T("English only") + "</th>"+
	"<th>" + translator.T("French & English") + "</th>"+
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
	"</table>" + "</p>" + "<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";
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
	"<th>" + translator.T("French only") + "</th>"+
	"<th>" + translator.T("English only") + "</th>"+
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
	"</table>" + "</p>" + "<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[3]['outFields'] = new Array("GeoKey20_2", "GeoKey20_1", "POPIN2011", "DAUID_1", "DLSHFre", "DLSHEn", "DLSHNON", "DLAthomeTo");

	layerData[4] = [];
	layerData[4]['infoWindowTitle'] = "<b>" + translator.T("Health professions by LHIN") + "</b>";
	layerData[4]['infoWindowBody'] = "<p>" + "<span class='spanToTranslate hidden popupTextStyle'>${Export_Output_5.HR035b08_E}</span>" +
	"&nbsp" + 
	"<span class='spanToTranslate hidden popupTextStyle'>(" + "${Export_Output_5.HR035b08_H}" + ")" + 
	 "</span>" + "</p>" +
	"<table border=1 id ='healthProfesionsByLhin' class='table table-striped'>" +
	"<tr>"+
	"<th>" + translator.T("Speciality") + "</th>"+
	"<th align='center'>" + translator.T("French") + "</th>"+
	"<th align='center'>" + translator.T("English") + "</th>"+
	"<th align='center'>" + translator.T("Others") + "</th>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>" + translator.T("Audiologists") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_75}</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_76}</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_77}</td>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>" + translator.T("Chiropodists") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_78}</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_79}</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_80}</td>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>" + translator.T("Chiropractors") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_81}</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_82}</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_83}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Dental Hygienists") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_84}</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_85}</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_86}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Dental Technologists") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_87}</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_88}</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_89}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Dentists") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_90}</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_91}</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_92}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Denturists") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_93}</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_94}</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_95}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Dietitians") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_96}</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_97}</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_98}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Massage Therapists") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPro_99}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_100}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_101}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Medical Laboratory Technologists") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_102}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_103}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_104}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Medical Radiation Technologists") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_105}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_106}</td>"+
	"<td align='center' align='center'>${Export_Output_5.LHINPr_107}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Midwives") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_108}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_109}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_110}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Nurse Practitioners") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_111}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_112}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_113}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Occupational Therapists") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_114}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_115}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_116}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Opticians") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_117}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_118}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_119}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Optometrists") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_120}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_121}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_122}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Pharmacists") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_123}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_124}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_125}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Family Physicians") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_126}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_127}</td>"+
	"<td align='center'></td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Specialist Physicians") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_128}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_129}</td>"+
	"<td></td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Physiotherapists") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_130}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_131}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_132}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Psychologists") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_133}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_134}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_135}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Registered Nurses") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_136}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_137}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_138}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Registered Practical Nurses") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_139}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_140}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_141}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Respiratory Therapists") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_142}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_143}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_144}</td>"+
	"</tr>"+

	"<tr>"+
	"<td align='center'>" + translator.T("Speech Language Pathologists") + "</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_145}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_146}</td>"+
	"<td align='center'>${Export_Output_5.LHINPr_147}</td>"+
	"</tr>"+
	"</table>" + 
	"<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";

	layerData[4]['outFields'] = new Array( "Export_Output_5.HR035b08_E", "Export_Output_5.HR035b08_H", "Export_Output_5.LHINProf_2", 
		"Export_Output_5.LHINPro_75", "Export_Output_5.LHINPro_76", "Export_Output_5.LHINPro_77", 
		"Export_Output_5.LHINPro_78", "Export_Output_5.LHINPro_79", "Export_Output_5.LHINPro_80", 
		"Export_Output_5.LHINPro_81", "Export_Output_5.LHINPro_82", "Export_Output_5.LHINPro_83", 
		"Export_Output_5.LHINPro_84", "Export_Output_5.LHINPro_85", "Export_Output_5.LHINPro_86", 
		"Export_Output_5.LHINPro_87", "Export_Output_5.LHINPro_88", "Export_Output_5.LHINPro_89", 
		"Export_Output_5.HR035b08_E", "Export_Output_5.LHINProf_2", "Export_Output_5.HR035b08_H", 
		"Export_Output_5.LHINPro_90", "Export_Output_5.LHINPro_91", "Export_Output_5.LHINPro_92", 
		"Export_Output_5.LHINPro_93", "Export_Output_5.LHINPro_94", "Export_Output_5.LHINPro_95", 
		"Export_Output_5.LHINPro_96", "Export_Output_5.LHINPro_97", "Export_Output_5.LHINPro_98", 
		"Export_Output_5.LHINPro_99", "Export_Output_5.LHINPr_100", "Export_Output_5.LHINPr_101", 
		"Export_Output_5.LHINPr_102", "Export_Output_5.LHINPr_103", "Export_Output_5.LHINPr_104", 
		"Export_Output_5.LHINPr_105", "Export_Output_5.LHINPr_106", "Export_Output_5.LHINPr_107", 
		"Export_Output_5.LHINPr_108", "Export_Output_5.LHINPr_109", "Export_Output_5.LHINPr_110", 
		"Export_Output_5.LHINPr_111", "Export_Output_5.LHINPr_112", "Export_Output_5.LHINPr_113", 
		"Export_Output_5.LHINPr_114", "Export_Output_5.LHINPr_115", "Export_Output_5.LHINPr_116", 
		"Export_Output_5.LHINPr_117", "Export_Output_5.LHINPr_118", "Export_Output_5.LHINPr_119", 
		"Export_Output_5.LHINPr_120", "Export_Output_5.LHINPr_121", "Export_Output_5.LHINPr_122", 
		"Export_Output_5.LHINPr_123", "Export_Output_5.LHINPr_124", "Export_Output_5.LHINPr_125", 
		"Export_Output_5.LHINPr_126", "Export_Output_5.LHINPr_127", "Export_Output_5.LHINPr_128", 
		"Export_Output_5.LHINPr_129", "Export_Output_5.LHINPr_130", "Export_Output_5.LHINPr_131", 
		"Export_Output_5.LHINPr_132", "Export_Output_5.LHINPr_133", "Export_Output_5.LHINPr_134", 
		"Export_Output_5.LHINPr_135", "Export_Output_5.LHINPr_136", "Export_Output_5.LHINPr_137", 
		"Export_Output_5.LHINPr_138", "Export_Output_5.LHINPr_139", "Export_Output_5.LHINPr_140", 
		"Export_Output_5.LHINPr_141", "Export_Output_5.LHINPr_142", "Export_Output_5.LHINPr_143", 
		"Export_Output_5.LHINPr_144","Export_Output_5.LHINPr_145", "Export_Output_5.LHINPr_146",
		"Export_Output_5.LHINPr_147", "pop2011.csv.Population"
	);
	
	layerData[5] = [];
	layerData[5]['infoWindowTitle'] = "<b>" + translator.T("Sociodemographic Profile") + "</b>";
	layerData[5]['infoWindowBody'] = "<span class='spanToTranslate hidden popupTextStyle'>${Export_Output_6.EnglishL_1}</span>" + 
	"&nbsp" + "<span class='popupTextStyle'>(" + "${Export_Output_6.HRUID2007}" + ")" + "</span>" +
	"<p class='popupTextStyle'>" + translator.T("Global Non-Response Rate (GNR) = ") + "${Export_Output_6.SociEcoP_1}" + "</p>" + 
	"<table border=1 class='table table-striped'>"+
	"<tr>"+
	"<th align='center' id='emptyHeader'></th>"+
	"<th align='center'>" + translator.T("French only") + "</th>" +
	"<th align='center'>" + translator.T("English only") + "</th>" +
	"<th align='center'>" + translator.T("French & English") + "</th>" +
	"<th align='center'>" + translator.T("Neither Official Language") + "</th>" +
	"</tr>"+
	/* "<tr>" +
	"<td align='center'>" + translator.T("Population") + "</td>"+
	"<td align='center'>${Export_Output_6.SociEcoP_2}</td>"+
	"<td align='center'>${Export_Output_6.SociEcoP_3}</td>"+
	"<td align='center'>${Export_Output_6.SociEcoP_4}</td>"+
	"<td align='center'>${Export_Output_6.SociEcoP_5}</td>"+
	"</tr>"+ */
	"<tr>" +
	"<td align='center'>" + translator.T("% of the total population") + "</td>"+
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
	"<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";

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
	layerData[6]['infoWindowBody'] = "<span class='spanToTranslate hidden popupTextStyle'>${Export_Output_4.HR035b08_E}</span>" +
	"&nbsp" + "<span class='spanToTranslate hidden popupTextStyle'>(" + "${Export_Output_4.HR035b08_H}" + ")" + "</span>" +
	 "<p class='popupTextStyle'>" + translator.T("Canadian Community Health Survey Combined Cycles 2001 to 2012") + "</p>" + "</span>" +
	"<table border=1 class='table table-striped'>"+
	"<tr>"+
	"<th align='center'></th>"+
	"<th align='center'>" + translator.T("French") + "</th>"+
	"<th align='center'>" + translator.T("English") + "</th>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Perceived health, fair or poor (%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.Sante_F}</td>"+
	"<td align='center'>${HealthProfile.csv.Sante_A}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Perceived mental health, fair or poor (%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.SanteMental_F}</td>"+
	"<td align='center'>${HealthProfile.csv.SanteMental_A}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Perceived life stress, quite a bit or extremely stressful (%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.Stress_F}</td>"+
	"<td align='center'>${HealthProfile.csv.Stress_A}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Participation and activity limitation, sometimes or often (%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.DifficulteAct_F}</td>"+
	"<td align='center'>${HealthProfile.csv.DifficulteAct_A}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("At least one chronic disease (%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.Chonique_F}</td>"+
	"<td align='center'>${HealthProfile.csv.Chonique_A}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Body mass index (BMI) (18 or older), overweight or obese (%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.IMC_F}</td>"+
	"<td align='center'>${HealthProfile.csv.IMC_A}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Fruit and vegetable consumption, less than 5 times per day (%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.Fruits_F}</td>"+
	"<td align='center'>${HealthProfile.csv.Fruits_A}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Current smoker, daily or occasional (%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.Fumeur_F}</td>"+
	"<td align='center'>${HealthProfile.csv.Fumeur_A}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Regular drinker(%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.Buveur_F}</td>"+
	"<td align='center'>${HealthProfile.csv.Buveur_A}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Regular medical doctor (%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.Medecin_F}</td>"+
	"<td align='center'>${HealthProfile.csv.Medecin_A}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Language spoken with medical doctor, English (%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.MedecinAng_F}</td>"+
	"<td align='center'>${HealthProfile.csv.MedecinAng_A}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Contact with a family medicine physician or a nurse in the past 12 months (%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.Consultation_F}</td>"+
	"<td align='center'>${HealthProfile.csv.Consultation_A}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Required health care in the past 12 months  (%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.BesoinSpec_F}</td>"+
	"<td align='center'>${HealthProfile.csv.BesoinSpec_A}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Difficulties obtaining health care in the past 12 months  (%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.DifficulteSpec_F}</td>"+
	"<td align='center'>${HealthProfile.csv.DifficulteSpec_A}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Perceived access to health care in Ontario, good or excellent (%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.AccessibiliteSante_F}</td>"+
	"<td align='center'>${HealthProfile.csv.AccessibiliteSante_A}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Perceived quality of health care in Ontario, good or excellent (%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.QualiteSante_F}</td>"+
	"<td align='center'>${HealthProfile.csv.QualiteSante_A}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Perceived access to health care in community, good or excellent (%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.AccessibiliteComm_F}</td>"+
	"<td align='center'>${HealthProfile.csv.AccessibiliteComm_A}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Perceived quality health care in community , good or excellent (%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.QualiteComm_F}</td>"+
	"<td align='center'>${HealthProfile.csv.QualiteComm_A}</td>"+
	"</tr>"+
	"<tr>" +
	"<td align='center'>" + translator.T("Sense of community belonging, very strong or somewhat strong (%)") + "</td>"+
	"<td align='center'>${HealthProfile.csv.Appartenance_F}</td>"+
	"<td align='center'>${HealthProfile.csv.Appartenance_A}</td>"+
	"</tr>"+
	"</table>" + 
	"<br>" + 
	translator.T("(*): Use with caution") +  "</br>" +
	"<n>" +translator.T("(**): Too unreliable to be published") + "</n>" +
	"</br>" +
	"<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";

	layerData[6]['outFields'] = new Array( 
	"HealthProfile.csv.Appartenance_A", "HealthProfile.csv.Appartenance_F", "HealthProfile.csv.QualiteComm_A",
	"HealthProfile.csv.QualiteComm_F", "HealthProfile.csv.AccessibiliteComm_A", 
	"HealthProfile.csv.AccessibiliteComm_F", "HealthProfile.csv.QualiteSante_A", "HealthProfile.csv.QualiteSante_F",
	"HealthProfile.csv.AccessibiliteSante_A", "HealthProfile.csv.AccessibiliteSante_F",
	"HealthProfile.csv.DifficulteSpec_A", "HealthProfile.csv.DifficulteSpec_F",
	"HealthProfile.csv.BesoinSpec_A", "HealthProfile.csv.BesoinSpec_F", "HealthProfile.csv.Consultation_A",
	"HealthProfile.csv.Consultation_F", "HealthProfile.csv.MedecinAng_A", "HealthProfile.csv.MedecinAng_F",
	"HealthProfile.csv.Medecin_A", "HealthProfile.csv.Medecin_F",
	"HealthProfile.csv.Buveur_A", "HealthProfile.csv.Buveur_F", 
	"HealthProfile.csv.Fumeur_A", "HealthProfile.csv.Fumeur_F", "HealthProfile.csv.Fruits_A",
	"HealthProfile.csv.Fruits_F", "HealthProfile.csv.IMC_F", "HealthProfile.csv.IMC_A",
	"HealthProfile.csv.Chonique_A", "HealthProfile.csv.Chonique_F", "HealthProfile.csv.DifficulteAct_A",
	"HealthProfile.csv.DifficulteAct_F","HealthProfile.csv.Stress_A", "HealthProfile.csv.Stress_F",
	"HealthProfile.csv.SanteMental_A", "HealthProfile.csv.SanteMental_F", "HealthProfile.csv.Sante_A",
	"HealthProfile.csv.Sante_F", "Export_Output_4.HR035b08_E", "Export_Output_4.HR035b08_H"
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
	"</table>" + 
	"<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";
	
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
	"</table>" + 
	"</table>" + 
	"<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";
	
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
	"</table>" + 
	"<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";

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
	"</table>" + 
	"<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";
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
	"</table>" + 
	"<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";
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
	"</table>" + "<p>" + 
	"<a class=methodologicalNote href='Pdf/NotesMéthodologiques" + (router.getLanguage() == 'french'? 'FRANCAIS':'ANGLAIS') + ".pdf'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";
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
	"</table>" + 
	"<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";
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
	"</table>" + 
	"<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";
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
	"</table>" + 
	"<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[15]['outFields'] = new Array("LHIN_NAME","C_NAME_ENG","CITY", "ADDRESS_1", "POSTALCODE");

	
	layerData[16] = [];
	layerData[16]['infoWindowTitle'] = "<b>" + translator.T("Mother Tongue (LHIN)") + "</b>";
	layerData[16]['infoWindowBody'] = "<span class='spanToTranslate hidden popupTextStyle'>${lhin.csv.LHINNames}</span>" +
	"&nbsp" + 
	"<span class='spanToTranslate hidden popupTextStyle'>(" + "${lhin.csv.LHINCode2013}" + ")" + "</span>" +
	"<p>" + "<table border=1 class='table table-striped'>"+ "</p>" +
	"<tr>"+
	"<th align='center'></th>"+
	"<th align='center'>" + translator.T("French only") + "</th>"+
	"<th align='center'>" + translator.T("English only") + "</th>"+
	"<th align='center'>" + translator.T("French & English") + "</th>"+
	"<th align='center'>" + translator.T("Non Official") + "</th>"+
	"<th align='center'>" + translator.T("Total") + "</th>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>" + translator.T("Population Number") + "</td>"+
	"<td align='center'>${MTLHIN.MotherTo_2}</td>"+
	"<td align='center'>${MTLHIN.MotherTo_4}</td>"+
	"<td align='center'>${MTLHIN.MotherTo_3}</td>"+
	"<td align='center'>${MTLHIN.MotherTo_5}</td>"+
	"<td align='center'>${MTLHIN.MotherTo_1}</td>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>" + translator.T("Population Proportion") + "</td>"+
	"<td align='center'>" + "${MTLHIN.Frprop}" + "%" + "</td>"+
	"<td align='center'>" + "${MTLHIN.ENProp}" + "%" + "</td>"+
	"<td align='center'>" + "${MTLHIN.ErFrProp}" + "%" + "</td>"+
	"<td align='center'>" + "${MTLHIN.nonPro}" + "%" + "</td>"+
	"<td align='center'>" + translator.T("100%") + "</td>"+
	"</tr>"+
	"<span class='spanToTranslate hidden'></span>" +
	"<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";

	layerData[16]['outFields'] = new Array("MTLHIN.Frprop", "MTLHIN.MotherTo_4", "MTLHIN.MotherTo_3", "MTLHIN.MotherTo_5",
	"MTLHIN.MotherTo_1", "MTLHIN.ENProp", "MTLHIN.ErFrProp", "MTLHIN.nonPro", "lhin.csv.LHINNames", "lhin.csv.LHINCode2013", "MTLHIN.MotherTo_2" );

	layerData[17] = [];
	layerData[17]['infoWindowTitle'] = "<b>" + translator.T("Knowledge of Official Language (LHIN)") + "</b>";
	layerData[17]['infoWindowBody'] = "<span class='spanToTranslate hidden popupTextStyle'>${lhin.csv.LHINNames}</span>" +
	"&nbsp" + 
	"<span class='spanToTranslate hidden popupTextStyle'>(" + "${lhin.csv.LHINCode2013}" + ")" + "</span>" +
	"<p>" + "<table border=1 class='table table-striped'>"+ "</p>" +
	"<tr>"+
	"<th align='center'></th>"+
	"<th align='center'>" + translator.T("French only") + "</th>"+
	"<th align='center'>" + translator.T("English only") + "</th>"+
	"<th align='center'>" + translator.T("French & English") + "</th>"+
	"<th align='center'>" + translator.T("Neither") + "</th>"+
	"<th align='center'>" + translator.T("Total") + "</th>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>" + translator.T("Population Number") + "</td>"+
	"<td align='center'>${Knowledget.Knowledg_2}</td>"+
	"<td align='center'>${Knowledget.Knowledg_4}</td>"+
	"<td align='center'>${Knowledget.Knowledg_3}</td>"+
	"<td align='center'>${Knowledget.Knowledg_5}</td>"+
	"<td align='center'>${Knowledget.Knowledg_1}</td>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>" + translator.T("Population Proportion") + "</td>"+
	"<td align='center'>" + "${Knowledget.FrP}" + "%" + "</td>"+
	"<td align='center'>" + "${Knowledget.EnProp}" + "%" + "</td>"+
	"<td align='center'>" + "${Knowledget.ENFrPr}" + "%" + "</td>"+
	"<td align='center'>" + "${Knowledget.NeitherP}" + "%" + "</td>"+
	"<td align='center'>" + translator.T("100%") + "</td>"+
	"</tr>"+
	"<span class='spanToTranslate hidden'></span>" +
	"<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";

	layerData[17]['outFields'] = new Array("lhin.csv.LHINNames", "lhin.csv.LHINCode2013", "Knowledget.FrP", "Knowledget.Knowledg_4","Knowledget.Knowledg_3", "Knowledget.Knowledg_5",
	"Knowledget.Knowledg_1", 
	"Knowledget.EnProp", "Knowledget.ENFrPr","Knowledget.NeitherP", "Knowledget.Knowledg_2");
	
	layerData[18] = [];
	layerData[18]['infoWindowTitle'] = "<b>" + translator.T("First Official Language Spoken (LHIN)") + "</b>";
	layerData[18]['infoWindowBody'] = "<span class='spanToTranslate hidden popupTextStyle'>${lhin.csv.LHINNames}</span>" +
	"&nbsp" + 
	"<span class='spanToTranslate hidden popupTextStyle'>(" + "${lhin.csv.LHINCode2013}" + ")" + "</span>" +
	"<p>" + "<table border=1 class='table table-striped'>"+ "</p>" +
	"<tr>"+
	"<th align='center'></th>"+
	"<th align='center'>" + translator.T("French only") + "</th>"+
	"<th align='center'>" + translator.T("English only") + "</th>"+
	"<th align='center'>" + translator.T("French & English") + "</th>"+
	"<th align='center'>" + translator.T("Neither") + "</th>"+
	"<th align='center'>" + translator.T("Total") + "</th>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>" + translator.T("Population Number") + "</td>"+
	"<td align='center'>${FirstOfficial.FrProp}</td>"+
	"<td align='center'>${FirstOfficial.FirstOff_4}</td>"+
	"<td align='center'>${FirstOfficial.FirstOff_3}</td>"+
	"<td align='center'>${FirstOfficial.FirstOff_5}</td>"+
	"<td align='center'>${FirstOfficial.FirstOff_1}</td>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>" + translator.T("Population Proportion") + "</td>"+
	"<td align='center'>" + "${FirstOfficial.FrProp}" + "%" + "</td>"+
	"<td align='center'>" + "${FirstOfficial.EnP}" + "%" + "</td>"+
	"<td align='center'>" + "${FirstOfficial.ENFrP}" + "%" + "</td>"+
	"<td align='center'>" + "${FirstOfficial.NeitherP}" + "%" + "</td>"+
	"<td align='center'>" + translator.T("100%") + "</td>"+
	"</tr>"+
	"<span class='spanToTranslate hidden'></span>" +
	"<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";

	layerData[18]['outFields'] = new Array("FirstOfficial.FrProp", "FirstOfficial.FirstOff_4", "FirstOfficial.FirstOff_3", 
	"FirstOfficial.FirstOff_5", "FirstOfficial.FirstOff_1",
	"FirstOfficial.EnP", "FirstOfficial.ENFrP", "FirstOfficial.NeitherP", "lhin.csv.LHINCode2013", "lhin.csv.LHINNames");
	
	layerData[19] = [];
	layerData[19]['infoWindowTitle'] = "<b>" + translator.T("Language Spoken Most Often at Home (LHIN)") + "</b>";
	layerData[19]['infoWindowBody'] = "<span class='spanToTranslate hidden popupTextStyle'>${lhin.csv.LHINNames}</span>" +
	"&nbsp" + 
	"<span class='spanToTranslate hidden popupTextStyle'>(" + "${lhin.csv.LHINCode2013}" + ")" + "</span>" +
	"<p>" + "<table border=1 class='table table-striped'>"+ "</p>" +
	"<tr>"+
	"<th align='center'></th>"+
	"<th align='center'>" + translator.T("French only") + "</th>"+
	"<th align='center'>" + translator.T("English only") + "</th>"+
	"<th align='center'>" + translator.T("French & English") + "</th>"+
	"<th align='center'>" + translator.T("Neither") + "</th>"+
	"<th align='center'>" + translator.T("Other") + "</th>"+
	"<th align='center'>" + translator.T("Total") + "</th>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>" + translator.T("Population Number") + "</td>"+
	"<td align='center'>${ELanguageSpokenAtHome.Language_2}</td>"+
	"<td align='center'>${ELanguageSpokenAtHome.Language_4}</td>"+
	"<td align='center'>${ELanguageSpokenAtHome.Language_3}</td>"+
	"<td align='center'>${ELanguageSpokenAtHome.Language_5}</td>"+
	"<td align='center'>${ELanguageSpokenAtHome.Language_6}</td>"+
	"<td align='center'>${ELanguageSpokenAtHome.Total}</td>"+
	"</tr>"+
	"<tr>"+
	"<td align='center'>" + translator.T("Population Proportion") + "</td>"+
	"<td align='center'>" + "${ELanguageSpokenAtHome.FrProp}" + "%" + "</td>"+
	"<td align='center'>" + "${ELanguageSpokenAtHome.EnPr}" + "%" + "</td>"+
	"<td align='center'>" + "${ELanguageSpokenAtHome.EnFrPr}" + "%" + "</td>"+
	"<td align='center'>" + "${ELanguageSpokenAtHome.NeitherP}" + "%" + "</td>"+
	"<td align='center'>" + "${ELanguageSpokenAtHome.otherP}" + "%" + "</td>"+
	"<td align='center'>" + translator.T("100%") + "</td>"+
	"</tr>"+
	"</table>" + 
	"<span class='spanToTranslate hidden'></span>" +
	"<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";

	layerData[19]['outFields'] = new Array( "lhin.csv.LHINCode2013", "lhin.csv.LHINNames", "ELanguageSpokenAtHome.Language_2",
	"ELanguageSpokenAtHome.Language_4", "ELanguageSpokenAtHome.Language_3", "ELanguageSpokenAtHome.Language_6", 
	"ELanguageSpokenAtHome.Language_5", "ELanguageSpokenAtHome.Total", "ELanguageSpokenAtHome.EnPr",
	"ELanguageSpokenAtHome.FrProp", "ELanguageSpokenAtHome.EnFrPr", 
	"ELanguageSpokenAtHome.otherP", "ELanguageSpokenAtHome.NeitherP");
	
	layerData[20] = [];
	layerData[20]['infoWindowTitle'] = "<b>" + translator.T("Ontario") + "</b>";
	layerData[20]['infoWindowBody'] = "<span class='spanToTranslate hidden'>${HR035b08_E}</span>" +
	"&nbsp" + "(" + "${HR035b08_H}" + ")" + "</span>" +
	"</table>" + 
	"<p>" + 
	"<a class=methodologicalNote href='docs/notes" + (router.getLanguage() == 'french'? 'Fr':'En') + ".html'" + "target='_blank'>" +
	translator.T("Methodological Notes") + "</a>" + "</p>";
	layerData[20]['outFields'] = new Array("HR035b08_E", "HR035b08_H" );

	layersLabels = [
		translator.T('Mother Tongue'), translator.T('Knowledge of Official Language'), translator.T('First Official Language Spoken'),
		translator.T('Language Spoken Most Often at Home'),translator.T('Health Professions by LHIN '), translator.T('Sociodemographic Profile'),
		translator.T('Health Profiles'),translator.T('All Hospitals and Health Units'), translator.T('General Rehabilitation Hospital'),
		translator.T('Mental Health Units') , translator.T('Special Rehabilitation Hospital'), translator.T('Acute Care Treatment Hospital'), 
		translator.T('Ambulatory Care'), translator.T('Chronic Care Treatment Hospital'), translator.T('FLS Designated All'),
		translator.T('FLS Designated Partial'), translator.T('Mother Tongue (LHIN)'),translator.T('Knowledge of Official Language (LHIN)'),
		translator.T('First Official Language Spoken (LHIN)'),translator.T('Language Spoken Most Often at Home (LHIN)'),translator.T('Ontario'),
		translator.T('Ontario')];
	  
	legendLabel = [
		translator.T('Mother Tongue: French'), 
		translator.T('Knowledge of Official Language: French only'),
		translator.T('First Official Language Spoken: French'), 
		translator.T('Language Spoken Most Often at Home: French'),
		translator.T('LHIN'), 
		translator.T('LHIN'), 
		translator.T('LHIN'),
		translator.T('All Hospitals and Health Units'),
		translator.T('General Rehabilitation Hospital'),
		translator.T('Mental Health Units') ,
		translator.T('Special Rehabilitation Hospital'),
		translator.T('Acute Care Treatment Hospital'),
		translator.T('Ambulatory Care'),
		translator.T('Chronic Care Treatment Hospital'),
		translator.T('FLS Designated All'),
		translator.T('FLS Designated Partial'), 
		translator.T('Mother Tongue: French only (LHIN)'),
		translator.T('Knowledge of Official Language: French only (LHIN)'),
		translator.T('First Official Language Spoken: French only (LHIN)'),
		translator.T('Language Spoken Most Often at Home: French only (LHIN)'), 
		translator.T('Ontario LHIN Information'), 
		translator.T('Ontario LHIN Information')];
		
}

