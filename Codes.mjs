const CODES = [
  {
    "code": "0001",
    "name": "Banco Central de Venezuela",
    "legalName": "Banco Central de Venezuela",
    "shortName": "BCV",
    "rif": "G200001100",
    "url": "https://www.bcv.org.ve/"
  },
  {
    "code": "0102",
    "name": "Banco de Venezuela",
    "legalName": "Banco de Venezuela, S.A. Banco Universal",
    "shortName": "BDV",
    "rif": "G200099976",
    "url": "http://www.bancodevenezuela.com/"
  },
  {
    "code": "0104",
    "name": "Banco Venezolano de Crédito",
    "legalName": "Venezolano de Crédito, S.A. Banco Universal",
    "shortName": "BVC",
    "rif": "J000029709",
    "url": "http://www.venezolano.com/"
  },
  {
    "code": "0105",
    "name": "Mercantil Banco",
    "legalName": "Banco Mercantil, C.A. Banco Universal",
    "shortName": "Mercantil",
    "rif": "J000029610",
    "url": "https://www.mercantilbanco.com/"
  },
  {
    "code": "0108",
    "name": "BBVA Provincial",
    "legalName": "Banco Provincial, S.A. Banco Universal",
    "shortName": "Provincial",
    "rif": "J000029679",
    "url": "https://www.provincial.com/"
  },
  {
    "code": "0114",
    "name": "Bancaribe",
    "legalName": "Banco del Caribe, C.A. Banco Universal",
    "shortName": "Bancaribe",
    "rif": "J000029490",
    "url": "https://www.bancaribe.com.ve/"
  },
  {
    "code": "0115",
    "name": "Banco Exterior",
    "legalName": "Banco Exterior, C.A. Banco Universal",
    "shortName": "Exterior",
    "rif": "J000029504",
    "url": "http://www.bancoexterior.com/"
  },
  {
    "code": "0128",
    "name": "Banco Caroní",
    "legalName": "Banco Caroni, C.A. Banco Universal",
    "shortName": "Caroní",
    "rif": "J095048551",
    "url": "http://www.bancocaroni.com.ve/"
  },
  {
    "code": "0134",
    "name": "Banesco",
    "legalName": "Banesco Banco Universal, C.A",
    "shortName": "Banesco",
    "rif": "J070133805",
    "url": "http://www.banesco.com/"
  },
  {
    "code": "0137",
    "name": "Banco Sofitasa",
    "legalName": "Banco Sofitasa Banco Universal, C. A",
    "shortName": "Sofitasa",
    "rif": "J090283846",
    "url": "http://www.sofitasa.com/"
  },
  {
    "code": "0138",
    "name": "Banco Plaza",
    "legalName": "Banco Plaza, C.A. Banco Universal",
    "shortName": "Plaza",
    "rif": "J002970553",
    "url": "http://www.bancoplaza.com/"
  },
  {
    "code": "0146",
    "name": "Banco de la Gente Emprendedora",
    "legalName": "Banco de la Gente Emprendedora (BANGENTE), C.A",
    "shortName": "Bangente",
    "rif": "J301442040",
    "url": "http://www.bangente.com.ve/"
  },
  {
    "code": "0151",
    "name": "Banco Fondo Común",
    "legalName": "BFC Banco Fondo Común C.A. Banco Universal",
    "shortName": "BFC",
    "rif": "J000723060",
    "url": "https://www.bfc.com.ve/"
  },
  {
    "code": "0156",
    "name": "100% Banco",
    "legalName": "100% Banco, Banco Universal C.A.",
    "shortName": "100% Banco",
    "rif": "J085007768",
    "url": "http://www.100x100banco.com/"
  },
  {
    "code": "0157",
    "name": "DelSur",
    "legalName": "DelSur Banco Universal, C.A.",
    "shortName": "DelSur",
    "rif": "J000797234",
    "url": "http://www.delsur.com.ve/"
  },
  {
    "code": "0163",
    "name": "Banco del Tesoro",
    "legalName": "Banco del Tesoro, C.A. Banco Universal",
    "shortName": "Tesoro",
    "rif": "G200051876",
    "url": "http://www.bt.gob.ve/"
  },
  {
    "code": "0166",
    "name": "Banco Agrícola de Venezuela",
    "legalName": "Banco Agrícola de Venezuela C.A. Banco Universal",
    "shortName": "BAV",
    "rif": "G200057955",
    "url": "http://www.bav.com.ve/"
  },
  {
    "code": "0168",
    "name": "Bancrecer",
    "legalName": "Bancrecer S.A. Banco Microfinanciero",
    "shortName": "Bancrecer",
    "rif": "J316374173",
    "url": "https://www.bancrecer.com.ve/"
  },
  {
    "code": "0169",
    "name": "Mi Banco",
    "legalName": "Mi Banco, Banco Microfinanciero C.A.",
    "shortName": "Mi Banco",
    "rif": "J315941023",
    "url": "http://www.mibanco.com.ve/"
  },
  {
    "code": "0171",
    "name": "Banco Activo",
    "legalName": "Banco Activo C.A. Banco Universal",
    "shortName": "Activo",
    "rif": "J080066227",
    "url": "http://www.bancoactivo.com/"
  },
  {
    "code": "0172",
    "name": "Bancamiga",
    "legalName": "Bancamiga Banco Universal, C.A.",
    "shortName": "Bancamiga",
    "rif": "J316287599",
    "url": "http://www.bancamiga.com/"
  },
  {
    "code": "0173",
    "name": "Banco Internacional de Desarrollo",
    "legalName": "Banco Internacional de Desarrollo, C.A. Banco Universal",
    "shortName": "B.I.D",
    "rif": "J294640109",
    "url": "http://www.bid.com.ve/"
  },
  {
    "code": "0174",
    "name": "Banplus",
    "legalName": "Banplus Banco Universal, C.A",
    "shortName": "Banplus",
    "rif": "J000423032",
    "url": "http://www.banplus.com/"
  },
  {
    "code": "0175",
    "name": "Banco Bicentenario",
    "legalName": "Banco Bicentenario del Pueblo de la Clase Obrera, Mujer y Comunas, Banco Universal.",
    "shortName": "Bicentenario",
    "rif": "G200091487",
    "url": "https://www.bicentenariobu.com.ve/"
  },
  {
    "code": "0177",
    "name": "Banco de la Fuerza Armada Nacional Bolivariana",
    "legalName": "Banco de la Fuerza Armada Nacional Bolivariana Bco Universal",
    "shortName": "BANFANB",
    "rif": "G200106573",
    "url": "http://www.banfanb.com.ve/"
  },
  {
    "code": "0178",
    "name": "N58 Banco Digital",
    "legalName": "N58 Banco Digital, Banco Microfinanciero, S.A.",
    "shortName": "N58",
    "rif": "J503581107",
    "url": "https://www.n58bancodigital.com",
  },
  {
    "code": "0191",
    "name": "Banco Nacional de Crédito",
    "legalName": "Banco Nacional de Crédito, C.A. Banco Universal",
    "shortName": "BNC",
    "rif": "J309841327",
    "url": "http://www.bnc.com.ve/"
  }
]

export default CODES