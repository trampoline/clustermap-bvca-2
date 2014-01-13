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
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = cljs.core.constant$keyword$199.cljs$core$IFn$_invoke$arity$1(data);var ic_summ = cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.map_report.t20045 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t20045 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta20046){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta20046 = meta20046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t20045.cljs$lang$type = true;
clustermap.map_report.t20045.cljs$lang$ctorStr = "clustermap.map-report/t20045";
clustermap.map_report.t20045.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.map-report/t20045");
});
clustermap.map_report.t20045.prototype.om$core$IRender$ = true;
clustermap.map_report.t20045.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs20050 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20070 = self__.pc_summ;var G__20070__$1 = (((G__20070 == null))?null:(G__20070["count"]));return G__20070__$1;
})(),cljs.core.constant$keyword$116,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20070 = self__.pc_summ;var G__20070__$1 = (((G__20070 == null))?null:(G__20070["count"]));return G__20070__$1;
})(),cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20050))
{return React.DOM.li(sablono.interpreter.attributes(attrs20050),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20050),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs20055 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20071 = self__.ic_summ;var G__20071__$1 = (((G__20071 == null))?null:(G__20071["count"]));return G__20071__$1;
})(),cljs.core.constant$keyword$116,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20071 = self__.ic_summ;var G__20071__$1 = (((G__20071 == null))?null:(G__20071["count"]));return G__20071__$1;
})(),cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20055))
{return React.DOM.li(sablono.interpreter.attributes(attrs20055),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20055),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs20060 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20072 = self__.pc_summ;var G__20072__$1 = (((G__20072 == null))?null:(G__20072["latest_turnover_stats"]["total"]));return G__20072__$1;
})(),cljs.core.constant$keyword$195,2,cljs.core.constant$keyword$116,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20072 = self__.pc_summ;var G__20072__$1 = (((G__20072 == null))?null:(G__20072["latest_turnover_stats"]["total"]));return G__20072__$1;
})(),cljs.core.constant$keyword$195,2,cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20060))
{return React.DOM.li(sablono.interpreter.attributes(attrs20060),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20060),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs20065 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20073 = self__.pc_summ;var G__20073__$1 = (((G__20073 == null))?null:(G__20073["latest_employee_count_stats"]["total"]));return G__20073__$1;
})(),cljs.core.constant$keyword$116,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20073 = self__.pc_summ;var G__20073__$1 = (((G__20073 == null))?null:(G__20073["latest_employee_count_stats"]["total"]));return G__20073__$1;
})(),cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20065))
{return React.DOM.li(sablono.interpreter.attributes(attrs20065),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20065),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t20045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20047){var self__ = this;
var _20047__$1 = this;return self__.meta20046;
});
clustermap.map_report.t20045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20047,meta20046__$1){var self__ = this;
var _20047__$1 = this;return (new clustermap.map_report.t20045(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta20046__$1));
});
clustermap.map_report.__GT_t20045 = (function __GT_t20045(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta20046){return (new clustermap.map_report.t20045(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta20046));
});
}
return (new clustermap.map_report.t20045(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.selection_report = (function selection_report(data){if(typeof clustermap.map_report.t20096 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t20096 = (function (data,selection_report,meta20097){
this.data = data;
this.selection_report = selection_report;
this.meta20097 = meta20097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t20096.cljs$lang$type = true;
clustermap.map_report.t20096.cljs$lang$ctorStr = "clustermap.map-report/t20096";
clustermap.map_report.t20096.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.map-report/t20096");
});
clustermap.map_report.t20096.prototype.om$core$IRender$ = true;
clustermap.map_report.t20096.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs20099 = (self__.data["name"]);if(cljs.core.map_QMARK_(attrs20099))
{return React.DOM.h2(sablono.interpreter.attributes(attrs20099),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs20099));
}
})()),React.DOM.ul(null,(function (){var attrs20100 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1((function (){var G__20115 = self__.data;var G__20115__$1 = (((G__20115 == null))?null:(G__20115["sites"]));var G__20115__$2 = (((G__20115__$1 == null))?null:cljs.core.count(G__20115__$1));return G__20115__$2;
})()) : clustermap.formats.number.fnum.call(null,(function (){var G__20115 = self__.data;var G__20115__$1 = (((G__20115 == null))?null:(G__20115["sites"]));var G__20115__$2 = (((G__20115__$1 == null))?null:cljs.core.count(G__20115__$1));return G__20115__$2;
})()));if(cljs.core.map_QMARK_(attrs20100))
{return React.DOM.li(sablono.interpreter.attributes(attrs20100),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20100),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs20105 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20116 = self__.data;var G__20116__$1 = (((G__20116 == null))?null:(G__20116["latest_turnover"]));return G__20116__$1;
})(),cljs.core.constant$keyword$195,2,cljs.core.constant$keyword$116,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20116 = self__.data;var G__20116__$1 = (((G__20116 == null))?null:(G__20116["latest_turnover"]));return G__20116__$1;
})(),cljs.core.constant$keyword$195,2,cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20105))
{return React.DOM.li(sablono.interpreter.attributes(attrs20105),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20105),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs20110 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20117 = self__.data;var G__20117__$1 = (((G__20117 == null))?null:(G__20117["latest_employee_count"]));return G__20117__$1;
})(),cljs.core.constant$keyword$116,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20117 = self__.data;var G__20117__$1 = (((G__20117 == null))?null:(G__20117["latest_employee_count"]));return G__20117__$1;
})(),cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20110))
{return React.DOM.li(sablono.interpreter.attributes(attrs20110),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20110),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t20096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20098){var self__ = this;
var _20098__$1 = this;return self__.meta20097;
});
clustermap.map_report.t20096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20098,meta20097__$1){var self__ = this;
var _20098__$1 = this;return (new clustermap.map_report.t20096(self__.data,self__.selection_report,meta20097__$1));
});
clustermap.map_report.__GT_t20096 = (function __GT_t20096(data__$1,selection_report__$1,meta20097){return (new clustermap.map_report.t20096(data__$1,selection_report__$1,meta20097));
});
}
return (new clustermap.map_report.t20096(data,selection_report,null));
});
clustermap.map_report.widget = (function widget(data){var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$201,cljs.core.constant$keyword$153], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$201,cljs.core.constant$keyword$120], null));var pred__20121 = cljs.core._EQ__EQ_;var expr__20122 = type;if(cljs.core.truth_((pred__20121.cljs$core$IFn$_invoke$arity$2 ? pred__20121.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$163,expr__20122) : pred__20121.call(null,cljs.core.constant$keyword$163,expr__20122))))
{return clustermap.map_report.selection_report(value);
} else
{if(cljs.core.truth_((pred__20121.cljs$core$IFn$_invoke$arity$2 ? pred__20121.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$164,expr__20122) : pred__20121.call(null,cljs.core.constant$keyword$164,expr__20122))))
{return clustermap.map_report.selection_report(value);
} else
{if(cljs.core.truth_((pred__20121.cljs$core$IFn$_invoke$arity$2 ? pred__20121.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$162,expr__20122) : pred__20121.call(null,cljs.core.constant$keyword$162,expr__20122))))
{return clustermap.map_report.selection_report(value);
} else
{return clustermap.map_report.all_portfolio_companies_summary_report(data);
}
}
}
});
clustermap.map_report.mount = (function mount(app_state,elem_id){return om.core.root(app_state,clustermap.map_report.widget,document.getElementById(elem_id));
});
