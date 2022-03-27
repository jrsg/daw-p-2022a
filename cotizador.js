var modelos = {
'Audi':['A1', 'A3',   'A4',   'A5',   'A6',   'A7',   'A8',   'Q3',   'Q5',   'Q7',   'TT',   'R8',   'e-tron'],
'BMW':['Serie 1', 'Serie 3',  'Serie 5',  'Serie 6',  'Serie 7',  'X1',   'X3',   'X5',   'X6',   'Z3',   'Z4',   'M3',   'M5',   'M6'],
'Buick':['Enclave', 'Lacrosse', 'Regal', 'Verano'],
'Chevrolet':['Avalanche',   'Aveo', 'Camaro',   'Captiva',  'Cavalier', 'Chevy',  'Chevy Monza',  'Cheyenne', 'Colorado', 'Corsa',    'Corvette', 'Cruze',    'Express',  'Impala',   'Malibú',   'Matiz',    'Silverado',    'Silverado 3500',   'Sonic',    'Spark',    'Suburban', 'Tahoe',    'Tornado',  'Tracker',  'Traverse', 'Trax'],
'Chrysler':['200',  '300',  'Cirrus',   'PT Cruiser',   'Town & Country',   'Voyager'],
'Dodge':['Atos',    'Attitude', 'Avenger',  'Challenger',   'Charger',  'Dart', 'Durango',  'GTS',  'i10',  'Journey',  'Neon', 'Shadow',   'Spirit',   'Stratus'],
'FIAT':['F500', 'Ducato',   'Palio',    'Punto',    'Strada',   'Uno'],
'Ford':['Chassis Cab',  'C-Max',    'Edge', 'Escape',   'EcoSport', 'E-Series Cutaway', 'E-Series Van', 'E-Series Wagon',   'Expedition',   'Explorer', 'F1-50',    'F-650/F-750',  'Fiesta',   'Flex', 'Focus',    'F-Series', 'Fusion',   'IKON', 'Mondeo',   'Mustang',  'Ranger',   'Stripped Chassis', 'Super Duty',   'Super Duty Pick Up',   'Taurus',   'Transit',  'Transit Connect'],
'GMC':['Terrain',   'Acadia',   'Sierra',   'Yukon'],
'Honda':['Accord',  'City', 'Civic',    'Crosstour',    'CR-V', 'Fit',  'Odyssey',  'Pilot'],
'Hummer':['H1', 'H2',   'H3'],
'Infiniti':['G Sedán',  'G Coupé',  'M',    'QX70', 'QX80', 'JX'],
'Jeep':['Compass',  'Grand Cherokee',   'Liberty',  'Patriot',  'Wrangler'],
'Land Rover':['Land Rover Defender',    'Land Rover LR2',   'Land Rover LR4',   'Range Rover Evoque',   'Range Rover Sport',    'Range Rover'],
'Lincoln':['Mark LT',   'MKS',  'MKX',  'MKZ',  'Navigator'],
'Mazda':['CX-5',    'CX-9', 'Mazda 2',  'Mazda 3',  'Mazda 5',  'Mazda 6',  'MX-5', 'RX-8'],
'Mercedes-Benz':['Clase A', 'Clase B',  'Clase C',  'Clase CL', 'Clase CLA',    'Clase CLS',    'Clase E',  'Clase G',  'Clase GL', 'Clase GLK',    'Clase M',  'Clase R',  'Clase S',  'Clase SL', 'Clase SLK',    'SLS AMG',  'Viano'],
'Mercury':['Milán', 'Grand Marquis',    'Mariner',  'Mountaineer'],
'Mini':['Mini Cooper','Mini Clubman'],
'Mitsubishi':['Eclipse',    'Endeavor', 'Galant',   'Lancer',   'Montero Sport',    'Outlander'],
'Nissan':['Altima', 'Armada',   'Caravan / Urvan',  'Frontier / Navara',    'Juke', 'Leaf', 'March / Micra',    'Maxima',   'Murano',   'Note', 'NP200',    'NP300',    'NV350 Caravan',    'Pathfinder',   'Platina',  'Quest',    'Rogue',    'Sentra',   'Tiida',    'Titan',    'Tsuru',    'Versa',    'Xterra',   'X-Trail'],            
'Peugeot':['207',   '208',  '301',  '308',  '508',  '3008', 'Manager',  'Partner',  'RCZ'],
'Pontiac':['Aztek', 'Firebird', 'G3',   'G5',   'G6',   'G8',   'Grand AM', 'Grand PRIX',   'Trans Am', 'Solstice'],
'RAM':['ST',    '4000', 'Crew Cab Longhorn',    'Crew Cab SLT', 'H100', 'Heavy Duty',   'Hemi Sport',   'Ragular Cab RT',   'Regular Cab STL'],
'Renault':['Clio',  'Duster',   'Fluence',  'Kangoo',   'Koleos',   'Safrane',  'Sandero',  'Stepway'],
'Seat':['Altea',    'Córdoba',  'Freetrack',    'Ibiza',    'León', 'Toledo'],            
'Subaru':['Impreza',    'Subaru XV',    'Legacy',   'WRX',  'Forester', 'Outback'],
'Suzuki':['Swift',  'SX4',  'Kizashi',  'Grand Vitara'],
'Toyota':['4Runner',    'Avanza',   'Camry',    'Corolla',  'FJ Cruiser',   'Hiace',    'Highlander',   'Hilux',    'Rav4', 'Sequoia',  'Sienna',   'Tacoma',   'Tundra',   'Yaris'],
'Volkswagen':['Amarok', 'Beetle',   'Beetle (Vocho)',   'Clásico',  'Crossfox', 'Derby',    'Gol',  'Golf', 'Jetta',    'Passat',   'Polo', 'Saveiro',  'Sharan',   'Tiguan',   'Touareg'],
'Volvo':['S60', 'S80',  'V40',  'V60',  'XC60', 'XC90', 'C30']
}
			
			
$(document).ready(function(){
	$("#confirmacion").dialog({
	  width: 950,
	  height:700,
	  autoOpen:false,
	  modal:true
	});
	
	$("#errores").dialog({
	  width: 580,
	  height:225,
	  autoOpen:false,
	  modal:true
	});
});

function mostrarResumen(){
	$("#confirmacion").dialog("open");
}

function mostrarErrores(){
	$("#errores").dialog("open");
}