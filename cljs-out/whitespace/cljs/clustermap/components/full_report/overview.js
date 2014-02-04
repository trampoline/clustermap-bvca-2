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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__31696){var map__31701 = p__31696;var map__31701__$1 = ((cljs.core.seq_QMARK_.call(null,map__31701))?cljs.core.apply.call(null,cljs.core.hash_map,map__31701):map__31701);var value = cljs.core.get.call(null,map__31701__$1,new cljs.core.Keyword(null,"value","value",1125876963));var type = cljs.core.get.call(null,map__31701__$1,new cljs.core.Keyword(null,"type","type",1017479852));var pred__31702 = cljs.core._EQ_;var expr__31703 = type;if(cljs.core.truth_(pred__31702.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__31703)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_(pred__31702.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__31703)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_(pred__31702.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__31703)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Constituency"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals over all Portfolio Companies"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__31705){var map__31714 = p__31705;var map__31714__$1 = ((cljs.core.seq_QMARK_.call(null,map__31714))?cljs.core.apply.call(null,cljs.core.hash_map,map__31714):map__31714);var selection_portfolio_company_site_stats = cljs.core.get.call(null,map__31714__$1,new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081));var selection_portfolio_company_stats = cljs.core.get.call(null,map__31714__$1,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587));var selection = cljs.core.get.call(null,map__31714__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var all_portfolio_company_stats = cljs.core.get.call(null,map__31714__$1,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704));var sel_descrs = clustermap.components.full_report.overview.describe_selection.call(null,selection);var co_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),cljs.core.merge.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),clustermap.formats.number.fnum.call(null,(function (){var G__31715 = co_stats;var G__31715__$1 = (((G__31715 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__31715));return G__31715__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),clustermap.formats.number.fnum.call(null,(function (){var G__31716 = co_stats;var G__31716__$1 = (((G__31716 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__31716));return G__31716__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),clustermap.formats.number.fnum.call(null,(function (){var G__31717 = co_stats;var G__31717__$1 = (((G__31717 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__31717));return G__31717__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"turnover","turnover",1148922435),clustermap.formats.money.fmoney.call(null,(function (){var G__31718 = site_stats;var G__31718__$1 = (((G__31718 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__31718));var G__31718__$2 = (((G__31718__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31718__$1));return G__31718__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),clustermap.formats.number.fnum.call(null,(function (){var G__31719 = site_stats;var G__31719__$1 = (((G__31719 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__31719));var G__31719__$2 = (((G__31719__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31719__$1));return G__31719__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-")], null)),new cljs.core.Keyword(null,"averages","averages",2913851752),cljs.core.merge.call(null,new cljs.core.Keyword(null,"averages","averages",2913851752).cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),"\u00A0",new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),"\u00A0",new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),"\u00A0",new cljs.core.Keyword(null,"turnover","turnover",1148922435),clustermap.formats.money.fmoney.call(null,(function (){var G__31720 = site_stats;var G__31720__$1 = (((G__31720 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__31720));var G__31720__$2 = (((G__31720__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__31720__$1));return G__31720__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),clustermap.formats.number.fnum.call(null,(function (){var G__31721 = site_stats;var G__31721__$1 = (((G__31721 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__31721));var G__31721__$2 = (((G__31721__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__31721__$1));return G__31721__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-")], null))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__31740 = clustermap.components.full_report.overview.overview_data.call(null,data);var map__31740__$1 = ((cljs.core.seq_QMARK_.call(null,map__31740))?cljs.core.apply.call(null,cljs.core.hash_map,map__31740):map__31740);var averages = cljs.core.get.call(null,map__31740__$1,new cljs.core.Keyword(null,"averages","averages",2913851752));var selection = cljs.core.get.call(null,map__31740__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.full_report.overview.t31741 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t31741 = (function (selection,averages,map__31740,data,overview,meta31742){
this.selection = selection;
this.averages = averages;
this.map__31740 = map__31740;
this.data = data;
this.overview = overview;
this.meta31742 = meta31742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t31741.cljs$lang$type = true;
clustermap.components.full_report.overview.t31741.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t31741";
clustermap.components.full_report.overview.t31741.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.overview/t31741");
});
clustermap.components.full_report.overview.t31741.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t31741.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.selection.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.selection.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs31748 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs31748))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs31748)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs31748));
}
})()),React.DOM.td(null,(function (){var attrs31749 = new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs31749))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs31749)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs31749));
}
})()),React.DOM.td(null,(function (){var attrs31750 = new cljs.core.Keyword(null,"constituencies","constituencies",2756015190).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs31750))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs31750)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs31750));
}
})()),React.DOM.td(null,(function (){var attrs31751 = new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs31751))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs31751)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs31751));
}
})()),React.DOM.td(null,(function (){var attrs31752 = new cljs.core.Keyword(null,"employee-count","employee-count",1111164066).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs31752))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs31752)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs31752));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.averages.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.averages.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs31753 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs31753))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs31753)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs31753));
}
})()),React.DOM.td(null,(function (){var attrs31754 = new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs31754))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs31754)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs31754));
}
})()),React.DOM.td(null,(function (){var attrs31755 = new cljs.core.Keyword(null,"constituencies","constituencies",2756015190).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs31755))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs31755)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs31755));
}
})()),React.DOM.td(null,(function (){var attrs31756 = new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs31756))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs31756)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs31756));
}
})()),React.DOM.td(null,(function (){var attrs31757 = new cljs.core.Keyword(null,"employee-count","employee-count",1111164066).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs31757))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs31757)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs31757));
}
})()))))));
});
clustermap.components.full_report.overview.t31741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31743){var self__ = this;
var _31743__$1 = this;return self__.meta31742;
});
clustermap.components.full_report.overview.t31741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31743,meta31742__$1){var self__ = this;
var _31743__$1 = this;return (new clustermap.components.full_report.overview.t31741(self__.selection,self__.averages,self__.map__31740,self__.data,self__.overview,meta31742__$1));
});
clustermap.components.full_report.overview.__GT_t31741 = (function __GT_t31741(selection__$1,averages__$1,map__31740__$2,data__$1,overview__$1,meta31742){return (new clustermap.components.full_report.overview.t31741(selection__$1,averages__$1,map__31740__$2,data__$1,overview__$1,meta31742));
});
}
return (new clustermap.components.full_report.overview.t31741(selection,averages,map__31740__$1,data,overview,null));
});
