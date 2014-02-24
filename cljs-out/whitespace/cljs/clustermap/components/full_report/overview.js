// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.overview');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__32989){var map__32994 = p__32989;var map__32994__$1 = ((cljs.core.seq_QMARK_.call(null,map__32994))?cljs.core.apply.call(null,cljs.core.hash_map,map__32994):map__32994);var value = cljs.core.get.call(null,map__32994__$1,new cljs.core.Keyword(null,"value","value",1125876963));var type = cljs.core.get.call(null,map__32994__$1,new cljs.core.Keyword(null,"type","type",1017479852));var pred__32995 = cljs.core._EQ_;var expr__32996 = type;if(cljs.core.truth_(pred__32995.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__32996)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Mean",new cljs.core.Keyword(null,"description","description",3584325486),"Mean for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_(pred__32995.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__32996)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Mean",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_(pred__32995.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__32996)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Constituency"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Mean",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over the Portfolio Companies with sites in the selected Constituency"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals over all Portfolio Companies"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Mean",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over all Portfolio Companies"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__32998){var map__33024 = p__32998;var map__33024__$1 = ((cljs.core.seq_QMARK_.call(null,map__33024))?cljs.core.apply.call(null,cljs.core.hash_map,map__33024):map__33024);var selection_portfolio_company_site_stats = cljs.core.get.call(null,map__33024__$1,new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081));var selection = cljs.core.get.call(null,map__33024__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var all_portfolio_company_site_stats = cljs.core.get.call(null,map__33024__$1,new cljs.core.Keyword(null,"all-portfolio-company-site-stats","all-portfolio-company-site-stats",1130880684));var sel_descrs = clustermap.components.full_report.overview.describe_selection.call(null,selection);var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_site_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),cljs.core.merge.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),new cljs.core.Keyword(null,"turnover","turnover",1148922435)],[clustermap.formats.number.fnum.call(null,(function (){var G__33025 = site_stats;var G__33025__$1 = (((G__33025 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__33025));return G__33025__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),(function (){var G__33026 = site_stats;var G__33026__$1 = (((G__33026 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__33026));var G__33026__$2 = (((G__33026__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33026__$1));return G__33026__$2;
})(),(function (){var G__33027 = site_stats;var G__33027__$1 = (((G__33027 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__33027));var G__33027__$2 = (((G__33027__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33027__$1));return G__33027__$2;
})(),clustermap.formats.number.fnum.call(null,(function (){var G__33028 = site_stats;var G__33028__$1 = (((G__33028 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__33028));return G__33028__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__33029 = site_stats;var G__33029__$1 = (((G__33029 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__33029));var G__33029__$2 = (((G__33029__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33029__$1));return G__33029__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__33030 = site_stats;var G__33030__$1 = (((G__33030 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__33030));var G__33030__$2 = (((G__33030__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33030__$1));return G__33030__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__33031 = site_stats;var G__33031__$1 = (((G__33031 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33031));var G__33031__$2 = (((G__33031__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33031__$1));return G__33031__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__33032 = site_stats;var G__33032__$1 = (((G__33032 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__33032));return G__33032__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__33033 = site_stats;var G__33033__$1 = (((G__33033 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33033));var G__33033__$2 = (((G__33033__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33033__$1));return G__33033__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-")])),new cljs.core.Keyword(null,"averages","averages",2913851752),cljs.core.merge.call(null,new cljs.core.Keyword(null,"averages","averages",2913851752).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),new cljs.core.Keyword(null,"turnover","turnover",1148922435)],["\u00A0",(function (){var G__33034 = site_stats;var G__33034__$1 = (((G__33034 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__33034));var G__33034__$2 = (((G__33034__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__33034__$1));return G__33034__$2;
})(),(function (){var G__33035 = site_stats;var G__33035__$1 = (((G__33035 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__33035));var G__33035__$2 = (((G__33035__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__33035__$1));return G__33035__$2;
})(),"\u00A0",clustermap.formats.number.fnum.call(null,(function (){var G__33036 = site_stats;var G__33036__$1 = (((G__33036 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__33036));var G__33036__$2 = (((G__33036__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__33036__$1));return G__33036__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__33037 = site_stats;var G__33037__$1 = (((G__33037 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__33037));var G__33037__$2 = (((G__33037__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__33037__$1));return G__33037__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__33038 = site_stats;var G__33038__$1 = (((G__33038 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33038));var G__33038__$2 = (((G__33038__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__33038__$1));return G__33038__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),"\u00A0",clustermap.formats.money.fmoney.call(null,(function (){var G__33039 = site_stats;var G__33039__$1 = (((G__33039 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33039));var G__33039__$2 = (((G__33039__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__33039__$1));return G__33039__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-")])),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),cljs.core.merge.call(null,new cljs.core.Keyword(null,"benchmark","benchmark",1682044015).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),new cljs.core.Keyword(null,"turnover","turnover",1148922435)],[clustermap.formats.number.fnum.call(null,(function (){var G__33040 = all_portfolio_company_site_stats;var G__33040__$1 = (((G__33040 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__33040));return G__33040__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),(function (){var G__33041 = all_portfolio_company_site_stats;var G__33041__$1 = (((G__33041 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__33041));var G__33041__$2 = (((G__33041__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__33041__$1));return G__33041__$2;
})(),(function (){var G__33042 = all_portfolio_company_site_stats;var G__33042__$1 = (((G__33042 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__33042));var G__33042__$2 = (((G__33042__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33042__$1));return G__33042__$2;
})(),clustermap.formats.number.fnum.call(null,(function (){var G__33043 = all_portfolio_company_site_stats;var G__33043__$1 = (((G__33043 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__33043));return G__33043__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__33044 = all_portfolio_company_site_stats;var G__33044__$1 = (((G__33044 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__33044));var G__33044__$2 = (((G__33044__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__33044__$1));return G__33044__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__33045 = all_portfolio_company_site_stats;var G__33045__$1 = (((G__33045 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__33045));var G__33045__$2 = (((G__33045__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__33045__$1));return G__33045__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__33046 = all_portfolio_company_site_stats;var G__33046__$1 = (((G__33046 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33046));var G__33046__$2 = (((G__33046__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__33046__$1));return G__33046__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__33047 = all_portfolio_company_site_stats;var G__33047__$1 = (((G__33047 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__33047));return G__33047__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__33048 = all_portfolio_company_site_stats;var G__33048__$1 = (((G__33048 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33048));var G__33048__$2 = (((G__33048__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__33048__$1));return G__33048__$2;
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__33092 = clustermap.components.full_report.overview.overview_data.call(null,data);var map__33092__$1 = ((cljs.core.seq_QMARK_.call(null,map__33092))?cljs.core.apply.call(null,cljs.core.hash_map,map__33092):map__33092);var benchmark = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"benchmark","benchmark",1682044015));var averages = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"averages","averages",2913851752));var selection = cljs.core.get.call(null,map__33092__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.full_report.overview.t33093 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t33093 = (function (selection,averages,benchmark,map__33092,data,overview,meta33094){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__33092 = map__33092;
this.data = data;
this.overview = overview;
this.meta33094 = meta33094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t33093.cljs$lang$type = true;
clustermap.components.full_report.overview.t33093.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t33093";
clustermap.components.full_report.overview.t33093.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.overview/t33093");
});
clustermap.components.full_report.overview.t33093.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t33093.prototype.om$core$IRender$render$arity$1 = (function (this__9196__auto__){var self__ = this;
var this__9196__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.selection.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.selection.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs33100 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs33100))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33100)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs33100));
}
})()),React.DOM.td(null,(function (){var attrs33101 = new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs33101))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33101)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs33101));
}
})()),React.DOM.td(null,(function (){var attrs33102 = new cljs.core.Keyword(null,"constituencies","constituencies",2756015190).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs33102))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33102)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs33102));
}
})()),React.DOM.td(null,(function (){var attrs33103 = new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs33103))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33103)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs33103));
}
})()),React.DOM.td(null,(function (){var attrs33104 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922).cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_.call(null,attrs33104))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33104)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs33104));
}
})()),React.DOM.td(null,(function (){var attrs33105 = new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs33105))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33105)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs33105));
}
})()),React.DOM.td(null,(function (){var attrs33106 = new cljs.core.Keyword(null,"employee-count","employee-count",1111164066).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs33106))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33106)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs33106));
}
})()),React.DOM.td(null,(function (){var attrs33107 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185).cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_.call(null,attrs33107))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33107)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs33107));
}
})()),React.DOM.td(null,(function (){var attrs33108 = new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs33108))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33108)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs33108));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.averages.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.averages.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs33109 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs33109))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs33109)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs33109));
}
})()),React.DOM.td(null,(function (){var attrs33110 = new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs33110))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs33110)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs33110));
}
})()),React.DOM.td(null,(function (){var attrs33111 = new cljs.core.Keyword(null,"constituencies","constituencies",2756015190).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs33111))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs33111)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs33111));
}
})()),React.DOM.td(null,(function (){var attrs33112 = new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs33112))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs33112)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs33112));
}
})()),React.DOM.td(null,(function (){var attrs33113 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922).cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_.call(null,attrs33113))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs33113)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs33113));
}
})()),React.DOM.td(null,(function (){var attrs33114 = new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs33114))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs33114)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs33114));
}
})()),React.DOM.td(null,(function (){var attrs33115 = new cljs.core.Keyword(null,"employee-count","employee-count",1111164066).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs33115))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs33115)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs33115));
}
})()),React.DOM.td(null,(function (){var attrs33116 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185).cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_.call(null,attrs33116))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs33116)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs33116));
}
})()),React.DOM.td(null,(function (){var attrs33117 = new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs33117))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs33117)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs33117));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.benchmark.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.benchmark.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs33118 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs33118))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs33118)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs33118));
}
})()),React.DOM.td(null,(function (){var attrs33119 = new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs33119))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs33119)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs33119));
}
})()),React.DOM.td(null,(function (){var attrs33120 = new cljs.core.Keyword(null,"constituencies","constituencies",2756015190).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs33120))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs33120)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs33120));
}
})()),React.DOM.td(null,(function (){var attrs33121 = new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs33121))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs33121)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs33121));
}
})()),React.DOM.td(null,(function (){var attrs33122 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922).cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_.call(null,attrs33122))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs33122)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs33122));
}
})()),React.DOM.td(null,(function (){var attrs33123 = new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs33123))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs33123)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs33123));
}
})()),React.DOM.td(null,(function (){var attrs33124 = new cljs.core.Keyword(null,"employee-count","employee-count",1111164066).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs33124))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs33124)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs33124));
}
})()),React.DOM.td(null,(function (){var attrs33125 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185).cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_.call(null,attrs33125))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs33125)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs33125));
}
})()),React.DOM.td(null,(function (){var attrs33126 = new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs33126))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs33126)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs33126));
}
})()))))));
});
clustermap.components.full_report.overview.t33093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33095){var self__ = this;
var _33095__$1 = this;return self__.meta33094;
});
clustermap.components.full_report.overview.t33093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33095,meta33094__$1){var self__ = this;
var _33095__$1 = this;return (new clustermap.components.full_report.overview.t33093(self__.selection,self__.averages,self__.benchmark,self__.map__33092,self__.data,self__.overview,meta33094__$1));
});
clustermap.components.full_report.overview.__GT_t33093 = (function __GT_t33093(selection__$1,averages__$1,benchmark__$1,map__33092__$2,data__$1,overview__$1,meta33094){return (new clustermap.components.full_report.overview.t33093(selection__$1,averages__$1,benchmark__$1,map__33092__$2,data__$1,overview__$1,meta33094));
});
}
return (new clustermap.components.full_report.overview.t33093(selection,averages,benchmark,map__33092__$1,data,overview,null));
});
