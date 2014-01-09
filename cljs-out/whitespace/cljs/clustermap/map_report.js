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
clustermap.map_report.empty_report = (function empty_report(){if(typeof clustermap.map_report.t28545 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t28545 = (function (empty_report,meta28546){
this.empty_report = empty_report;
this.meta28546 = meta28546;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t28545.cljs$lang$type = true;
clustermap.map_report.t28545.cljs$lang$ctorStr = "clustermap.map-report/t28545";
clustermap.map_report.t28545.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t28545");
});
clustermap.map_report.t28545.prototype.om$core$IRender$ = true;
clustermap.map_report.t28545.prototype.om$core$IRender$render$arity$1 = (function (this__8960__auto__){var self__ = this;
var this__8960__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"-"),React.DOM.h3(null,"-")),React.DOM.ul(null,React.DOM.li(null,"-",React.DOM.small(null,"Companies")),React.DOM.li(null,"-",React.DOM.small(null,"Investors")),React.DOM.li(null,"-",React.DOM.small(null,"Turnover")),React.DOM.li(null,"-",React.DOM.small(null,"Employees"))));
});
clustermap.map_report.t28545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28547){var self__ = this;
var _28547__$1 = this;return self__.meta28546;
});
clustermap.map_report.t28545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28547,meta28546__$1){var self__ = this;
var _28547__$1 = this;return (new clustermap.map_report.t28545(self__.empty_report,meta28546__$1));
});
clustermap.map_report.__GT_t28545 = (function __GT_t28545(empty_report__$1,meta28546){return (new clustermap.map_report.t28545(empty_report__$1,meta28546));
});
}
return (new clustermap.map_report.t28545(empty_report,null));
});
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533).cljs$core$IFn$_invoke$arity$1(data);var ic_summ = new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789).cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.map_report.t28579 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t28579 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta28580){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta28580 = meta28580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t28579.cljs$lang$type = true;
clustermap.map_report.t28579.cljs$lang$ctorStr = "clustermap.map-report/t28579";
clustermap.map_report.t28579.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t28579");
});
clustermap.map_report.t28579.prototype.om$core$IRender$ = true;
clustermap.map_report.t28579.prototype.om$core$IRender$render$arity$1 = (function (this__8960__auto__){var self__ = this;
var this__8960__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs28584 = clustermap.formats.number.fnum.call(null,(function (){var G__28604 = self__.pc_summ;var G__28604__$1 = (((G__28604 == null))?null:(G__28604["count"]));return G__28604__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs28584))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28584)),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28584),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs28589 = clustermap.formats.number.fnum.call(null,(function (){var G__28605 = self__.ic_summ;var G__28605__$1 = (((G__28605 == null))?null:(G__28605["count"]));return G__28605__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs28589))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28589)),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28589),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs28594 = clustermap.formats.money.fmoney.call(null,(function (){var G__28606 = self__.pc_summ;var G__28606__$1 = (((G__28606 == null))?null:(G__28606["latest_turnover_stats"]["total"]));return G__28606__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs28594))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28594)),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28594),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs28599 = clustermap.formats.number.fnum.call(null,(function (){var G__28607 = self__.pc_summ;var G__28607__$1 = (((G__28607 == null))?null:(G__28607["latest_employee_count_stats"]["total"]));return G__28607__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs28599))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28599)),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28599),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t28579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28581){var self__ = this;
var _28581__$1 = this;return self__.meta28580;
});
clustermap.map_report.t28579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28581,meta28580__$1){var self__ = this;
var _28581__$1 = this;return (new clustermap.map_report.t28579(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta28580__$1));
});
clustermap.map_report.__GT_t28579 = (function __GT_t28579(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta28580){return (new clustermap.map_report.t28579(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta28580));
});
}
return (new clustermap.map_report.t28579(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.selection_report = (function selection_report(data){if(typeof clustermap.map_report.t28613 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t28613 = (function (data,selection_report,meta28614){
this.data = data;
this.selection_report = selection_report;
this.meta28614 = meta28614;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t28613.cljs$lang$type = true;
clustermap.map_report.t28613.cljs$lang$ctorStr = "clustermap.map-report/t28613";
clustermap.map_report.t28613.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t28613");
});
clustermap.map_report.t28613.prototype.om$core$IRender$ = true;
clustermap.map_report.t28613.prototype.om$core$IRender$render$arity$1 = (function (this__8960__auto__){var self__ = this;
var this__8960__auto____$1 = this;return React.DOM.div(null,"boo");
});
clustermap.map_report.t28613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28615){var self__ = this;
var _28615__$1 = this;return self__.meta28614;
});
clustermap.map_report.t28613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28615,meta28614__$1){var self__ = this;
var _28615__$1 = this;return (new clustermap.map_report.t28613(self__.data,self__.selection_report,meta28614__$1));
});
clustermap.map_report.__GT_t28613 = (function __GT_t28613(data__$1,selection_report__$1,meta28614){return (new clustermap.map_report.t28613(data__$1,selection_report__$1,meta28614));
});
}
return (new clustermap.map_report.t28613(data,selection_report,null));
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
