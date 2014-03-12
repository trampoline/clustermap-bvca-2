// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('cljs.core.async');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.components.reset_selection_button');
goog.require('domina.events');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.components.reset_selection_button');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__45306 = site_stats;var G__45306__$1 = (((G__45306 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__45306));return G__45306__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__45307 = site_stats;var G__45307__$1 = (((G__45307 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__45307));return G__45307__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__45308 = site_stats;var G__45308__$1 = (((G__45308 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__45308));return G__45308__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__45340 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45340__$1 = ((cljs.core.seq_QMARK_.call(null,map__45340))?cljs.core.apply.call(null,cljs.core.hash_map,map__45340):map__45340);var const_count = cljs.core.get.call(null,map__45340__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45340__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45340__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45341 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45341 = (function (pc_count,ic_count,const_count,map__45340,comm,site_stats,all_portfolio_companies_summary_report,meta45342){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45340 = map__45340;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta45342 = meta45342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45341.cljs$lang$type = true;
clustermap.components.map_report.t45341.cljs$lang$ctorStr = "clustermap.components.map-report/t45341";
clustermap.components.map_report.t45341.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45341");
});
clustermap.components.map_report.t45341.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45341.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs45346 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45346))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45346),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45346),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs45351 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45351))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45351),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45351),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs45356 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45356))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45356),(function (){var attrs45357 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45357))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45357),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45357));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45356),(function (){var attrs45358 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45358))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45358),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45358));
}
})());
}
})(),(function (){var attrs45359 = clustermap.formats.money.fmoney.call(null,(function (){var G__45369 = self__.site_stats;var G__45369__$1 = (((G__45369 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45369));var G__45369__$2 = (((G__45369__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45369__$1));return G__45369__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45359))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45359),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45359),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs45364 = clustermap.formats.number.fnum.call(null,(function (){var G__45370 = self__.site_stats;var G__45370__$1 = (((G__45370 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45370));var G__45370__$2 = (((G__45370__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45370__$1));return G__45370__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45364))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45364),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45364),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45343){var self__ = this;
var _45343__$1 = this;return self__.meta45342;
});
clustermap.components.map_report.t45341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45343,meta45342__$1){var self__ = this;
var _45343__$1 = this;return (new clustermap.components.map_report.t45341(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45340,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta45342__$1));
});
clustermap.components.map_report.__GT_t45341 = (function __GT_t45341(pc_count__$1,ic_count__$1,const_count__$1,map__45340__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta45342){return (new clustermap.components.map_report.t45341(pc_count__$1,ic_count__$1,const_count__$1,map__45340__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta45342));
});
}
return (new clustermap.components.map_report.t45341(pc_count,ic_count,const_count,map__45340__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__45396 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45396__$1 = ((cljs.core.seq_QMARK_.call(null,map__45396))?cljs.core.apply.call(null,cljs.core.hash_map,map__45396):map__45396);var const_count = cljs.core.get.call(null,map__45396__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45396__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45396__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45397 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45397 = (function (pc_count,ic_count,const_count,map__45396,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta45398){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45396 = map__45396;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta45398 = meta45398;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45397.cljs$lang$type = true;
clustermap.components.map_report.t45397.cljs$lang$ctorStr = "clustermap.components.map-report/t45397";
clustermap.components.map_report.t45397.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45397");
});
clustermap.components.map_report.t45397.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45397.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs45402 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs45402))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45402),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45402));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45403 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs45403))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45403),(function (){var attrs45404 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45404))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45404),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45404));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45403),(function (){var attrs45405 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45405))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45405),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45405));
}
})());
}
})(),(function (){var attrs45406 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs45406))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45406),(function (){var attrs45407 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45407))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45407),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45407));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45406),(function (){var attrs45408 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45408))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45408),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45408));
}
})());
}
})(),(function (){var attrs45409 = clustermap.formats.money.fmoney.call(null,(function (){var G__45419 = self__.site_stats;var G__45419__$1 = (((G__45419 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45419));var G__45419__$2 = (((G__45419__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45419__$1));return G__45419__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45409))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45409),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45409),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs45414 = clustermap.formats.number.fnum.call(null,(function (){var G__45420 = self__.site_stats;var G__45420__$1 = (((G__45420 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45420));var G__45420__$2 = (((G__45420__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45420__$1));return G__45420__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45414))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45414),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45414),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45399){var self__ = this;
var _45399__$1 = this;return self__.meta45398;
});
clustermap.components.map_report.t45397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45399,meta45398__$1){var self__ = this;
var _45399__$1 = this;return (new clustermap.components.map_report.t45397(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45396,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta45398__$1));
});
clustermap.components.map_report.__GT_t45397 = (function __GT_t45397(pc_count__$1,ic_count__$1,const_count__$1,map__45396__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta45398){return (new clustermap.components.map_report.t45397(pc_count__$1,ic_count__$1,const_count__$1,map__45396__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta45398));
});
}
return (new clustermap.components.map_report.t45397(pc_count,ic_count,const_count,map__45396__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__45446 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45446__$1 = ((cljs.core.seq_QMARK_.call(null,map__45446))?cljs.core.apply.call(null,cljs.core.hash_map,map__45446):map__45446);var const_count = cljs.core.get.call(null,map__45446__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45446__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45446__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45447 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45447 = (function (pc_count,ic_count,const_count,map__45446,path_fn,comm,site_stats,investor_company,investor_company_report,meta45448){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45446 = map__45446;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta45448 = meta45448;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45447.cljs$lang$type = true;
clustermap.components.map_report.t45447.cljs$lang$ctorStr = "clustermap.components.map-report/t45447";
clustermap.components.map_report.t45447.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45447");
});
clustermap.components.map_report.t45447.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45447.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs45452 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs45452))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45452),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45452));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45453 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs45453))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45453),(function (){var attrs45454 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs45454))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45454),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45454));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45453),(function (){var attrs45455 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs45455))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45455),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45455));
}
})());
}
})(),(function (){var attrs45456 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs45456))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45456),(function (){var attrs45457 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45457))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45457),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45457));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45456),(function (){var attrs45458 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45458))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45458),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45458));
}
})());
}
})(),(function (){var attrs45459 = clustermap.formats.money.fmoney.call(null,(function (){var G__45469 = self__.site_stats;var G__45469__$1 = (((G__45469 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45469));var G__45469__$2 = (((G__45469__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45469__$1));return G__45469__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45459))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45459),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45459),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs45464 = clustermap.formats.number.fnum.call(null,(function (){var G__45470 = self__.site_stats;var G__45470__$1 = (((G__45470 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45470));var G__45470__$2 = (((G__45470__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45470__$1));return G__45470__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45464))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45464),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45464),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45449){var self__ = this;
var _45449__$1 = this;return self__.meta45448;
});
clustermap.components.map_report.t45447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45449,meta45448__$1){var self__ = this;
var _45449__$1 = this;return (new clustermap.components.map_report.t45447(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45446,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta45448__$1));
});
clustermap.components.map_report.__GT_t45447 = (function __GT_t45447(pc_count__$1,ic_count__$1,const_count__$1,map__45446__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta45448){return (new clustermap.components.map_report.t45447(pc_count__$1,ic_count__$1,const_count__$1,map__45446__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta45448));
});
}
return (new clustermap.components.map_report.t45447(pc_count,ic_count,const_count,map__45446__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__45500 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45500__$1 = ((cljs.core.seq_QMARK_.call(null,map__45500))?cljs.core.apply.call(null,cljs.core.hash_map,map__45500):map__45500);var const_count = cljs.core.get.call(null,map__45500__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45500__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45500__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45501 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45501 = (function (pc_count,ic_count,const_count,map__45500,path_fn,comm,site_stats,constituency,constituency_report,meta45502){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45500 = map__45500;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta45502 = meta45502;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45501.cljs$lang$type = true;
clustermap.components.map_report.t45501.cljs$lang$ctorStr = "clustermap.components.map-report/t45501";
clustermap.components.map_report.t45501.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45501");
});
clustermap.components.map_report.t45501.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45501.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs45506 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs45506))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45506),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45506),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45511 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs45511))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45511),(function (){var attrs45512 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs45512))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45512),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45512));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45511),(function (){var attrs45513 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs45513))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45513),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45513));
}
})());
}
})(),(function (){var attrs45514 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs45514))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45514),(function (){var attrs45515 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45515))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45515),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45515));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45514),(function (){var attrs45516 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45516))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45516),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45516));
}
})());
}
})(),(function (){var attrs45517 = clustermap.formats.money.fmoney.call(null,(function (){var G__45527 = self__.site_stats;var G__45527__$1 = (((G__45527 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45527));var G__45527__$2 = (((G__45527__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45527__$1));return G__45527__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45517))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45517),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45517),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs45522 = clustermap.formats.number.fnum.call(null,(function (){var G__45528 = self__.site_stats;var G__45528__$1 = (((G__45528 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45528));var G__45528__$2 = (((G__45528__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45528__$1));return G__45528__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45522))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45522),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45522),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45503){var self__ = this;
var _45503__$1 = this;return self__.meta45502;
});
clustermap.components.map_report.t45501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45503,meta45502__$1){var self__ = this;
var _45503__$1 = this;return (new clustermap.components.map_report.t45501(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45500,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta45502__$1));
});
clustermap.components.map_report.__GT_t45501 = (function __GT_t45501(pc_count__$1,ic_count__$1,const_count__$1,map__45500__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta45502){return (new clustermap.components.map_report.t45501(pc_count__$1,ic_count__$1,const_count__$1,map__45500__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta45502));
});
}
return (new clustermap.components.map_report.t45501(pc_count,ic_count,const_count,map__45500__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__45533 = om.core.get_shared.call(null,owner);var map__45533__$1 = ((cljs.core.seq_QMARK_.call(null,map__45533))?cljs.core.apply.call(null,cljs.core.hash_map,map__45533):map__45533);var path_fn = cljs.core.get.call(null,map__45533__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45533__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__45534 = cljs.core._EQ__EQ_;var expr__45535 = type;if(cljs.core.truth_(pred__45534.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__45535)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__45534.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__45535)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__45534.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__45535)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
