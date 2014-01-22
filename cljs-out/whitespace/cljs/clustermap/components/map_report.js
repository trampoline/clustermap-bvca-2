// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.formats.string');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_stats = new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data);var pc_count = (function (){var G__30259 = pc_stats;var G__30259__$1 = (((G__30259 == null))?null:(G__30259["portfolio_company_count"]));return G__30259__$1;
})();var ic_count = (function (){var G__30260 = pc_stats;var G__30260__$1 = (((G__30260 == null))?null:(G__30260["investor_company_count"]));return G__30260__$1;
})();if(typeof clustermap.components.map_report.t30261 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30261 = (function (ic_count,pc_count,pc_stats,data,all_portfolio_companies_summary_report,meta30262){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.pc_stats = pc_stats;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta30262 = meta30262;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30261.cljs$lang$type = true;
clustermap.components.map_report.t30261.cljs$lang$ctorStr = "clustermap.components.map-report/t30261";
clustermap.components.map_report.t30261.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30261");
});
clustermap.components.map_report.t30261.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30261.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs30266 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30266))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30266),(function (){var attrs30267 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30267))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30267),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30267));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30266),(function (){var attrs30268 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30268))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30268),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30268));
}
})());
}
})(),(function (){var attrs30269 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30269))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30269),(function (){var attrs30270 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30270))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30270),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30270));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30269),(function (){var attrs30271 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30271))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30271),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30271));
}
})());
}
})(),(function (){var attrs30272 = clustermap.formats.money.fmoney.call(null,(function (){var G__30282 = self__.pc_stats;var G__30282__$1 = (((G__30282 == null))?null:(G__30282["turnover"]["total"]));return G__30282__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30272))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30272),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30272),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs30277 = clustermap.formats.number.fnum.call(null,(function (){var G__30283 = self__.pc_stats;var G__30283__$1 = (((G__30283 == null))?null:(G__30283["employee_count"]["total"]));return G__30283__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30277))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30277),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30277),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t30261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30263){var self__ = this;
var _30263__$1 = this;return self__.meta30262;
});
clustermap.components.map_report.t30261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30263,meta30262__$1){var self__ = this;
var _30263__$1 = this;return (new clustermap.components.map_report.t30261(self__.ic_count,self__.pc_count,self__.pc_stats,self__.data,self__.all_portfolio_companies_summary_report,meta30262__$1));
});
clustermap.components.map_report.__GT_t30261 = (function __GT_t30261(ic_count__$1,pc_count__$1,pc_stats__$1,data__$1,all_portfolio_companies_summary_report__$1,meta30262){return (new clustermap.components.map_report.t30261(ic_count__$1,pc_count__$1,pc_stats__$1,data__$1,all_portfolio_companies_summary_report__$1,meta30262));
});
}
return (new clustermap.components.map_report.t30261(ic_count,pc_count,pc_stats,data,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(data){var ic_count = (function (){var G__30308 = data;var G__30308__$1 = (((G__30308 == null))?null:(G__30308["investor_companies"]));var G__30308__$2 = (((G__30308__$1 == null))?null:cljs.core.count.call(null,G__30308__$1));return G__30308__$2;
})();var const_count = (function (){var G__30309 = data;var G__30309__$1 = (((G__30309 == null))?null:(G__30309["boundarylinecolls"]["uk_constituencies"]));var G__30309__$2 = (((G__30309__$1 == null))?null:cljs.core.count.call(null,G__30309__$1));return G__30309__$2;
})();if(typeof clustermap.components.map_report.t30310 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30310 = (function (const_count,ic_count,data,portfolio_company_report,meta30311){
this.const_count = const_count;
this.ic_count = ic_count;
this.data = data;
this.portfolio_company_report = portfolio_company_report;
this.meta30311 = meta30311;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30310.cljs$lang$type = true;
clustermap.components.map_report.t30310.cljs$lang$ctorStr = "clustermap.components.map-report/t30310";
clustermap.components.map_report.t30310.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30310");
});
clustermap.components.map_report.t30310.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30310.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs30313 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs30313))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs30313),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs30313));
}
})()),React.DOM.ul(null,(function (){var attrs30314 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs30314))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30314),(function (){var attrs30315 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30315))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30315),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30315));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30314),(function (){var attrs30316 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30316))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30316),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30316));
}
})());
}
})(),(function (){var attrs30317 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs30317))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30317),(function (){var attrs30318 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs30318))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30318),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30318));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30317),(function (){var attrs30319 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs30319))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30319),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30319));
}
})());
}
})(),(function (){var attrs30320 = clustermap.formats.money.fmoney.call(null,(function (){var G__30330 = self__.data;var G__30330__$1 = (((G__30330 == null))?null:(G__30330["latest_turnover"]));return G__30330__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30320))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30320),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30320),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs30325 = clustermap.formats.number.fnum.call(null,(function (){var G__30331 = self__.data;var G__30331__$1 = (((G__30331 == null))?null:(G__30331["latest_employee_count"]));return G__30331__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30325))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30325),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30325),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t30310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30312){var self__ = this;
var _30312__$1 = this;return self__.meta30311;
});
clustermap.components.map_report.t30310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30312,meta30311__$1){var self__ = this;
var _30312__$1 = this;return (new clustermap.components.map_report.t30310(self__.const_count,self__.ic_count,self__.data,self__.portfolio_company_report,meta30311__$1));
});
clustermap.components.map_report.__GT_t30310 = (function __GT_t30310(const_count__$1,ic_count__$1,data__$1,portfolio_company_report__$1,meta30311){return (new clustermap.components.map_report.t30310(const_count__$1,ic_count__$1,data__$1,portfolio_company_report__$1,meta30311));
});
}
return (new clustermap.components.map_report.t30310(const_count,ic_count,data,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(data){var pc_count = (function (){var G__30356 = data;var G__30356__$1 = (((G__30356 == null))?null:(G__30356["portfolio_companies"]));var G__30356__$2 = (((G__30356__$1 == null))?null:cljs.core.count.call(null,G__30356__$1));return G__30356__$2;
})();var const_count = (function (){var G__30357 = data;var G__30357__$1 = (((G__30357 == null))?null:(G__30357["boundarylinecolls"]["uk_constituencies"]));var G__30357__$2 = (((G__30357__$1 == null))?null:cljs.core.count.call(null,G__30357__$1));return G__30357__$2;
})();if(typeof clustermap.components.map_report.t30358 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30358 = (function (const_count,pc_count,data,investor_company_report,meta30359){
this.const_count = const_count;
this.pc_count = pc_count;
this.data = data;
this.investor_company_report = investor_company_report;
this.meta30359 = meta30359;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30358.cljs$lang$type = true;
clustermap.components.map_report.t30358.cljs$lang$ctorStr = "clustermap.components.map-report/t30358";
clustermap.components.map_report.t30358.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30358");
});
clustermap.components.map_report.t30358.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30358.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs30361 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs30361))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs30361),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs30361));
}
})()),React.DOM.ul(null,(function (){var attrs30362 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs30362))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30362),(function (){var attrs30363 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30363))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30363),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30363));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30362),(function (){var attrs30364 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30364))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30364),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30364));
}
})());
}
})(),(function (){var attrs30365 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs30365))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30365),(function (){var attrs30366 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs30366))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30366),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30366));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30365),(function (){var attrs30367 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs30367))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30367),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30367));
}
})());
}
})(),(function (){var attrs30368 = clustermap.formats.money.fmoney.call(null,(function (){var G__30378 = self__.data;var G__30378__$1 = (((G__30378 == null))?null:(G__30378["total_turnover"]));return G__30378__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30368))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30368),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30368),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs30373 = clustermap.formats.number.fnum.call(null,(function (){var G__30379 = self__.data;var G__30379__$1 = (((G__30379 == null))?null:(G__30379["total_employee_count"]));return G__30379__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30373))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30373),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30373),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t30358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30360){var self__ = this;
var _30360__$1 = this;return self__.meta30359;
});
clustermap.components.map_report.t30358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30360,meta30359__$1){var self__ = this;
var _30360__$1 = this;return (new clustermap.components.map_report.t30358(self__.const_count,self__.pc_count,self__.data,self__.investor_company_report,meta30359__$1));
});
clustermap.components.map_report.__GT_t30358 = (function __GT_t30358(const_count__$1,pc_count__$1,data__$1,investor_company_report__$1,meta30359){return (new clustermap.components.map_report.t30358(const_count__$1,pc_count__$1,data__$1,investor_company_report__$1,meta30359));
});
}
return (new clustermap.components.map_report.t30358(const_count,pc_count,data,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(data){var pc_count = (function (){var G__30405 = data;var G__30405__$1 = (((G__30405 == null))?null:(G__30405["portfolio_companies"]));var G__30405__$2 = (((G__30405__$1 == null))?null:cljs.core.count.call(null,G__30405__$1));return G__30405__$2;
})();var ic_count = (function (){var G__30406 = data;var G__30406__$1 = (((G__30406 == null))?null:(G__30406["investor_companies"]));var G__30406__$2 = (((G__30406__$1 == null))?null:cljs.core.count.call(null,G__30406__$1));return G__30406__$2;
})();if(typeof clustermap.components.map_report.t30407 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30407 = (function (ic_count,pc_count,data,constituency_report,meta30408){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.data = data;
this.constituency_report = constituency_report;
this.meta30408 = meta30408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30407.cljs$lang$type = true;
clustermap.components.map_report.t30407.cljs$lang$ctorStr = "clustermap.components.map-report/t30407";
clustermap.components.map_report.t30407.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30407");
});
clustermap.components.map_report.t30407.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30407.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs30410 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs30410))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs30410),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs30410));
}
})(),(function (){var attrs30411 = (self__.data["mp"]);if(cljs.core.map_QMARK_.call(null,attrs30411))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs30411),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,(self__.data["political_party"])),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs30411),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,(self__.data["political_party"])),")"));
}
})()),React.DOM.ul(null,(function (){var attrs30412 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs30412))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30412),(function (){var attrs30413 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30413))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30413),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30413));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30412),(function (){var attrs30414 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30414))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30414),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30414));
}
})());
}
})(),(function (){var attrs30415 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs30415))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30415),(function (){var attrs30416 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30416))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30416),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30416));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30415),(function (){var attrs30417 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30417))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30417),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30417));
}
})());
}
})(),(function (){var attrs30418 = clustermap.formats.money.fmoney.call(null,(function (){var G__30428 = self__.data;var G__30428__$1 = (((G__30428 == null))?null:(G__30428["total_turnover"]));return G__30428__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30418))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30418),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30418),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs30423 = clustermap.formats.number.fnum.call(null,(function (){var G__30429 = self__.data;var G__30429__$1 = (((G__30429 == null))?null:(G__30429["total_employee_count"]));return G__30429__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30423))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30423),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30423),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t30407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30409){var self__ = this;
var _30409__$1 = this;return self__.meta30408;
});
clustermap.components.map_report.t30407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30409,meta30408__$1){var self__ = this;
var _30409__$1 = this;return (new clustermap.components.map_report.t30407(self__.ic_count,self__.pc_count,self__.data,self__.constituency_report,meta30408__$1));
});
clustermap.components.map_report.__GT_t30407 = (function __GT_t30407(ic_count__$1,pc_count__$1,data__$1,constituency_report__$1,meta30408){return (new clustermap.components.map_report.t30407(ic_count__$1,pc_count__$1,data__$1,constituency_report__$1,meta30408));
});
}
return (new clustermap.components.map_report.t30407(ic_count,pc_count,data,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__30433 = cljs.core._EQ__EQ_;var expr__30434 = type;if(cljs.core.truth_(pred__30433.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__30434)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__30433.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__30434)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__30433.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__30434)))
{return clustermap.components.map_report.constituency_report.call(null,value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,data);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});
