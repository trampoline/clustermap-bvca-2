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
clustermap.map_report.empty_report = (function empty_report(){if(typeof clustermap.map_report.t28766 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t28766 = (function (empty_report,meta28767){
this.empty_report = empty_report;
this.meta28767 = meta28767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t28766.cljs$lang$type = true;
clustermap.map_report.t28766.cljs$lang$ctorStr = "clustermap.map-report/t28766";
clustermap.map_report.t28766.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t28766");
});
clustermap.map_report.t28766.prototype.om$core$IRender$ = true;
clustermap.map_report.t28766.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
var this__8966__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"-"),React.DOM.h3(null,"-")),React.DOM.ul(null,React.DOM.li(null,"-",React.DOM.small(null,"Companies")),React.DOM.li(null,"-",React.DOM.small(null,"Investors")),React.DOM.li(null,"-",React.DOM.small(null,"Turnover")),React.DOM.li(null,"-",React.DOM.small(null,"Employees"))));
});
clustermap.map_report.t28766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28768){var self__ = this;
var _28768__$1 = this;return self__.meta28767;
});
clustermap.map_report.t28766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28768,meta28767__$1){var self__ = this;
var _28768__$1 = this;return (new clustermap.map_report.t28766(self__.empty_report,meta28767__$1));
});
clustermap.map_report.__GT_t28766 = (function __GT_t28766(empty_report__$1,meta28767){return (new clustermap.map_report.t28766(empty_report__$1,meta28767));
});
}
return (new clustermap.map_report.t28766(empty_report,null));
});
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533).cljs$core$IFn$_invoke$arity$1(data);var ic_summ = new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789).cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.map_report.t28800 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t28800 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta28801){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta28801 = meta28801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t28800.cljs$lang$type = true;
clustermap.map_report.t28800.cljs$lang$ctorStr = "clustermap.map-report/t28800";
clustermap.map_report.t28800.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t28800");
});
clustermap.map_report.t28800.prototype.om$core$IRender$ = true;
clustermap.map_report.t28800.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
var this__8966__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs28805 = clustermap.formats.number.fnum.call(null,(function (){var G__28825 = self__.pc_summ;var G__28825__$1 = (((G__28825 == null))?null:(G__28825["count"]));return G__28825__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs28805))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28805)),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28805),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs28810 = clustermap.formats.number.fnum.call(null,(function (){var G__28826 = self__.ic_summ;var G__28826__$1 = (((G__28826 == null))?null:(G__28826["count"]));return G__28826__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs28810))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28810)),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28810),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs28815 = clustermap.formats.money.fmoney.call(null,(function (){var G__28827 = self__.pc_summ;var G__28827__$1 = (((G__28827 == null))?null:(G__28827["latest_turnover_stats"]["total"]));return G__28827__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs28815))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28815)),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28815),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs28820 = clustermap.formats.number.fnum.call(null,(function (){var G__28828 = self__.pc_summ;var G__28828__$1 = (((G__28828 == null))?null:(G__28828["latest_employee_count_stats"]["total"]));return G__28828__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs28820))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28820)),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28820),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t28800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28802){var self__ = this;
var _28802__$1 = this;return self__.meta28801;
});
clustermap.map_report.t28800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28802,meta28801__$1){var self__ = this;
var _28802__$1 = this;return (new clustermap.map_report.t28800(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta28801__$1));
});
clustermap.map_report.__GT_t28800 = (function __GT_t28800(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta28801){return (new clustermap.map_report.t28800(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta28801));
});
}
return (new clustermap.map_report.t28800(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.selection_report = (function selection_report(data){if(typeof clustermap.map_report.t28834 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t28834 = (function (data,selection_report,meta28835){
this.data = data;
this.selection_report = selection_report;
this.meta28835 = meta28835;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t28834.cljs$lang$type = true;
clustermap.map_report.t28834.cljs$lang$ctorStr = "clustermap.map-report/t28834";
clustermap.map_report.t28834.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t28834");
});
clustermap.map_report.t28834.prototype.om$core$IRender$ = true;
clustermap.map_report.t28834.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
var this__8966__auto____$1 = this;return React.DOM.div(null,"boo");
});
clustermap.map_report.t28834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28836){var self__ = this;
var _28836__$1 = this;return self__.meta28835;
});
clustermap.map_report.t28834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28836,meta28835__$1){var self__ = this;
var _28836__$1 = this;return (new clustermap.map_report.t28834(self__.data,self__.selection_report,meta28835__$1));
});
clustermap.map_report.__GT_t28834 = (function __GT_t28834(data__$1,selection_report__$1,meta28835){return (new clustermap.map_report.t28834(data__$1,selection_report__$1,meta28835));
});
}
return (new clustermap.map_report.t28834(data,selection_report,null));
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
