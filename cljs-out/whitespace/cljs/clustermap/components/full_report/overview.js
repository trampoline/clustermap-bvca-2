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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__32947){var map__32952 = p__32947;var map__32952__$1 = ((cljs.core.seq_QMARK_.call(null,map__32952))?cljs.core.apply.call(null,cljs.core.hash_map,map__32952):map__32952);var value = cljs.core.get.call(null,map__32952__$1,new cljs.core.Keyword(null,"value","value",1125876963));var type = cljs.core.get.call(null,map__32952__$1,new cljs.core.Keyword(null,"type","type",1017479852));var pred__32953 = cljs.core._EQ_;var expr__32954 = type;if(cljs.core.truth_(pred__32953.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__32954)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_(pred__32953.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__32954)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_(pred__32953.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__32954)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Constituency"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over the Portfolio Companies with sites in the selected Constituency"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals over all Portfolio Companies"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over all Portfolio Companies"], null),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Benchmark",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__32956){var map__32982 = p__32956;var map__32982__$1 = ((cljs.core.seq_QMARK_.call(null,map__32982))?cljs.core.apply.call(null,cljs.core.hash_map,map__32982):map__32982);var selection_portfolio_company_site_stats = cljs.core.get.call(null,map__32982__$1,new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081));var selection = cljs.core.get.call(null,map__32982__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var all_portfolio_company_site_stats = cljs.core.get.call(null,map__32982__$1,new cljs.core.Keyword(null,"all-portfolio-company-site-stats","all-portfolio-company-site-stats",1130880684));var sel_descrs = clustermap.components.full_report.overview.describe_selection.call(null,selection);var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_site_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",3592905982),cljs.core.merge.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),new cljs.core.Keyword(null,"turnover","turnover",1148922435)],[clustermap.formats.number.fnum.call(null,(function (){var G__32983 = site_stats;var G__32983__$1 = (((G__32983 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__32983));return G__32983__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),(function (){var G__32984 = site_stats;var G__32984__$1 = (((G__32984 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__32984));var G__32984__$2 = (((G__32984__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32984__$1));return G__32984__$2;
})(),(function (){var G__32985 = site_stats;var G__32985__$1 = (((G__32985 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__32985));var G__32985__$2 = (((G__32985__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32985__$1));return G__32985__$2;
})(),clustermap.formats.number.fnum.call(null,(function (){var G__32986 = site_stats;var G__32986__$1 = (((G__32986 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__32986));return G__32986__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__32987 = site_stats;var G__32987__$1 = (((G__32987 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__32987));var G__32987__$2 = (((G__32987__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32987__$1));return G__32987__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__32988 = site_stats;var G__32988__$1 = (((G__32988 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__32988));var G__32988__$2 = (((G__32988__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32988__$1));return G__32988__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__32989 = site_stats;var G__32989__$1 = (((G__32989 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__32989));var G__32989__$2 = (((G__32989__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32989__$1));return G__32989__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__32990 = site_stats;var G__32990__$1 = (((G__32990 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__32990));return G__32990__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__32991 = site_stats;var G__32991__$1 = (((G__32991 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__32991));var G__32991__$2 = (((G__32991__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32991__$1));return G__32991__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-")])),new cljs.core.Keyword(null,"averages","averages",2913851752),cljs.core.merge.call(null,new cljs.core.Keyword(null,"averages","averages",2913851752).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),new cljs.core.Keyword(null,"turnover","turnover",1148922435)],["\u00A0",(function (){var G__32992 = site_stats;var G__32992__$1 = (((G__32992 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__32992));var G__32992__$2 = (((G__32992__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__32992__$1));return G__32992__$2;
})(),(function (){var G__32993 = site_stats;var G__32993__$1 = (((G__32993 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__32993));var G__32993__$2 = (((G__32993__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__32993__$1));return G__32993__$2;
})(),"\u00A0",clustermap.formats.number.fnum.call(null,(function (){var G__32994 = site_stats;var G__32994__$1 = (((G__32994 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__32994));var G__32994__$2 = (((G__32994__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__32994__$1));return G__32994__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__32995 = site_stats;var G__32995__$1 = (((G__32995 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__32995));var G__32995__$2 = (((G__32995__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__32995__$1));return G__32995__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__32996 = site_stats;var G__32996__$1 = (((G__32996 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__32996));var G__32996__$2 = (((G__32996__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__32996__$1));return G__32996__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),"\u00A0",clustermap.formats.money.fmoney.call(null,(function (){var G__32997 = site_stats;var G__32997__$1 = (((G__32997 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__32997));var G__32997__$2 = (((G__32997__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__32997__$1));return G__32997__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-")])),new cljs.core.Keyword(null,"benchmark","benchmark",1682044015),cljs.core.merge.call(null,new cljs.core.Keyword(null,"benchmark","benchmark",1682044015).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),new cljs.core.Keyword(null,"turnover","turnover",1148922435)],[clustermap.formats.number.fnum.call(null,(function (){var G__32998 = all_portfolio_company_site_stats;var G__32998__$1 = (((G__32998 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__32998));return G__32998__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),(function (){var G__32999 = all_portfolio_company_site_stats;var G__32999__$1 = (((G__32999 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__32999));var G__32999__$2 = (((G__32999__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__32999__$1));return G__32999__$2;
})(),(function (){var G__33000 = all_portfolio_company_site_stats;var G__33000__$1 = (((G__33000 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__33000));var G__33000__$2 = (((G__33000__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33000__$1));return G__33000__$2;
})(),clustermap.formats.number.fnum.call(null,(function (){var G__33001 = all_portfolio_company_site_stats;var G__33001__$1 = (((G__33001 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__33001));return G__33001__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__33002 = all_portfolio_company_site_stats;var G__33002__$1 = (((G__33002 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",4678011881).cljs$core$IFn$_invoke$arity$1(G__33002));var G__33002__$2 = (((G__33002__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__33002__$1));return G__33002__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__33003 = all_portfolio_company_site_stats;var G__33003__$1 = (((G__33003 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",1941841980).cljs$core$IFn$_invoke$arity$1(G__33003));var G__33003__$2 = (((G__33003__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__33003__$1));return G__33003__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__33004 = all_portfolio_company_site_stats;var G__33004__$1 = (((G__33004 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33004));var G__33004__$2 = (((G__33004__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__33004__$1));return G__33004__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__33005 = all_portfolio_company_site_stats;var G__33005__$1 = (((G__33005 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__33005));return G__33005__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__33006 = all_portfolio_company_site_stats;var G__33006__$1 = (((G__33006 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33006));var G__33006__$2 = (((G__33006__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__33006__$1));return G__33006__$2;
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__33050 = clustermap.components.full_report.overview.overview_data.call(null,data);var map__33050__$1 = ((cljs.core.seq_QMARK_.call(null,map__33050))?cljs.core.apply.call(null,cljs.core.hash_map,map__33050):map__33050);var benchmark = cljs.core.get.call(null,map__33050__$1,new cljs.core.Keyword(null,"benchmark","benchmark",1682044015));var averages = cljs.core.get.call(null,map__33050__$1,new cljs.core.Keyword(null,"averages","averages",2913851752));var selection = cljs.core.get.call(null,map__33050__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.full_report.overview.t33051 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t33051 = (function (selection,averages,benchmark,map__33050,data,overview,meta33052){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__33050 = map__33050;
this.data = data;
this.overview = overview;
this.meta33052 = meta33052;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t33051.cljs$lang$type = true;
clustermap.components.full_report.overview.t33051.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t33051";
clustermap.components.full_report.overview.t33051.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.overview/t33051");
});
clustermap.components.full_report.overview.t33051.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t33051.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.selection.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.selection.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs33058 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs33058))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33058)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs33058));
}
})()),React.DOM.td(null,(function (){var attrs33059 = new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs33059))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33059)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs33059));
}
})()),React.DOM.td(null,(function (){var attrs33060 = new cljs.core.Keyword(null,"constituencies","constituencies",2756015190).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs33060))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33060)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs33060));
}
})()),React.DOM.td(null,(function (){var attrs33061 = new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs33061))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33061)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs33061));
}
})()),React.DOM.td(null,(function (){var attrs33062 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922).cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_.call(null,attrs33062))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33062)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs33062));
}
})()),React.DOM.td(null,(function (){var attrs33063 = new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs33063))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33063)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs33063));
}
})()),React.DOM.td(null,(function (){var attrs33064 = new cljs.core.Keyword(null,"employee-count","employee-count",1111164066).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs33064))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33064)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs33064));
}
})()),React.DOM.td(null,(function (){var attrs33065 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185).cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_.call(null,attrs33065))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33065)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs33065));
}
})()),React.DOM.td(null,(function (){var attrs33066 = new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs33066))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33066)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs33066));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.averages.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.averages.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs33067 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs33067))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs33067)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs33067));
}
})()),React.DOM.td(null,(function (){var attrs33068 = new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs33068))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs33068)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs33068));
}
})()),React.DOM.td(null,(function (){var attrs33069 = new cljs.core.Keyword(null,"constituencies","constituencies",2756015190).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs33069))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs33069)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs33069));
}
})()),React.DOM.td(null,(function (){var attrs33070 = new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs33070))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs33070)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs33070));
}
})()),React.DOM.td(null,(function (){var attrs33071 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922).cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_.call(null,attrs33071))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs33071)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs33071));
}
})()),React.DOM.td(null,(function (){var attrs33072 = new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs33072))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs33072)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs33072));
}
})()),React.DOM.td(null,(function (){var attrs33073 = new cljs.core.Keyword(null,"employee-count","employee-count",1111164066).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs33073))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs33073)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs33073));
}
})()),React.DOM.td(null,(function (){var attrs33074 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185).cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_.call(null,attrs33074))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs33074)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs33074));
}
})()),React.DOM.td(null,(function (){var attrs33075 = new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs33075))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs33075)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs33075));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.benchmark.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.benchmark.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs33076 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs33076))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs33076)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs33076));
}
})()),React.DOM.td(null,(function (){var attrs33077 = new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs33077))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs33077)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs33077));
}
})()),React.DOM.td(null,(function (){var attrs33078 = new cljs.core.Keyword(null,"constituencies","constituencies",2756015190).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs33078))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs33078)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs33078));
}
})()),React.DOM.td(null,(function (){var attrs33079 = new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs33079))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs33079)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs33079));
}
})()),React.DOM.td(null,(function (){var attrs33080 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",1709233922).cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_.call(null,attrs33080))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs33080)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs33080));
}
})()),React.DOM.td(null,(function (){var attrs33081 = new cljs.core.Keyword(null,"turnover-delta","turnover-delta",510384430).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs33081))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs33081)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs33081));
}
})()),React.DOM.td(null,(function (){var attrs33082 = new cljs.core.Keyword(null,"employee-count","employee-count",1111164066).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs33082))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs33082)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs33082));
}
})()),React.DOM.td(null,(function (){var attrs33083 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",2180417185).cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_.call(null,attrs33083))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs33083)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs33083));
}
})()),React.DOM.td(null,(function (){var attrs33084 = new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1087385677).cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_.call(null,attrs33084))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs33084)),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret.call(null,attrs33084));
}
})()))))));
});
clustermap.components.full_report.overview.t33051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33053){var self__ = this;
var _33053__$1 = this;return self__.meta33052;
});
clustermap.components.full_report.overview.t33051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33053,meta33052__$1){var self__ = this;
var _33053__$1 = this;return (new clustermap.components.full_report.overview.t33051(self__.selection,self__.averages,self__.benchmark,self__.map__33050,self__.data,self__.overview,meta33052__$1));
});
clustermap.components.full_report.overview.__GT_t33051 = (function __GT_t33051(selection__$1,averages__$1,benchmark__$1,map__33050__$2,data__$1,overview__$1,meta33052){return (new clustermap.components.full_report.overview.t33051(selection__$1,averages__$1,benchmark__$1,map__33050__$2,data__$1,overview__$1,meta33052));
});
}
return (new clustermap.components.full_report.overview.t33051(selection,averages,benchmark,map__33050__$1,data,overview,null));
});
