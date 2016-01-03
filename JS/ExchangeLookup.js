//Input market code or acronym, return object with full name, website, support email, holiday calendar site
//If exch not in dictionary, return link to listing of Market Identification Codes

//TODO: Build out list to all derivative markets exchanges (currently just primary exchanges)
//TODO: Options, Futures, Options and Futures
//TODO: Market geographic location
//TODO: Exchange specialization (ex: single stock, metals, agriculture, etc.)

function exchange (market){

	var marketCode = {
		CME: {name:'Chicago Merchantile Exchange', website:'http://www.cmegroup.com/', email:'ccs@cmegroup.com', holiday:'http://www.cmegroup.com/tools-information/holiday-calendar/'},
		CMECE: {name:'CME Clearing Europe', website:'http://www.cmegroup.com/europe/clearing-europe/', email:'ccs@cmegroup.com', holiday:'http://www.cmegroup.com/tools-information/holiday-calendar/'},
		CBOT: {name:'Chicago Board of Trade', website:'http://www.cmegroup.com/company/cbot.html', email:'ccs@cmegroup.com', holiday:'http://www.cmegroup.com/tools-information/holiday-calendar/'},
		CBT: {name:'Chicago Board of Trade', website:'http://www.cmegroup.com/company/cbot.html', email:'ccs@cmegroup.com', holiday:'http://www.cmegroup.com/tools-information/holiday-calendar/'},
		NYMEX: {name:'New York Mercantile Exchange', website:'http://www.cmegroup.com/company/nymex.html', email:'ccs@cmegroup.com', holiday:'http://www.cmegroup.com/tools-information/holiday-calendar/'},
		COMEX: {name:'Commodity Exchange', website:'http://www.cmegroup.com/company/comex.html', email:'ccs@cmegroup.com', holiday:'http://www.cmegroup.com/tools-information/holiday-calendar/'},
		ERIS: {name:'Eris Exchange', website:'http://www.erisfutures.com/', email:'clientservices@erisfutures.com', holiday:'http://www.erisfutures.com/trading-hours-and-holidays'},
		CFE: {name:'CBOE Futures Exchange (Cleared by OCC)', website:'http://cfe.cboe.com/', email:'ehelpdesk@cboe.com', holiday:'http://cfe.cboe.com/aboutcfe/expirationcalendar.aspx'},
		XCBF: {name:'CBOE Futures Exchange (Cleared by OCC)', website:'http://cfe.cboe.com/', email:'ehelpdesk@cboe.com', holiday:'http://cfe.cboe.com/aboutcfe/expirationcalendar.aspx'},
		ICE: {name:'Intercontinental Exchange', website:'https://www.theice.com/index', email:'icehelpdesk@theice.com', holiday:'https://www.theice.com/holiday-hours'},
		IFUS: {name:'ICE Futures U.S', website:'https://www.theice.com/futures-us', email:'icehelpdesk@theice.com', holiday:'https://www.theice.com/holiday-hours'},
		IFEU: {name:'ICE Futures Europe', website:'https://www.theice.com/futures-europe', email:'icehelpdesk@theice.com', holiday:'https://www.theice.com/holiday-hours'},
		IFSG: {name:'ICE Futures Singapore', website:'https://www.theice.com/futures-europe', email:'icehelpdesk@theice.com', holiday:'https://www.theice.com/holiday-hours'},
		OCC: {name:'Options Clearing Corporation', website:'http://www.optionsclearing.com/', email:'memberservices@theocc.com', holiday:'http://www.optionsclearing.com/webapps/infomemos?query=holiday&submit-search.x=0&submit-search.y=0&submit-search=search'},
		ONE: {name:'OneChicago (Cleared by OCC)', website:'http://www.onechicago.com/', email:'memberservices@theocc.com', holiday:'http://www.optionsclearing.com/webapps/infomemos?query=holiday&submit-search.x=0&submit-search.y=0&submit-search=search'},
		NFX: {name:'NASDAQ OMX Futures Exchange (Cleared by OCC)', website:'http://business.nasdaq.com/nasdaq-futures/nfx-market', email:'memberservices@theocc.com', holiday:'http://www.nasdaqomx.com/searchresult?q=holiday+NFX'},
		PBOT: {name:'NASDAQ OMX Futures Exchange (Cleared by OCC)', website:'http://business.nasdaq.com/nasdaq-futures/nfx-market', email:'memberservices@theocc.com', holiday:'http://www.nasdaqomx.com/searchresult?q=holiday+NFX'},
		ELX: {name:'ELX (Cleared by OCC)', website:'http://www.elxmarkets.com/', email:'email@elxmarkets.com', holiday:'http://www.elxmarkets.com/Futures/Trading-Hours.aspx'},
		XELX: {name:'ELX (Cleared by OCC)', website:'http://www.elxmarkets.com/', email:'email@elxmarkets.com', holiday:'http://www.elxmarkets.com/Futures/Trading-Hours.aspx'},
		EUREX: {name:'Eurex Exchange', website:'http://www.eurexchange.com/exchange-en/', email:'member.section@eurexchange.com', holiday:'http://www.eurexchange.com/exchange-en/trading/trading-calendar/holiday-regulations'},
		LME: {name:'London Metal Exchange', website:'https://www.lme.com/', email:'', holiday:'https://www.lme.com/search/?keywords=holiday&sort=Latest&id='},
		SGX: {name:'Singapore Exchange', website:'http://www.sgx.com/', email:'asksgx@sgx.com', holiday:'http://www.sgx.com/wps/portal/sgxweb/home/trading/derivatives/trading_hours_calendar'},
		IMM:{name:'International Monetary Market (CME)', website:'http://www.cmegroup.com/', email:'ccs@cmegroup.com', holiday:'http://www.cmegroup.com/tools-information/holiday-calendar/'},
		KCBT: {name:'Kansas City Board of Trade (CME)', website:'http://www.cmegroup.com/trading/agricultural/', email:'ccs@cmegroup.com', holiday:'http://www.cmegroup.com/tools-information/holiday-calendar/'},
		MGEX: {name:'Minneapolis Grain Exchange', website:'http://www.mgex.com/', email:'mgex@mgex.com', holiday:'http://www.mgex.com/mgex_dates.html'},
		MGE: {name:'Minneapolis Grain Exchange', website:'http://www.mgex.com/', email:'mgex@mgex.com', holiday:'http://www.mgex.com/mgex_dates.html'},
		CCE: {name:'Chicago Climate Exchange (ICE)', website:'https://www.theice.com/ccx', email:'icehelpdesk@theice.com', holiday:'https://www.theice.com/holiday-hours'},
		MX: {name:'Montreal Exchange (TMX)', website:'https://www.m-x.ca/accueil_en.php', email:'samsupport@m-x.ca', holiday:'https://www.m-x.ca/qui_jours_en.php'},
		BDM: {name:'Bourse de Montréal (Montreal Exchange / TMX)', website:'https://www.m-x.ca/accueil_en.php', email:'samsupport@m-x.ca', holiday:'https://www.m-x.ca/qui_jours_en.php'},
		TMX: {name:'TMX (Montreal Exchange / TMX)', website:'https://www.tmx.com/', email:'info@tmx.com', holiday:'https://www.tmx.com/newsroom/press-releases?id=385'},
		CDCC: {name:'Canadian Derivatives Clearing Corporation (Montreal Exchange)', website:'http://www.cdcc.ca/index_en', email:'cdcc-ops@cdcc.ca', holiday:'http://www.cdcc.ca/services_holidays_en'},
		NADEX: {name:'Northern American Derivatives Exchange (HedgeStreet)', website:'http://www.nadex.com/', email:'customerservice@nadex.com', holiday:'http://www.nadex.com/holidays.html'},
		LIFFE: {name:'ICE Futures Europe (London International Financial Futures and Options Exchange)', website:'https://www.theice.com/futures-europe', email:'icehelpdesk@theice.com', holiday:'https://www.theice.com/holiday-hours'},
		ICAP: {name:'Intercapital', website:'http://www.icap.com/', email:'info@icap.com', holiday:'http://www.icap.com/site-services/search-results.aspx?Domain=all&ResultPage=1&query=holiday%20calendar&searchphrase=exact'},
		MEFF: {name:'Mercado Español de Futuros Financieros', website:'http://www.meff.es/?id=ing', email:'xxx@meff.com', holiday:''},
		OMX: {name:'NASDAQ OMX', website:'http://business.nasdaq.com/', email:'', holiday:'http://www.nasdaqomx.com/searchresult?q=holiday+OMX'},
		DME: {name:'Dubai Mercantile Exchange', website:'http://www.dubaimerc.com/', email:'customercare@dubaimerc.com', holiday:'http://www.dubaimerc.com/en/Home/Content/trading-hour-and-holiday-calendar'},
		KRX: {name:'Korea Exchange', website:'http://www.krx.co.kr/', email:'', holiday:''},
		NSE: {name: 'National Stock Exchange of India', website:'http://www.nseindia.com/', email:'', holiday:''},
		BSE: {name: 'Bombay Stock Exchange', website:'http://www.bseindia.com/', email:'bsehelp@bseindia.com', holiday:'http://www.bseindia.com/markets/marketinfo/listholi.aspx?expandable=0'},
		IEX: {name: 'Indian Energy Exchange', website:'http://www.iexindia.com/', email:'info@iexindia.com', holiday:'http://www.iexindia.com/marketdata.aspx?id=16&mid=1'},
		HKEX: {name: 'Hong Kong Exchange', website:'https://www.hkex.com.hk/eng/index.htm', email:'info@hkex.com.hk', holiday:'http://www.hkex.com.hk/eng/prod/drprod/hkifo/tradcalend_1.htm'},
		SHFE: {name: 'Shanghai Futures Exchange', website:'http://www.shfe.com.cn/en/', email:'', holiday:'http://www.shfe.com.cn/searchEnAction.do?queryString=holiday&opt=0'},
		ZCE: {name: 'Zhengzhou Commodity Exchange', website:'english.czce.com.cn', email:'', holiday:''},
		SAFEX: {name: 'South African Futures Exchange', website:'www.safex.co.za', email:'', holiday:''},
		MEXDER: {name: 'Mexican Derivatives Exchange (CME Partner)', website:'http://www.mexder.com.mx/wb3/wb/MEX/home/_rid/5?lng_act=lng_step2&language=en', email:'notimexder@grupobmv.com.mx', holiday:'http://www.mexder.com.mx/wb3/wb/MEX/dias_inhabiles'},
		BVMF: {name: 'Bolsa de Valores, Mercadorias & Futuros de São Paulo (CME Partner)', website:'http://www.bmfbovespa.com.br/en-us/home.aspx?idioma=en-us', email:'', holiday:'http://www.bmfbovespa.com.br/en-us/rules/market-calendar/market-calendar.aspx?idioma=en-us'},
		OMIP: {name: 'Iberian Energy Clearing House', website:'http://www.omiclear.pt/OMIClear/tabid/130/language/en-GB/Default.aspx', email:'clearing@omiclear.pt', holiday:''},
		error: {name: market + ' (unknown exchange)', website: 'http://www.iotafinance.com/en/ISO-10383-Market-Identification-Codes-MIC.html', email:'', holiday:''} //error handling
	};

	if (marketCode[market.toUpperCase()] != null){
		return marketCode[market.toUpperCase()];
	} else {
		return marketCode.error; //error handling
	}
}
