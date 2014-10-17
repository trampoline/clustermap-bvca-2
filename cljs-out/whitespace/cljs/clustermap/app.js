// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.mount');
goog.require('secretary.core');
goog.require('clustermap.components.map');
goog.require('clustermap.nav');
goog.require('om.dom');
goog.require('clustermap.components.timeline_chart');
goog.require('goog.history.EventType');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('clustermap.routes');
goog.require('clustermap.components.table');
goog.require('om.dom');
goog.require('clustermap.components.table');
goog.require('clustermap.api');
goog.require('clustermap.ganalytics');
goog.require('clustermap.components.full_report');
goog.require('cljs.core.async');
goog.require('clustermap.components.select_chooser');
goog.require('clustermap.components.select_chooser');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clustermap.boundarylines');
goog.require('clustermap.ganalytics');
goog.require('clustermap.components.color_scale');
goog.require('clustermap.formats.time');
goog.require('clustermap.components.search');
goog.require('clustermap.components.map_report');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.filter');
goog.require('clustermap.components.mount');
goog.require('clustermap.components.map_report');
goog.require('clustermap.routes');
goog.require('clustermap.components.full_report');
goog.require('clustermap.components.search');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('clustermap.components.page_title');
goog.require('clustermap.formats.time');
goog.require('clustermap.components.color_scale');
goog.require('clustermap.components.filter');
goog.require('clustermap.nav');
goog.require('clojure.string');
goog.require('clustermap.components.timeline_chart');
goog.require('clustermap.components.page_title');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clustermap.components.map');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
clustermap.app.IApp = (function (){var obj15901 = {};return obj15901;
})();
clustermap.app.start = (function start(this$){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.clustermap$app$IApp$start$arity$1;
} else
{return and__3546__auto__;
}
})())
{return this$.clustermap$app$IApp$start$arity$1(this$);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (clustermap.app.start[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (clustermap.app.start["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.start",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.stop = (function stop(this$){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.clustermap$app$IApp$stop$arity$1;
} else
{return and__3546__auto__;
}
})())
{return this$.clustermap$app$IApp$stop$arity$1(this$);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (clustermap.app.stop[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (clustermap.app.stop["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.stop",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.initial_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"collections","collections",-2114643505),new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255),false,new cljs.core.Keyword(null,"bounds","bounds",1691609455),null,new cljs.core.Keyword(null,"compiled","compiled",850043082),null], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"geoport","geoport",534549910),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"companies",new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),null,new cljs.core.Keyword(null,"bounds","bounds",1691609455),null,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936),null,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"key","key",-1516042587),"boundaryline_id",new cljs.core.Keyword(null,"variable","variable",-281346492),"!latest_employee_count"], null),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Oranges","Oranges",1752319702),new cljs.core.Keyword(null,"9","9",1664767314)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"sum","sum",136986814)], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.Keyword(null,"map-report","map-report",-254073588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null)], null)], null),new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),null], null),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),"desc"], null)], null),new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!name","!name",1164538490),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!postcode","!postcode",1728852280),"Postcode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!formation_date","!formation_date",-1967327335),"Formation date",(function (p1__15902_SHARP_){return clustermap.formats.time.format_date.call(null,p1__15902_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!latest_accounts_date","!latest_accounts_date",-259857093),"Filing date",(function (p1__15903_SHARP_){return clustermap.formats.time.format_date.call(null,p1__15903_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938),"Employees",(function (p1__15904_SHARP_){return clustermap.formats.number.readable.call(null,p1__15904_SHARP_,new cljs.core.Keyword(null,"dec","dec",1888433436),(0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"Turnover",(function (p1__15905_SHARP_){return clustermap.formats.money.readable.call(null,p1__15905_SHARP_,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
})], null)], null)], null),new cljs.core.Keyword(null,"table-data","table-data",-1783738205),null], null),new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"timeline","timeline",192903161),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"company_accounts",new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index","index",-1531685915),"company-accounts",new cljs.core.Keyword(null,"index-type","index-type",500383962),"accounts",new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),"?accounts_date",new cljs.core.Keyword(null,"measure-variables","measure-variables",893431199),"!turnover",new cljs.core.Keyword(null,"interval","interval",1708495417),"year"], null),new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548),null], null),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"map","map",1371690461)], null);
clustermap.app.components = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.map.map_component,new cljs.core.Keyword(null,"target","target",253001721),"map-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map-state","map-state",-1227493550),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"compiled","compiled",850043082)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"map-report","map-report",-254073588),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.map_report.map_report_component,new cljs.core.Keyword(null,"target","target",253001721),"map-report-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null),new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452)], null),new cljs.core.Keyword(null,"map-report","map-report",-254073588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-report","map-report",-254073588)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.filter.filter_component,new cljs.core.Keyword(null,"target","target",253001721),"search-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"var-select","var-select",-284006595),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.partial.call(null,clustermap.components.select_chooser.select_chooser_component,"Variable",new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null)),new cljs.core.Keyword(null,"target","target",253001721),"variable-selection-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"stat-select","stat-select",587769134),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.partial.call(null,clustermap.components.select_chooser.select_chooser_component,"Statistic",new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null)),new cljs.core.Keyword(null,"target","target",253001721),"stat-selection-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"scale-select","scale-select",1690031490),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.partial.call(null,clustermap.components.select_chooser.select_chooser_component,"Scale",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null)),new cljs.core.Keyword(null,"target","target",253001721),"scale-selection-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.table.table_component,new cljs.core.Keyword(null,"target","target",253001721),"full-report-table",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"table-state","table-state",-1662785974),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.timeline_chart.timeline_chart,new cljs.core.Keyword(null,"target","target",253001721),"turnover-timeline",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null)], null)], null)], null);
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__15908){var vec__15909 = p__15908;var key_or_path = cljs.core.nth.call(null,vec__15909,(0),null);var value_or_fn = cljs.core.nth.call(null,vec__15909,(1),null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:((function (path,vec__15909,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__15909,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (state,p__15910){var map__15912 = p__15910;var map__15912__$1 = ((cljs.core.seq_QMARK_.call(null,map__15912))?cljs.core.apply.call(null,cljs.core.hash_map,map__15912):map__15912);var path_values = map__15912__$1;return cljs.core.swap_BANG_.call(null,state,clustermap.app.new_state,path_values);
};
var set_state = function (state,var_args){
var p__15910 = null;if (arguments.length > 1) {
  p__15910 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_state__delegate.call(this,state,p__15910);};
set_state.cljs$lang$maxFixedArity = 1;
set_state.cljs$lang$applyTo = (function (arglist__15913){
var state = cljs.core.first(arglist__15913);
var p__15910 = cljs.core.rest(arglist__15913);
return set_state__delegate(state,p__15910);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
/**
* @param {...*} var_args
*/
clustermap.app.get_state = (function() { 
var get_state__delegate = function (state,path){return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),cljs.core.flatten.call(null,path));
};
var get_state = function (state,var_args){
var path = null;if (arguments.length > 1) {
  path = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get_state__delegate.call(this,state,path);};
get_state.cljs$lang$maxFixedArity = 1;
get_state.cljs$lang$applyTo = (function (arglist__15914){
var state = cljs.core.first(arglist__15914);
var path = cljs.core.rest(arglist__15914);
return get_state__delegate(state,path);
});
get_state.cljs$core$IFn$_invoke$arity$variadic = get_state__delegate;
return get_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_counties","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(state){var seq__15919 = cljs.core.seq.call(null,clustermap.app.bl_collections);var chunk__15920 = null;var count__15921 = (0);var i__15922 = (0);while(true){
if((i__15922 < count__15921))
{var blcoll = cljs.core._nth.call(null,chunk__15920,i__15922);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__15923 = seq__15919;
var G__15924 = chunk__15920;
var G__15925 = count__15921;
var G__15926 = (i__15922 + (1));
seq__15919 = G__15923;
chunk__15920 = G__15924;
count__15921 = G__15925;
i__15922 = G__15926;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15919);if(temp__4126__auto__)
{var seq__15919__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15919__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__15919__$1);{
var G__15927 = cljs.core.chunk_rest.call(null,seq__15919__$1);
var G__15928 = c__4314__auto__;
var G__15929 = cljs.core.count.call(null,c__4314__auto__);
var G__15930 = (0);
seq__15919 = G__15927;
chunk__15920 = G__15928;
count__15921 = G__15929;
i__15922 = G__15930;
continue;
}
} else
{var blcoll = cljs.core.first.call(null,seq__15919__$1);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__15931 = cljs.core.next.call(null,seq__15919__$1);
var G__15932 = null;
var G__15933 = (0);
var G__15934 = (0);
seq__15919 = G__15931;
chunk__15920 = G__15932;
count__15921 = G__15933;
i__15922 = G__15934;
continue;
}
}
} else
{return null;
}
}
break;
}
});
clustermap.app.change_view = (function change_view(state,view){var view__$1 = cljs.core.keyword.call(null,view);if(cljs.core.not_EQ_.call(null,view__$1,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))
{clustermap.app.set_state.call(null,state,new cljs.core.Keyword(null,"view","view",1247994814),view__$1);
return clustermap.nav.change_view.call(null,cljs.core.name.call(null,view__$1));
} else
{return null;
}
});
clustermap.app.set_route = (function set_route(history,view,type,id){if(cljs.core.truth_((function (){var and__3546__auto__ = type;if(cljs.core.truth_(and__3546__auto__))
{return id;
} else
{return and__3546__auto__;
}
})()))
{return history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__3558__auto__ = view;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "map";
}
})()))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,type))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,id))));
} else
{if(cljs.core.truth_(view))
{return history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,view))));
} else
{return history.setToken((""));

}
}
});
clustermap.app.parse_route = (function parse_route(history){var fragment = history.getToken();var vec__15938 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__15938,(0),null);var view = cljs.core.nth.call(null,vec__15938,(1),null);var type = cljs.core.nth.call(null,vec__15938,(2),null);var id = cljs.core.nth.call(null,vec__15938,(3),null);var type__$1 = ((((function (){var G__15939 = type;var G__15939__$1 = (((G__15939 == null))?null:clojure.string.trim.call(null,G__15939));var G__15939__$2 = (((G__15939__$1 == null))?null:cljs.core.count.call(null,G__15939__$1));return G__15939__$2;
})() > (0)))?clojure.string.trim.call(null,type):null);var id__$1 = ((((function (){var G__15940 = id;var G__15940__$1 = (((G__15940 == null))?null:clojure.string.trim.call(null,G__15940));var G__15940__$2 = (((G__15940__$1 == null))?null:cljs.core.count.call(null,G__15940__$1));return G__15940__$2;
})() > (0)))?clojure.string.trim.call(null,id):null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),view,new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null);
});
clustermap.app.set_view_route = (function set_view_route(history,view){var map__15942 = clustermap.app.parse_route.call(null,history);var map__15942__$1 = ((cljs.core.seq_QMARK_.call(null,map__15942))?cljs.core.apply.call(null,cljs.core.hash_map,map__15942):map__15942);var id = cljs.core.get.call(null,map__15942__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__15942__$1,new cljs.core.Keyword(null,"type","type",1174270348));return clustermap.app.set_route.call(null,history,view,type,id);
});
clustermap.app.create_event_handlers_map = (function create_event_handlers_map(state,history){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),cljs.core.partial.call(null,clustermap.app.set_view_route,history),new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),cljs.core.partial.call(null,clustermap.app.change_view,state),new cljs.core.Keyword(null,"select","select",1147833503),(function (t,v){return console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [":select (ignored)",t,v], null)));
})], null);
});
clustermap.app.choose_event_handler = (function choose_event_handler(event_handlers_map,type,val){var handler = cljs.core.get.call(null,event_handlers_map,type);if(cljs.core.not.call(null,handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return handler.call(null,val);
});
clustermap.app.init_routes = (function init_routes(history,comm){var action__9531__auto___15959 = (function (params__9532__auto__){if(cljs.core.map_QMARK_.call(null,params__9532__auto__))
{var map__15951 = params__9532__auto__;var map__15951__$1 = ((cljs.core.seq_QMARK_.call(null,map__15951))?cljs.core.apply.call(null,cljs.core.hash_map,map__15951):map__15951);return null;
} else
{if(cljs.core.vector_QMARK_.call(null,params__9532__auto__))
{var vec__15952 = params__9532__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__9531__auto___15959);
var action__9531__auto___15960 = (function (params__9532__auto__){if(cljs.core.map_QMARK_.call(null,params__9532__auto__))
{var map__15953 = params__9532__auto__;var map__15953__$1 = ((cljs.core.seq_QMARK_.call(null,map__15953))?cljs.core.apply.call(null,cljs.core.hash_map,map__15953):map__15953);return null;
} else
{if(cljs.core.vector_QMARK_.call(null,params__9532__auto__))
{var vec__15954 = params__9532__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9531__auto___15960);
var action__9531__auto___15961 = (function (params__9532__auto__){if(cljs.core.map_QMARK_.call(null,params__9532__auto__))
{var map__15955 = params__9532__auto__;var map__15955__$1 = ((cljs.core.seq_QMARK_.call(null,map__15955))?cljs.core.apply.call(null,cljs.core.hash_map,map__15955):map__15955);var view = cljs.core.get.call(null,map__15955__$1,new cljs.core.Keyword(null,"view","view",1247994814));return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9532__auto__))
{var vec__15956 = params__9532__auto__;var view = cljs.core.nth.call(null,vec__15956,(0),null);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__9531__auto___15961);
var action__9531__auto___15962 = (function (params__9532__auto__){if(cljs.core.map_QMARK_.call(null,params__9532__auto__))
{var map__15957 = params__9532__auto__;var map__15957__$1 = ((cljs.core.seq_QMARK_.call(null,map__15957))?cljs.core.apply.call(null,cljs.core.hash_map,map__15957):map__15957);var id = cljs.core.get.call(null,map__15957__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__15957__$1,new cljs.core.Keyword(null,"type","type",1174270348));var view = cljs.core.get.call(null,map__15957__$1,new cljs.core.Keyword(null,"view","view",1247994814));return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9532__auto__))
{var vec__15958 = params__9532__auto__;var view = cljs.core.nth.call(null,vec__15958,(0),null);var type = cljs.core.nth.call(null,vec__15958,(1),null);var id = cljs.core.nth.call(null,vec__15958,(2),null);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__9531__auto___15962);
goog.events.listen(history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
}));
return history.setEnabled(true);
});
clustermap.app.history_STAR_ = (new goog.History());
clustermap.app.create_app_instance = (function create_app_instance(){var comm = cljs.core.async.chan.call(null);var state = cljs.core.atom.call(null,clustermap.app.initial_state);var event_handlers_map = clustermap.app.create_event_handlers_map.call(null,state,clustermap.app.history_STAR_);var handle_event = cljs.core.partial.call(null,clustermap.app.choose_event_handler,event_handlers_map);if(typeof clustermap.app.t16009 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t16009 = (function (handle_event,event_handlers_map,state,comm,create_app_instance,meta16010){
this.handle_event = handle_event;
this.event_handlers_map = event_handlers_map;
this.state = state;
this.comm = comm;
this.create_app_instance = create_app_instance;
this.meta16010 = meta16010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t16009.cljs$lang$type = true;
clustermap.app.t16009.cljs$lang$ctorStr = "clustermap.app/t16009";
clustermap.app.t16009.cljs$lang$ctorPrWriter = ((function (comm,state,event_handlers_map,handle_event){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.app/t16009");
});})(comm,state,event_handlers_map,handle_event))
;
clustermap.app.t16009.prototype.clustermap$app$IApp$ = true;
clustermap.app.t16009.prototype.clustermap$app$IApp$start$arity$1 = ((function (comm,state,event_handlers_map,handle_event){
return (function (_){var self__ = this;
var ___$1 = this;var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),path_fn,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857),link_fn,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502),cljs.core.partial.call(null,clustermap.routes.path_for_view,cljs.core.partial.call(null,clustermap.app.parse_route,clustermap.app.history_STAR_)),new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393),cljs.core.partial.call(null,clustermap.boundarylines.get_or_fetch_best_boundarylines,self__.state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)),new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614),cljs.core.partial.call(null,clustermap.boundarylines.point_in_boundarylines,self__.state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.Keyword(null,"uk_boroughs","uk_boroughs",800727440))], null);clustermap.nav.init.call(null,self__.comm);
clustermap.app.init_routes.call(null,clustermap.app.history_STAR_,self__.comm);
clustermap.app.load_boundaryline_collection_indexes.call(null,self__.state);
var seq__16012_16055 = cljs.core.seq.call(null,clustermap.app.components);var chunk__16013_16056 = null;var count__16014_16057 = (0);var i__16015_16058 = (0);while(true){
if((i__16015_16058 < count__16014_16057))
{var map__16016_16059 = cljs.core._nth.call(null,chunk__16013_16056,i__16015_16058);var map__16016_16060__$1 = ((cljs.core.seq_QMARK_.call(null,map__16016_16059))?cljs.core.apply.call(null,cljs.core.hash_map,map__16016_16059):map__16016_16059);var paths_16061 = cljs.core.get.call(null,map__16016_16060__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var target_16062 = cljs.core.get.call(null,map__16016_16060__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_16063 = cljs.core.get.call(null,map__16016_16060__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_16064 = cljs.core.get.call(null,map__16016_16060__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_16064,f_16063,target_16062,paths_16061], null)));
clustermap.components.mount.mount.call(null,name_16064,f_16063,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_16062,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_16061);
{
var G__16065 = seq__16012_16055;
var G__16066 = chunk__16013_16056;
var G__16067 = count__16014_16057;
var G__16068 = (i__16015_16058 + (1));
seq__16012_16055 = G__16065;
chunk__16013_16056 = G__16066;
count__16014_16057 = G__16067;
i__16015_16058 = G__16068;
continue;
}
} else
{var temp__4126__auto___16069 = cljs.core.seq.call(null,seq__16012_16055);if(temp__4126__auto___16069)
{var seq__16012_16070__$1 = temp__4126__auto___16069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16012_16070__$1))
{var c__4314__auto___16071 = cljs.core.chunk_first.call(null,seq__16012_16070__$1);{
var G__16072 = cljs.core.chunk_rest.call(null,seq__16012_16070__$1);
var G__16073 = c__4314__auto___16071;
var G__16074 = cljs.core.count.call(null,c__4314__auto___16071);
var G__16075 = (0);
seq__16012_16055 = G__16072;
chunk__16013_16056 = G__16073;
count__16014_16057 = G__16074;
i__16015_16058 = G__16075;
continue;
}
} else
{var map__16017_16076 = cljs.core.first.call(null,seq__16012_16070__$1);var map__16017_16077__$1 = ((cljs.core.seq_QMARK_.call(null,map__16017_16076))?cljs.core.apply.call(null,cljs.core.hash_map,map__16017_16076):map__16017_16076);var paths_16078 = cljs.core.get.call(null,map__16017_16077__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var target_16079 = cljs.core.get.call(null,map__16017_16077__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_16080 = cljs.core.get.call(null,map__16017_16077__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_16081 = cljs.core.get.call(null,map__16017_16077__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_16081,f_16080,target_16079,paths_16078], null)));
clustermap.components.mount.mount.call(null,name_16081,f_16080,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_16079,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_16078);
{
var G__16082 = cljs.core.next.call(null,seq__16012_16070__$1);
var G__16083 = null;
var G__16084 = (0);
var G__16085 = (0);
seq__16012_16055 = G__16082;
chunk__16013_16056 = G__16083;
count__16014_16057 = G__16084;
i__16015_16058 = G__16085;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event){
return (function (state_16033){var state_val_16034 = (state_16033[(1)]);if((state_val_16034 === (7)))
{var inst_16022 = (state_16033[(2)]);var inst_16023 = cljs.core.nth.call(null,inst_16022,(0),null);var inst_16024 = cljs.core.nth.call(null,inst_16022,(1),null);var inst_16025 = self__.handle_event.call(null,inst_16023,inst_16024);var state_16033__$1 = (function (){var statearr_16035 = state_16033;(statearr_16035[(7)] = inst_16025);
return statearr_16035;
})();var statearr_16036_16086 = state_16033__$1;(statearr_16036_16086[(2)] = null);
(statearr_16036_16086[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16034 === (6)))
{var inst_16029 = (state_16033[(2)]);var state_16033__$1 = state_16033;var statearr_16037_16087 = state_16033__$1;(statearr_16037_16087[(2)] = inst_16029);
(statearr_16037_16087[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16034 === (5)))
{var state_16033__$1 = state_16033;var statearr_16038_16088 = state_16033__$1;(statearr_16038_16088[(2)] = null);
(statearr_16038_16088[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16034 === (4)))
{var state_16033__$1 = state_16033;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16033__$1,(7),self__.comm);
} else
{if((state_val_16034 === (3)))
{var inst_16031 = (state_16033[(2)]);var state_16033__$1 = state_16033;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16033__$1,inst_16031);
} else
{if((state_val_16034 === (2)))
{var state_16033__$1 = state_16033;var statearr_16039_16089 = state_16033__$1;(statearr_16039_16089[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16034 === (1)))
{var state_16033__$1 = state_16033;var statearr_16041_16090 = state_16033__$1;(statearr_16041_16090[(2)] = null);
(statearr_16041_16090[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5708__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event))
;return ((function (switch__5693__auto__,c__5708__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16045 = [null,null,null,null,null,null,null,null];(statearr_16045[(0)] = state_machine__5694__auto__);
(statearr_16045[(1)] = (1));
return statearr_16045;
});
var state_machine__5694__auto____1 = (function (state_16033){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16033);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16046){if((e16046 instanceof Object))
{var ex__5697__auto__ = e16046;var statearr_16047_16091 = state_16033;(statearr_16047_16091[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16033);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16046;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16092 = state_16033;
state_16033 = G__16092;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16033){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event))
})();var state__5710__auto__ = (function (){var statearr_16048 = f__5709__auto__.call(null);(statearr_16048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16048;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event))
);
return c__5708__auto__;
});})(comm,state,event_handlers_map,handle_event))
;
clustermap.app.t16009.prototype.clustermap$app$IApp$stop$arity$1 = ((function (comm,state,event_handlers_map,handle_event){
return (function (_){var self__ = this;
var ___$1 = this;clustermap.app.history_STAR_.removeAllListeners();
secretary.core.reset_routes_BANG_.call(null);
var seq__16049 = cljs.core.seq.call(null,clustermap.app.components);var chunk__16050 = null;var count__16051 = (0);var i__16052 = (0);while(true){
if((i__16052 < count__16051))
{var map__16053 = cljs.core._nth.call(null,chunk__16050,i__16052);var map__16053__$1 = ((cljs.core.seq_QMARK_.call(null,map__16053))?cljs.core.apply.call(null,cljs.core.hash_map,map__16053):map__16053);var target = cljs.core.get.call(null,map__16053__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__16093 = seq__16049;
var G__16094 = chunk__16050;
var G__16095 = count__16051;
var G__16096 = (i__16052 + (1));
seq__16049 = G__16093;
chunk__16050 = G__16094;
count__16051 = G__16095;
i__16052 = G__16096;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16049);if(temp__4126__auto__)
{var seq__16049__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16049__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__16049__$1);{
var G__16097 = cljs.core.chunk_rest.call(null,seq__16049__$1);
var G__16098 = c__4314__auto__;
var G__16099 = cljs.core.count.call(null,c__4314__auto__);
var G__16100 = (0);
seq__16049 = G__16097;
chunk__16050 = G__16098;
count__16051 = G__16099;
i__16052 = G__16100;
continue;
}
} else
{var map__16054 = cljs.core.first.call(null,seq__16049__$1);var map__16054__$1 = ((cljs.core.seq_QMARK_.call(null,map__16054))?cljs.core.apply.call(null,cljs.core.hash_map,map__16054):map__16054);var target = cljs.core.get.call(null,map__16054__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__16101 = cljs.core.next.call(null,seq__16049__$1);
var G__16102 = null;
var G__16103 = (0);
var G__16104 = (0);
seq__16049 = G__16101;
chunk__16050 = G__16102;
count__16051 = G__16103;
i__16052 = G__16104;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(comm,state,event_handlers_map,handle_event))
;
clustermap.app.t16009.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,state,event_handlers_map,handle_event){
return (function (_16011){var self__ = this;
var _16011__$1 = this;return self__.meta16010;
});})(comm,state,event_handlers_map,handle_event))
;
clustermap.app.t16009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,state,event_handlers_map,handle_event){
return (function (_16011,meta16010__$1){var self__ = this;
var _16011__$1 = this;return (new clustermap.app.t16009(self__.handle_event,self__.event_handlers_map,self__.state,self__.comm,self__.create_app_instance,meta16010__$1));
});})(comm,state,event_handlers_map,handle_event))
;
clustermap.app.__GT_t16009 = ((function (comm,state,event_handlers_map,handle_event){
return (function __GT_t16009(handle_event__$1,event_handlers_map__$1,state__$1,comm__$1,create_app_instance__$1,meta16010){return (new clustermap.app.t16009(handle_event__$1,event_handlers_map__$1,state__$1,comm__$1,create_app_instance__$1,meta16010));
});})(comm,state,event_handlers_map,handle_event))
;
}
return (new clustermap.app.t16009(handle_event,event_handlers_map,state,comm,create_app_instance,null));
});
clustermap.app.app_instance = cljs.core.atom.call(null,null);
clustermap.app.start_or_restart_app = (function start_or_restart_app(){return cljs.core.swap_BANG_.call(null,clustermap.app.app_instance,(function (app){if(cljs.core.truth_(app))
{clustermap.app.stop.call(null,app);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null);clustermap.app.start.call(null,new_app);
return new_app;
}));
});
