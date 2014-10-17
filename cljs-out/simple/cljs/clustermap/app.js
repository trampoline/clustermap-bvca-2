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
clustermap.app.IApp = (function (){var obj30838 = {};return obj30838;
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
clustermap.app.initial_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"collections","collections",-2114643505),new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255),false,new cljs.core.Keyword(null,"bounds","bounds",1691609455),null,new cljs.core.Keyword(null,"compiled","compiled",850043082),null], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"geoport","geoport",534549910),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"companies",new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),null,new cljs.core.Keyword(null,"bounds","bounds",1691609455),null,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936),null,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"key","key",-1516042587),"boundaryline_id",new cljs.core.Keyword(null,"variable","variable",-281346492),"!latest_employee_count"], null),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Oranges","Oranges",1752319702),new cljs.core.Keyword(null,"9","9",1664767314)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"sum","sum",136986814)], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.Keyword(null,"map-report","map-report",-254073588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null)], null)], null),new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),null], null),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),"desc"], null)], null),new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!name","!name",1164538490),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!postcode","!postcode",1728852280),"Postcode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!formation_date","!formation_date",-1967327335),"Formation date",(function (p1__30839_SHARP_){return clustermap.formats.time.format_date.call(null,p1__30839_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!latest_accounts_date","!latest_accounts_date",-259857093),"Filing date",(function (p1__30840_SHARP_){return clustermap.formats.time.format_date.call(null,p1__30840_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938),"Employees",(function (p1__30841_SHARP_){return clustermap.formats.number.readable.call(null,p1__30841_SHARP_,new cljs.core.Keyword(null,"dec","dec",1888433436),(0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"Turnover",(function (p1__30842_SHARP_){return clustermap.formats.money.readable.call(null,p1__30842_SHARP_,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
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
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__30845){var vec__30846 = p__30845;var key_or_path = cljs.core.nth.call(null,vec__30846,(0),null);var value_or_fn = cljs.core.nth.call(null,vec__30846,(1),null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:((function (path,vec__30846,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__30846,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (state,p__30847){var map__30849 = p__30847;var map__30849__$1 = ((cljs.core.seq_QMARK_.call(null,map__30849))?cljs.core.apply.call(null,cljs.core.hash_map,map__30849):map__30849);var path_values = map__30849__$1;return cljs.core.swap_BANG_.call(null,state,clustermap.app.new_state,path_values);
};
var set_state = function (state,var_args){
var p__30847 = null;if (arguments.length > 1) {
  p__30847 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_state__delegate.call(this,state,p__30847);};
set_state.cljs$lang$maxFixedArity = 1;
set_state.cljs$lang$applyTo = (function (arglist__30850){
var state = cljs.core.first(arglist__30850);
var p__30847 = cljs.core.rest(arglist__30850);
return set_state__delegate(state,p__30847);
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
get_state.cljs$lang$applyTo = (function (arglist__30851){
var state = cljs.core.first(arglist__30851);
var path = cljs.core.rest(arglist__30851);
return get_state__delegate(state,path);
});
get_state.cljs$core$IFn$_invoke$arity$variadic = get_state__delegate;
return get_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_counties","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(state){var seq__30856 = cljs.core.seq.call(null,clustermap.app.bl_collections);var chunk__30857 = null;var count__30858 = (0);var i__30859 = (0);while(true){
if((i__30859 < count__30858))
{var blcoll = cljs.core._nth.call(null,chunk__30857,i__30859);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__30860 = seq__30856;
var G__30861 = chunk__30857;
var G__30862 = count__30858;
var G__30863 = (i__30859 + (1));
seq__30856 = G__30860;
chunk__30857 = G__30861;
count__30858 = G__30862;
i__30859 = G__30863;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30856);if(temp__4126__auto__)
{var seq__30856__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30856__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__30856__$1);{
var G__30864 = cljs.core.chunk_rest.call(null,seq__30856__$1);
var G__30865 = c__4314__auto__;
var G__30866 = cljs.core.count.call(null,c__4314__auto__);
var G__30867 = (0);
seq__30856 = G__30864;
chunk__30857 = G__30865;
count__30858 = G__30866;
i__30859 = G__30867;
continue;
}
} else
{var blcoll = cljs.core.first.call(null,seq__30856__$1);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__30868 = cljs.core.next.call(null,seq__30856__$1);
var G__30869 = null;
var G__30870 = (0);
var G__30871 = (0);
seq__30856 = G__30868;
chunk__30857 = G__30869;
count__30858 = G__30870;
i__30859 = G__30871;
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
clustermap.app.parse_route = (function parse_route(history){var fragment = history.getToken();var vec__30875 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__30875,(0),null);var view = cljs.core.nth.call(null,vec__30875,(1),null);var type = cljs.core.nth.call(null,vec__30875,(2),null);var id = cljs.core.nth.call(null,vec__30875,(3),null);var type__$1 = ((((function (){var G__30876 = type;var G__30876__$1 = (((G__30876 == null))?null:clojure.string.trim.call(null,G__30876));var G__30876__$2 = (((G__30876__$1 == null))?null:cljs.core.count.call(null,G__30876__$1));return G__30876__$2;
})() > (0)))?clojure.string.trim.call(null,type):null);var id__$1 = ((((function (){var G__30877 = id;var G__30877__$1 = (((G__30877 == null))?null:clojure.string.trim.call(null,G__30877));var G__30877__$2 = (((G__30877__$1 == null))?null:cljs.core.count.call(null,G__30877__$1));return G__30877__$2;
})() > (0)))?clojure.string.trim.call(null,id):null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),view,new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null);
});
clustermap.app.set_view_route = (function set_view_route(history,view){var map__30879 = clustermap.app.parse_route.call(null,history);var map__30879__$1 = ((cljs.core.seq_QMARK_.call(null,map__30879))?cljs.core.apply.call(null,cljs.core.hash_map,map__30879):map__30879);var id = cljs.core.get.call(null,map__30879__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__30879__$1,new cljs.core.Keyword(null,"type","type",1174270348));return clustermap.app.set_route.call(null,history,view,type,id);
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
clustermap.app.init_routes = (function init_routes(history,comm){var action__9531__auto___30896 = (function (params__9532__auto__){if(cljs.core.map_QMARK_.call(null,params__9532__auto__))
{var map__30888 = params__9532__auto__;var map__30888__$1 = ((cljs.core.seq_QMARK_.call(null,map__30888))?cljs.core.apply.call(null,cljs.core.hash_map,map__30888):map__30888);return null;
} else
{if(cljs.core.vector_QMARK_.call(null,params__9532__auto__))
{var vec__30889 = params__9532__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__9531__auto___30896);
var action__9531__auto___30897 = (function (params__9532__auto__){if(cljs.core.map_QMARK_.call(null,params__9532__auto__))
{var map__30890 = params__9532__auto__;var map__30890__$1 = ((cljs.core.seq_QMARK_.call(null,map__30890))?cljs.core.apply.call(null,cljs.core.hash_map,map__30890):map__30890);return null;
} else
{if(cljs.core.vector_QMARK_.call(null,params__9532__auto__))
{var vec__30891 = params__9532__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9531__auto___30897);
var action__9531__auto___30898 = (function (params__9532__auto__){if(cljs.core.map_QMARK_.call(null,params__9532__auto__))
{var map__30892 = params__9532__auto__;var map__30892__$1 = ((cljs.core.seq_QMARK_.call(null,map__30892))?cljs.core.apply.call(null,cljs.core.hash_map,map__30892):map__30892);var view = cljs.core.get.call(null,map__30892__$1,new cljs.core.Keyword(null,"view","view",1247994814));return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9532__auto__))
{var vec__30893 = params__9532__auto__;var view = cljs.core.nth.call(null,vec__30893,(0),null);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__9531__auto___30898);
var action__9531__auto___30899 = (function (params__9532__auto__){if(cljs.core.map_QMARK_.call(null,params__9532__auto__))
{var map__30894 = params__9532__auto__;var map__30894__$1 = ((cljs.core.seq_QMARK_.call(null,map__30894))?cljs.core.apply.call(null,cljs.core.hash_map,map__30894):map__30894);var id = cljs.core.get.call(null,map__30894__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__30894__$1,new cljs.core.Keyword(null,"type","type",1174270348));var view = cljs.core.get.call(null,map__30894__$1,new cljs.core.Keyword(null,"view","view",1247994814));return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9532__auto__))
{var vec__30895 = params__9532__auto__;var view = cljs.core.nth.call(null,vec__30895,(0),null);var type = cljs.core.nth.call(null,vec__30895,(1),null);var id = cljs.core.nth.call(null,vec__30895,(2),null);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__9531__auto___30899);
goog.events.listen(history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
}));
return history.setEnabled(true);
});
clustermap.app.history_STAR_ = (new goog.History());
clustermap.app.create_app_instance = (function create_app_instance(){var comm = cljs.core.async.chan.call(null);var state = cljs.core.atom.call(null,clustermap.app.initial_state);var event_handlers_map = clustermap.app.create_event_handlers_map.call(null,state,clustermap.app.history_STAR_);var handle_event = cljs.core.partial.call(null,clustermap.app.choose_event_handler,event_handlers_map);if(typeof clustermap.app.t30946 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t30946 = (function (handle_event,event_handlers_map,state,comm,create_app_instance,meta30947){
this.handle_event = handle_event;
this.event_handlers_map = event_handlers_map;
this.state = state;
this.comm = comm;
this.create_app_instance = create_app_instance;
this.meta30947 = meta30947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t30946.cljs$lang$type = true;
clustermap.app.t30946.cljs$lang$ctorStr = "clustermap.app/t30946";
clustermap.app.t30946.cljs$lang$ctorPrWriter = ((function (comm,state,event_handlers_map,handle_event){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.app/t30946");
});})(comm,state,event_handlers_map,handle_event))
;
clustermap.app.t30946.prototype.clustermap$app$IApp$ = true;
clustermap.app.t30946.prototype.clustermap$app$IApp$start$arity$1 = ((function (comm,state,event_handlers_map,handle_event){
return (function (_){var self__ = this;
var ___$1 = this;var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),path_fn,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857),link_fn,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502),cljs.core.partial.call(null,clustermap.routes.path_for_view,cljs.core.partial.call(null,clustermap.app.parse_route,clustermap.app.history_STAR_)),new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393),cljs.core.partial.call(null,clustermap.boundarylines.get_or_fetch_best_boundarylines,self__.state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)),new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614),cljs.core.partial.call(null,clustermap.boundarylines.point_in_boundarylines,self__.state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.Keyword(null,"uk_boroughs","uk_boroughs",800727440))], null);clustermap.nav.init.call(null,self__.comm);
clustermap.app.init_routes.call(null,clustermap.app.history_STAR_,self__.comm);
clustermap.app.load_boundaryline_collection_indexes.call(null,self__.state);
var seq__30949_30992 = cljs.core.seq.call(null,clustermap.app.components);var chunk__30950_30993 = null;var count__30951_30994 = (0);var i__30952_30995 = (0);while(true){
if((i__30952_30995 < count__30951_30994))
{var map__30953_30996 = cljs.core._nth.call(null,chunk__30950_30993,i__30952_30995);var map__30953_30997__$1 = ((cljs.core.seq_QMARK_.call(null,map__30953_30996))?cljs.core.apply.call(null,cljs.core.hash_map,map__30953_30996):map__30953_30996);var paths_30998 = cljs.core.get.call(null,map__30953_30997__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var target_30999 = cljs.core.get.call(null,map__30953_30997__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_31000 = cljs.core.get.call(null,map__30953_30997__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_31001 = cljs.core.get.call(null,map__30953_30997__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_31001,f_31000,target_30999,paths_30998], null)));
clustermap.components.mount.mount.call(null,name_31001,f_31000,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_30999,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_30998);
{
var G__31002 = seq__30949_30992;
var G__31003 = chunk__30950_30993;
var G__31004 = count__30951_30994;
var G__31005 = (i__30952_30995 + (1));
seq__30949_30992 = G__31002;
chunk__30950_30993 = G__31003;
count__30951_30994 = G__31004;
i__30952_30995 = G__31005;
continue;
}
} else
{var temp__4126__auto___31006 = cljs.core.seq.call(null,seq__30949_30992);if(temp__4126__auto___31006)
{var seq__30949_31007__$1 = temp__4126__auto___31006;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30949_31007__$1))
{var c__4314__auto___31008 = cljs.core.chunk_first.call(null,seq__30949_31007__$1);{
var G__31009 = cljs.core.chunk_rest.call(null,seq__30949_31007__$1);
var G__31010 = c__4314__auto___31008;
var G__31011 = cljs.core.count.call(null,c__4314__auto___31008);
var G__31012 = (0);
seq__30949_30992 = G__31009;
chunk__30950_30993 = G__31010;
count__30951_30994 = G__31011;
i__30952_30995 = G__31012;
continue;
}
} else
{var map__30954_31013 = cljs.core.first.call(null,seq__30949_31007__$1);var map__30954_31014__$1 = ((cljs.core.seq_QMARK_.call(null,map__30954_31013))?cljs.core.apply.call(null,cljs.core.hash_map,map__30954_31013):map__30954_31013);var paths_31015 = cljs.core.get.call(null,map__30954_31014__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var target_31016 = cljs.core.get.call(null,map__30954_31014__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_31017 = cljs.core.get.call(null,map__30954_31014__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_31018 = cljs.core.get.call(null,map__30954_31014__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_31018,f_31017,target_31016,paths_31015], null)));
clustermap.components.mount.mount.call(null,name_31018,f_31017,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_31016,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_31015);
{
var G__31019 = cljs.core.next.call(null,seq__30949_31007__$1);
var G__31020 = null;
var G__31021 = (0);
var G__31022 = (0);
seq__30949_30992 = G__31019;
chunk__30950_30993 = G__31020;
count__30951_30994 = G__31021;
i__30952_30995 = G__31022;
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
return (function (state_30970){var state_val_30971 = (state_30970[(1)]);if((state_val_30971 === (7)))
{var inst_30959 = (state_30970[(2)]);var inst_30960 = cljs.core.nth.call(null,inst_30959,(0),null);var inst_30961 = cljs.core.nth.call(null,inst_30959,(1),null);var inst_30962 = self__.handle_event.call(null,inst_30960,inst_30961);var state_30970__$1 = (function (){var statearr_30972 = state_30970;(statearr_30972[(7)] = inst_30962);
return statearr_30972;
})();var statearr_30973_31023 = state_30970__$1;(statearr_30973_31023[(2)] = null);
(statearr_30973_31023[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30971 === (6)))
{var inst_30966 = (state_30970[(2)]);var state_30970__$1 = state_30970;var statearr_30974_31024 = state_30970__$1;(statearr_30974_31024[(2)] = inst_30966);
(statearr_30974_31024[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30971 === (5)))
{var state_30970__$1 = state_30970;var statearr_30975_31025 = state_30970__$1;(statearr_30975_31025[(2)] = null);
(statearr_30975_31025[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30971 === (4)))
{var state_30970__$1 = state_30970;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30970__$1,(7),self__.comm);
} else
{if((state_val_30971 === (3)))
{var inst_30968 = (state_30970[(2)]);var state_30970__$1 = state_30970;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30970__$1,inst_30968);
} else
{if((state_val_30971 === (2)))
{var state_30970__$1 = state_30970;var statearr_30976_31026 = state_30970__$1;(statearr_30976_31026[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30971 === (1)))
{var state_30970__$1 = state_30970;var statearr_30978_31027 = state_30970__$1;(statearr_30978_31027[(2)] = null);
(statearr_30978_31027[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_30982 = [null,null,null,null,null,null,null,null];(statearr_30982[(0)] = state_machine__5694__auto__);
(statearr_30982[(1)] = (1));
return statearr_30982;
});
var state_machine__5694__auto____1 = (function (state_30970){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30970);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30983){if((e30983 instanceof Object))
{var ex__5697__auto__ = e30983;var statearr_30984_31028 = state_30970;(statearr_30984_31028[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30970);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30983;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31029 = state_30970;
state_30970 = G__31029;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30970){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event))
})();var state__5710__auto__ = (function (){var statearr_30985 = f__5709__auto__.call(null);(statearr_30985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_30985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event))
);
return c__5708__auto__;
});})(comm,state,event_handlers_map,handle_event))
;
clustermap.app.t30946.prototype.clustermap$app$IApp$stop$arity$1 = ((function (comm,state,event_handlers_map,handle_event){
return (function (_){var self__ = this;
var ___$1 = this;clustermap.app.history_STAR_.removeAllListeners();
secretary.core.reset_routes_BANG_.call(null);
var seq__30986 = cljs.core.seq.call(null,clustermap.app.components);var chunk__30987 = null;var count__30988 = (0);var i__30989 = (0);while(true){
if((i__30989 < count__30988))
{var map__30990 = cljs.core._nth.call(null,chunk__30987,i__30989);var map__30990__$1 = ((cljs.core.seq_QMARK_.call(null,map__30990))?cljs.core.apply.call(null,cljs.core.hash_map,map__30990):map__30990);var target = cljs.core.get.call(null,map__30990__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__31030 = seq__30986;
var G__31031 = chunk__30987;
var G__31032 = count__30988;
var G__31033 = (i__30989 + (1));
seq__30986 = G__31030;
chunk__30987 = G__31031;
count__30988 = G__31032;
i__30989 = G__31033;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30986);if(temp__4126__auto__)
{var seq__30986__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30986__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__30986__$1);{
var G__31034 = cljs.core.chunk_rest.call(null,seq__30986__$1);
var G__31035 = c__4314__auto__;
var G__31036 = cljs.core.count.call(null,c__4314__auto__);
var G__31037 = (0);
seq__30986 = G__31034;
chunk__30987 = G__31035;
count__30988 = G__31036;
i__30989 = G__31037;
continue;
}
} else
{var map__30991 = cljs.core.first.call(null,seq__30986__$1);var map__30991__$1 = ((cljs.core.seq_QMARK_.call(null,map__30991))?cljs.core.apply.call(null,cljs.core.hash_map,map__30991):map__30991);var target = cljs.core.get.call(null,map__30991__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__31038 = cljs.core.next.call(null,seq__30986__$1);
var G__31039 = null;
var G__31040 = (0);
var G__31041 = (0);
seq__30986 = G__31038;
chunk__30987 = G__31039;
count__30988 = G__31040;
i__30989 = G__31041;
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
clustermap.app.t30946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,state,event_handlers_map,handle_event){
return (function (_30948){var self__ = this;
var _30948__$1 = this;return self__.meta30947;
});})(comm,state,event_handlers_map,handle_event))
;
clustermap.app.t30946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,state,event_handlers_map,handle_event){
return (function (_30948,meta30947__$1){var self__ = this;
var _30948__$1 = this;return (new clustermap.app.t30946(self__.handle_event,self__.event_handlers_map,self__.state,self__.comm,self__.create_app_instance,meta30947__$1));
});})(comm,state,event_handlers_map,handle_event))
;
clustermap.app.__GT_t30946 = ((function (comm,state,event_handlers_map,handle_event){
return (function __GT_t30946(handle_event__$1,event_handlers_map__$1,state__$1,comm__$1,create_app_instance__$1,meta30947){return (new clustermap.app.t30946(handle_event__$1,event_handlers_map__$1,state__$1,comm__$1,create_app_instance__$1,meta30947));
});})(comm,state,event_handlers_map,handle_event))
;
}
return (new clustermap.app.t30946(handle_event,event_handlers_map,state,comm,create_app_instance,null));
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
