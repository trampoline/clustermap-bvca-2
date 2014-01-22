// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('jayq.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('jayq.core');
goog.require('clustermap.formats.number');
clustermap.components.full_report.describe_selection = (function describe_selection(data){var sel = new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(data);var val = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(sel);var pred__11039 = cljs.core._EQ_;var expr__11040 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(sel);if(cljs.core.truth_(pred__11039.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11040)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),(val["name"]),new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Portfolio Company"], null);
} else
{if(cljs.core.truth_(pred__11039.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11040)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),(val["name"]),new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the Portfolio Companies of the selected Investor"], null);
} else
{if(cljs.core.truth_(pred__11039.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11040)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),(val["name"]),new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Constituency"], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"All Portfolio Companies",new cljs.core.Keyword(null,"description","description",3584325486),"Totals over all Portfolio Companies"], null);
}
}
}
});
clustermap.components.full_report.overview_data = (function overview_data(data){var apc_stats = new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data);var sel_stats = (function (){var or__3406__auto__ = new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return apc_stats;
}
})();var sel_descr = clustermap.components.full_report.describe_selection.call(null,data);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),cljs.core.merge.call(null,sel_descr,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),clustermap.formats.number.fnum.call(null,(function (){var G__11049 = sel_stats;var G__11049__$1 = (((G__11049 == null))?null:(G__11049["portfolio_company_count"]));return G__11049__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),clustermap.formats.number.fnum.call(null,(function (){var G__11050 = sel_stats;var G__11050__$1 = (((G__11050 == null))?null:(G__11050["investor_company_count"]));return G__11050__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),clustermap.formats.number.fnum.call(null,(function (){var G__11051 = sel_stats;var G__11051__$1 = (((G__11051 == null))?null:(G__11051["constituency_count"]));return G__11051__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"turnover","turnover",1148922435),clustermap.formats.money.fmoney.call(null,(function (){var G__11052 = sel_stats;var G__11052__$1 = (((G__11052 == null))?null:(G__11052["turnover"]["total"]));return G__11052__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),clustermap.formats.number.fnum.call(null,(function (){var G__11053 = sel_stats;var G__11053__$1 = (((G__11053 == null))?null:(G__11053["employee_count"]["total"]));return G__11053__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-")], null)),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over all portfolio companies",new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),"\u00A0",new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),"\u00A0",new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),"\u00A0",new cljs.core.Keyword(null,"turnover","turnover",1148922435),clustermap.formats.money.fmoney.call(null,(function (){var G__11054 = apc_stats;var G__11054__$1 = (((G__11054 == null))?null:(G__11054["turnover"]["mean"]));return G__11054__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),clustermap.formats.number.fnum.call(null,(function (){var G__11055 = apc_stats;var G__11055__$1 = (((G__11055 == null))?null:(G__11055["employee_count"]["mean"]));return G__11055__$1;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-")], null)], null);
});
clustermap.components.full_report.overview = (function overview(p__11056){var map__11076 = p__11056;var map__11076__$1 = ((cljs.core.seq_QMARK_.call(null,map__11076))?cljs.core.apply.call(null,cljs.core.hash_map,map__11076):map__11076);var data = map__11076__$1;var selection = cljs.core.get.call(null,map__11076__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__11077 = clustermap.components.full_report.overview_data.call(null,data);var map__11077__$1 = ((cljs.core.seq_QMARK_.call(null,map__11077))?cljs.core.apply.call(null,cljs.core.hash_map,map__11077):map__11077);var averages = cljs.core.get.call(null,map__11077__$1,new cljs.core.Keyword(null,"averages","averages",2913851752));var selection__$1 = cljs.core.get.call(null,map__11077__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.full_report.t11078 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t11078 = (function (averages,map__11077,selection,data,map__11076,p__11056,overview,meta11079){
this.averages = averages;
this.map__11077 = map__11077;
this.selection = selection;
this.data = data;
this.map__11076 = map__11076;
this.p__11056 = p__11056;
this.overview = overview;
this.meta11079 = meta11079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t11078.cljs$lang$type = true;
clustermap.components.full_report.t11078.cljs$lang$ctorStr = "clustermap.components.full-report/t11078";
clustermap.components.full_report.t11078.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report/t11078");
});
clustermap.components.full_report.t11078.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t11078.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"2012 Overview"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.selection.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.selection.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs11085 = self__.selection.call(null,new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512));if(cljs.core.map_QMARK_.call(null,attrs11085))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11085)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs11085));
}
})()),React.DOM.td(null,(function (){var attrs11086 = self__.selection.call(null,new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288));if(cljs.core.map_QMARK_.call(null,attrs11086))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11086)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs11086));
}
})()),React.DOM.td(null,(function (){var attrs11087 = self__.selection.call(null,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(cljs.core.map_QMARK_.call(null,attrs11087))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11087)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs11087));
}
})()),React.DOM.td(null,(function (){var attrs11088 = self__.selection.call(null,new cljs.core.Keyword(null,"turnover","turnover",1148922435));if(cljs.core.map_QMARK_.call(null,attrs11088))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11088)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs11088));
}
})()),React.DOM.td(null,(function (){var attrs11089 = self__.selection.call(null,new cljs.core.Keyword(null,"employee-count","employee-count",1111164066));if(cljs.core.map_QMARK_.call(null,attrs11089))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11089)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs11089));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.averages.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.averages.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs11090 = self__.averages.call(null,new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512));if(cljs.core.map_QMARK_.call(null,attrs11090))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11090)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs11090));
}
})()),React.DOM.td(null,(function (){var attrs11091 = self__.averages.call(null,new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288));if(cljs.core.map_QMARK_.call(null,attrs11091))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11091)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs11091));
}
})()),React.DOM.td(null,(function (){var attrs11092 = self__.averages.call(null,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(cljs.core.map_QMARK_.call(null,attrs11092))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11092)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs11092));
}
})()),React.DOM.td(null,(function (){var attrs11093 = self__.averages.call(null,new cljs.core.Keyword(null,"turnover","turnover",1148922435));if(cljs.core.map_QMARK_.call(null,attrs11093))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11093)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs11093));
}
})()),React.DOM.td(null,(function (){var attrs11094 = self__.averages.call(null,new cljs.core.Keyword(null,"employee-count","employee-count",1111164066));if(cljs.core.map_QMARK_.call(null,attrs11094))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11094)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs11094));
}
})()))))));
});
clustermap.components.full_report.t11078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11080){var self__ = this;
var _11080__$1 = this;return self__.meta11079;
});
clustermap.components.full_report.t11078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11080,meta11079__$1){var self__ = this;
var _11080__$1 = this;return (new clustermap.components.full_report.t11078(self__.averages,self__.map__11077,self__.selection,self__.data,self__.map__11076,self__.p__11056,self__.overview,meta11079__$1));
});
clustermap.components.full_report.__GT_t11078 = (function __GT_t11078(averages__$1,map__11077__$2,selection__$2,data__$1,map__11076__$2,p__11056__$1,overview__$1,meta11079){return (new clustermap.components.full_report.t11078(averages__$1,map__11077__$2,selection__$2,data__$1,map__11076__$2,p__11056__$1,overview__$1,meta11079));
});
}
return (new clustermap.components.full_report.t11078(averages,map__11077__$1,selection__$1,data,map__11076__$1,p__11056,overview,null));
});
clustermap.components.full_report.portfolio_company_sites = (function portfolio_company_sites(p__11095){var map__11099 = p__11095;var map__11099__$1 = ((cljs.core.seq_QMARK_.call(null,map__11099))?cljs.core.apply.call(null,cljs.core.hash_map,map__11099):map__11099);var data = map__11099__$1;var all_portfolio_companies_summary = cljs.core.get.call(null,map__11099__$1,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533));var selection = cljs.core.get.call(null,map__11099__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));return React.DOM.div({"className": "full-report-portfolio-company-sites"},"portfolio-company-sites");
});
clustermap.components.full_report.details = (function details(p__11102){var map__11106 = p__11102;var map__11106__$1 = ((cljs.core.seq_QMARK_.call(null,map__11106))?cljs.core.apply.call(null,cljs.core.hash_map,map__11106):map__11106);var data = map__11106__$1;var all_portfolio_companies_summary = cljs.core.get.call(null,map__11106__$1,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533));var selection = cljs.core.get.call(null,map__11106__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));return React.DOM.div({"className": "full-report-details"},"details");
});
clustermap.components.full_report.full_report_component = (function full_report_component(p__11109,owner){var map__11115 = p__11109;var map__11115__$1 = ((cljs.core.seq_QMARK_.call(null,map__11115))?cljs.core.apply.call(null,cljs.core.hash_map,map__11115):map__11115);var data = map__11115__$1;var all_portfolio_companies_summary = cljs.core.get.call(null,map__11115__$1,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533));var selection = cljs.core.get.call(null,map__11115__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.full_report.t11116 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t11116 = (function (selection,all_portfolio_companies_summary,data,map__11115,owner,p__11109,full_report_component,meta11117){
this.selection = selection;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.data = data;
this.map__11115 = map__11115;
this.owner = owner;
this.p__11109 = p__11109;
this.full_report_component = full_report_component;
this.meta11117 = meta11117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t11116.cljs$lang$type = true;
clustermap.components.full_report.t11116.cljs$lang$ctorStr = "clustermap.components.full-report/t11116";
clustermap.components.full_report.t11116.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report/t11116");
});
clustermap.components.full_report.t11116.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t11116.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).tooltip();
});
clustermap.components.full_report.t11116.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t11116.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs11119 = om.core.build.call(null,clustermap.components.full_report.overview,self__.data);if(cljs.core.map_QMARK_.call(null,attrs11119))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs11119),sablono.interpreter.interpret.call(null,clustermap.components.full_report.portfolio_company_sites.call(null,self__.data)),sablono.interpreter.interpret.call(null,clustermap.components.full_report.details.call(null,self__.data)));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs11119),sablono.interpreter.interpret.call(null,clustermap.components.full_report.portfolio_company_sites.call(null,self__.data)),sablono.interpreter.interpret.call(null,clustermap.components.full_report.details.call(null,self__.data)));
}
});
clustermap.components.full_report.t11116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11118){var self__ = this;
var _11118__$1 = this;return self__.meta11117;
});
clustermap.components.full_report.t11116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11118,meta11117__$1){var self__ = this;
var _11118__$1 = this;return (new clustermap.components.full_report.t11116(self__.selection,self__.all_portfolio_companies_summary,self__.data,self__.map__11115,self__.owner,self__.p__11109,self__.full_report_component,meta11117__$1));
});
clustermap.components.full_report.__GT_t11116 = (function __GT_t11116(selection__$1,all_portfolio_companies_summary__$1,data__$1,map__11115__$2,owner__$1,p__11109__$1,full_report_component__$1,meta11117){return (new clustermap.components.full_report.t11116(selection__$1,all_portfolio_companies_summary__$1,data__$1,map__11115__$2,owner__$1,p__11109__$1,full_report_component__$1,meta11117));
});
}
return (new clustermap.components.full_report.t11116(selection,all_portfolio_companies_summary,data,map__11115__$1,owner,p__11109,full_report_component,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.full_report.full_report_component,document.getElementById(elem_id));
});

//# sourceMappingURL=full_report.js.map