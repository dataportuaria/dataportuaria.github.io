var notas = angular.module("todo",[]);

notas.controller("controlador", function($scope){
	

	$scope.totalx = 0;
	$scope.totaly = 999999;
	$scope.mesx =0;
	$scope.mesy=0;
	$scope.aniox=0;
	$scope.anioy=0;

	$scope.accionx = function(){
		$scope.totalx = parseInt($scope.mesx)  + parseInt($scope.aniox) ;
	}
	$scope.acciony = function(){
		$scope.totaly = parseInt($scope.mesy) + parseInt($scope.anioy)+100; 
	}


	var lista = this;
	lista.todas = [
		
		{
		 titulo:"Exportaciones agroindustriales en Argentina",
		 texto:"El sector agroindustrial de la Argentina estima que para el año 2020 se logre un ingreso de divisas de USD 21.428 millones por envíos al exterior de trigo, maíz y productos claves del complejo soja. Ello indica una merma de USD 1.320 millones o de 6%, respecto a 2019.",
		 fecha:"19 de diciembre 2020",
		 fnum:201219, 
		 href:"https://portalportuario.cl/argentina-estiman-que-exportaciones-de-principales-bienes-agroindustriales-caeran-6-en-2020/",
		 img:"https://portalportuario.cl/wp-content/uploads/2020/08/hidrovia-argentina.jpeg"
		},
		
		{
		 titulo:"Canal Magdalena, apoyo a la construcción",
		 texto:"Importante apoyo a la construcción del Canal Magdalena",
		 fecha:"19 de diciembre 2020", 
		 fnum:201219, 
		 href:"http://www.argenports.com.ar/nota/importante-apoyo-a-la-construccion-del-canal-magdalena/",
		 img:"http://www.argenports.com.ar/public/img/notas/378/importante-apoyo-a-la-construccion-del-canal-magdalena-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"Agenda digital Puerto Buenos Aires",
		 texto:"Agentes marítimos y despachantes piden una agenda digital para el futuro Puerto Buenos Aires",
		 fecha:"18 de diciembre 2020", 
		 fnum:201218, 
		 href:"https://portalportuario.cl/agentes-maritimos-y-despachantes-piden-una-agenda-digital-para-el-futuro-puerto-buenos-aires/",
		 img:"https://portalportuario.cl/wp-content/uploads/2020/12/Futuro-puerto-Buenos-Aires-400x267.jpg"
		},
		
		{
		 titulo:"Consideraciónes técnicas económicas sobre el canal de magdalena",
		 texto:"Ante los renovados planteos de estudiar al Canal Magdalena como una alternativa viable de salida hacia el Océano, se formulan a continuación algunas consideraciones que lo desaconsejan, al menos en la presente etapa. Estas consideraciones se basan en fundamentos técnicos – operativos, económicos y ambientales.",
		 fecha:"14 de diciembre 2020", 
		 fnum:201214, 
		 href:"https://www.mercojuris.com/36476/consideraciones-tecnicas-economicas-sobre-el-canal-magdalena-y-su-conjunto-dra-ma-clara-lacava-e-ing-alfredo-j-enriques/",
		 img:"http://www.mercojuris.com/wp-content/uploads/2020/12/Imagen-14.png"
		},
		
		{
		 titulo:"Cabrera aseguró que la decisión de hacer el canal Magdalena ya está tomada",
		 texto:"El funcionario nacional ratificó que Argentina hará la obra y afirmó que la idea es llevarla a cabo lo antes posible. También señaló que habrá una licitación específica, independiente de la prevista para la Hidrovía.",
		 fecha:"16 de diciembre 2020", 
		 fnum:201216, 
		 href:"https://www.linkedin.com/posts/argenports_cabrera-asegur%C3%B3-que-la-decisi%C3%B3n-de-hacer-activity-6746091834738536448-abBY",
		 img:"http://www.argenports.com.ar/public/img/notas/377/cabrera-dijo-que-la-decision-de-hacer-canal-magdalena-ya-esta-tomada-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"Dejar sin efecto la sociedad del Estado, causó decepción en provincias de la Hidrovía",
		 texto:"Rodríguez Signes, indicó que “es un atraso con respecto a la propuesta que el Presidente -Alberto Fernández- había hecho originalmente”.",
		 fecha:"28 de diciembre 2020", 
		 fnum:201228, 
		 href:"https://www.serindustria.com.ar/dejar-sin-efecto-la-sociedad-del-estado-causo-decepcion-en-provincias-de-la-hidrovia/",
		 img:"https://i.ibb.co/PQBPjjX/Whats-App-Image-2020-12-26-at-08-39-47-1-1.webp"
		},
		
		{
		 titulo:"El Canal Magdalena a un paso de licitarse",
		 texto:"El decreto 949/2020 también se refiere al dragado de otros tramos no comprendidos en la vía troncal del Paraná.  Con todos los estudios y aprobaciones realizados, solo resta la audiencia pública y la confección de los pliegos.",
		 fecha:"29 de diciembre 2020", 
		 fnum:201229, 
		 href:"https://www-cronista-com.cdn.ampproject.org/c/s/www.cronista.com/amp/transportycargo/El-Canal-Magdalena-a-un-paso-de-licitarse-20201229-0027.html",
		 img:"https://www-cronista-com.cdn.ampproject.org/ii/w680/s/www.cronista.com/img/2020/12/29/foto_magdalena.jpeg?__scale=w:600,h:399,t:2,q:80"
		},
		
		{
		 titulo:"Canal Magdalena: está todo listo para poder licitar la obra en solo cuatro meses",
		 texto:"Ya fueron realizados y aprobados todos los estudios necesarios. Ahora sólo resta concretar la correspondiente audiencia pública y confeccionar los pliegos.",
		 fecha:"31 de diciembre 2020", 
		 fnum:201231, 
		 href:"https://www.linkedin.com/posts/argenports_canal-magdalena-est%C3%A1-todo-listo-para-poder-activity-6750062015588397056-PfwT",
		 img:"http://www.argenports.com.ar/public/img/notas/401/la-obra-del-canal-magdalena-esta-en-condiciones-de-ser-licitada-en-cuatro-meses-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"Acuerdo empresarial en el sur bonaerense para potenciar la producción",
		 texto:"La necesidad de desarrollar un eje estratégico en común fue acordada por los presidentes de la Unión Industrial de Bahía Blanca y de la Cámara de Profesionales y Empresarios de Puerto Quequén.",
		 fecha:"31 de diciembre 2020", 
		 fnum:201231, 
		 href:"http://www.argenports.com.ar/nota/acuerdo-empresarial-en-el-sur-bonaerense-para-potenciar-la-produccion-y-los-puertos/",
		 img:"http://www.argenports.com.ar/public/img/notas/405/acuerdo-empresarial-en-el-sur-bonaerense-para-potenciar-la-produccion-y-los-puertos-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"Las medidas de fuerza continúan paralizando los principales puertos del país",
		 texto:"En diálogo con Argenports.com, el dirigente sindical explicó, por ejemplo, que en algunas terminales de varios puertos cerealeros puede haber algo de movimiento, por caso Bahía Blanca y Quequén, porque el gremio realizó convenios particulares con algunas empresas.",
		 fecha:"31 de diciembre 2020", 
		 fnum:201231, 
		 href:"http://www.argenports.com.ar/nota/por-los-paros-sigue-siendo-muy-escasa-la-actividad-en-los-principales-puertos-del-pais/",
		 img:"http://www.argenports.com.ar/public/img/remolca.jpg"
		},
		
		{
		 titulo:"Puertos paralizados, se agrava el paro de remolcadores",
		 texto:"Se endureció la postura de los gremios y por el paro de remolques, ya no entran ni siquiera los buques que traigan insumos para combatir el coronavirus.",
		 fecha:"2 de enero 2021", 
		 fnum:210102,
		 href:"https://www.cronista.com/transportycargo/Puertos-paralizados-se-agrava-el-paro-de-remolcadores-20210102-0007.html",
		 img:"https://www.cronista.com/__export/1609603099270/sites/diarioelcronista/img/2021/01/02/servicios_remolque1_1.jpg_673822677.jpg"
		},
		
		{
		 titulo:"Centro de Navegación pide a autoridades intervenir en paro de remolcadores",
		 texto:"El Centro de Navegación de Argentina, institución que agrupa a las agencias marítimas, empresas que representan a la mayoría de los buques dedicados al transporte fluvial marítimo nacional e internacional de cargas y pasajeros, pidió a autoridades del Gobierno trasandino que intervinieran en la paralización que llevan a cabo algunos servicios de remolcadores en el país.",
		 fecha:"2 de enero 2021", 
		 fnum:210102,
		 href:"https://portalportuario.cl/argentina-centro-de-navegacion-pide-a-autoridades-intervenir-en-paro-de-remolcadores/",
		 img:"https://portalportuario.cl/wp-content/uploads/2021/01/remolque-argentina.jpg"
		},
		
		{
		 titulo:"Puerto Quequén cerró otro muy buen año con un importante movimiento de cargas",
		 texto:"El tonelaje alcanzado por la estación marítima en 2020 se ubica en el cuarto lugar durante la última década, detrás de 2016, 2012 y 2019.",
		 fecha:"4 de enero 2021", 
		 fnum:210104,
		 href:"http://www.argenports.com.ar/nota/puerto-quequen-cerro-otro-muy-buen-ano-con-un-importante-movimiento-de-cargas/",
		 img:"http://www.argenports.com.ar/public/img/notas/410/puerto-quequen-cerro-otro-muy-buen-ano-con-un-importante-movimiento-de-cargas-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"El ministro bonaerense Augusto Costa recorrerá hoy varias áreas clave de puerto Quequén",
		 texto:"Entre otros sectores, el titular de la cartera de Producción, Ciencia e Innovación Tecnológica visitará el espacio multipropósito concretado  para la diversificación de cargas. Será recibido por el titular del Consorcio de Gestión, Jorge Alvaro.",
		 fecha:"26 de noviembre 2020", 
		 fnum:201126,
		 href:"http://www.argenports.com.ar/nota/el-ministro-augusto-costa-recorrera-hoy-el-puerto-de-quequen/",
		 img:"http://www.argenports.com.ar/public/img/notas/320/el-ministro-augusto-costa-recorrera-hoy-el-puerto-de-quequen-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"GOICOECHEA AL FRENTE DE CAPROQ",
		 texto:"El presidente de la Empresa, el Mg. Ing. Mario Goicoechea, vuelve a ser Presidente de la Cámara de Profesionales de Puerto Quequén.",
		 fecha:"26 de noviembre 2020", 
		 fnum:201126,
		 href:"https://goicosa.com.ar/goicochea-al-frente-de-caproq/",
		 img:"https://goicosa.com.ar/wp-content/uploads/2020/11/Imagen-Mario.jpg"
		},
		
		{
		 titulo:"AL GRANO",
		 texto:"El futuro de la hidrovía y del Puerto de Buenos Aires, son dos temas claves que requieren profundo análisis, trascienden fronteras y comprometen el porvenir del comercio exterior de la Argentina.",
		 fecha:"27 de noviembre 2020", 
		 fnum:201127,
		 href:"https://comex-online.com.ar/noticias/val/58127/al-grano-.html",
		 img:"https://comex-online.com.ar/data/img_cont/img_imagenes/img_gr/7208.jpg"
		},
		
		{
		 titulo:"La licitación de la hidrovía se pone en marcha: será a riesgo privado",
		 texto:"El decreto 949/2020 delegó facultades en el Ministerio de Transporte para llevar a cabo la nueva concesión. Por la vía navegable sale el 80% de las exportaciones argentinas",
		 fecha:"6 de diciembre 2020", 
		 fnum:201206,
		 href:"https://www.linkedin.com/posts/el-cronista-comercial_la-licitaci%C3%B3n-de-la-hidrov%C3%ADa-se-pone-en-marcha-activity-6738210648989171712-1a9A",
		 img:"https://echobox-media.s3.amazonaws.com/social_media_images/702/702-1606513129-dlv1p11b1h7vjqp84pn0p053hhatf4ms.jpg"
		},
		
		{
		 titulo:"Hidrovía: “volantazo” del gobierno con muy buena recepción en los puertos",
		 texto:"Nación publicó el decreto que pone en marcha la nueva licitación para la concesión del dragado y balizamiento del río. A diferencia de lo anunciado por el presidente, las provincias no participarán en la conducción de la licitación. Pero: ¿está todo dicho?",
		 fecha:"27 de noviembre 2020", 
		 fnum:201127,
		 href:"https://www-rosario3-com.cdn.ampproject.org/c/s/www.rosario3.com/amp/-economia-negocios-agro-/Hidrovia-volantazo-del-gobierno-con-muy-buena-recepcion-en-los-puertos-20201127-0076.html",
		 img:"https://www-rosario3-com.cdn.ampproject.org/i/s/www.rosario3.com/__export/1606514479303/sites/rosario3/img/2020/11/27/buques-hidrovxa-1280x960_crop1606514229354.jpeg_2014047795.jpeg"
		},
		
		{
		 titulo:"Nación anunció que lleva comprometidos más de mil millones de pesos en asistencia a puertos",
		 texto:"La lista dada a conocer por el ministerio de Transporte es extensa. Hoy se anunció que el Estado nacional aportará 400 millones para el dragado del puerto de Rawson.",
		 fecha:"30 de noviembre 2020", 
		 fnum:201130,
		 href:"http://www.argenports.com.ar/nota/nacion-anuncio-que-lleva-comprometidos-mas-de-mil-millones-de-pesos-en-asistencia-a-puertos/",
		 img:"http://www.argenports.com.ar/public/img/notas/328/nacion-anuncio-que-lleva-comprometidos-mas-de-mil-millones-de-pesos-en-asistencia-a-puertos-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"Ministerio de Transportes anunció inversión de US$12 mil millones en mantenimiento de puertos",
		 texto:"El Ministerio de Transportes de Argentina anunció convenios de asistencia a distintos puertos, obras que significan una inversión estatal de más de US$12.000 millones en puertos del país.",
		 fecha:"2 de diciembre 2020", 
		 fnum:201202,
		 href:"https://www.mundomaritimo.cl/noticias/argentina-ministerio-de-transportes-anuncio-inversion-de-us12-mil-millones-en-mantenimiento-de-puertos?platform=hootsuite",
		 img:"https://www.mundomaritimo.cl/noticias/get_image/47267/798"
		},
		
		{
		 titulo:"Balance continental del sector portuario",
		 texto:"En su formato digital, y como antesala del XXIX Congreso Latinoamericano de Puertos que se desarrollará en Cartagena, Colombia, del 29 de noviembre al 1 de diciembre de 2021, la delegación Latinoamericana de la Asociación Americana de Autoridades Portuarias (AAPA) junto al Grupo Puerto de Cartagena, convocan el 9 de diciembre con inicio a las 12 hs, al webinar: “Balance 2020 y Perspectivas Futuras para la Industria Portuaria en América Latina",
		 fecha:"4 de diciembre 2020", 
		 fnum:201204,
		 href:"https://www.cronista.com/transportycargo/Balance-continental-del-sector-portuario-20201204-0026.html",
		 img:"https://www.cronista.com/__export/1607095972821/sites/diarioelcronista/img/2020/12/04/entrada_02.jpg_258117318.jpg"
		},
		
		{
		 titulo:"Productivo debate en favor de la hidrovía",
		 texto:"Gremios y usuarios mostraron claras expectativas sobre el futuro de la vía navegable troncal del río Paraná",
		 fecha:"4 de diciembre 2020", 
		 fnum:201204,
		 href:"https://www.cronista.com/transportycargo/Productivo-debate-en-favor-de-la-hidrovia-20201204-0057.html",
		 img:"https://www.cronista.com/__export/1607127365773/sites/diarioelcronista/img/2020/12/04/hidro.jpg_258117318.jpg"
		},
		
		{
		 titulo:"La Bolsa de Comercio de Rosario descarta realizar un nuevo informe sobre la Hidrovía",
		 texto:"El titular de la entidad, Daniel Nasini, opinó que el estudio entregado a las autoridades nacionales, de cara a la próxima licitación, resulta “superlativo” y “extremadamente completo”.",
		 fecha:"4 de diciembre 2020", 
		 fnum:201204,
		 href:"http://www.argenports.com.ar/nota/la-bolsa-de-comercio-de-rosario-descarta-hacer-un-nuevo-informe-sobre-la-hidrovia/",
		 img:"http://www.argenports.com.ar/public/img/notas/340/la-bolsa-de-comercio-de-rosario-descarta-hacer-un-nuevo-informe-sobre-la-hidrovia-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"Dura crítica a un informe sobre la navegabilidad en el sistema troncal y el futuro del Magdalena",
		 texto:"El ingeniero naval Horacio Tettamanti  se refirió a un trabajo de especialistas vinculados al macrismo. Al mismo tiempo lamentó que Alberto Fernández haya abandonado el proyecto del canal Magdalena.",
		 fecha:"8 de diciembre 2020", 
		 fnum:201208,
		 href:"http://www.argenports.com.ar/nota/dura-critica-a-un-informe-sobre-la-navegabilidad-en-el-sistema-troncal/",
		 img:"http://www.argenports.com.ar/public/img/notas/347/dura-critica-a-un-informe-sobre-la-navegabilidad-en-el-sistema-troncal-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"AAPA LATINO",
		 texto:"Balance 2020 y perspectivas futuras para la Industria Portuaria en América Latina",
		 fecha:"29 de nov al 1 de dic 2021", 
		 fnum:211129,
		 href:"https://aapalatinoamerica.com/es/",
		 img:"https://aapalatinoamerica.com/images/2020_Cartagena/secciones/webinar/fondo_landing_1.png"
		},
		
		{
		 titulo:"Presidente de AAPA asegura que la industria portuaria “aceptó el desafío” frente a la pandemia",
		 texto:"El presidente de la Junta directiva de la Asociación Americana de Autoridades Portuarias (AAPA), Mario Cordero, aseguró que el sector “aceptó el desafío y siguió adelante” durante lo que ha sido la contingencia sanitaria mundial derivada de la pandemia del Covid-19.",
		 fecha:"9 de diciembre 2020", 
		 fnum:201209,
		 href:"https://portalportuario.cl/presidente-de-aapa-asegura-que-la-industria-portuaria-acepto-el-desafio-frente-a-la-pandemia/",
		 img:"https://portalportuario.cl/wp-content/uploads/2020/12/mario-cordero-400x225.jpg"
		},
		
		{
		 titulo:"Importante visita de autoridades de Nación y Provincia al puerto La Plata",
		 texto:"Leonardo Cabrera y Juan Cruz Lucero fueron recibidos por el titular del Consorcio de Gestión, Pedro Wasiejko. Consideraron de vital importancia la construcción del canal Magdalena.",
		 fecha:"10 de diciembre 2020", 
		 fnum:0,
		 href:"http://www.argenports.com.ar/nota/importante-visita-de-autoridades-portuarias-al-puerto-la-plata/",
		 img:"http://www.argenports.com.ar/public/img/notas/351/importante-visita-de-autoridades-portuarias-al-puerto-la-plata-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"Five port digitalization trends to watch in 2021",
		 texto:"Seaports play a key role in supporting a nation’s global competitiveness and 2020 was a challenging year for port operations. Here are five trends that kept ports operating efficiently throughout the many challenges of 2020.",
		 fecha:"11 de diciembre 2020", 
		 fnum:201211,
		 href:"https://spire.com/blog/maritime/port-data-and-digitalization-trends/",
		 img:"https://3qjvwc2vv8nz2r2w5vhhzkj4-wpengine.netdna-ssl.com/wp-content/themes/spire/css/../img/homebg2.jpg"
		},
		
		{
		 titulo:"Respaldo público y privado a la línea de buques de bandera",
		 texto:"El proyecto de constituir una compañía naviera de cabotaje con pabellón nacional cosecha adhesiones entre el gobierno, empresarios e industriales (La Barquita SRL)",
		 fecha:"11 de diciembre 2020", 
		 fnum:201211,
		 href:"https://www.cronista.com/transportycargo/Respaldo-publico-y-privado-a-la-linea-de-buques-de-bandera-20201211-0023.html",
		 img:"https://www.cronista.com/__export/1607705260968/sites/diarioelcronista/img/2020/12/11/foto_nota_tapa.jpg_258117318.jpg"
		},
		
		{
		 titulo:"Visita de autoridades portuarias al Puerto La Plata",
		 texto:"El presidente del Consorcio de Gestión del Puerto La Plata, Ingeniero Pedro Wasiejko, recibió al subsecretario de Puertos, Vías Navegables y Marina Mercante de la Nación Leonardo Cabrera, al subsecretario de Asuntos Portuarios de la Provincia Juan Cruz Lucero y al intendente de Ensenada Mario Secco.",
		 fecha:"11 de diciembre 2020", 
		 fnum:201211,
		 href:"https://comex-online.com.ar/noticias/val/58153/visita-de-autoridades-portuarias-al-puerto-la-plata.html#.X9NtU9GzyEc.linkedin",
		 img:"https://comex-online.com.ar/data/img_cont/img_imagenes/img_gr/7244.jpg"
		},
		
		{
		 titulo:"Licitación del Puerto de Buenos Aires: el Centro de Navegación hará un estudio",
		 texto:"Alfonso Jozami anunció que la idea es presentarlo a las autoridades el año próximo, a manera de aporte para el futuro proceso licitatorio.",
		 fecha:"11 de diciembre 2020", 
		 fnum:201211,
		 href:"http://argenports.com/nota/puerto-de-buenos-aires-el-centro-de-navegacion-hara-un-estudio",
		 img:"http://argenports.com/public/img/notas/353/puerto-de-buenos-aires-el-centro-de-navegacion-hara-un-estudio-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"Proponen una hidrovía verde, sustentable e inteligente",
		 texto:"Distintos referentes de la región plantean una mirada superadora para esta autopista fluvial",
		 fecha:"10 de diciembre 2020", 
		 fnum:201210,
		 href:"https://www.cronista.com/transportycargo/Proponen-una-hidrovia-verde-sustentable-e-inteligente-20201210-0028.html",
		 img:"https://www.cronista.com/img/2020/12/10/hidro.jpeg?__scale=w:829,h:466,c:d0d0d0,q:80"
		},
		
		{
		 titulo:"Projeto BR do Mar: bons ventos para a cabotagem",
		 texto:"Um aumento de 1,2 milhão para 2 milhões de contêineres anuais movimentados nos portos brasileiros. Essa é uma das metas do Projeto de Lei 4199/2020, ou Programa de Estímulo ao Transporte por Cabotagem, também conhecido como BR do Mar. E as perspectivas são animadoras, mas também vêm com um alerta: com uma maior frota, a indústria naval precisará estar preparada para a demanda.",
		 fecha:"30 de noviembre 2020", 
		 fnum:201130,
		 href:"https://www.portosenavios.com.br/artigos/artigos-de-opiniao/projeto-br-do-mar-bons-ventos-para-a-cabotagem",
		 img:"https://cdn-pen.nuneshost.com/images/181122-navio-proa-sea-boat.jpg"
		},
		
		{
		 titulo:"La flota de bandera paraguaya no detiene su crecimiento",
		 texto:"Ambiente atractivo, donde las empresas se acercan, diálogo público y privado y establecimiento de reglas claras, son los ingredientes que señala ",
		 fecha:"14 de diciembre 2020", 
		 fnum:201214,
		 href:"https://www-cronista-com.cdn.ampproject.org/c/s/www.cronista.com/amp/transportycargo/La-flota-de-bandera-paraguaya-no-detiene-su-crecimiento-20201214-0031.html",
		 img:"https://www-cronista-com.cdn.ampproject.org/ii/w680/s/www.cronista.com/__export/1607971100021/sites/diarioelcronista/img/2020/12/14/paraguay1_crop1607971099432.jpg_147459497.jpg"
		},
		
		{
		 titulo:"Firman un acuerdo para la creación del Consorcio Logístico Villa Mercedes – Puerto de La Plata",
		 texto:"Se trata de una Carta de Intención que suscribieron entre el INTA, el Consorcio de Gestión del Puerto de La Plata y el Gobierno de San Luis para la creación de ese Consorcio Logístico.",
		 fecha:"16 de diciembre 2020", 
		 fnum:201216,
		 href:"https://comex-online.com.ar/noticias/val/58162/firman-un-acuerdo-para-la-creacion-del-consorcio-logistico-villa-mercedes-%E2%80%93-puerto-de-la-plata.html#.X9tFyjT8L9w.linkedin",
		 img:"https://comex-online.com.ar/data/img_cont/img_imagenes/img_gr/7258.jpeg"
		},
		
		{
		 titulo:"Máximo Kirchner y el titular de la UIBB acordaron avanzar en una agenda regional",
		 texto:" El presidente del bloque de diputados del Frente de Todos, Máximo Kirchner, recibió hoy en Buenos Aires al titular de la Unión Industrial de Bahía Blanca, Gustavo Elías. Durante el encuentro se abordaron temas de interés local y regional, además, por supuesto, de puntos vinculados con las agendas de los integrantes de la institución gremial empresarial bahiense.",
		 fecha:"16 de diciembre 2020", 
		 fnum:201216,
		 href:"https://www.lanueva.com/nota/2020-12-16-20-58-0-maximo-kirchner-y-el-titular-de-la-uibb-acordaron-avanzar-en-una-agenda-regional",
		 img:"https://px.cdn.lanueva.com/122020/1608162815647.jpg"
		},
		
		{
		 titulo:"EL BUQUE REGASIFICADOR VOLVERÁ A BAHÍA BLANCA",
		 texto:"A pesar del Plan Gas, el barco volverá a Bahía Blanca. Se debe a la baja de inversiones y el declino de la producción en Bolivia.",
		 fecha:"4 de enero 2021", 
		 fnum:210104,
		 href:"https://vacamuertanews.com/ver_noticia.php?id=20210104134401",
		 img:"https://vacamuertanews.com/noticias/2021/01/max/20210104134401.jpg"
		},
		
		{
		 titulo:"LA REACTIVACIÓN DEL TREN NORPATAGÓNICO GENERARÁ ACTIVIDAD ECONÓMICA Y NUEVOS EMPLEOS EN RÍO NEGRO",
		 texto:"El Tren Norpatagónico unirá la ciudad neuquina de Añelo, cabecera de Vaca Muerta, con el puerto bonaerense de Bahía Blanca y también -en una segunda etapa- con el rionegrino de San Antonio Este.",
		 fecha:"5 de enero de 2021", 
		 fnum:210105,
		 href:"https://vacamuertanews.com/ver_noticia.php?id=20210105000201",
		 img:"https://vacamuertanews.com/noticias/2021/01/max/20210105000201.jpg"
		},
		
		{
		 titulo:"Argentina: Remolcadores mantienen paro y suspenden, incluso, asistencia de seguridad a tanqueros",
		 texto:"El Centro de Patrones, de Jefes y Oficiales Maquinistas Navales, el Sindicato de Conductores Navales y el Sindicato Obreros Marítimos Unidos (SOMU) con la Cámara de Remolque (CAR) se mantienen en negociaciones, en medio del paro del gremio remolcador, informó El Cronista. Pese a que en un comienzo los trabajadores notificaron que los remolcadores asistirían el zarpe de tanqueros, endurecieron su postura, suspendiendo las excepciones de atención de buques.",
		 fecha:"4 de enero 2021", 
		 fnum:210104,
		 href:"https://www.mundomaritimo.cl/noticias/argentina-remolcadores-mantienen-paro-y-suspenden-incluso-asistencia-de-seguridad-a-tanqueros?platform=hootsuite",
		 img:"https://www.mundomaritimo.cl/noticias/get_image/47602/798"
		},
		
		{
		 titulo:"Tormenta perfecta para los flujos globales de contenedores",
		 texto:"El almacenaje en Estados Unidos y Europa aumenta la demanda en la cadena logística. Está reducida la capacidad portuaria, y faltan buques, contenedores y camiones",
		 fecha:"22 de diciembre 2020", 
		 fnum:201222,
		 href:"https://www.cronista.com/transportycargo/Tormenta-perfecta-para-los-flujos-globales-de-contenedores-20201222-0035.html",
		 img:"https://www.cronista.com/__export/1608664918297/sites/diarioelcronista/img/2020/12/22/dominguez.jpg_258117318.jpg"
		},
		
		{
		 titulo:"Tras el paro, decenas de barcos ingresaron a los puertos de Rosario y Bahía Blanca",
		 texto:"Decenas de barcos cargueros ingresaron  a los puertos del Gran Rosario y Bahía Blanca para realizar operaciones de carga y descarga tras la resolución del conflicto laboral que paralizó los muelles exportadores a lo largo de las últimas tres semanas. Ocurrió el 30 de diciembre.",
		 fecha:"4 de enero 2021", 
		 fnum:210104,
		 href:"https://www.mercojuris.com/36816/tras-el-paro-decenas-de-barcos-ingresaron-a-los-puertos-de-rosario-y-bahia-blanca/",
		 img:"http://www.mercojuris.com/wp-content/uploads/2021/01/Bacos.jpg"
		},
		
		{
		 titulo:"“Hay que publicitar las facilidades que ofrece Puerto La Plata a los operadores de comercio exterior”",
		 texto:"Así lo expresó uno de los expertos más calificados en comercio con los países asiáticos, el profesor Ernesto Fernández Taboada, director ejecutivo del Consejo Argentino Chino, al disertar en la segunda Jornada “La Plata, un puerto en crecimiento”, que organizaron la UTN Regional La Plata y Ser Industria.",
		 fecha:"1 de enero 2021", 
		 fnum:210101,
		 href:"https://www.serindustria.com.ar/hay-que-publicitar-las-facilidades-que-ofrece-puerto-la-plata-a-los-operadores-de-comercio-exterior/",
		 img:"https://www.serindustria.com.ar/wp-content/uploads/2021/01/Ernesto-Fern%C3%A1ndez-Taboada.jpg"
		},
		
		{
		 titulo:"Sectores del campo presentan un plan para que el Gobierno no cierre las exportaciones de maíz",
		 texto:"Propondrán estimular una mayor siembra del grano y así asegurar la disponibilidad necesaria para el mercado doméstico.",
		 fecha:"5 de enero 2021", 
		 fnum:210105,
		 href:"https://www-cronista-com.cdn.ampproject.org/c/s/www.cronista.com/amp/economiapolitica/Sectores-del-campo-presentan-un-plan-para-que-el-Gobierno-no-cierre-las-exportaciones-de-maiz-20210105-0020.html",
		 img:"https://www-cronista-com.cdn.ampproject.org/ii/w680/s/www.cronista.com/__export/1601292170776/sites/diarioelcronista/img/2020/09/28/granos_crop1601292170061.png_147459497.png"
		},
		
		{
		 titulo:"El Foro Logístico de Buenos Aires sentó su postura",
		 texto:"Inversiones, altos costos operativos, carga impositiva y la necesaria transformación digital figuran entre las prioridades del grupo de expertos",
		 fecha:"5 de enero 2021", 
		 fnum:210105,
		 href:"https://www.cronista.com/transportycargo/El-Foro-Logistico-de-Buenos-Aires-sento-su-postura-20210105-0056.html",
		 img:"https://www.cronista.com/__export/1609889785840/sites/diarioelcronista/img/2021/01/05/foro.jpg_258117318.jpg"
		},
		
		{
		 titulo:"The U.S. Coast Guard in an Evolving World Order",
		 texto:"If the United States wishes to maintain its role as a world leader and enforcer of global norms, then it will need to rethink how it projects power around the globe. Defending the rules-based free world order without entering into open conflict will require more creative strategies than sending Navy ships on freedom of navigation exercises, it requires leveraging other instruments of power with unique capabilities.",
		 fecha:"5 de enero 2021", 
		 fnum:210105,
		 href:"https://www.maritime-executive.com/editorials/the-u-s-coast-guard-in-an-evolving-world-order",
		 img:"https://www.maritime-executive.com/media/images/article/Photos/Navy_Govt_CoastGuard/uscg-cutter-bertholf-in-yellow-sea-2019.39549f.jpg"
		},
		
		{
		 titulo:"Argentina: El 92% de las exportaciones de graneles agrícolas provienen del complejo maíz, soja y trigo",
		 texto:"Foro Logístico de Buenos Aires analizó el presente y futuro de la logística exportadora del país sudamericano",
		 fecha:"6 de enero 2021", 
		 fnum:210106,
		 href:"https://www.mundomaritimo.cl/noticias/argentina-el-92-de-las-exportaciones-de-graneles-agricolas-provienen-del-complejo-maiz-soja-y-trigo?platform=hootsuite",
		 img:"https://www.mundomaritimo.cl/noticias/get_image/47626/798"
		},
		
		{
		 titulo:"Cómo es el millonario negocio de los “mini satélites” marplatenses: quieren facturar US$ 15 M",
		 texto:"La startup de tecnología espacial Innova Space desarrolló el primer “picosatélite” de toda Latinoamérica. En 2021, lo lanzarán junto a SpaceX, la compañía privada de Elon Musk. Quiénes son y cuál es su meta a largo plazo.",
		 fecha:"7 de enero 2021", 
		 fnum:210107,
		 href:"https://www.infotechnology.com/innovacion/como-es-el-millonario-negocio-de-los-mini-satelites-marplantenses-quieren-facturar-us-15-millones/",
		 img:"https://www.infotechnology.com//files/image/93/93837/5ff5c6e73b86a-screen-and-max-width480px_720_960!.webp?s=83199bd6daaa1655c42e493056e29e92&d=1609955876&oe=jpg, /files/image/93/93837/5ff5c6e73b86a-screen-and-max-width480px_720_960_2x!.webp?s=83199bd6daaa1655c42e493056e29e92&d=1609944427&oe=jpg 2x"
		},
		
		{
		 titulo:"Estados Unidos envió un buque de la Guardia Costera a patrullar el Atlántico Sur “para contrarrestar la pesca ilegal”",
		 texto:"En el marco de la “Operación Cruz del Sur”, Washington desplegó el USCGC Stone para “garantizar que el hemisferio occidental sea seguro, libre y próspero” ante las crecientes actividades ilícitas de numerosas países, entre ellos China",
		 fecha:"29 de diciembre 2020", 
		 fnum:201229,
		 href:"https://www.infobae.com/america/eeuu/2020/12/29/estados-unidos-envio-un-buque-de-la-guardia-costera-a-patrullar-el-atlantico-sur-para-contrarrestar-la-pesca-ilegal/",
		 img:"https://www.infobae.com/new-resizer/qI19wuuh8GYbQ35Tryg20ZnmMnU=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/C2XHLZVWKFGJTKXGWDQUSGPXAE.jpg"
		},
		
		{
		 titulo:"China quiere seguridad alimentaria y hará el banco de semillas más grande del mundo",
		 texto:"La interrupción de las cadenas de suministro durante la pandemia de coronavirus aceleró la decisión del gobierno de Xi Jinping por mejorar su producción cerealera y desarrollar nuevas variedades de cultivos. ",
		 fecha:"6 de enero 2021", 
		 fnum:210106,
		 href:"https://www.cronista.com/internacionales/China-quiere-seguridad-alimentaria-y-hara-el-banco-de-semillas-mas-grande-del-mundo-20210106-0019.html",
		 img:"https://www.cronista.com/__export/1609955057215/sites/diarioelcronista/img/2021/01/06/semillas_china_maiz_xinhua_2_crop1609955056711.jpg_258117318.jpg"
		},
		
		{
		 titulo:"Ocean stewardship begins with sharing information, requires courage and leadership",
		 texto:"Martin Exel, managing director of Seafood Business for Ocean Stewardship (SeaBOS), speaks on the importance of the seafood industry’s role in promoting transparency and sustainability.  Information sharing has the ability to transform fisheries governance. Through increased transparency and cutting-edge technology and analysis, Global Fishing Watch is supporting governments around the world in their management efforts. ",
		 fecha:"4 de agosto 2020", 
		 fnum:200804,
		 href:"https://globalfishingwatch.org/news-views/seafood-sector-transparency/",
		 img:"https://globalfishingwatch.org/wp-content/uploads/hero_image-2.jpg"
		},
		
		{
		 titulo:"¿Cómo es y a qué viene a la Argentina un moderno guardacostas de Estados Unidos?",
		 texto:"El buque USCGC Stone llegará en los próximos días al puerto de Mar del Plata y ya despertó variadas interpretaciones sobre la labor que tendrá en el Atlántico Sur y su supuesta presencia en aguas argentinas para controlar a los pesqueros ilegales chinos.",
		 fecha:"31 de diciembre 2020", 
		 fnum:201231,
		 href:"http://www.argenports.com.ar/nota/asi-es-el-moderno-guardacostas-de-estados-unidos-que-llega-a-argentina-para-controlar-la-pesca-ilegal/",
		 img:"http://www.argenports.com.ar/public/img/notas/404/asi-es-el-moderno-guardacostas-de-estados-unidos-que-llega-a-argentina-para-controlar-la-pesca-ilegal-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"Informe: cómo combate la Prefectura a la pesca ilegal en el espacio marítimo argentino",
		 texto:"Gracias a un moderno sistema de información geográfica Guardacostas, la fuerza de seguridad realiza un monitoreo en tiempo real del movimiento de los buques y desarrolla operativos contra la flota extranjera que opera ilegalmente en el mar Argentino.",
		 fecha:"2 de enero 2021", 
		 fnum:210102,
		 href:"https://www.infobae.com/def/defensa-y-seguridad/2021/01/02/informe-como-combate-la-prefectura-a-la-pesca-ilegal-en-el-espacio-maritimo-argentino/?outputType=amp-type",
		 img:"https://www.infobae.com/new-resizer/AkjCvLPZUh68mmdWm_seCLALqYY=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/3AKDTJNMRFHGPHEK6OD4ZHGTZI.jpg"
		},
		
		{
		 titulo:"¿QUIÉN PAGARÁ EL DRAGADO A 14m DEL CANAL MONTEVIDEO?",
		 texto:"Las autoridades uruguayas han anunciado la profundización del Canal de Acceso al Puerto de Montevideo a -14,00 m al cero local (cero Wharton), el cual estaría habilitado en 2023. En principio, el objetivo sería un mejor posicionamiento para la captación de transbordos regionales, lo cual sería necesario para un puerto mayoritariamente dedicado a los contenedores (aprox. 70% del total de la carga).",
		 fecha:"2 de enero 2021", 
		 fnum:210102,
		 href:"https://bimaritimo.com/quien-pagara-el-dragado-a-14-m-del-canal-montevideo/",
		 img:"https://bimaritimo.com/wp-content/uploads/2021/01/3-696x421.png"
		},
		
		{
		 titulo:"Las Cadenas de Valor Global y las posibilidades de Argentina",
		 texto:"El paso del tiempo tiene la particularidad de generar más preguntas que respuestas y la evolución de los conceptos no es imbatible a la lógica temporal. En ese sentido, las Cadenas de Valor Global (CVG) surgen como una forma de entender los procesos de suma de valor agregado a las materias primas como sí cada empresa e industria tuviera sus propias cadenas de valor agregado.",
		 fecha:"15 de marzo 2019", 
		 fnum:190315,
		 href:"https://eleconomista.com.ar/2019-03-las-cadenas-de-valor-global-y-las-posibilidades-de-argentina/",
		 img:"https://eleconomista.com.ar/wp-content/uploads/2018/07/Mapa-Argentina.png"
		},
		
		{
		 titulo:"Altos costos operativos, un problema recurrente de la logística de exportación en el país",
		 texto:"El Foro Logístico de Buenos Aires convocó a representantes de la Bolsa de Comercio de Buenos Aires, UIA, navieras y puertos, para analizar el futuro de los flujos de carga.",
		 fecha:"7 de enero 2021", 
		 fnum:210107,
		 href:"http://www.argenports.com.ar/nota/altos-costos-operativos-un-problema-recurrente-de-la-logistica-de-exportacion-en-el-pais/",
		 img:"http://www.argenports.com.ar/public/img/notas/417/altos-costos-operativos-un-problema-recurrente-de-la-logistica-de-exportacion-en-el-pais-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"Paro portuario: hay acuerdo y vuelven a operar los remolcadores",
		 texto:"Tras arduas negociaciones, los gremios resolvieron levantar la medida de fuerza. Queda ahora resolver el descalabro logístico producido por la cancelación de escalas y desvío de buques durante el conflicto",
		 fecha:"7 de enero 2021", 
		 fnum:210107,
		 href:"https://www.cronista.com/transportycargo/Paro-portuario-hay-acuerdo-y-vuelven-a-operar-los-remolcadores-20210107-0030.html",
		 img:"https://www.cronista.com/__export/1610037735470/sites/diarioelcronista/img/2021/01/07/paro_remoloques_crop1610037734809.jpg_258117318.jpg"
		},
		
		{
		 titulo:"El futuro de la logística de exportación argentina",
		 texto:"El tema fue analizado en el Foro Logístico de Buenos Aires. El evento contó con la presencia de representantes de la Bolsa de Comercio de Rosario, la Unión Industrial Argentina, navieras y puertos",
		 fecha:"6 de enero de 2021", 
		 fnum:210106,
		 href:"https://comex-online.com.ar/noticias/val/58194/el-futuro-de-la-logistica-de-exportacion-argentina-.html#.X_dXYpdUHiU.linkedin",
		 img:"https://comex-online.com.ar/data/img_cont/img_imagenes/img_gr/7296.jpeg"
		},
		
		{
		 titulo:"El trigo cierra la campaña 2019/20 con el segundo volumen exportado más alto de la historia",
		 texto:"La cosecha de trigo 2019/20 subió más de un 5% comparada con la campaña anterior, aunque en valor las exportaciones fue un 6% menor por la baja de precios. La molienda de trigo alcanzó máximos de 7 años.",
		 fecha:"30 de diciembre 2020", 
		 fnum:201230,
		 href:"https://www.bcr.com.ar/es/mercados/investigacion-y-desarrollo/informativo-semanal/noticias-informativo-semanal/el-trigo-24",
		 img:"https://www.bcr.com.ar/sites/default/files/styles/free/public/balance_trigo_1_0.png?itok=toMGFRMi"
		},
		

	];

	lista.local = [
		
		{
		 titulo:"Acuerdo empresarial en el sur bonaerense para potenciar la producción",
		 texto:"La necesidad de desarrollar un eje estratégico en común fue acordada por los presidentes de la Unión Industrial de Bahía Blanca y de la Cámara de Profesionales y Empresarios de Puerto Quequén.",
		 fecha:"31 de diciembre 2020", 
		 fnum:201231, 
		 href:"http://www.argenports.com.ar/nota/acuerdo-empresarial-en-el-sur-bonaerense-para-potenciar-la-produccion-y-los-puertos/",
		 img:"http://www.argenports.com.ar/public/img/notas/405/acuerdo-empresarial-en-el-sur-bonaerense-para-potenciar-la-produccion-y-los-puertos-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"Puerto Quequén cerró otro muy buen año con un importante movimiento de cargas",
		 texto:"El tonelaje alcanzado por la estación marítima en 2020 se ubica en el cuarto lugar durante la última década, detrás de 2016, 2012 y 2019.",
		 fecha:"4 de enero 2021", 
		 fnum:210104,
		 href:"http://www.argenports.com.ar/nota/puerto-quequen-cerro-otro-muy-buen-ano-con-un-importante-movimiento-de-cargas/",
		 img:"http://www.argenports.com.ar/public/img/notas/410/puerto-quequen-cerro-otro-muy-buen-ano-con-un-importante-movimiento-de-cargas-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"El ministro bonaerense Augusto Costa recorrerá hoy varias áreas clave de puerto Quequén",
		 texto:"Entre otros sectores, el titular de la cartera de Producción, Ciencia e Innovación Tecnológica visitará el espacio multipropósito concretado  para la diversificación de cargas. Será recibido por el titular del Consorcio de Gestión, Jorge Alvaro.",
		 fecha:"26 de noviembre 2020", 
		 fnum:201126,
		 href:"http://www.argenports.com.ar/nota/el-ministro-augusto-costa-recorrera-hoy-el-puerto-de-quequen/",
		 img:"http://www.argenports.com.ar/public/img/notas/320/el-ministro-augusto-costa-recorrera-hoy-el-puerto-de-quequen-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"GOICOECHEA AL FRENTE DE CAPROQ",
		 texto:"El presidente de la Empresa, el Mg. Ing. Mario Goicoechea, vuelve a ser Presidente de la Cámara de Profesionales de Puerto Quequén.",
		 fecha:"26 de noviembre 2020", 
		 fnum:201126,
		 href:"https://goicosa.com.ar/goicochea-al-frente-de-caproq/",
		 img:"https://goicosa.com.ar/wp-content/uploads/2020/11/Imagen-Mario.jpg"
		},
		
		{
		 titulo:"Nación anunció que lleva comprometidos más de mil millones de pesos en asistencia a puertos",
		 texto:"La lista dada a conocer por el ministerio de Transporte es extensa. Hoy se anunció que el Estado nacional aportará 400 millones para el dragado del puerto de Rawson.",
		 fecha:"30 de noviembre 2020", 
		 fnum:201130,
		 href:"http://www.argenports.com.ar/nota/nacion-anuncio-que-lleva-comprometidos-mas-de-mil-millones-de-pesos-en-asistencia-a-puertos/",
		 img:"http://www.argenports.com.ar/public/img/notas/328/nacion-anuncio-que-lleva-comprometidos-mas-de-mil-millones-de-pesos-en-asistencia-a-puertos-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"Máximo Kirchner y el titular de la UIBB acordaron avanzar en una agenda regional",
		 texto:" El presidente del bloque de diputados del Frente de Todos, Máximo Kirchner, recibió hoy en Buenos Aires al titular de la Unión Industrial de Bahía Blanca, Gustavo Elías. Durante el encuentro se abordaron temas de interés local y regional, además, por supuesto, de puntos vinculados con las agendas de los integrantes de la institución gremial empresarial bahiense.",
		 fecha:"16 de diciembre 2020", 
		 fnum:201216,
		 href:"https://www.lanueva.com/nota/2020-12-16-20-58-0-maximo-kirchner-y-el-titular-de-la-uibb-acordaron-avanzar-en-una-agenda-regional",
		 img:"https://px.cdn.lanueva.com/122020/1608162815647.jpg"
		},
		
		{
		 titulo:"EL BUQUE REGASIFICADOR VOLVERÁ A BAHÍA BLANCA",
		 texto:"A pesar del Plan Gas, el barco volverá a Bahía Blanca. Se debe a la baja de inversiones y el declino de la producción en Bolivia.",
		 fecha:"4 de enero 2021", 
		 fnum:210104,
		 href:"https://vacamuertanews.com/ver_noticia.php?id=20210104134401",
		 img:"https://vacamuertanews.com/noticias/2021/01/max/20210104134401.jpg"
		},
		{
		 titulo:"Tras el paro, decenas de barcos ingresaron a los puertos de Rosario y Bahía Blanca",
		 texto:"Decenas de barcos cargueros ingresaron  a los puertos del Gran Rosario y Bahía Blanca para realizar operaciones de carga y descarga tras la resolución del conflicto laboral que paralizó los muelles exportadores a lo largo de las últimas tres semanas. Ocurrió el 30 de diciembre.",
		 fecha:"4 de enero 2021", 
		 fnum:210104,
		 href:"https://www.mercojuris.com/36816/tras-el-paro-decenas-de-barcos-ingresaron-a-los-puertos-de-rosario-y-bahia-blanca/",
		 img:"http://www.mercojuris.com/wp-content/uploads/2021/01/Bacos.jpg"
		},
		

	];

	lista.inter = [
		
		{
		 titulo:"AL GRANO",
		 texto:"El futuro de la hidrovía y del Puerto de Buenos Aires, son dos temas claves que requieren profundo análisis, trascienden fronteras y comprometen el porvenir del comercio exterior de la Argentina.",
		 fecha:"27 de noviembre 2020", 
		 fnum:201127,
		 href:"https://comex-online.com.ar/noticias/val/58127/al-grano-.html",
		 img:"https://comex-online.com.ar/data/img_cont/img_imagenes/img_gr/7208.jpg"
		},
		
		{
		 titulo:"La licitación de la hidrovía se pone en marcha: será a riesgo privado",
		 texto:"El decreto 949/2020 delegó facultades en el Ministerio de Transporte para llevar a cabo la nueva concesión. Por la vía navegable sale el 80% de las exportaciones argentinas",
		 fecha:"6 de diciembre 2020", 
		 fnum:201206,
		 href:"https://www.linkedin.com/posts/el-cronista-comercial_la-licitaci%C3%B3n-de-la-hidrov%C3%ADa-se-pone-en-marcha-activity-6738210648989171712-1a9A",
		 img:"https://echobox-media.s3.amazonaws.com/social_media_images/702/702-1606513129-dlv1p11b1h7vjqp84pn0p053hhatf4ms.jpg"
		},
		
		{
		 titulo:"Hidrovía: “volantazo” del gobierno con muy buena recepción en los puertos",
		 texto:"Nación publicó el decreto que pone en marcha la nueva licitación para la concesión del dragado y balizamiento del río. A diferencia de lo anunciado por el presidente, las provincias no participarán en la conducción de la licitación. Pero: ¿está todo dicho?",
		 fecha:"27 de noviembre 2020", 
		 fnum:201127,
		 href:"https://www-rosario3-com.cdn.ampproject.org/c/s/www.rosario3.com/amp/-economia-negocios-agro-/Hidrovia-volantazo-del-gobierno-con-muy-buena-recepcion-en-los-puertos-20201127-0076.html",
		 img:"https://www-rosario3-com.cdn.ampproject.org/i/s/www.rosario3.com/__export/1606514479303/sites/rosario3/img/2020/11/27/buques-hidrovxa-1280x960_crop1606514229354.jpeg_2014047795.jpeg"
		},
		
		{
		 titulo:"Balance continental del sector portuario",
		 texto:"En su formato digital, y como antesala del XXIX Congreso Latinoamericano de Puertos que se desarrollará en Cartagena, Colombia, del 29 de noviembre al 1 de diciembre de 2021, la delegación Latinoamericana de la Asociación Americana de Autoridades Portuarias (AAPA) junto al Grupo Puerto de Cartagena, convocan el 9 de diciembre con inicio a las 12 hs, al webinar: “Balance 2020 y Perspectivas Futuras para la Industria Portuaria en América Latina",
		 fecha:"4 de diciembre 2020", 
		 fnum:201204,
		 href:"https://www.cronista.com/transportycargo/Balance-continental-del-sector-portuario-20201204-0026.html",
		 img:"https://www.cronista.com/__export/1607095972821/sites/diarioelcronista/img/2020/12/04/entrada_02.jpg_258117318.jpg"
		},
		
		{
		 titulo:"Productivo debate en favor de la hidrovía",
		 texto:"Gremios y usuarios mostraron claras expectativas sobre el futuro de la vía navegable troncal del río Paraná",
		 fecha:"4 de diciembre 2020", 
		 fnum:201204,
		 href:"https://www.cronista.com/transportycargo/Productivo-debate-en-favor-de-la-hidrovia-20201204-0057.html",
		 img:"https://www.cronista.com/__export/1607127365773/sites/diarioelcronista/img/2020/12/04/hidro.jpg_258117318.jpg"
		},
		
		{
		 titulo:"AAPA LATINO",
		 texto:"Balance 2020 y perspectivas futuras para la Industria Portuaria en América Latina",
		 fecha:"29 de nov al 1 de dic 2021", 
		 fnum:211129,
		 href:"https://aapalatinoamerica.com/es/",
		 img:"https://aapalatinoamerica.com/images/2020_Cartagena/secciones/webinar/fondo_landing_1.png"
		},
		
		{
		 titulo:"Presidente de AAPA asegura que la industria portuaria “aceptó el desafío” frente a la pandemia",
		 texto:"El presidente de la Junta directiva de la Asociación Americana de Autoridades Portuarias (AAPA), Mario Cordero, aseguró que el sector “aceptó el desafío y siguió adelante” durante lo que ha sido la contingencia sanitaria mundial derivada de la pandemia del Covid-19.",
		 fecha:"9 de diciembre 2020", 
		 fnum:201209,
		 href:"https://portalportuario.cl/presidente-de-aapa-asegura-que-la-industria-portuaria-acepto-el-desafio-frente-a-la-pandemia/",
		 img:"https://portalportuario.cl/wp-content/uploads/2020/12/mario-cordero-400x225.jpg"
		},
		
		{
		 titulo:"Five port digitalization trends to watch in 2021",
		 texto:"Seaports play a key role in supporting a nation’s global competitiveness and 2020 was a challenging year for port operations. Here are five trends that kept ports operating efficiently throughout the many challenges of 2020.",
		 fecha:"11 de diciembre 2020", 
		 fnum:201211,
		 href:"https://spire.com/blog/maritime/port-data-and-digitalization-trends/",
		 img:"https://3qjvwc2vv8nz2r2w5vhhzkj4-wpengine.netdna-ssl.com/wp-content/themes/spire/css/../img/homebg2.jpg"
		},

		{
		 titulo:"Projeto BR do Mar: bons ventos para a cabotagem",
		 texto:"Um aumento de 1,2 milhão para 2 milhões de contêineres anuais movimentados nos portos brasileiros. Essa é uma das metas do Projeto de Lei 4199/2020, ou Programa de Estímulo ao Transporte por Cabotagem, também conhecido como BR do Mar. E as perspectivas são animadoras, mas também vêm com um alerta: com uma maior frota, a indústria naval precisará estar preparada para a demanda.",
		 fecha:"30 de noviembre 2020", 
		 fnum:201130,
		 href:"https://www.portosenavios.com.br/artigos/artigos-de-opiniao/projeto-br-do-mar-bons-ventos-para-a-cabotagem",
		 img:"https://cdn-pen.nuneshost.com/images/181122-navio-proa-sea-boat.jpg"
		},
		
		{
		 titulo:"La flota de bandera paraguaya no detiene su crecimiento",
		 texto:"Ambiente atractivo, donde las empresas se acercan, diálogo público y privado y establecimiento de reglas claras, son los ingredientes que señala ",
		 fecha:"14 de diciembre 2020", 
		 fnum:201214,
		 href:"https://www-cronista-com.cdn.ampproject.org/c/s/www.cronista.com/amp/transportycargo/La-flota-de-bandera-paraguaya-no-detiene-su-crecimiento-20201214-0031.html",
		 img:"https://www-cronista-com.cdn.ampproject.org/ii/w680/s/www.cronista.com/__export/1607971100021/sites/diarioelcronista/img/2020/12/14/paraguay1_crop1607971099432.jpg_147459497.jpg"
		},
		
		{
		 titulo:"Tormenta perfecta para los flujos globales de contenedores",
		 texto:"El almacenaje en Estados Unidos y Europa aumenta la demanda en la cadena logística. Está reducida la capacidad portuaria, y faltan buques, contenedores y camiones",
		 fecha:"22 de diciembre 2020", 
		 fnum:201222,
		 href:"https://www.cronista.com/transportycargo/Tormenta-perfecta-para-los-flujos-globales-de-contenedores-20201222-0035.html",
		 img:"https://www.cronista.com/__export/1608664918297/sites/diarioelcronista/img/2020/12/22/dominguez.jpg_258117318.jpg"
		},
		
		{
		 titulo:"The U.S. Coast Guard in an Evolving World Order",
		 texto:"If the United States wishes to maintain its role as a world leader and enforcer of global norms, then it will need to rethink how it projects power around the globe. Defending the rules-based free world order without entering into open conflict will require more creative strategies than sending Navy ships on freedom of navigation exercises, it requires leveraging other instruments of power with unique capabilities.",
		 fecha:"5 de enero 2021", 
		 fnum:210105,
		 href:"https://www.maritime-executive.com/editorials/the-u-s-coast-guard-in-an-evolving-world-order",
		 img:"https://www.maritime-executive.com/media/images/article/Photos/Navy_Govt_CoastGuard/uscg-cutter-bertholf-in-yellow-sea-2019.39549f.jpg"
		},
		
		{
		 titulo:"Cómo es el millonario negocio de los “mini satélites” marplatenses: quieren facturar US$ 15 M",
		 texto:"La startup de tecnología espacial Innova Space desarrolló el primer “picosatélite” de toda Latinoamérica. En 2021, lo lanzarán junto a SpaceX, la compañía privada de Elon Musk. Quiénes son y cuál es su meta a largo plazo.",
		 fecha:"7 de enero 2021", 
		 fnum:210107,
		 href:"https://www.infotechnology.com/innovacion/como-es-el-millonario-negocio-de-los-mini-satelites-marplantenses-quieren-facturar-us-15-millones/",
		 img:"https://www.infotechnology.com//files/image/93/93837/5ff5c6e73b86a-screen-and-max-width480px_720_960!.webp?s=83199bd6daaa1655c42e493056e29e92&d=1609955876&oe=jpg, /files/image/93/93837/5ff5c6e73b86a-screen-and-max-width480px_720_960_2x!.webp?s=83199bd6daaa1655c42e493056e29e92&d=1609944427&oe=jpg 2x"
		},
		
		{
		 titulo:"Estados Unidos envió un buque de la Guardia Costera a patrullar el Atlántico Sur “para contrarrestar la pesca ilegal”",
		 texto:"En el marco de la “Operación Cruz del Sur”, Washington desplegó el USCGC Stone para “garantizar que el hemisferio occidental sea seguro, libre y próspero” ante las crecientes actividades ilícitas de numerosas países, entre ellos China",
		 fecha:"29 de diciembre 2020", 
		 fnum:201229,
		 href:"https://www.infobae.com/america/eeuu/2020/12/29/estados-unidos-envio-un-buque-de-la-guardia-costera-a-patrullar-el-atlantico-sur-para-contrarrestar-la-pesca-ilegal/",
		 img:"https://www.infobae.com/new-resizer/qI19wuuh8GYbQ35Tryg20ZnmMnU=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/C2XHLZVWKFGJTKXGWDQUSGPXAE.jpg"
		},
		
		{
		 titulo:"China quiere seguridad alimentaria y hará el banco de semillas más grande del mundo",
		 texto:"La interrupción de las cadenas de suministro durante la pandemia de coronavirus aceleró la decisión del gobierno de Xi Jinping por mejorar su producción cerealera y desarrollar nuevas variedades de cultivos. ",
		 fecha:"6 de enero 2021", 
		 fnum:210106,
		 href:"https://www.cronista.com/internacionales/China-quiere-seguridad-alimentaria-y-hara-el-banco-de-semillas-mas-grande-del-mundo-20210106-0019.html",
		 img:"https://www.cronista.com/__export/1609955057215/sites/diarioelcronista/img/2021/01/06/semillas_china_maiz_xinhua_2_crop1609955056711.jpg_258117318.jpg"
		},
		
		{
		 titulo:"Ocean stewardship begins with sharing information, requires courage and leadership",
		 texto:"Martin Exel, managing director of Seafood Business for Ocean Stewardship (SeaBOS), speaks on the importance of the seafood industry’s role in promoting transparency and sustainability.  Information sharing has the ability to transform fisheries governance. Through increased transparency and cutting-edge technology and analysis, Global Fishing Watch is supporting governments around the world in their management efforts. ",
		 fecha:"4 de agosto 2020", 
		 fnum:200804,
		 href:"https://globalfishingwatch.org/news-views/seafood-sector-transparency/",
		 img:"https://globalfishingwatch.org/wp-content/uploads/hero_image-2.jpg"
		},
		
		{
		 titulo:"¿Cómo es y a qué viene a la Argentina un moderno guardacostas de Estados Unidos?",
		 texto:"El buque USCGC Stone llegará en los próximos días al puerto de Mar del Plata y ya despertó variadas interpretaciones sobre la labor que tendrá en el Atlántico Sur y su supuesta presencia en aguas argentinas para controlar a los pesqueros ilegales chinos.",
		 fecha:"31 de diciembre 2020", 
		 fnum:201231,
		 href:"http://www.argenports.com.ar/nota/asi-es-el-moderno-guardacostas-de-estados-unidos-que-llega-a-argentina-para-controlar-la-pesca-ilegal/",
		 img:"http://www.argenports.com.ar/public/img/notas/404/asi-es-el-moderno-guardacostas-de-estados-unidos-que-llega-a-argentina-para-controlar-la-pesca-ilegal-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"¿QUIÉN PAGARÁ EL DRAGADO A 14m DEL CANAL MONTEVIDEO?",
		 texto:"Las autoridades uruguayas han anunciado la profundización del Canal de Acceso al Puerto de Montevideo a -14,00 m al cero local (cero Wharton), el cual estaría habilitado en 2023. En principio, el objetivo sería un mejor posicionamiento para la captación de transbordos regionales, lo cual sería necesario para un puerto mayoritariamente dedicado a los contenedores (aprox. 70% del total de la carga).",
		 fecha:"2 de enero 2021", 
		 fnum:210102,
		 href:"https://bimaritimo.com/quien-pagara-el-dragado-a-14-m-del-canal-montevideo/",
		 img:"https://bimaritimo.com/wp-content/uploads/2021/01/3-696x421.png"
		},
		
		{
		 titulo:"Las Cadenas de Valor Global y las posibilidades de Argentina",
		 texto:"El paso del tiempo tiene la particularidad de generar más preguntas que respuestas y la evolución de los conceptos no es imbatible a la lógica temporal. En ese sentido, las Cadenas de Valor Global (CVG) surgen como una forma de entender los procesos de suma de valor agregado a las materias primas como sí cada empresa e industria tuviera sus propias cadenas de valor agregado.",
		 fecha:"15 de marzo 2019", 
		 fnum:190315,
		 href:"https://eleconomista.com.ar/2019-03-las-cadenas-de-valor-global-y-las-posibilidades-de-argentina/",
		 img:"https://eleconomista.com.ar/wp-content/uploads/2018/07/Mapa-Argentina.png"
		},		

	];
	


	lista.autoridades = [
		
		{
		 titulo:"El ministro bonaerense Augusto Costa recorrerá hoy varias áreas clave de puerto Quequén",
		 texto:"Entre otros sectores, el titular de la cartera de Producción, Ciencia e Innovación Tecnológica visitará el espacio multipropósito concretado  para la diversificación de cargas. Será recibido por el titular del Consorcio de Gestión, Jorge Alvaro.",
		 fecha:"26 de noviembre 2020", 
		 fnum:201126,
		 href:"http://www.argenports.com.ar/nota/el-ministro-augusto-costa-recorrera-hoy-el-puerto-de-quequen/",
		 img:"http://www.argenports.com.ar/public/img/notas/320/el-ministro-augusto-costa-recorrera-hoy-el-puerto-de-quequen-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"GOICOECHEA AL FRENTE DE CAPROQ",
		 texto:"El presidente de la Empresa, el Mg. Ing. Mario Goicoechea, vuelve a ser Presidente de la Cámara de Profesionales de Puerto Quequén.",
		 fecha:"26 de noviembre 2020", 
		 fnum:201126,
		 href:"https://goicosa.com.ar/goicochea-al-frente-de-caproq/",
		 img:"https://goicosa.com.ar/wp-content/uploads/2020/11/Imagen-Mario.jpg"
		},
		{
		 titulo:"Presidente de AAPA asegura que la industria portuaria “aceptó el desafío” frente a la pandemia",
		 texto:"El presidente de la Junta directiva de la Asociación Americana de Autoridades Portuarias (AAPA), Mario Cordero, aseguró que el sector “aceptó el desafío y siguió adelante” durante lo que ha sido la contingencia sanitaria mundial derivada de la pandemia del Covid-19.",
		 fecha:"9 de diciembre 2020", 
		 fnum:201209,
		 href:"https://portalportuario.cl/presidente-de-aapa-asegura-que-la-industria-portuaria-acepto-el-desafio-frente-a-la-pandemia/",
		 img:"https://portalportuario.cl/wp-content/uploads/2020/12/mario-cordero-400x225.jpg"
		},
		
		{
		 titulo:"Importante visita de autoridades de Nación y Provincia al puerto La Plata",
		 texto:"Leonardo Cabrera y Juan Cruz Lucero fueron recibidos por el titular del Consorcio de Gestión, Pedro Wasiejko. Consideraron de vital importancia la construcción del canal Magdalena.",
		 fecha:"10 de diciembre 2020", 
		 fnum:0,
		 href:"http://www.argenports.com.ar/nota/importante-visita-de-autoridades-portuarias-al-puerto-la-plata/",
		 img:"http://www.argenports.com.ar/public/img/notas/351/importante-visita-de-autoridades-portuarias-al-puerto-la-plata-aga-bahia-blanca-desktop.jpg"
		},

		{
		 titulo:"Visita de autoridades portuarias al Puerto La Plata",
		 texto:"El presidente del Consorcio de Gestión del Puerto La Plata, Ingeniero Pedro Wasiejko, recibió al subsecretario de Puertos, Vías Navegables y Marina Mercante de la Nación Leonardo Cabrera, al subsecretario de Asuntos Portuarios de la Provincia Juan Cruz Lucero y al intendente de Ensenada Mario Secco.",
		 fecha:"11 de diciembre 2020", 
		 fnum:201211,
		 href:"https://comex-online.com.ar/noticias/val/58153/visita-de-autoridades-portuarias-al-puerto-la-plata.html#.X9NtU9GzyEc.linkedin",
		 img:"https://comex-online.com.ar/data/img_cont/img_imagenes/img_gr/7244.jpg"
		},

		{
		 titulo:"Máximo Kirchner y el titular de la UIBB acordaron avanzar en una agenda regional",
		 texto:" El presidente del bloque de diputados del Frente de Todos, Máximo Kirchner, recibió hoy en Buenos Aires al titular de la Unión Industrial de Bahía Blanca, Gustavo Elías. Durante el encuentro se abordaron temas de interés local y regional, además, por supuesto, de puntos vinculados con las agendas de los integrantes de la institución gremial empresarial bahiense.",
		 fecha:"16 de diciembre 2020", 
		 fnum:201216,
		 href:"https://www.lanueva.com/nota/2020-12-16-20-58-0-maximo-kirchner-y-el-titular-de-la-uibb-acordaron-avanzar-en-una-agenda-regional",
		 img:"https://px.cdn.lanueva.com/122020/1608162815647.jpg"
		},
	];

	lista.canalMagdalena = [
		{
		 titulo:"Canal Magdalena, apoyo a la construcción",
		 texto:"Importante apoyo a la construcción del Canal Magdalena",
		 fecha:"19 de diciembre 2020", 
		 fnum:201219, 
		 href:"http://www.argenports.com.ar/nota/importante-apoyo-a-la-construccion-del-canal-magdalena/",
		 img:"http://www.argenports.com.ar/public/img/notas/378/importante-apoyo-a-la-construccion-del-canal-magdalena-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"Consideraciónes técnicas económicas sobre el canal de magdalena",
		 texto:"Ante los renovados planteos de estudiar al Canal Magdalena como una alternativa viable de salida hacia el Océano, se formulan a continuación algunas consideraciones que lo desaconsejan, al menos en la presente etapa. Estas consideraciones se basan en fundamentos técnicos – operativos, económicos y ambientales.",
		 fecha:"14 de diciembre 2020", 
		 fnum:201214, 
		 href:"https://www.mercojuris.com/36476/consideraciones-tecnicas-economicas-sobre-el-canal-magdalena-y-su-conjunto-dra-ma-clara-lacava-e-ing-alfredo-j-enriques/",
		 img:"http://www.mercojuris.com/wp-content/uploads/2020/12/Imagen-14.png"
		},
		
		{
		 titulo:"Cabrera aseguró que la decisión de hacer el canal Magdalena ya está tomada",
		 texto:"El funcionario nacional ratificó que Argentina hará la obra y afirmó que la idea es llevarla a cabo lo antes posible. También señaló que habrá una licitación específica, independiente de la prevista para la Hidrovía.",
		 fecha:"16 de diciembre 2020", 
		 fnum:201216, 
		 href:"https://www.linkedin.com/posts/argenports_cabrera-asegur%C3%B3-que-la-decisi%C3%B3n-de-hacer-activity-6746091834738536448-abBY",
		 img:"http://www.argenports.com.ar/public/img/notas/377/cabrera-dijo-que-la-decision-de-hacer-canal-magdalena-ya-esta-tomada-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"El Canal Magdalena a un paso de licitarse",
		 texto:"El decreto 949/2020 también se refiere al dragado de otros tramos no comprendidos en la vía troncal del Paraná.  Con todos los estudios y aprobaciones realizados, solo resta la audiencia pública y la confección de los pliegos.",
		 fecha:"29 de diciembre 2020", 
		 fnum:201229, 
		 href:"https://www-cronista-com.cdn.ampproject.org/c/s/www.cronista.com/amp/transportycargo/El-Canal-Magdalena-a-un-paso-de-licitarse-20201229-0027.html",
		 img:"https://www-cronista-com.cdn.ampproject.org/ii/w680/s/www.cronista.com/img/2020/12/29/foto_magdalena.jpeg?__scale=w:600,h:399,t:2,q:80"
		},
		
		{
		 titulo:"Canal Magdalena: está todo listo para poder licitar la obra en solo cuatro meses",
		 texto:"Ya fueron realizados y aprobados todos los estudios necesarios. Ahora sólo resta concretar la correspondiente audiencia pública y confeccionar los pliegos.",
		 fecha:"31 de diciembre 2020", 
		 fnum:201231, 
		 href:"https://www.linkedin.com/posts/argenports_canal-magdalena-est%C3%A1-todo-listo-para-poder-activity-6750062015588397056-PfwT",
		 img:"http://www.argenports.com.ar/public/img/notas/401/la-obra-del-canal-magdalena-esta-en-condiciones-de-ser-licitada-en-cuatro-meses-aga-bahia-blanca-desktop.jpg"
		},
	];

	lista.comex = [
		
		{
		 titulo:"Exportaciones agroindustriales en Argentina",
		 texto:"El sector agroindustrial de la Argentina estima que para el año 2020 se logre un ingreso de divisas de USD 21.428 millones por envíos al exterior de trigo, maíz y productos claves del complejo soja. Ello indica una merma de USD 1.320 millones o de 6%, respecto a 2019.",
		 fecha:"19 de diciembre 2020",
		 fnum:201219, 
		 href:"https://portalportuario.cl/argentina-estiman-que-exportaciones-de-principales-bienes-agroindustriales-caeran-6-en-2020/",
		 img:"https://portalportuario.cl/wp-content/uploads/2020/08/hidrovia-argentina.jpeg"
		},
		
		{
		 titulo:"“Hay que publicitar las facilidades que ofrece Puerto La Plata a los operadores de comercio exterior”",
		 texto:"Así lo expresó uno de los expertos más calificados en comercio con los países asiáticos, el profesor Ernesto Fernández Taboada, director ejecutivo del Consejo Argentino Chino, al disertar en la segunda Jornada “La Plata, un puerto en crecimiento”, que organizaron la UTN Regional La Plata y Ser Industria.",
		 fecha:"1 de enero 2021", 
		 fnum:210101,
		 href:"https://www.serindustria.com.ar/hay-que-publicitar-las-facilidades-que-ofrece-puerto-la-plata-a-los-operadores-de-comercio-exterior/",
		 img:"https://www.serindustria.com.ar/wp-content/uploads/2021/01/Ernesto-Fern%C3%A1ndez-Taboada.jpg"
		},
		
		{
		 titulo:"Tormenta perfecta para los flujos globales de contenedores",
		 texto:"El almacenaje en Estados Unidos y Europa aumenta la demanda en la cadena logística. Está reducida la capacidad portuaria, y faltan buques, contenedores y camiones",
		 fecha:"22 de diciembre 2020", 
		 fnum:201222,
		 href:"https://www.cronista.com/transportycargo/Tormenta-perfecta-para-los-flujos-globales-de-contenedores-20201222-0035.html",
		 img:"https://www.cronista.com/__export/1608664918297/sites/diarioelcronista/img/2020/12/22/dominguez.jpg_258117318.jpg"
		},

		{
		 titulo:"Sectores del campo presentan un plan para que el Gobierno no cierre las exportaciones de maíz",
		 texto:"Propondrán estimular una mayor siembra del grano y así asegurar la disponibilidad necesaria para el mercado doméstico.",
		 fecha:"5 de enero 2021", 
		 fnum:210105,
		 href:"https://www-cronista-com.cdn.ampproject.org/c/s/www.cronista.com/amp/economiapolitica/Sectores-del-campo-presentan-un-plan-para-que-el-Gobierno-no-cierre-las-exportaciones-de-maiz-20210105-0020.html",
		 img:"https://www-cronista-com.cdn.ampproject.org/ii/w680/s/www.cronista.com/__export/1601292170776/sites/diarioelcronista/img/2020/09/28/granos_crop1601292170061.png_147459497.png"
		},
		
		{
		 titulo:"Argentina: El 92% de las exportaciones de graneles agrícolas provienen del complejo maíz, soja y trigo",
		 texto:"Foro Logístico de Buenos Aires analizó el presente y futuro de la logística exportadora del país sudamericano",
		 fecha:"6 de enero 2021", 
		 fnum:210106,
		 href:"https://www.mundomaritimo.cl/noticias/argentina-el-92-de-las-exportaciones-de-graneles-agricolas-provienen-del-complejo-maiz-soja-y-trigo?platform=hootsuite",
		 img:"https://www.mundomaritimo.cl/noticias/get_image/47626/798"
		},
		
		{
		 titulo:"El trigo cierra la campaña 2019/20 con el segundo volumen exportado más alto de la historia",
		 texto:"La cosecha de trigo 2019/20 subió más de un 5% comparada con la campaña anterior, aunque en valor las exportaciones fue un 6% menor por la baja de precios. La molienda de trigo alcanzó máximos de 7 años.",
		 fecha:"30 de diciembre 2020", 
		 fnum:201230,
		 href:"https://www.bcr.com.ar/es/mercados/investigacion-y-desarrollo/informativo-semanal/noticias-informativo-semanal/el-trigo-24",
		 img:"https://www.bcr.com.ar/sites/default/files/styles/free/public/balance_trigo_1_0.png?itok=toMGFRMi"
		},
	];

	lista.logistica = [
		{
		 titulo:"Agenda digital Puerto Buenos Aires",
		 texto:"Agentes marítimos y despachantes piden una agenda digital para el futuro Puerto Buenos Aires",
		 fecha:"18 de diciembre 2020", 
		 fnum:201218, 
		 href:"https://portalportuario.cl/agentes-maritimos-y-despachantes-piden-una-agenda-digital-para-el-futuro-puerto-buenos-aires/",
		 img:"https://portalportuario.cl/wp-content/uploads/2020/12/Futuro-puerto-Buenos-Aires-400x267.jpg"
		},
		
		{
		 titulo:"Consideraciónes técnicas económicas sobre el canal de magdalena",
		 texto:"Ante los renovados planteos de estudiar al Canal Magdalena como una alternativa viable de salida hacia el Océano, se formulan a continuación algunas consideraciones que lo desaconsejan, al menos en la presente etapa. Estas consideraciones se basan en fundamentos técnicos – operativos, económicos y ambientales.",
		 fecha:"14 de diciembre 2020", 
		 fnum:201214, 
		 href:"https://www.mercojuris.com/36476/consideraciones-tecnicas-economicas-sobre-el-canal-magdalena-y-su-conjunto-dra-ma-clara-lacava-e-ing-alfredo-j-enriques/",
		 img:"http://www.mercojuris.com/wp-content/uploads/2020/12/Imagen-14.png"
		},
		
		{
		 titulo:"Acuerdo empresarial en el sur bonaerense para potenciar la producción",
		 texto:"La necesidad de desarrollar un eje estratégico en común fue acordada por los presidentes de la Unión Industrial de Bahía Blanca y de la Cámara de Profesionales y Empresarios de Puerto Quequén.",
		 fecha:"31 de diciembre 2020", 
		 fnum:201231, 
		 href:"http://www.argenports.com.ar/nota/acuerdo-empresarial-en-el-sur-bonaerense-para-potenciar-la-produccion-y-los-puertos/",
		 img:"http://www.argenports.com.ar/public/img/notas/405/acuerdo-empresarial-en-el-sur-bonaerense-para-potenciar-la-produccion-y-los-puertos-aga-bahia-blanca-desktop.jpg"
		},
		{
		 titulo:"AL GRANO",
		 texto:"El futuro de la hidrovía y del Puerto de Buenos Aires, son dos temas claves que requieren profundo análisis, trascienden fronteras y comprometen el porvenir del comercio exterior de la Argentina.",
		 fecha:"27 de noviembre 2020", 
		 fnum:201127,
		 href:"https://comex-online.com.ar/noticias/val/58127/al-grano-.html",
		 img:"https://comex-online.com.ar/data/img_cont/img_imagenes/img_gr/7208.jpg"
		},
		
		{
		 titulo:"Ministerio de Transportes anunció inversión de US$12 mil millones en mantenimiento de puertos",
		 texto:"El Ministerio de Transportes de Argentina anunció convenios de asistencia a distintos puertos, obras que significan una inversión estatal de más de US$12.000 millones en puertos del país.",
		 fecha:"2 de diciembre 2020", 
		 fnum:201202,
		 href:"https://www.mundomaritimo.cl/noticias/argentina-ministerio-de-transportes-anuncio-inversion-de-us12-mil-millones-en-mantenimiento-de-puertos?platform=hootsuite",
		 img:"https://www.mundomaritimo.cl/noticias/get_image/47267/798"
		},
		
		{
		 titulo:"Five port digitalization trends to watch in 2021",
		 texto:"Seaports play a key role in supporting a nation’s global competitiveness and 2020 was a challenging year for port operations. Here are five trends that kept ports operating efficiently throughout the many challenges of 2020.",
		 fecha:"11 de diciembre 2020", 
		 fnum:201211,
		 href:"https://spire.com/blog/maritime/port-data-and-digitalization-trends/",
		 img:"https://3qjvwc2vv8nz2r2w5vhhzkj4-wpengine.netdna-ssl.com/wp-content/themes/spire/css/../img/homebg2.jpg"
		},
		
		{
		 titulo:"Proponen una hidrovía verde, sustentable e inteligente",
		 texto:"Distintos referentes de la región plantean una mirada superadora para esta autopista fluvial",
		 fecha:"10 de diciembre 2020", 
		 fnum:201210,
		 href:"https://www.cronista.com/transportycargo/Proponen-una-hidrovia-verde-sustentable-e-inteligente-20201210-0028.html",
		 img:"https://www.cronista.com/img/2020/12/10/hidro.jpeg?__scale=w:829,h:466,c:d0d0d0,q:80"
		},
		
		{
		 titulo:"Projeto BR do Mar: bons ventos para a cabotagem",
		 texto:"Um aumento de 1,2 milhão para 2 milhões de contêineres anuais movimentados nos portos brasileiros. Essa é uma das metas do Projeto de Lei 4199/2020, ou Programa de Estímulo ao Transporte por Cabotagem, também conhecido como BR do Mar. E as perspectivas são animadoras, mas também vêm com um alerta: com uma maior frota, a indústria naval precisará estar preparada para a demanda.",
		 fecha:"30 de noviembre 2020", 
		 fnum:201130,
		 href:"https://www.portosenavios.com.br/artigos/artigos-de-opiniao/projeto-br-do-mar-bons-ventos-para-a-cabotagem",
		 img:"https://cdn-pen.nuneshost.com/images/181122-navio-proa-sea-boat.jpg"
		},
		
		{
		 titulo:"Firman un acuerdo para la creación del Consorcio Logístico Villa Mercedes – Puerto de La Plata",
		 texto:"Se trata de una Carta de Intención que suscribieron entre el INTA, el Consorcio de Gestión del Puerto de La Plata y el Gobierno de San Luis para la creación de ese Consorcio Logístico.",
		 fecha:"16 de diciembre 2020", 
		 fnum:201216,
		 href:"https://comex-online.com.ar/noticias/val/58162/firman-un-acuerdo-para-la-creacion-del-consorcio-logistico-villa-mercedes-%E2%80%93-puerto-de-la-plata.html#.X9tFyjT8L9w.linkedin",
		 img:"https://comex-online.com.ar/data/img_cont/img_imagenes/img_gr/7258.jpeg"
		},
		
		{
		 titulo:"LA REACTIVACIÓN DEL TREN NORPATAGÓNICO GENERARÁ ACTIVIDAD ECONÓMICA Y NUEVOS EMPLEOS EN RÍO NEGRO",
		 texto:"El Tren Norpatagónico unirá la ciudad neuquina de Añelo, cabecera de Vaca Muerta, con el puerto bonaerense de Bahía Blanca y también -en una segunda etapa- con el rionegrino de San Antonio Este.",
		 fecha:"5 de enero de 2021", 
		 fnum:210105,
		 href:"https://vacamuertanews.com/ver_noticia.php?id=20210105000201",
		 img:"https://vacamuertanews.com/noticias/2021/01/max/20210105000201.jpg"
		},
		
		{
		 titulo:"Tormenta perfecta para los flujos globales de contenedores",
		 texto:"El almacenaje en Estados Unidos y Europa aumenta la demanda en la cadena logística. Está reducida la capacidad portuaria, y faltan buques, contenedores y camiones",
		 fecha:"22 de diciembre 2020", 
		 fnum:201222,
		 href:"https://www.cronista.com/transportycargo/Tormenta-perfecta-para-los-flujos-globales-de-contenedores-20201222-0035.html",
		 img:"https://www.cronista.com/__export/1608664918297/sites/diarioelcronista/img/2020/12/22/dominguez.jpg_258117318.jpg"
		},

		{
		 titulo:"El Foro Logístico de Buenos Aires sentó su postura",
		 texto:"Inversiones, altos costos operativos, carga impositiva y la necesaria transformación digital figuran entre las prioridades del grupo de expertos",
		 fecha:"5 de enero 2021", 
		 fnum:210105,
		 href:"https://www.cronista.com/transportycargo/El-Foro-Logistico-de-Buenos-Aires-sento-su-postura-20210105-0056.html",
		 img:"https://www.cronista.com/__export/1609889785840/sites/diarioelcronista/img/2021/01/05/foro.jpg_258117318.jpg"
		},
		
		{
		 titulo:"China quiere seguridad alimentaria y hará el banco de semillas más grande del mundo",
		 texto:"La interrupción de las cadenas de suministro durante la pandemia de coronavirus aceleró la decisión del gobierno de Xi Jinping por mejorar su producción cerealera y desarrollar nuevas variedades de cultivos. ",
		 fecha:"6 de enero 2021", 
		 fnum:210106,
		 href:"https://www.cronista.com/internacionales/China-quiere-seguridad-alimentaria-y-hara-el-banco-de-semillas-mas-grande-del-mundo-20210106-0019.html",
		 img:"https://www.cronista.com/__export/1609955057215/sites/diarioelcronista/img/2021/01/06/semillas_china_maiz_xinhua_2_crop1609955056711.jpg_258117318.jpg"
		},
		
		{
		 titulo:"Ocean stewardship begins with sharing information, requires courage and leadership",
		 texto:"Martin Exel, managing director of Seafood Business for Ocean Stewardship (SeaBOS), speaks on the importance of the seafood industry’s role in promoting transparency and sustainability.  Information sharing has the ability to transform fisheries governance. Through increased transparency and cutting-edge technology and analysis, Global Fishing Watch is supporting governments around the world in their management efforts. ",
		 fecha:"4 de agosto 2020", 
		 fnum:200804,
		 href:"https://globalfishingwatch.org/news-views/seafood-sector-transparency/",
		 img:"https://globalfishingwatch.org/wp-content/uploads/hero_image-2.jpg"
		},
		
		{
		 titulo:"Las Cadenas de Valor Global y las posibilidades de Argentina",
		 texto:"El paso del tiempo tiene la particularidad de generar más preguntas que respuestas y la evolución de los conceptos no es imbatible a la lógica temporal. En ese sentido, las Cadenas de Valor Global (CVG) surgen como una forma de entender los procesos de suma de valor agregado a las materias primas como sí cada empresa e industria tuviera sus propias cadenas de valor agregado.",
		 fecha:"15 de marzo 2019", 
		 fnum:190315,
		 href:"https://eleconomista.com.ar/2019-03-las-cadenas-de-valor-global-y-las-posibilidades-de-argentina/",
		 img:"https://eleconomista.com.ar/wp-content/uploads/2018/07/Mapa-Argentina.png"
		},
		
		{
		 titulo:"Altos costos operativos, un problema recurrente de la logística de exportación en el país",
		 texto:"El Foro Logístico de Buenos Aires convocó a representantes de la Bolsa de Comercio de Buenos Aires, UIA, navieras y puertos, para analizar el futuro de los flujos de carga.",
		 fecha:"7 de enero 2021", 
		 fnum:210107,
		 href:"http://www.argenports.com.ar/nota/altos-costos-operativos-un-problema-recurrente-de-la-logistica-de-exportacion-en-el-pais/",
		 img:"http://www.argenports.com.ar/public/img/notas/417/altos-costos-operativos-un-problema-recurrente-de-la-logistica-de-exportacion-en-el-pais-aga-bahia-blanca-desktop.jpg"
		},
		
		{
		 titulo:"El futuro de la logística de exportación argentina",
		 texto:"El tema fue analizado en el Foro Logístico de Buenos Aires. El evento contó con la presencia de representantes de la Bolsa de Comercio de Rosario, la Unión Industrial Argentina, navieras y puertos",
		 fecha:"6 de enero de 2021", 
		 fnum:210106,
		 href:"https://comex-online.com.ar/noticias/val/58194/el-futuro-de-la-logistica-de-exportacion-argentina-.html#.X_dXYpdUHiU.linkedin",
		 img:"https://comex-online.com.ar/data/img_cont/img_imagenes/img_gr/7296.jpeg"
		},
	];

	lista.paro = [
		
		{
		 titulo:"Puertos paralizados, se agrava el paro de remolcadores",
		 texto:"Se endureció la postura de los gremios y por el paro de remolques, ya no entran ni siquiera los buques que traigan insumos para combatir el coronavirus.",
		 fecha:"2 de enero 2021", 
		 fnum:210102,
		 href:"https://www.cronista.com/transportycargo/Puertos-paralizados-se-agrava-el-paro-de-remolcadores-20210102-0007.html",
		 img:"https://www.cronista.com/__export/1609603099270/sites/diarioelcronista/img/2021/01/02/servicios_remolque1_1.jpg_673822677.jpg"
		},
		
		{
		 titulo:"Centro de Navegación pide a autoridades intervenir en paro de remolcadores",
		 texto:"El Centro de Navegación de Argentina, institución que agrupa a las agencias marítimas, empresas que representan a la mayoría de los buques dedicados al transporte fluvial marítimo nacional e internacional de cargas y pasajeros, pidió a autoridades del Gobierno trasandino que intervinieran en la paralización que llevan a cabo algunos servicios de remolcadores en el país.",
		 fecha:"2 de enero 2021", 
		 fnum:210102,
		 href:"https://portalportuario.cl/argentina-centro-de-navegacion-pide-a-autoridades-intervenir-en-paro-de-remolcadores/",
		 img:"https://portalportuario.cl/wp-content/uploads/2021/01/remolque-argentina.jpg"
		},
		
		{
		 titulo:"Argentina: Remolcadores mantienen paro y suspenden, incluso, asistencia de seguridad a tanqueros",
		 texto:"El Centro de Patrones, de Jefes y Oficiales Maquinistas Navales, el Sindicato de Conductores Navales y el Sindicato Obreros Marítimos Unidos (SOMU) con la Cámara de Remolque (CAR) se mantienen en negociaciones, en medio del paro del gremio remolcador, informó El Cronista. Pese a que en un comienzo los trabajadores notificaron que los remolcadores asistirían el zarpe de tanqueros, endurecieron su postura, suspendiendo las excepciones de atención de buques.",
		 fecha:"4 de enero 2021", 
		 fnum:210104,
		 href:"https://www.mundomaritimo.cl/noticias/argentina-remolcadores-mantienen-paro-y-suspenden-incluso-asistencia-de-seguridad-a-tanqueros?platform=hootsuite",
		 img:"https://www.mundomaritimo.cl/noticias/get_image/47602/798"
		},
		
		{
		 titulo:"Tras el paro, decenas de barcos ingresaron a los puertos de Rosario y Bahía Blanca",
		 texto:"Decenas de barcos cargueros ingresaron  a los puertos del Gran Rosario y Bahía Blanca para realizar operaciones de carga y descarga tras la resolución del conflicto laboral que paralizó los muelles exportadores a lo largo de las últimas tres semanas. Ocurrió el 30 de diciembre.",
		 fecha:"4 de enero 2021", 
		 fnum:210104,
		 href:"https://www.mercojuris.com/36816/tras-el-paro-decenas-de-barcos-ingresaron-a-los-puertos-de-rosario-y-bahia-blanca/",
		 img:"http://www.mercojuris.com/wp-content/uploads/2021/01/Bacos.jpg"
		},
		
		{
		 titulo:"Paro portuario: hay acuerdo y vuelven a operar los remolcadores",
		 texto:"Tras arduas negociaciones, los gremios resolvieron levantar la medida de fuerza. Queda ahora resolver el descalabro logístico producido por la cancelación de escalas y desvío de buques durante el conflicto",
		 fecha:"7 de enero 2021", 
		 fnum:210107,
		 href:"https://www.cronista.com/transportycargo/Paro-portuario-hay-acuerdo-y-vuelven-a-operar-los-remolcadores-20210107-0030.html",
		 img:"https://www.cronista.com/__export/1610037735470/sites/diarioelcronista/img/2021/01/07/paro_remoloques_crop1610037734809.jpg_258117318.jpg"
		},
	];

}
);