// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.components.full_report.overview');
goog.require('cljs.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__23505){var map__23510 = p__23505;var map__23510__$1 = ((cljs.core.seq_QMARK_.call(null,map__23510))?cljs.core.apply.call(null,cljs.core.hash_map,map__23510):map__23510);var value = cljs.core.get.call(null,map__23510__$1,new cljs.core.Keyword(null,"value","value",1125876963));var type = cljs.core.get.call(null,map__23510__$1,new cljs.core.Keyword(null,"type","type",1017479852));var pred__23511 = cljs.core._EQ_;var expr__23512 = type;if(cljs.core.truth_(pred__23511.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__23512)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Mean",new cljs.core.Keyword(null,"description","description",3584325486),"Mean for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_(pred__23511.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__23512)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Mean",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_(pred__23511.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__23512)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Constituency"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Mean",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over the Portfolio Companies with sites in the selected Constituency"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals over all Portfolio Companies"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Mean",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over all Portfolio Companies"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__23514){var map__23540 = p__23514;var map__23540__$1 = ((cljs.core.seq_QMARK_.call(null,map__23540))?cljs.core.apply.call(null,cljs.core.hash_map,map__23540):map__23540);var selection_investment_stats = cljs.core.get.call(null,map__23540__$1,new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312));var selection = cljs.core.get.call(null,map__23540__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var all_investment_stats = cljs.core.get.call(null,map__23540__$1,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",2486056771));var sel_descrs = clustermap.components.full_report.overview.describe_selection.call(null,selection);var site_stats = (function (){var or__3541__auto__ = selection_investment_stats;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return all_investment_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),cljs.core.merge.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),new cljs.core.Keyword(null,"turnover","turnover",1148922435),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922),new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185)],[clustermap.formats.number.fnum.call(null,(function (){var G__23541 = site_stats;var G__23541__$1 = (((G__23541 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23541));var G__23541__$2 = (((G__23541__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23541__$1));return G__23541__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__23542 = site_stats;var G__23542__$1 = (((G__23542 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__23542));return G__23542__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__23543 = site_stats;var G__23543__$1 = (((G__23543 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23543));var G__23543__$2 = (((G__23543__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23543__$1));return G__23543__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__23544 = site_stats;var G__23544__$1 = (((G__23544 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__23544));return G__23544__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__23545 = site_stats;var G__23545__$1 = (((G__23545 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__23545));var G__23545__$2 = (((G__23545__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23545__$1));return G__23545__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),(function (){var G__23546 = site_stats;var G__23546__$1 = (((G__23546 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__23546));var G__23546__$2 = (((G__23546__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23546__$1));return G__23546__$2;
})(),clustermap.formats.number.fnum.call(null,(function (){var G__23547 = site_stats;var G__23547__$1 = (((G__23547 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__23547));return G__23547__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__23548 = site_stats;var G__23548__$1 = (((G__23548 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__23548));var G__23548__$2 = (((G__23548__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23548__$1));return G__23548__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),(function (){var G__23549 = site_stats;var G__23549__$1 = (((G__23549 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__23549));var G__23549__$2 = (((G__23549__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23549__$1));return G__23549__$2;
})()])),new cljs.core.Keyword(null,"averages","averages",2913851752),cljs.core.merge.call(null,new cljs.core.Keyword(null,"averages","averages",2913851752).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),new cljs.core.Keyword(null,"turnover","turnover",1148922435),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922),new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185)],[clustermap.formats.number.fnum.call(null,(function (){var G__23550 = site_stats;var G__23550__$1 = (((G__23550 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23550));var G__23550__$2 = (((G__23550__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__23550__$1));return G__23550__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),"\u00A0",clustermap.formats.money.fmoney.call(null,(function (){var G__23551 = site_stats;var G__23551__$1 = (((G__23551 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23551));var G__23551__$2 = (((G__23551__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__23551__$1));return G__23551__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),"\u00A0",clustermap.formats.number.fnum.call(null,(function (){var G__23552 = site_stats;var G__23552__$1 = (((G__23552 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__23552));var G__23552__$2 = (((G__23552__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__23552__$1));return G__23552__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),(function (){var G__23553 = site_stats;var G__23553__$1 = (((G__23553 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__23553));var G__23553__$2 = (((G__23553__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__23553__$1));return G__23553__$2;
})(),"\u00A0",clustermap.formats.money.fmoney.call(null,(function (){var G__23554 = site_stats;var G__23554__$1 = (((G__23554 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__23554));var G__23554__$2 = (((G__23554__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__23554__$1));return G__23554__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),(function (){var G__23555 = site_stats;var G__23555__$1 = (((G__23555 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__23555));var G__23555__$2 = (((G__23555__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__23555__$1));return G__23555__$2;
})()])),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),cljs.core.merge.call(null,new cljs.core.Keyword(null,"benchmark","benchmark",1682044015).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),new cljs.core.Keyword(null,"turnover","turnover",1148922435),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922),new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185)],[clustermap.formats.number.fnum.call(null,(function (){var G__23556 = all_investment_stats;var G__23556__$1 = (((G__23556 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23556));var G__23556__$2 = (((G__23556__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__23556__$1));return G__23556__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__23557 = all_investment_stats;var G__23557__$1 = (((G__23557 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__23557));return G__23557__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__23558 = all_investment_stats;var G__23558__$1 = (((G__23558 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23558));var G__23558__$2 = (((G__23558__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__23558__$1));return G__23558__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__23559 = all_investment_stats;var G__23559__$1 = (((G__23559 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__23559));return G__23559__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__23560 = all_investment_stats;var G__23560__$1 = (((G__23560 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__23560));var G__23560__$2 = (((G__23560__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__23560__$1));return G__23560__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),(function (){var G__23561 = all_investment_stats;var G__23561__$1 = (((G__23561 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__23561));var G__23561__$2 = (((G__23561__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23561__$1));return G__23561__$2;
})(),clustermap.formats.number.fnum.call(null,(function (){var G__23562 = all_investment_stats;var G__23562__$1 = (((G__23562 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__23562));return G__23562__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__23563 = all_investment_stats;var G__23563__$1 = (((G__23563 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__23563));var G__23563__$2 = (((G__23563__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__23563__$1));return G__23563__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),(function (){var G__23564 = all_investment_stats;var G__23564__$1 = (((G__23564 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__23564));var G__23564__$2 = (((G__23564__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__23564__$1));return G__23564__$2;
})()]))], null);
});
clustermap.components.full_report.overview.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > 0))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < 0))
{return React.DOM.i({"className": "icon-negative"});
} else
{if(true)
{return null;
} else
{return null;
}
}
}
}
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__23588 = clustermap.components.full_report.overview.overview_data.call(null,data);var map__23588__$1 = ((cljs.core.seq_QMARK_.call(null,map__23588))?cljs.core.apply.call(null,cljs.core.hash_map,map__23588):map__23588);var benchmark = cljs.core.get.call(null,map__23588__$1,new cljs.core.Keyword(null,"benchmark","benchmark",1682044015));var averages = cljs.core.get.call(null,map__23588__$1,new cljs.core.Keyword(null,"averages","averages",2913851752));var selection = cljs.core.get.call(null,map__23588__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.full_report.overview.t23589 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t23589 = (function (selection,averages,benchmark,map__23588,data,overview,meta23590){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__23588 = map__23588;
this.data = data;
this.overview = overview;
this.meta23590 = meta23590;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t23589.cljs$lang$type = true;
clustermap.components.full_report.overview.t23589.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t23589";
clustermap.components.full_report.overview.t23589.cljs$lang$ctorPrWriter = ((function (map__23588,map__23588__$1,benchmark,averages,selection){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.full-report.overview/t23589");
});})(map__23588,map__23588__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t23589.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t23589.prototype.om$core$IRender$render$arity$1 = ((function (map__23588,map__23588__$1,benchmark,averages,selection){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings",React.DOM.small(null,"\u00A0(may span years : see table below for details)")),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Investor-backed companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.selection.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.selection.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs23596 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs23596))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23596)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23596))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23596)], null))));
})()),React.DOM.td(null,(function (){var attrs23597 = new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs23597))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23597)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23597))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23597)], null))));
})()),React.DOM.td(null,(function (){var attrs23598 = new cljs.core.Keyword(null,"constituencies","constituencies",2756015190).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs23598))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23598)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23598))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23598)], null))));
})()),React.DOM.td(null,(function (){var attrs23599 = new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs23599))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23599)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23599))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23599)], null))));
})()),React.DOM.td(null,(function (){var attrs23600 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922).cljs$core$IFn$_invoke$arity$1(self__.selection));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs23600))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23600)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23600))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23600)], null))));
})()),React.DOM.td(null,(function (){var attrs23601 = new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs23601))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23601)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23601))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23601)], null))));
})()),React.DOM.td(null,(function (){var attrs23602 = new cljs.core.Keyword(null,"employee-count","employee-count",1111164066).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs23602))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23602)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23602))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23602)], null))));
})()))))));
});})(map__23588,map__23588__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t23589.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23588,map__23588__$1,benchmark,averages,selection){
return (function (_23591){var self__ = this;
var _23591__$1 = this;return self__.meta23590;
});})(map__23588,map__23588__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t23589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23588,map__23588__$1,benchmark,averages,selection){
return (function (_23591,meta23590__$1){var self__ = this;
var _23591__$1 = this;return (new clustermap.components.full_report.overview.t23589(self__.selection,self__.averages,self__.benchmark,self__.map__23588,self__.data,self__.overview,meta23590__$1));
});})(map__23588,map__23588__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.__GT_t23589 = ((function (map__23588,map__23588__$1,benchmark,averages,selection){
return (function __GT_t23589(selection__$1,averages__$1,benchmark__$1,map__23588__$2,data__$1,overview__$1,meta23590){return (new clustermap.components.full_report.overview.t23589(selection__$1,averages__$1,benchmark__$1,map__23588__$2,data__$1,overview__$1,meta23590));
});})(map__23588,map__23588__$1,benchmark,averages,selection))
;
}
return (new clustermap.components.full_report.overview.t23589(selection,averages,benchmark,map__23588__$1,data,overview,null));
});
