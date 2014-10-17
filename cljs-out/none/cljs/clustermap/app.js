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
clustermap.app.initial_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"collections","collections",-2114643505),new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255),false,new cljs.core.Keyword(null,"bounds","bounds",1691609455),null,new cljs.core.Keyword(null,"compiled","compiled",850043082),null], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"geoport","geoport",534549910),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"companies",new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),null,new cljs.core.Keyword(null,"bounds","bounds",1691609455),null,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936),null,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"key","key",-1516042587),"boundaryline_id",new cljs.core.Keyword(null,"variable","variable",-281346492),"!latest_employee_count"], null),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Oranges","Oranges",1752319702),new cljs.core.Keyword(null,"9","9",1664767314)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"sum","sum",136986814)], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.Keyword(null,"map-report","map-report",-254073588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null)], null)], null),new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),null], null),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),"desc"], null)], null),new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!name","!name",1164538490),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!postcode","!postcode",1728852280),"Postcode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!formation_date","!formation_date",-1967327335),"Formation date",(function (p1__19951_SHARP_){return clustermap.formats.time.format_date.call(null,p1__19951_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!latest_accounts_date","!latest_accounts_date",-259857093),"Filing date",(function (p1__19952_SHARP_){return clustermap.formats.time.format_date.call(null,p1__19952_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938),"Employees",(function (p1__19953_SHARP_){return clustermap.formats.number.readable.call(null,p1__19953_SHARP_,new cljs.core.Keyword(null,"dec","dec",1888433436),(0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"Turnover",(function (p1__19954_SHARP_){return clustermap.formats.money.readable.call(null,p1__19954_SHARP_,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
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
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__19957){var vec__19958 = p__19957;var key_or_path = cljs.core.nth.call(null,vec__19958,(0),null);var value_or_fn = cljs.core.nth.call(null,vec__19958,(1),null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:((function (path,vec__19958,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__19958,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (state,p__19959){var map__19961 = p__19959;var map__19961__$1 = ((cljs.core.seq_QMARK_.call(null,map__19961))?cljs.core.apply.call(null,cljs.core.hash_map,map__19961):map__19961);var path_values = map__19961__$1;return cljs.core.swap_BANG_.call(null,state,clustermap.app.new_state,path_values);
};
var set_state = function (state,var_args){
var p__19959 = null;if (arguments.length > 1) {
  p__19959 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_state__delegate.call(this,state,p__19959);};
set_state.cljs$lang$maxFixedArity = 1;
set_state.cljs$lang$applyTo = (function (arglist__19962){
var state = cljs.core.first(arglist__19962);
var p__19959 = cljs.core.rest(arglist__19962);
return set_state__delegate(state,p__19959);
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
get_state.cljs$lang$applyTo = (function (arglist__19963){
var state = cljs.core.first(arglist__19963);
var path = cljs.core.rest(arglist__19963);
return get_state__delegate(state,path);
});
get_state.cljs$core$IFn$_invoke$arity$variadic = get_state__delegate;
return get_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_counties","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(state){var seq__19968 = cljs.core.seq.call(null,clustermap.app.bl_collections);var chunk__19969 = null;var count__19970 = (0);var i__19971 = (0);while(true){
if((i__19971 < count__19970))
{var blcoll = cljs.core._nth.call(null,chunk__19969,i__19971);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__19972 = seq__19968;
var G__19973 = chunk__19969;
var G__19974 = count__19970;
var G__19975 = (i__19971 + (1));
seq__19968 = G__19972;
chunk__19969 = G__19973;
count__19970 = G__19974;
i__19971 = G__19975;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19968);if(temp__4126__auto__)
{var seq__19968__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19968__$1))
{var c__8656__auto__ = cljs.core.chunk_first.call(null,seq__19968__$1);{
var G__19976 = cljs.core.chunk_rest.call(null,seq__19968__$1);
var G__19977 = c__8656__auto__;
var G__19978 = cljs.core.count.call(null,c__8656__auto__);
var G__19979 = (0);
seq__19968 = G__19976;
chunk__19969 = G__19977;
count__19970 = G__19978;
i__19971 = G__19979;
continue;
}
} else
{var blcoll = cljs.core.first.call(null,seq__19968__$1);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__19980 = cljs.core.next.call(null,seq__19968__$1);
var G__19981 = null;
var G__19982 = (0);
var G__19983 = (0);
seq__19968 = G__19980;
chunk__19969 = G__19981;
count__19970 = G__19982;
i__19971 = G__19983;
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
clustermap.app.set_route = (function set_route(history,view,type,id){if(cljs.core.truth_((function (){var and__7888__auto__ = type;if(cljs.core.truth_(and__7888__auto__))
{return id;
} else
{return and__7888__auto__;
}
})()))
{return history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__7900__auto__ = view;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
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
clustermap.app.parse_route = (function parse_route(history){var fragment = history.getToken();var vec__19987 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__19987,(0),null);var view = cljs.core.nth.call(null,vec__19987,(1),null);var type = cljs.core.nth.call(null,vec__19987,(2),null);var id = cljs.core.nth.call(null,vec__19987,(3),null);var type__$1 = ((((function (){var G__19988 = type;var G__19988__$1 = (((G__19988 == null))?null:clojure.string.trim.call(null,G__19988));var G__19988__$2 = (((G__19988__$1 == null))?null:cljs.core.count.call(null,G__19988__$1));return G__19988__$2;
})() > (0)))?clojure.string.trim.call(null,type):null);var id__$1 = ((((function (){var G__19989 = id;var G__19989__$1 = (((G__19989 == null))?null:clojure.string.trim.call(null,G__19989));var G__19989__$2 = (((G__19989__$1 == null))?null:cljs.core.count.call(null,G__19989__$1));return G__19989__$2;
})() > (0)))?clojure.string.trim.call(null,id):null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),view,new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null);
});
clustermap.app.set_view_route = (function set_view_route(history,view){var map__19991 = clustermap.app.parse_route.call(null,history);var map__19991__$1 = ((cljs.core.seq_QMARK_.call(null,map__19991))?cljs.core.apply.call(null,cljs.core.hash_map,map__19991):map__19991);var id = cljs.core.get.call(null,map__19991__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__19991__$1,new cljs.core.Keyword(null,"type","type",1174270348));return clustermap.app.set_route.call(null,history,view,type,id);
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
clustermap.app.init_routes = (function init_routes(history,comm){var action__13582__auto___20008 = (function (params__13583__auto__){if(cljs.core.map_QMARK_.call(null,params__13583__auto__))
{var map__20000 = params__13583__auto__;var map__20000__$1 = ((cljs.core.seq_QMARK_.call(null,map__20000))?cljs.core.apply.call(null,cljs.core.hash_map,map__20000):map__20000);return null;
} else
{if(cljs.core.vector_QMARK_.call(null,params__13583__auto__))
{var vec__20001 = params__13583__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__13582__auto___20008);
var action__13582__auto___20009 = (function (params__13583__auto__){if(cljs.core.map_QMARK_.call(null,params__13583__auto__))
{var map__20002 = params__13583__auto__;var map__20002__$1 = ((cljs.core.seq_QMARK_.call(null,map__20002))?cljs.core.apply.call(null,cljs.core.hash_map,map__20002):map__20002);return null;
} else
{if(cljs.core.vector_QMARK_.call(null,params__13583__auto__))
{var vec__20003 = params__13583__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__13582__auto___20009);
var action__13582__auto___20010 = (function (params__13583__auto__){if(cljs.core.map_QMARK_.call(null,params__13583__auto__))
{var map__20004 = params__13583__auto__;var map__20004__$1 = ((cljs.core.seq_QMARK_.call(null,map__20004))?cljs.core.apply.call(null,cljs.core.hash_map,map__20004):map__20004);var view = cljs.core.get.call(null,map__20004__$1,new cljs.core.Keyword(null,"view","view",1247994814));return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__13583__auto__))
{var vec__20005 = params__13583__auto__;var view = cljs.core.nth.call(null,vec__20005,(0),null);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__13582__auto___20010);
var action__13582__auto___20011 = (function (params__13583__auto__){if(cljs.core.map_QMARK_.call(null,params__13583__auto__))
{var map__20006 = params__13583__auto__;var map__20006__$1 = ((cljs.core.seq_QMARK_.call(null,map__20006))?cljs.core.apply.call(null,cljs.core.hash_map,map__20006):map__20006);var id = cljs.core.get.call(null,map__20006__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__20006__$1,new cljs.core.Keyword(null,"type","type",1174270348));var view = cljs.core.get.call(null,map__20006__$1,new cljs.core.Keyword(null,"view","view",1247994814));return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__13583__auto__))
{var vec__20007 = params__13583__auto__;var view = cljs.core.nth.call(null,vec__20007,(0),null);var type = cljs.core.nth.call(null,vec__20007,(1),null);var id = cljs.core.nth.call(null,vec__20007,(2),null);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__13582__auto___20011);
goog.events.listen(history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
}));
return history.setEnabled(true);
});
clustermap.app.history_STAR_ = (new goog.History());
clustermap.app.IApp = (function (){var obj20013 = {};return obj20013;
})();
clustermap.app.start = (function start(this$){if((function (){var and__7888__auto__ = this$;if(and__7888__auto__)
{return this$.clustermap$app$IApp$start$arity$1;
} else
{return and__7888__auto__;
}
})())
{return this$.clustermap$app$IApp$start$arity$1(this$);
} else
{var x__8527__auto__ = (((this$ == null))?null:this$);return (function (){var or__7900__auto__ = (clustermap.app.start[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (clustermap.app.start["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.start",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.stop = (function stop(this$){if((function (){var and__7888__auto__ = this$;if(and__7888__auto__)
{return this$.clustermap$app$IApp$stop$arity$1;
} else
{return and__7888__auto__;
}
})())
{return this$.clustermap$app$IApp$stop$arity$1(this$);
} else
{var x__8527__auto__ = (((this$ == null))?null:this$);return (function (){var or__7900__auto__ = (clustermap.app.stop[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (clustermap.app.stop["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.stop",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.create_app_instance = (function create_app_instance(){var comm = cljs.core.async.chan.call(null);var state = cljs.core.atom.call(null,clustermap.app.initial_state);var event_handlers_map = clustermap.app.create_event_handlers_map.call(null,state,clustermap.app.history_STAR_);var handle_event = cljs.core.partial.call(null,clustermap.app.choose_event_handler,event_handlers_map);if(typeof clustermap.app.t20060 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t20060 = (function (handle_event,event_handlers_map,state,comm,create_app_instance,meta20061){
this.handle_event = handle_event;
this.event_handlers_map = event_handlers_map;
this.state = state;
this.comm = comm;
this.create_app_instance = create_app_instance;
this.meta20061 = meta20061;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t20060.cljs$lang$type = true;
clustermap.app.t20060.cljs$lang$ctorStr = "clustermap.app/t20060";
clustermap.app.t20060.cljs$lang$ctorPrWriter = ((function (comm,state,event_handlers_map,handle_event){
return (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"clustermap.app/t20060");
});})(comm,state,event_handlers_map,handle_event))
;
clustermap.app.t20060.prototype.clustermap$app$IApp$ = true;
clustermap.app.t20060.prototype.clustermap$app$IApp$start$arity$1 = ((function (comm,state,event_handlers_map,handle_event){
return (function (_){var self__ = this;
var ___$1 = this;var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),path_fn,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857),link_fn,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502),cljs.core.partial.call(null,clustermap.routes.path_for_view,cljs.core.partial.call(null,clustermap.app.parse_route,clustermap.app.history_STAR_)),new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393),cljs.core.partial.call(null,clustermap.boundarylines.get_or_fetch_best_boundarylines,self__.state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)),new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614),cljs.core.partial.call(null,clustermap.boundarylines.point_in_boundarylines,self__.state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.Keyword(null,"uk_boroughs","uk_boroughs",800727440))], null);clustermap.nav.init.call(null,self__.comm);
clustermap.app.init_routes.call(null,clustermap.app.history_STAR_,self__.comm);
clustermap.app.load_boundaryline_collection_indexes.call(null,self__.state);
var seq__20063_20106 = cljs.core.seq.call(null,clustermap.app.components);var chunk__20064_20107 = null;var count__20065_20108 = (0);var i__20066_20109 = (0);while(true){
if((i__20066_20109 < count__20065_20108))
{var map__20067_20110 = cljs.core._nth.call(null,chunk__20064_20107,i__20066_20109);var map__20067_20111__$1 = ((cljs.core.seq_QMARK_.call(null,map__20067_20110))?cljs.core.apply.call(null,cljs.core.hash_map,map__20067_20110):map__20067_20110);var paths_20112 = cljs.core.get.call(null,map__20067_20111__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var target_20113 = cljs.core.get.call(null,map__20067_20111__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_20114 = cljs.core.get.call(null,map__20067_20111__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_20115 = cljs.core.get.call(null,map__20067_20111__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_20115,f_20114,target_20113,paths_20112], null)));
clustermap.components.mount.mount.call(null,name_20115,f_20114,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_20113,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_20112);
{
var G__20116 = seq__20063_20106;
var G__20117 = chunk__20064_20107;
var G__20118 = count__20065_20108;
var G__20119 = (i__20066_20109 + (1));
seq__20063_20106 = G__20116;
chunk__20064_20107 = G__20117;
count__20065_20108 = G__20118;
i__20066_20109 = G__20119;
continue;
}
} else
{var temp__4126__auto___20120 = cljs.core.seq.call(null,seq__20063_20106);if(temp__4126__auto___20120)
{var seq__20063_20121__$1 = temp__4126__auto___20120;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20063_20121__$1))
{var c__8656__auto___20122 = cljs.core.chunk_first.call(null,seq__20063_20121__$1);{
var G__20123 = cljs.core.chunk_rest.call(null,seq__20063_20121__$1);
var G__20124 = c__8656__auto___20122;
var G__20125 = cljs.core.count.call(null,c__8656__auto___20122);
var G__20126 = (0);
seq__20063_20106 = G__20123;
chunk__20064_20107 = G__20124;
count__20065_20108 = G__20125;
i__20066_20109 = G__20126;
continue;
}
} else
{var map__20068_20127 = cljs.core.first.call(null,seq__20063_20121__$1);var map__20068_20128__$1 = ((cljs.core.seq_QMARK_.call(null,map__20068_20127))?cljs.core.apply.call(null,cljs.core.hash_map,map__20068_20127):map__20068_20127);var paths_20129 = cljs.core.get.call(null,map__20068_20128__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var target_20130 = cljs.core.get.call(null,map__20068_20128__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_20131 = cljs.core.get.call(null,map__20068_20128__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_20132 = cljs.core.get.call(null,map__20068_20128__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_20132,f_20131,target_20130,paths_20129], null)));
clustermap.components.mount.mount.call(null,name_20132,f_20131,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_20130,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_20129);
{
var G__20133 = cljs.core.next.call(null,seq__20063_20121__$1);
var G__20134 = null;
var G__20135 = (0);
var G__20136 = (0);
seq__20063_20106 = G__20133;
chunk__20064_20107 = G__20134;
count__20065_20108 = G__20135;
i__20066_20109 = G__20136;
continue;
}
}
} else
{}
}
break;
}
var c__9759__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event){
return (function (state_20084){var state_val_20085 = (state_20084[(1)]);if((state_val_20085 === (7)))
{var inst_20073 = (state_20084[(2)]);var inst_20074 = cljs.core.nth.call(null,inst_20073,(0),null);var inst_20075 = cljs.core.nth.call(null,inst_20073,(1),null);var inst_20076 = self__.handle_event.call(null,inst_20074,inst_20075);var state_20084__$1 = (function (){var statearr_20086 = state_20084;(statearr_20086[(7)] = inst_20076);
return statearr_20086;
})();var statearr_20087_20137 = state_20084__$1;(statearr_20087_20137[(2)] = null);
(statearr_20087_20137[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20085 === (6)))
{var inst_20080 = (state_20084[(2)]);var state_20084__$1 = state_20084;var statearr_20088_20138 = state_20084__$1;(statearr_20088_20138[(2)] = inst_20080);
(statearr_20088_20138[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20085 === (5)))
{var state_20084__$1 = state_20084;var statearr_20089_20139 = state_20084__$1;(statearr_20089_20139[(2)] = null);
(statearr_20089_20139[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20085 === (4)))
{var state_20084__$1 = state_20084;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20084__$1,(7),self__.comm);
} else
{if((state_val_20085 === (3)))
{var inst_20082 = (state_20084[(2)]);var state_20084__$1 = state_20084;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20084__$1,inst_20082);
} else
{if((state_val_20085 === (2)))
{var state_20084__$1 = state_20084;var statearr_20090_20140 = state_20084__$1;(statearr_20090_20140[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20085 === (1)))
{var state_20084__$1 = state_20084;var statearr_20092_20141 = state_20084__$1;(statearr_20092_20141[(2)] = null);
(statearr_20092_20141[(1)] = (2));
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
});})(c__9759__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event))
;return ((function (switch__9744__auto__,c__9759__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_20096 = [null,null,null,null,null,null,null,null];(statearr_20096[(0)] = state_machine__9745__auto__);
(statearr_20096[(1)] = (1));
return statearr_20096;
});
var state_machine__9745__auto____1 = (function (state_20084){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_20084);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e20097){if((e20097 instanceof Object))
{var ex__9748__auto__ = e20097;var statearr_20098_20142 = state_20084;(statearr_20098_20142[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20084);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20097;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20143 = state_20084;
state_20084 = G__20143;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_20084){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_20084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event))
})();var state__9761__auto__ = (function (){var statearr_20099 = f__9760__auto__.call(null);(statearr_20099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto__);
return statearr_20099;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event))
);
return c__9759__auto__;
});})(comm,state,event_handlers_map,handle_event))
;
clustermap.app.t20060.prototype.clustermap$app$IApp$stop$arity$1 = ((function (comm,state,event_handlers_map,handle_event){
return (function (_){var self__ = this;
var ___$1 = this;clustermap.app.history_STAR_.removeAllListeners();
secretary.core.reset_routes_BANG_.call(null);
var seq__20100 = cljs.core.seq.call(null,clustermap.app.components);var chunk__20101 = null;var count__20102 = (0);var i__20103 = (0);while(true){
if((i__20103 < count__20102))
{var map__20104 = cljs.core._nth.call(null,chunk__20101,i__20103);var map__20104__$1 = ((cljs.core.seq_QMARK_.call(null,map__20104))?cljs.core.apply.call(null,cljs.core.hash_map,map__20104):map__20104);var target = cljs.core.get.call(null,map__20104__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__20144 = seq__20100;
var G__20145 = chunk__20101;
var G__20146 = count__20102;
var G__20147 = (i__20103 + (1));
seq__20100 = G__20144;
chunk__20101 = G__20145;
count__20102 = G__20146;
i__20103 = G__20147;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20100);if(temp__4126__auto__)
{var seq__20100__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20100__$1))
{var c__8656__auto__ = cljs.core.chunk_first.call(null,seq__20100__$1);{
var G__20148 = cljs.core.chunk_rest.call(null,seq__20100__$1);
var G__20149 = c__8656__auto__;
var G__20150 = cljs.core.count.call(null,c__8656__auto__);
var G__20151 = (0);
seq__20100 = G__20148;
chunk__20101 = G__20149;
count__20102 = G__20150;
i__20103 = G__20151;
continue;
}
} else
{var map__20105 = cljs.core.first.call(null,seq__20100__$1);var map__20105__$1 = ((cljs.core.seq_QMARK_.call(null,map__20105))?cljs.core.apply.call(null,cljs.core.hash_map,map__20105):map__20105);var target = cljs.core.get.call(null,map__20105__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__20152 = cljs.core.next.call(null,seq__20100__$1);
var G__20153 = null;
var G__20154 = (0);
var G__20155 = (0);
seq__20100 = G__20152;
chunk__20101 = G__20153;
count__20102 = G__20154;
i__20103 = G__20155;
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
clustermap.app.t20060.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,state,event_handlers_map,handle_event){
return (function (_20062){var self__ = this;
var _20062__$1 = this;return self__.meta20061;
});})(comm,state,event_handlers_map,handle_event))
;
clustermap.app.t20060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,state,event_handlers_map,handle_event){
return (function (_20062,meta20061__$1){var self__ = this;
var _20062__$1 = this;return (new clustermap.app.t20060(self__.handle_event,self__.event_handlers_map,self__.state,self__.comm,self__.create_app_instance,meta20061__$1));
});})(comm,state,event_handlers_map,handle_event))
;
clustermap.app.__GT_t20060 = ((function (comm,state,event_handlers_map,handle_event){
return (function __GT_t20060(handle_event__$1,event_handlers_map__$1,state__$1,comm__$1,create_app_instance__$1,meta20061){return (new clustermap.app.t20060(handle_event__$1,event_handlers_map__$1,state__$1,comm__$1,create_app_instance__$1,meta20061));
});})(comm,state,event_handlers_map,handle_event))
;
}
return (new clustermap.app.t20060(handle_event,event_handlers_map,state,comm,create_app_instance,null));
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

//# sourceMappingURL=app.js.map