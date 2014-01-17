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
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533).cljs$core$IFn$_invoke$arity$1(data);var ic_summ = new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789).cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.map_report.t16410 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t16410 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta16411){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta16411 = meta16411;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t16410.cljs$lang$type = true;
clustermap.map_report.t16410.cljs$lang$ctorStr = "clustermap.map-report/t16410";
clustermap.map_report.t16410.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t16410");
});
clustermap.map_report.t16410.prototype.om$core$IRender$ = true;
clustermap.map_report.t16410.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs16415 = clustermap.formats.number.fnum.call(null,(function (){var G__16435 = self__.pc_summ;var G__16435__$1 = (((G__16435 == null))?null:(G__16435["count"]));return G__16435__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs16415))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs16415),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs16415),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs16420 = clustermap.formats.number.fnum.call(null,(function (){var G__16436 = self__.ic_summ;var G__16436__$1 = (((G__16436 == null))?null:(G__16436["count"]));return G__16436__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs16420))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs16420),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs16420),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs16425 = clustermap.formats.money.fmoney.call(null,(function (){var G__16437 = self__.pc_summ;var G__16437__$1 = (((G__16437 == null))?null:(G__16437["latest_turnover_stats"]["total"]));return G__16437__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs16425))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs16425),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs16425),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs16430 = clustermap.formats.number.fnum.call(null,(function (){var G__16438 = self__.pc_summ;var G__16438__$1 = (((G__16438 == null))?null:(G__16438["latest_employee_count_stats"]["total"]));return G__16438__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs16430))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs16430),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs16430),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t16410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16412){var self__ = this;
var _16412__$1 = this;return self__.meta16411;
});
clustermap.map_report.t16410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16412,meta16411__$1){var self__ = this;
var _16412__$1 = this;return (new clustermap.map_report.t16410(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta16411__$1));
});
clustermap.map_report.__GT_t16410 = (function __GT_t16410(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta16411){return (new clustermap.map_report.t16410(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta16411));
});
}
return (new clustermap.map_report.t16410(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.portfolio_company_report = (function portfolio_company_report(data){if(typeof clustermap.map_report.t16467 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t16467 = (function (data,portfolio_company_report,meta16468){
this.data = data;
this.portfolio_company_report = portfolio_company_report;
this.meta16468 = meta16468;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t16467.cljs$lang$type = true;
clustermap.map_report.t16467.cljs$lang$ctorStr = "clustermap.map-report/t16467";
clustermap.map_report.t16467.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t16467");
});
clustermap.map_report.t16467.prototype.om$core$IRender$ = true;
clustermap.map_report.t16467.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs16470 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs16470))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs16470),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs16470));
}
})()),React.DOM.ul(null,(function (){var attrs16471 = clustermap.formats.number.fnum.call(null,(function (){var G__16491 = self__.data;var G__16491__$1 = (((G__16491 == null))?null:(G__16491["sites"]));var G__16491__$2 = (((G__16491__$1 == null))?null:cljs.core.count.call(null,G__16491__$1));return G__16491__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs16471))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs16471),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs16471),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs16476 = clustermap.formats.number.fnum.call(null,(function (){var G__16492 = self__.data;var G__16492__$1 = (((G__16492 == null))?null:(G__16492["boundarylinecolls"]["uk_constituencies"]));var G__16492__$2 = (((G__16492__$1 == null))?null:cljs.core.count.call(null,G__16492__$1));return G__16492__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs16476))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs16476),React.DOM.small(null,"Constituencies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs16476),React.DOM.small(null,"Constituencies"));
}
})(),(function (){var attrs16481 = clustermap.formats.money.fmoney.call(null,(function (){var G__16493 = self__.data;var G__16493__$1 = (((G__16493 == null))?null:(G__16493["latest_turnover"]));return G__16493__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs16481))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs16481),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs16481),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs16486 = clustermap.formats.number.fnum.call(null,(function (){var G__16494 = self__.data;var G__16494__$1 = (((G__16494 == null))?null:(G__16494["latest_employee_count"]));return G__16494__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs16486))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs16486),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs16486),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t16467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16469){var self__ = this;
var _16469__$1 = this;return self__.meta16468;
});
clustermap.map_report.t16467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16469,meta16468__$1){var self__ = this;
var _16469__$1 = this;return (new clustermap.map_report.t16467(self__.data,self__.portfolio_company_report,meta16468__$1));
});
clustermap.map_report.__GT_t16467 = (function __GT_t16467(data__$1,portfolio_company_report__$1,meta16468){return (new clustermap.map_report.t16467(data__$1,portfolio_company_report__$1,meta16468));
});
}
return (new clustermap.map_report.t16467(data,portfolio_company_report,null));
});
clustermap.map_report.investor_company_report = (function investor_company_report(data){if(typeof clustermap.map_report.t16523 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t16523 = (function (data,investor_company_report,meta16524){
this.data = data;
this.investor_company_report = investor_company_report;
this.meta16524 = meta16524;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t16523.cljs$lang$type = true;
clustermap.map_report.t16523.cljs$lang$ctorStr = "clustermap.map-report/t16523";
clustermap.map_report.t16523.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t16523");
});
clustermap.map_report.t16523.prototype.om$core$IRender$ = true;
clustermap.map_report.t16523.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs16526 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs16526))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs16526),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs16526));
}
})()),React.DOM.ul(null,(function (){var attrs16527 = clustermap.formats.number.fnum.call(null,(function (){var G__16547 = self__.data;var G__16547__$1 = (((G__16547 == null))?null:(G__16547["portfolio_companies"]));var G__16547__$2 = (((G__16547__$1 == null))?null:cljs.core.count.call(null,G__16547__$1));return G__16547__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs16527))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs16527),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs16527),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs16532 = clustermap.formats.number.fnum.call(null,(function (){var G__16548 = self__.data;var G__16548__$1 = (((G__16548 == null))?null:(G__16548["boundarylinecolls"]["uk_constituencies"]));var G__16548__$2 = (((G__16548__$1 == null))?null:cljs.core.count.call(null,G__16548__$1));return G__16548__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs16532))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs16532),React.DOM.small(null,"Constituencies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs16532),React.DOM.small(null,"Constituencies"));
}
})(),(function (){var attrs16537 = clustermap.formats.money.fmoney.call(null,(function (){var G__16549 = self__.data;var G__16549__$1 = (((G__16549 == null))?null:(G__16549["total_turnover"]));return G__16549__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs16537))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs16537),React.DOM.small(null,"Total Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs16537),React.DOM.small(null,"Total Company Turnover"));
}
})(),(function (){var attrs16542 = clustermap.formats.number.fnum.call(null,(function (){var G__16550 = self__.data;var G__16550__$1 = (((G__16550 == null))?null:(G__16550["total_employee_count"]));return G__16550__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs16542))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs16542),React.DOM.small(null,"Total Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs16542),React.DOM.small(null,"Total Company Employees"));
}
})()));
});
clustermap.map_report.t16523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16525){var self__ = this;
var _16525__$1 = this;return self__.meta16524;
});
clustermap.map_report.t16523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16525,meta16524__$1){var self__ = this;
var _16525__$1 = this;return (new clustermap.map_report.t16523(self__.data,self__.investor_company_report,meta16524__$1));
});
clustermap.map_report.__GT_t16523 = (function __GT_t16523(data__$1,investor_company_report__$1,meta16524){return (new clustermap.map_report.t16523(data__$1,investor_company_report__$1,meta16524));
});
}
return (new clustermap.map_report.t16523(data,investor_company_report,null));
});
clustermap.map_report.constituency_report = (function constituency_report(data){if(typeof clustermap.map_report.t16580 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t16580 = (function (data,constituency_report,meta16581){
this.data = data;
this.constituency_report = constituency_report;
this.meta16581 = meta16581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t16580.cljs$lang$type = true;
clustermap.map_report.t16580.cljs$lang$ctorStr = "clustermap.map-report/t16580";
clustermap.map_report.t16580.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t16580");
});
clustermap.map_report.t16580.prototype.om$core$IRender$ = true;
clustermap.map_report.t16580.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs16583 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs16583))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs16583),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs16583));
}
})(),(function (){var attrs16584 = (self__.data["mp"]);if(cljs.core.map_QMARK_.call(null,attrs16584))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs16584),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,(self__.data["political_party"])),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs16584),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,(self__.data["political_party"])),")"));
}
})()),React.DOM.ul(null,(function (){var attrs16585 = clustermap.formats.number.fnum.call(null,(function (){var G__16605 = self__.data;var G__16605__$1 = (((G__16605 == null))?null:(G__16605["investor_companies"]));var G__16605__$2 = (((G__16605__$1 == null))?null:cljs.core.count.call(null,G__16605__$1));return G__16605__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs16585))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs16585),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs16585),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs16590 = clustermap.formats.number.fnum.call(null,(function (){var G__16606 = self__.data;var G__16606__$1 = (((G__16606 == null))?null:(G__16606["portfolio_companies"]));var G__16606__$2 = (((G__16606__$1 == null))?null:cljs.core.count.call(null,G__16606__$1));return G__16606__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs16590))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs16590),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs16590),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs16595 = clustermap.formats.money.fmoney.call(null,(function (){var G__16607 = self__.data;var G__16607__$1 = (((G__16607 == null))?null:(G__16607["total_turnover"]));return G__16607__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs16595))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs16595),React.DOM.small(null,"Total Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs16595),React.DOM.small(null,"Total Turnover"));
}
})(),(function (){var attrs16600 = clustermap.formats.number.fnum.call(null,(function (){var G__16608 = self__.data;var G__16608__$1 = (((G__16608 == null))?null:(G__16608["total_employee_count"]));return G__16608__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs16600))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs16600),React.DOM.small(null,"Total Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs16600),React.DOM.small(null,"Total Employees"));
}
})()));
});
clustermap.map_report.t16580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16582){var self__ = this;
var _16582__$1 = this;return self__.meta16581;
});
clustermap.map_report.t16580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16582,meta16581__$1){var self__ = this;
var _16582__$1 = this;return (new clustermap.map_report.t16580(self__.data,self__.constituency_report,meta16581__$1));
});
clustermap.map_report.__GT_t16580 = (function __GT_t16580(data__$1,constituency_report__$1,meta16581){return (new clustermap.map_report.t16580(data__$1,constituency_report__$1,meta16581));
});
}
return (new clustermap.map_report.t16580(data,constituency_report,null));
});
clustermap.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__16612 = cljs.core._EQ__EQ_;var expr__16613 = type;if(cljs.core.truth_(pred__16612.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__16613)))
{return clustermap.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__16612.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__16613)))
{return clustermap.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__16612.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__16613)))
{return clustermap.map_report.constituency_report.call(null,value);
} else
{return clustermap.map_report.all_portfolio_companies_summary_report.call(null,data);
}
}
}
});
clustermap.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.map_report.widget,document.getElementById(elem_id));
});

//# sourceMappingURL=map_report.js.map