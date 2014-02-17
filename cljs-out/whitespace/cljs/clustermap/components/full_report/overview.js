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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__32691){var map__32696 = p__32691;var map__32696__$1 = ((cljs.core.seq_QMARK_.call(null,map__32696))?cljs.core.apply.call(null,cljs.core.hash_map,map__32696):map__32696);var value = cljs.core.get.call(null,map__32696__$1,new cljs.core.Keyword(null,"value","value",1125876963));var type = cljs.core.get.call(null,map__32696__$1,new cljs.core.Keyword(null,"type","type",1017479852));var pred__32697 = cljs.core._EQ_;var expr__32698 = type;if(cljs.core.truth_(pred__32697.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__32698)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_(pred__32697.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__32698)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_(pred__32697.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__32698)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Constituency"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over the Portfolio Companies with sites in the selected Constituency"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals over all Portfolio Companies"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over all Portfolio Companies"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__32700){var map__32726 = p__32700;var map__32726__$1 = ((cljs.core.seq_QMARK_.call(null,map__32726))?cljs.core.apply.call(null,cljs.core.hash_map,map__32726):map__32726);var selection_portfolio_company_site_stats = cljs.core.get.call(null,map__32726__$1,new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081));var selection = cljs.core.get.call(null,map__32726__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var all_portfolio_company_site_stats = cljs.core.get.call(null,map__32726__$1,new cljs.core.Keyword(null,"all-portfolio-company-site-stats","all-portfolio-company-site-stats",1130880684));var sel_descrs = clustermap.components.full_report.overview.describe_selection.call(null,selection);var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_site_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),cljs.core.merge.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),new cljs.core.Keyword(null,"turnover","turnover",1148922435)],[clustermap.formats.number.fnum.call(null,(function (){var G__32727 = site_stats;var G__32727__$1 = (((G__32727 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__32727));return G__32727__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),(function (){var G__32728 = site_stats;var G__32728__$1 = (((G__32728 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__32728));var G__32728__$2 = (((G__32728__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32728__$1));return G__32728__$2;
})(),(function (){var G__32729 = site_stats;var G__32729__$1 = (((G__32729 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__32729));var G__32729__$2 = (((G__32729__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32729__$1));return G__32729__$2;
})(),clustermap.formats.number.fnum.call(null,(function (){var G__32730 = site_stats;var G__32730__$1 = (((G__32730 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__32730));return G__32730__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__32731 = site_stats;var G__32731__$1 = (((G__32731 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__32731));var G__32731__$2 = (((G__32731__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32731__$1));return G__32731__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__32732 = site_stats;var G__32732__$1 = (((G__32732 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__32732));var G__32732__$2 = (((G__32732__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32732__$1));return G__32732__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__32733 = site_stats;var G__32733__$1 = (((G__32733 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__32733));var G__32733__$2 = (((G__32733__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32733__$1));return G__32733__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__32734 = site_stats;var G__32734__$1 = (((G__32734 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__32734));return G__32734__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__32735 = site_stats;var G__32735__$1 = (((G__32735 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__32735));var G__32735__$2 = (((G__32735__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32735__$1));return G__32735__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-")])),new cljs.core.Keyword(null,"averages","averages",2913851752),cljs.core.merge.call(null,new cljs.core.Keyword(null,"averages","averages",2913851752).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),new cljs.core.Keyword(null,"turnover","turnover",1148922435)],["\u00A0",(function (){var G__32736 = site_stats;var G__32736__$1 = (((G__32736 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__32736));var G__32736__$2 = (((G__32736__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__32736__$1));return G__32736__$2;
})(),(function (){var G__32737 = site_stats;var G__32737__$1 = (((G__32737 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__32737));var G__32737__$2 = (((G__32737__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__32737__$1));return G__32737__$2;
})(),"\u00A0",clustermap.formats.number.fnum.call(null,(function (){var G__32738 = site_stats;var G__32738__$1 = (((G__32738 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__32738));var G__32738__$2 = (((G__32738__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__32738__$1));return G__32738__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__32739 = site_stats;var G__32739__$1 = (((G__32739 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__32739));var G__32739__$2 = (((G__32739__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__32739__$1));return G__32739__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__32740 = site_stats;var G__32740__$1 = (((G__32740 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__32740));var G__32740__$2 = (((G__32740__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__32740__$1));return G__32740__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),"\u00A0",clustermap.formats.money.fmoney.call(null,(function (){var G__32741 = site_stats;var G__32741__$1 = (((G__32741 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__32741));var G__32741__$2 = (((G__32741__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__32741__$1));return G__32741__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-")])),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),cljs.core.merge.call(null,new cljs.core.Keyword(null,"benchmark","benchmark",1682044015).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),new cljs.core.Keyword(null,"turnover","turnover",1148922435)],[clustermap.formats.number.fnum.call(null,(function (){var G__32742 = all_portfolio_company_site_stats;var G__32742__$1 = (((G__32742 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__32742));return G__32742__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),(function (){var G__32743 = all_portfolio_company_site_stats;var G__32743__$1 = (((G__32743 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__32743));var G__32743__$2 = (((G__32743__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__32743__$1));return G__32743__$2;
})(),(function (){var G__32744 = all_portfolio_company_site_stats;var G__32744__$1 = (((G__32744 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__32744));var G__32744__$2 = (((G__32744__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32744__$1));return G__32744__$2;
})(),clustermap.formats.number.fnum.call(null,(function (){var G__32745 = all_portfolio_company_site_stats;var G__32745__$1 = (((G__32745 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__32745));return G__32745__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__32746 = all_portfolio_company_site_stats;var G__32746__$1 = (((G__32746 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__32746));var G__32746__$2 = (((G__32746__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__32746__$1));return G__32746__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__32747 = all_portfolio_company_site_stats;var G__32747__$1 = (((G__32747 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__32747));var G__32747__$2 = (((G__32747__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__32747__$1));return G__32747__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__32748 = all_portfolio_company_site_stats;var G__32748__$1 = (((G__32748 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__32748));var G__32748__$2 = (((G__32748__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__32748__$1));return G__32748__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__32749 = all_portfolio_company_site_stats;var G__32749__$1 = (((G__32749 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__32749));return G__32749__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__32750 = all_portfolio_company_site_stats;var G__32750__$1 = (((G__32750 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__32750));var G__32750__$2 = (((G__32750__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__32750__$1));return G__32750__$2;
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__32794 = clustermap.components.full_report.overview.overview_data.call(null,data);var map__32794__$1 = ((cljs.core.seq_QMARK_.call(null,map__32794))?cljs.core.apply.call(null,cljs.core.hash_map,map__32794):map__32794);var benchmark = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"benchmark","benchmark",1682044015));var averages = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"averages","averages",2913851752));var selection = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.full_report.overview.t32795 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t32795 = (function (selection,averages,benchmark,map__32794,data,overview,meta32796){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__32794 = map__32794;
this.data = data;
this.overview = overview;
this.meta32796 = meta32796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t32795.cljs$lang$type = true;
clustermap.components.full_report.overview.t32795.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t32795";
clustermap.components.full_report.overview.t32795.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.overview/t32795");
});
clustermap.components.full_report.overview.t32795.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t32795.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.selection.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.selection.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs32802 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs32802))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs32802)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs32802));
}
})()),React.DOM.td(null,(function (){var attrs32803 = new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs32803))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs32803)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs32803));
}
})()),React.DOM.td(null,(function (){var attrs32804 = new cljs.core.Keyword(null,"constituencies","constituencies",2756015190).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs32804))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs32804)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs32804));
}
})()),React.DOM.td(null,(function (){var attrs32805 = new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs32805))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs32805)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs32805));
}
})()),React.DOM.td(null,(function (){var attrs32806 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922).cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_.call(null,attrs32806))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs32806)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs32806));
}
})()),React.DOM.td(null,(function (){var attrs32807 = new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs32807))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs32807)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs32807));
}
})()),React.DOM.td(null,(function (){var attrs32808 = new cljs.core.Keyword(null,"employee-count","employee-count",1111164066).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs32808))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs32808)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs32808));
}
})()),React.DOM.td(null,(function (){var attrs32809 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185).cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_.call(null,attrs32809))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs32809)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs32809));
}
})()),React.DOM.td(null,(function (){var attrs32810 = new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs32810))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs32810)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs32810));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.averages.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.averages.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs32811 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs32811))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs32811)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs32811));
}
})()),React.DOM.td(null,(function (){var attrs32812 = new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs32812))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs32812)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs32812));
}
})()),React.DOM.td(null,(function (){var attrs32813 = new cljs.core.Keyword(null,"constituencies","constituencies",2756015190).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs32813))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs32813)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs32813));
}
})()),React.DOM.td(null,(function (){var attrs32814 = new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs32814))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs32814)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs32814));
}
})()),React.DOM.td(null,(function (){var attrs32815 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922).cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_.call(null,attrs32815))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs32815)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs32815));
}
})()),React.DOM.td(null,(function (){var attrs32816 = new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs32816))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs32816)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs32816));
}
})()),React.DOM.td(null,(function (){var attrs32817 = new cljs.core.Keyword(null,"employee-count","employee-count",1111164066).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs32817))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs32817)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs32817));
}
})()),React.DOM.td(null,(function (){var attrs32818 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185).cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_.call(null,attrs32818))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs32818)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs32818));
}
})()),React.DOM.td(null,(function (){var attrs32819 = new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs32819))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs32819)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs32819));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.benchmark.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.benchmark.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs32820 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs32820))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs32820)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs32820));
}
})()),React.DOM.td(null,(function (){var attrs32821 = new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs32821))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs32821)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs32821));
}
})()),React.DOM.td(null,(function (){var attrs32822 = new cljs.core.Keyword(null,"constituencies","constituencies",2756015190).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs32822))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs32822)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs32822));
}
})()),React.DOM.td(null,(function (){var attrs32823 = new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs32823))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs32823)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs32823));
}
})()),React.DOM.td(null,(function (){var attrs32824 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922).cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_.call(null,attrs32824))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs32824)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs32824));
}
})()),React.DOM.td(null,(function (){var attrs32825 = new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs32825))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs32825)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs32825));
}
})()),React.DOM.td(null,(function (){var attrs32826 = new cljs.core.Keyword(null,"employee-count","employee-count",1111164066).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs32826))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs32826)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs32826));
}
})()),React.DOM.td(null,(function (){var attrs32827 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185).cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_.call(null,attrs32827))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs32827)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs32827));
}
})()),React.DOM.td(null,(function (){var attrs32828 = new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs32828))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs32828)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs32828));
}
})()))))));
});
clustermap.components.full_report.overview.t32795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32797){var self__ = this;
var _32797__$1 = this;return self__.meta32796;
});
clustermap.components.full_report.overview.t32795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32797,meta32796__$1){var self__ = this;
var _32797__$1 = this;return (new clustermap.components.full_report.overview.t32795(self__.selection,self__.averages,self__.benchmark,self__.map__32794,self__.data,self__.overview,meta32796__$1));
});
clustermap.components.full_report.overview.__GT_t32795 = (function __GT_t32795(selection__$1,averages__$1,benchmark__$1,map__32794__$2,data__$1,overview__$1,meta32796){return (new clustermap.components.full_report.overview.t32795(selection__$1,averages__$1,benchmark__$1,map__32794__$2,data__$1,overview__$1,meta32796));
});
}
return (new clustermap.components.full_report.overview.t32795(selection,averages,benchmark,map__32794__$1,data,overview,null));
});
