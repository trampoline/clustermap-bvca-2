// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.full_report.overview');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__12148){var map__12153 = p__12148;var map__12153__$1 = ((cljs.core.seq_QMARK_.call(null,map__12153))?cljs.core.apply.call(null,cljs.core.hash_map,map__12153):map__12153);var value = cljs.core.get.call(null,map__12153__$1,new cljs.core.Keyword(null,"value","value",1125876963));var type = cljs.core.get.call(null,map__12153__$1,new cljs.core.Keyword(null,"type","type",1017479852));var pred__12154 = cljs.core._EQ_;var expr__12155 = type;if(cljs.core.truth_(pred__12154.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12155)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Mean",new cljs.core.Keyword(null,"description","description",3584325486),"Mean for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_(pred__12154.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12155)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Mean",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_(pred__12154.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12155)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Constituency"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Mean",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over the Portfolio Companies with sites in the selected Constituency"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals over all Portfolio Companies"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Mean",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over all Portfolio Companies"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__12157){var map__12183 = p__12157;var map__12183__$1 = ((cljs.core.seq_QMARK_.call(null,map__12183))?cljs.core.apply.call(null,cljs.core.hash_map,map__12183):map__12183);var selection_investment_stats = cljs.core.get.call(null,map__12183__$1,new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312));var selection = cljs.core.get.call(null,map__12183__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var all_investment_stats = cljs.core.get.call(null,map__12183__$1,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",2486056771));var sel_descrs = clustermap.components.full_report.overview.describe_selection.call(null,selection);var site_stats = (function (){var or__3441__auto__ = selection_investment_stats;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return all_investment_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),cljs.core.merge.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),new cljs.core.Keyword(null,"turnover","turnover",1148922435)],[clustermap.formats.number.fnum.call(null,(function (){var G__12184 = site_stats;var G__12184__$1 = (((G__12184 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12184));return G__12184__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),(function (){var G__12185 = site_stats;var G__12185__$1 = (((G__12185 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__12185));var G__12185__$2 = (((G__12185__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12185__$1));return G__12185__$2;
})(),(function (){var G__12186 = site_stats;var G__12186__$1 = (((G__12186 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__12186));var G__12186__$2 = (((G__12186__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12186__$1));return G__12186__$2;
})(),clustermap.formats.number.fnum.call(null,(function (){var G__12187 = site_stats;var G__12187__$1 = (((G__12187 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12187));return G__12187__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__12188 = site_stats;var G__12188__$1 = (((G__12188 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__12188));var G__12188__$2 = (((G__12188__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12188__$1));return G__12188__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__12189 = site_stats;var G__12189__$1 = (((G__12189 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__12189));var G__12189__$2 = (((G__12189__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12189__$1));return G__12189__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__12190 = site_stats;var G__12190__$1 = (((G__12190 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12190));var G__12190__$2 = (((G__12190__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12190__$1));return G__12190__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__12191 = site_stats;var G__12191__$1 = (((G__12191 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12191));return G__12191__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__12192 = site_stats;var G__12192__$1 = (((G__12192 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12192));var G__12192__$2 = (((G__12192__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12192__$1));return G__12192__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-")])),new cljs.core.Keyword(null,"averages","averages",2913851752),cljs.core.merge.call(null,new cljs.core.Keyword(null,"averages","averages",2913851752).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),new cljs.core.Keyword(null,"turnover","turnover",1148922435)],["\u00A0",(function (){var G__12193 = site_stats;var G__12193__$1 = (((G__12193 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__12193));var G__12193__$2 = (((G__12193__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__12193__$1));return G__12193__$2;
})(),(function (){var G__12194 = site_stats;var G__12194__$1 = (((G__12194 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__12194));var G__12194__$2 = (((G__12194__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__12194__$1));return G__12194__$2;
})(),"\u00A0",clustermap.formats.number.fnum.call(null,(function (){var G__12195 = site_stats;var G__12195__$1 = (((G__12195 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__12195));var G__12195__$2 = (((G__12195__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__12195__$1));return G__12195__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__12196 = site_stats;var G__12196__$1 = (((G__12196 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__12196));var G__12196__$2 = (((G__12196__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__12196__$1));return G__12196__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__12197 = site_stats;var G__12197__$1 = (((G__12197 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12197));var G__12197__$2 = (((G__12197__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__12197__$1));return G__12197__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),"\u00A0",clustermap.formats.money.fmoney.call(null,(function (){var G__12198 = site_stats;var G__12198__$1 = (((G__12198 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12198));var G__12198__$2 = (((G__12198__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__12198__$1));return G__12198__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-")])),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),cljs.core.merge.call(null,new cljs.core.Keyword(null,"benchmark","benchmark",1682044015).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),new cljs.core.Keyword(null,"turnover","turnover",1148922435)],[clustermap.formats.number.fnum.call(null,(function (){var G__12199 = all_investment_stats;var G__12199__$1 = (((G__12199 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12199));return G__12199__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),(function (){var G__12200 = all_investment_stats;var G__12200__$1 = (((G__12200 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__12200));var G__12200__$2 = (((G__12200__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__12200__$1));return G__12200__$2;
})(),(function (){var G__12201 = all_investment_stats;var G__12201__$1 = (((G__12201 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__12201));var G__12201__$2 = (((G__12201__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12201__$1));return G__12201__$2;
})(),clustermap.formats.number.fnum.call(null,(function (){var G__12202 = all_investment_stats;var G__12202__$1 = (((G__12202 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12202));return G__12202__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__12203 = all_investment_stats;var G__12203__$1 = (((G__12203 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__12203));var G__12203__$2 = (((G__12203__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__12203__$1));return G__12203__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__12204 = all_investment_stats;var G__12204__$1 = (((G__12204 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__12204));var G__12204__$2 = (((G__12204__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__12204__$1));return G__12204__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__12205 = all_investment_stats;var G__12205__$1 = (((G__12205 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12205));var G__12205__$2 = (((G__12205__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__12205__$1));return G__12205__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__12206 = all_investment_stats;var G__12206__$1 = (((G__12206 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12206));return G__12206__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__12207 = all_investment_stats;var G__12207__$1 = (((G__12207 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12207));var G__12207__$2 = (((G__12207__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__12207__$1));return G__12207__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-")]))], null);
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__12251 = clustermap.components.full_report.overview.overview_data.call(null,data);var map__12251__$1 = ((cljs.core.seq_QMARK_.call(null,map__12251))?cljs.core.apply.call(null,cljs.core.hash_map,map__12251):map__12251);var benchmark = cljs.core.get.call(null,map__12251__$1,new cljs.core.Keyword(null,"benchmark","benchmark",1682044015));var averages = cljs.core.get.call(null,map__12251__$1,new cljs.core.Keyword(null,"averages","averages",2913851752));var selection = cljs.core.get.call(null,map__12251__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.full_report.overview.t12252 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t12252 = (function (selection,averages,benchmark,map__12251,data,overview,meta12253){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__12251 = map__12251;
this.data = data;
this.overview = overview;
this.meta12253 = meta12253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t12252.cljs$lang$type = true;
clustermap.components.full_report.overview.t12252.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t12252";
clustermap.components.full_report.overview.t12252.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.overview/t12252");
});
clustermap.components.full_report.overview.t12252.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t12252.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.selection.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.selection.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs12259 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs12259))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs12259)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs12259));
}
})()),React.DOM.td(null,(function (){var attrs12260 = new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs12260))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs12260)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs12260));
}
})()),React.DOM.td(null,(function (){var attrs12261 = new cljs.core.Keyword(null,"constituencies","constituencies",2756015190).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs12261))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs12261)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs12261));
}
})()),React.DOM.td(null,(function (){var attrs12262 = new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs12262))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs12262)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs12262));
}
})()),React.DOM.td(null,(function (){var attrs12263 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922).cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_.call(null,attrs12263))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs12263)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs12263));
}
})()),React.DOM.td(null,(function (){var attrs12264 = new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs12264))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs12264)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs12264));
}
})()),React.DOM.td(null,(function (){var attrs12265 = new cljs.core.Keyword(null,"employee-count","employee-count",1111164066).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs12265))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs12265)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs12265));
}
})()),React.DOM.td(null,(function (){var attrs12266 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185).cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_.call(null,attrs12266))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs12266)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs12266));
}
})()),React.DOM.td(null,(function (){var attrs12267 = new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs12267))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs12267)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs12267));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.averages.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.averages.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs12268 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs12268))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs12268)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs12268));
}
})()),React.DOM.td(null,(function (){var attrs12269 = new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs12269))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs12269)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs12269));
}
})()),React.DOM.td(null,(function (){var attrs12270 = new cljs.core.Keyword(null,"constituencies","constituencies",2756015190).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs12270))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs12270)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs12270));
}
})()),React.DOM.td(null,(function (){var attrs12271 = new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs12271))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs12271)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs12271));
}
})()),React.DOM.td(null,(function (){var attrs12272 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922).cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_.call(null,attrs12272))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs12272)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs12272));
}
})()),React.DOM.td(null,(function (){var attrs12273 = new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs12273))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs12273)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs12273));
}
})()),React.DOM.td(null,(function (){var attrs12274 = new cljs.core.Keyword(null,"employee-count","employee-count",1111164066).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs12274))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs12274)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs12274));
}
})()),React.DOM.td(null,(function (){var attrs12275 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185).cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_.call(null,attrs12275))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs12275)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs12275));
}
})()),React.DOM.td(null,(function (){var attrs12276 = new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs12276))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs12276)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs12276));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.benchmark.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.benchmark.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs12277 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs12277))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs12277)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs12277));
}
})()),React.DOM.td(null,(function (){var attrs12278 = new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs12278))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs12278)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs12278));
}
})()),React.DOM.td(null,(function (){var attrs12279 = new cljs.core.Keyword(null,"constituencies","constituencies",2756015190).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs12279))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs12279)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs12279));
}
})()),React.DOM.td(null,(function (){var attrs12280 = new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs12280))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs12280)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs12280));
}
})()),React.DOM.td(null,(function (){var attrs12281 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922).cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_.call(null,attrs12281))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs12281)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs12281));
}
})()),React.DOM.td(null,(function (){var attrs12282 = new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs12282))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs12282)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs12282));
}
})()),React.DOM.td(null,(function (){var attrs12283 = new cljs.core.Keyword(null,"employee-count","employee-count",1111164066).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs12283))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs12283)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs12283));
}
})()),React.DOM.td(null,(function (){var attrs12284 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185).cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_.call(null,attrs12284))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs12284)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs12284));
}
})()),React.DOM.td(null,(function (){var attrs12285 = new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs12285))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs12285)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs12285));
}
})()))))));
});
clustermap.components.full_report.overview.t12252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12254){var self__ = this;
var _12254__$1 = this;return self__.meta12253;
});
clustermap.components.full_report.overview.t12252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12254,meta12253__$1){var self__ = this;
var _12254__$1 = this;return (new clustermap.components.full_report.overview.t12252(self__.selection,self__.averages,self__.benchmark,self__.map__12251,self__.data,self__.overview,meta12253__$1));
});
clustermap.components.full_report.overview.__GT_t12252 = (function __GT_t12252(selection__$1,averages__$1,benchmark__$1,map__12251__$2,data__$1,overview__$1,meta12253){return (new clustermap.components.full_report.overview.t12252(selection__$1,averages__$1,benchmark__$1,map__12251__$2,data__$1,overview__$1,meta12253));
});
}
return (new clustermap.components.full_report.overview.t12252(selection,averages,benchmark,map__12251__$1,data,overview,null));
});
