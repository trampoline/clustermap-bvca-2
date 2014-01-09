// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
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
goog.require('clustermap.formats.number');
clustermap.map_report.empty_report = (function empty_report(){if(typeof clustermap.map_report.t10739 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t10739 = (function (empty_report,meta10740){
this.empty_report = empty_report;
this.meta10740 = meta10740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t10739.cljs$lang$type = true;
clustermap.map_report.t10739.cljs$lang$ctorStr = "clustermap.map-report/t10739";
clustermap.map_report.t10739.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t10739");
});
clustermap.map_report.t10739.prototype.om$core$IRender$ = true;
clustermap.map_report.t10739.prototype.om$core$IRender$render$arity$1 = (function (this__8960__auto__){var self__ = this;
var this__8960__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"-"),React.DOM.h3(null,"-")),React.DOM.ul(null,React.DOM.li(null,"-",React.DOM.small(null,"Companies")),React.DOM.li(null,"-",React.DOM.small(null,"Investors")),React.DOM.li(null,"-",React.DOM.small(null,"Turnover")),React.DOM.li(null,"-",React.DOM.small(null,"Employees"))));
});
clustermap.map_report.t10739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10741){var self__ = this;
var _10741__$1 = this;return self__.meta10740;
});
clustermap.map_report.t10739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10741,meta10740__$1){var self__ = this;
var _10741__$1 = this;return (new clustermap.map_report.t10739(self__.empty_report,meta10740__$1));
});
clustermap.map_report.__GT_t10739 = (function __GT_t10739(empty_report__$1,meta10740){return (new clustermap.map_report.t10739(empty_report__$1,meta10740));
});
}
return (new clustermap.map_report.t10739(empty_report,null));
});
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533).cljs$core$IFn$_invoke$arity$1(data);var ic_summ = new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789).cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.map_report.t10773 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t10773 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta10774){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta10774 = meta10774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t10773.cljs$lang$type = true;
clustermap.map_report.t10773.cljs$lang$ctorStr = "clustermap.map-report/t10773";
clustermap.map_report.t10773.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t10773");
});
clustermap.map_report.t10773.prototype.om$core$IRender$ = true;
clustermap.map_report.t10773.prototype.om$core$IRender$render$arity$1 = (function (this__8960__auto__){var self__ = this;
var this__8960__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs10778 = clustermap.formats.number.fnum.call(null,(function (){var G__10798 = self__.pc_summ;var G__10798__$1 = (((G__10798 == null))?null:(G__10798["count"]));return G__10798__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs10778))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs10778)),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10778),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs10783 = clustermap.formats.number.fnum.call(null,(function (){var G__10799 = self__.ic_summ;var G__10799__$1 = (((G__10799 == null))?null:(G__10799["count"]));return G__10799__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs10783))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs10783)),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10783),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs10788 = clustermap.formats.money.fmoney.call(null,(function (){var G__10800 = self__.pc_summ;var G__10800__$1 = (((G__10800 == null))?null:(G__10800["latest_turnover_stats"]["total"]));return G__10800__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs10788))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs10788)),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10788),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs10793 = clustermap.formats.number.fnum.call(null,(function (){var G__10801 = self__.pc_summ;var G__10801__$1 = (((G__10801 == null))?null:(G__10801["latest_employee_count_stats"]["total"]));return G__10801__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs10793))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs10793)),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10793),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t10773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10775){var self__ = this;
var _10775__$1 = this;return self__.meta10774;
});
clustermap.map_report.t10773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10775,meta10774__$1){var self__ = this;
var _10775__$1 = this;return (new clustermap.map_report.t10773(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta10774__$1));
});
clustermap.map_report.__GT_t10773 = (function __GT_t10773(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta10774){return (new clustermap.map_report.t10773(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta10774));
});
}
return (new clustermap.map_report.t10773(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.selection_report = (function selection_report(data){if(typeof clustermap.map_report.t10807 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t10807 = (function (data,selection_report,meta10808){
this.data = data;
this.selection_report = selection_report;
this.meta10808 = meta10808;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t10807.cljs$lang$type = true;
clustermap.map_report.t10807.cljs$lang$ctorStr = "clustermap.map-report/t10807";
clustermap.map_report.t10807.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t10807");
});
clustermap.map_report.t10807.prototype.om$core$IRender$ = true;
clustermap.map_report.t10807.prototype.om$core$IRender$render$arity$1 = (function (this__8960__auto__){var self__ = this;
var this__8960__auto____$1 = this;return React.DOM.div(null,"boo");
});
clustermap.map_report.t10807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10809){var self__ = this;
var _10809__$1 = this;return self__.meta10808;
});
clustermap.map_report.t10807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10809,meta10808__$1){var self__ = this;
var _10809__$1 = this;return (new clustermap.map_report.t10807(self__.data,self__.selection_report,meta10808__$1));
});
clustermap.map_report.__GT_t10807 = (function __GT_t10807(data__$1,selection_report__$1,meta10808){return (new clustermap.map_report.t10807(data__$1,selection_report__$1,meta10808));
});
}
return (new clustermap.map_report.t10807(data,selection_report,null));
});
clustermap.map_report.widget = (function widget(data){if((new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(data) == null))
{return clustermap.map_report.all_portfolio_companies_summary_report.call(null,data);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null))))
{return clustermap.map_report.selection_report.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(data));
} else
{return null;
}
}
});
clustermap.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.map_report.widget,document.getElementById(elem_id));
});

//# sourceMappingURL=map_report.js.map