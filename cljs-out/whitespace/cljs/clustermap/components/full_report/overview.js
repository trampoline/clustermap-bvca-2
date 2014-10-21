// Compiled by ClojureScript 0.0-2322
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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__15858){var map__15863 = p__15858;var map__15863__$1 = ((cljs.core.seq_QMARK_.call(null,map__15863))?cljs.core.apply.call(null,cljs.core.hash_map,map__15863):map__15863);var value = cljs.core.get.call(null,map__15863__$1,new cljs.core.Keyword(null,"value","value",305978217));var type = cljs.core.get.call(null,map__15863__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__15864 = cljs.core._EQ_;var expr__15865 = type;if(cljs.core.truth_(pred__15864.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__15865)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Totals for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"averages","averages",-1747836978),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mean",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Benchmark",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_(pred__15864.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__15865)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Totals for the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"averages","averages",-1747836978),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mean",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Benchmark",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_(pred__15864.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__15865)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Totals for the selected Constituency"], null),new cljs.core.Keyword(null,"averages","averages",-1747836978),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mean",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over the Portfolio Companies with sites in the selected Constituency"], null),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Benchmark",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Totals over all Portfolio Companies"], null),new cljs.core.Keyword(null,"averages","averages",-1747836978),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mean",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all Portfolio Companies"], null),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Benchmark",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__15867){var map__15893 = p__15867;var map__15893__$1 = ((cljs.core.seq_QMARK_.call(null,map__15893))?cljs.core.apply.call(null,cljs.core.hash_map,map__15893):map__15893);var selection_investment_stats = cljs.core.get.call(null,map__15893__$1,new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843));var selection = cljs.core.get.call(null,map__15893__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var all_investment_stats = cljs.core.get.call(null,map__15893__$1,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",1476039495));var sel_descrs = clustermap.components.full_report.overview.describe_selection.call(null,selection);var site_stats = (function (){var or__3558__auto__ = selection_investment_stats;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return all_investment_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),cljs.core.merge.call(null,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"employee-count","employee-count",315351008),new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020),new cljs.core.Keyword(null,"turnover","turnover",-1778310555),new cljs.core.Keyword(null,"investor-companies","investor-companies",74375815),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1781159440),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",-1004481897),new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",607601849),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",547240062),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",387778431)],[clustermap.formats.number.fnum.call(null,(function (){var G__15894 = site_stats;var G__15894__$1 = (((G__15894 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__15894));var G__15894__$2 = (((G__15894__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__15894__$1));return G__15894__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__15895 = site_stats;var G__15895__$1 = (((G__15895 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__15895));return G__15895__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__15896 = site_stats;var G__15896__$1 = (((G__15896 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__15896));var G__15896__$2 = (((G__15896__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__15896__$1));return G__15896__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__15897 = site_stats;var G__15897__$1 = (((G__15897 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__15897));return G__15897__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__15898 = site_stats;var G__15898__$1 = (((G__15898 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__15898));var G__15898__$2 = (((G__15898__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__15898__$1));return G__15898__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__15899 = site_stats;var G__15899__$1 = (((G__15899 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__15899));var G__15899__$2 = (((G__15899__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__15899__$1));return G__15899__$2;
})(),clustermap.formats.number.fnum.call(null,(function (){var G__15900 = site_stats;var G__15900__$1 = (((G__15900 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__15900));return G__15900__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__15901 = site_stats;var G__15901__$1 = (((G__15901 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__15901));var G__15901__$2 = (((G__15901__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__15901__$1));return G__15901__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__15902 = site_stats;var G__15902__$1 = (((G__15902 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__15902));var G__15902__$2 = (((G__15902__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__15902__$1));return G__15902__$2;
})()])),new cljs.core.Keyword(null,"averages","averages",-1747836978),cljs.core.merge.call(null,new cljs.core.Keyword(null,"averages","averages",-1747836978).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"employee-count","employee-count",315351008),new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020),new cljs.core.Keyword(null,"turnover","turnover",-1778310555),new cljs.core.Keyword(null,"investor-companies","investor-companies",74375815),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1781159440),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",-1004481897),new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",607601849),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",547240062),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",387778431)],[clustermap.formats.number.fnum.call(null,(function (){var G__15903 = site_stats;var G__15903__$1 = (((G__15903 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__15903));var G__15903__$2 = (((G__15903__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__15903__$1));return G__15903__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),"\u00A0",clustermap.formats.money.fmoney.call(null,(function (){var G__15904 = site_stats;var G__15904__$1 = (((G__15904 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__15904));var G__15904__$2 = (((G__15904__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__15904__$1));return G__15904__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),"\u00A0",clustermap.formats.number.fnum.call(null,(function (){var G__15905 = site_stats;var G__15905__$1 = (((G__15905 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__15905));var G__15905__$2 = (((G__15905__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__15905__$1));return G__15905__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__15906 = site_stats;var G__15906__$1 = (((G__15906 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__15906));var G__15906__$2 = (((G__15906__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__15906__$1));return G__15906__$2;
})(),"\u00A0",clustermap.formats.money.fmoney.call(null,(function (){var G__15907 = site_stats;var G__15907__$1 = (((G__15907 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__15907));var G__15907__$2 = (((G__15907__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__15907__$1));return G__15907__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__15908 = site_stats;var G__15908__$1 = (((G__15908 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__15908));var G__15908__$2 = (((G__15908__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__15908__$1));return G__15908__$2;
})()])),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),cljs.core.merge.call(null,new cljs.core.Keyword(null,"benchmark","benchmark",667647056).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"employee-count","employee-count",315351008),new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020),new cljs.core.Keyword(null,"turnover","turnover",-1778310555),new cljs.core.Keyword(null,"investor-companies","investor-companies",74375815),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1781159440),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",-1004481897),new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",607601849),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",547240062),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",387778431)],[clustermap.formats.number.fnum.call(null,(function (){var G__15909 = all_investment_stats;var G__15909__$1 = (((G__15909 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__15909));var G__15909__$2 = (((G__15909__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__15909__$1));return G__15909__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__15910 = all_investment_stats;var G__15910__$1 = (((G__15910 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__15910));return G__15910__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__15911 = all_investment_stats;var G__15911__$1 = (((G__15911 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__15911));var G__15911__$2 = (((G__15911__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__15911__$1));return G__15911__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__15912 = all_investment_stats;var G__15912__$1 = (((G__15912 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__15912));return G__15912__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__15913 = all_investment_stats;var G__15913__$1 = (((G__15913 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__15913));var G__15913__$2 = (((G__15913__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__15913__$1));return G__15913__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__15914 = all_investment_stats;var G__15914__$1 = (((G__15914 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__15914));var G__15914__$2 = (((G__15914__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__15914__$1));return G__15914__$2;
})(),clustermap.formats.number.fnum.call(null,(function (){var G__15915 = all_investment_stats;var G__15915__$1 = (((G__15915 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__15915));return G__15915__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__15916 = all_investment_stats;var G__15916__$1 = (((G__15916 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__15916));var G__15916__$2 = (((G__15916__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__15916__$1));return G__15916__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__15917 = all_investment_stats;var G__15917__$1 = (((G__15917 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__15917));var G__15917__$2 = (((G__15917__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__15917__$1));return G__15917__$2;
})()]))], null);
});
clustermap.components.full_report.overview.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > (0)))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < (0)))
{return React.DOM.i({"className": "icon-negative"});
} else
{return null;

}
}
}
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__15941 = clustermap.components.full_report.overview.overview_data.call(null,data);var map__15941__$1 = ((cljs.core.seq_QMARK_.call(null,map__15941))?cljs.core.apply.call(null,cljs.core.hash_map,map__15941):map__15941);var benchmark = cljs.core.get.call(null,map__15941__$1,new cljs.core.Keyword(null,"benchmark","benchmark",667647056));var averages = cljs.core.get.call(null,map__15941__$1,new cljs.core.Keyword(null,"averages","averages",-1747836978));var selection = cljs.core.get.call(null,map__15941__$1,new cljs.core.Keyword(null,"selection","selection",975998651));if(typeof clustermap.components.full_report.overview.t15942 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t15942 = (function (selection,averages,benchmark,map__15941,data,overview,meta15943){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__15941 = map__15941;
this.data = data;
this.overview = overview;
this.meta15943 = meta15943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t15942.cljs$lang$type = true;
clustermap.components.full_report.overview.t15942.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t15942";
clustermap.components.full_report.overview.t15942.cljs$lang$ctorPrWriter = ((function (map__15941,map__15941__$1,benchmark,averages,selection){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.full-report.overview/t15942");
});})(map__15941,map__15941__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t15942.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t15942.prototype.om$core$IRender$render$arity$1 = ((function (map__15941,map__15941__$1,benchmark,averages,selection){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings",React.DOM.small(null,"\u00A0(may span years : see table below for details)")),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Investor-backed companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.selection.call(null,new cljs.core.Keyword(null,"description","description",-1428560544))}),sablono.interpreter.interpret.call(null,self__.selection.call(null,new cljs.core.Keyword(null,"name","name",1843675177)))),React.DOM.td(null,(function (){var attrs15949 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",607601849).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs15949))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs15949)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15949))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15949)], null))));
})()),React.DOM.td(null,(function (){var attrs15950 = new cljs.core.Keyword(null,"investor-companies","investor-companies",74375815).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs15950))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs15950)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15950))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15950)], null))));
})()),React.DOM.td(null,(function (){var attrs15951 = new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs15951))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs15951)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15951))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15951)], null))));
})()),React.DOM.td(null,(function (){var attrs15952 = new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs15952))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs15952)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15952))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15952)], null))));
})()),React.DOM.td(null,(function (){var attrs15953 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",-1004481897).cljs$core$IFn$_invoke$arity$1(self__.selection));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs15953))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs15953)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15953))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15953)], null))));
})()),React.DOM.td(null,(function (){var attrs15954 = new cljs.core.Keyword(null,"turnover-delta","turnover-delta",547240062).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs15954))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs15954)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15954))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15954)], null))));
})()),React.DOM.td(null,(function (){var attrs15955 = new cljs.core.Keyword(null,"employee-count","employee-count",315351008).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs15955))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs15955)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15955))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15955)], null))));
})()))))));
});})(map__15941,map__15941__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t15942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15941,map__15941__$1,benchmark,averages,selection){
return (function (_15944){var self__ = this;
var _15944__$1 = this;return self__.meta15943;
});})(map__15941,map__15941__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t15942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15941,map__15941__$1,benchmark,averages,selection){
return (function (_15944,meta15943__$1){var self__ = this;
var _15944__$1 = this;return (new clustermap.components.full_report.overview.t15942(self__.selection,self__.averages,self__.benchmark,self__.map__15941,self__.data,self__.overview,meta15943__$1));
});})(map__15941,map__15941__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.__GT_t15942 = ((function (map__15941,map__15941__$1,benchmark,averages,selection){
return (function __GT_t15942(selection__$1,averages__$1,benchmark__$1,map__15941__$2,data__$1,overview__$1,meta15943){return (new clustermap.components.full_report.overview.t15942(selection__$1,averages__$1,benchmark__$1,map__15941__$2,data__$1,overview__$1,meta15943));
});})(map__15941,map__15941__$1,benchmark,averages,selection))
;
}
return (new clustermap.components.full_report.overview.t15942(selection,averages,benchmark,map__15941__$1,data,overview,null));
});
