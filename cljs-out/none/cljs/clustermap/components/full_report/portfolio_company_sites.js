// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.portfolio_company_sites');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.portfolio_company_sites.portfolio_company_site = (function portfolio_company_site(site,owner){if(typeof clustermap.components.full_report.portfolio_company_sites.t11165 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.portfolio_company_sites.t11165 = (function (owner,site,portfolio_company_site,meta11166){
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta11166 = meta11166;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.portfolio_company_sites.t11165.cljs$lang$type = true;
clustermap.components.full_report.portfolio_company_sites.t11165.cljs$lang$ctorStr = "clustermap.components.full-report.portfolio-company-sites/t11165";
clustermap.components.full_report.portfolio_company_sites.t11165.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.portfolio-company-sites/t11165");
});
clustermap.components.full_report.portfolio_company_sites.t11165.prototype.om$core$IRender$ = true;
clustermap.components.full_report.portfolio_company_sites.t11165.prototype.om$core$IRender$render$arity$1 = (function (this__9158__auto__){var self__ = this;
var this__9158__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs11168 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_.call(null,attrs11168))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11168),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11168));
}
})(),(function (){var attrs11169 = new cljs.core.Keyword(null,"postcode","postcode",1771366911).cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_.call(null,attrs11169))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11169),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11169));
}
})(),React.DOM.td(null,"investor"),React.DOM.td(null,"constituency"),(function (){var attrs11174 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11174))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11174),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11174));
}
})(),(function (){var attrs11175 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11175))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11175),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11175));
}
})(),(function (){var attrs11176 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11176))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11176),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11176));
}
})(),(function (){var attrs11177 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11177))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11177),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11177));
}
})());
});
clustermap.components.full_report.portfolio_company_sites.t11165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11167){var self__ = this;
var _11167__$1 = this;return self__.meta11166;
});
clustermap.components.full_report.portfolio_company_sites.t11165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11167,meta11166__$1){var self__ = this;
var _11167__$1 = this;return (new clustermap.components.full_report.portfolio_company_sites.t11165(self__.owner,self__.site,self__.portfolio_company_site,meta11166__$1));
});
clustermap.components.full_report.portfolio_company_sites.__GT_t11165 = (function __GT_t11165(owner__$1,site__$1,portfolio_company_site__$1,meta11166){return (new clustermap.components.full_report.portfolio_company_sites.t11165(owner__$1,site__$1,portfolio_company_site__$1,meta11166));
});
}
return (new clustermap.components.full_report.portfolio_company_sites.t11165(owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites = (function portfolio_company_sites(selection_portfolio_company_sites,owner){if(typeof clustermap.components.full_report.portfolio_company_sites.t11184 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.portfolio_company_sites.t11184 = (function (owner,selection_portfolio_company_sites,portfolio_company_sites,meta11185){
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.portfolio_company_sites = portfolio_company_sites;
this.meta11185 = meta11185;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.portfolio_company_sites.t11184.cljs$lang$type = true;
clustermap.components.full_report.portfolio_company_sites.t11184.cljs$lang$ctorStr = "clustermap.components.full-report.portfolio-company-sites/t11184";
clustermap.components.full_report.portfolio_company_sites.t11184.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.portfolio-company-sites/t11184");
});
clustermap.components.full_report.portfolio_company_sites.t11184.prototype.om$core$IRender$ = true;
clustermap.components.full_report.portfolio_company_sites.t11184.prototype.om$core$IRender$render$arity$1 = (function (this__9158__auto__){var self__ = this;
var this__9158__auto____$1 = this;return React.DOM.div({"className": "full-report-portfolio-company-sites"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th(null,"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th(null,"Emp. change"))),(function (){var attrs11189 = om.core.build_all.call(null,clustermap.components.full_report.portfolio_company_sites.portfolio_company_site,self__.selection_portfolio_company_sites);if(cljs.core.map_QMARK_.call(null,attrs11189))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs11189),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs11189));
}
})())));
});
clustermap.components.full_report.portfolio_company_sites.t11184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11186){var self__ = this;
var _11186__$1 = this;return self__.meta11185;
});
clustermap.components.full_report.portfolio_company_sites.t11184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11186,meta11185__$1){var self__ = this;
var _11186__$1 = this;return (new clustermap.components.full_report.portfolio_company_sites.t11184(self__.owner,self__.selection_portfolio_company_sites,self__.portfolio_company_sites,meta11185__$1));
});
clustermap.components.full_report.portfolio_company_sites.__GT_t11184 = (function __GT_t11184(owner__$1,selection_portfolio_company_sites__$1,portfolio_company_sites__$1,meta11185){return (new clustermap.components.full_report.portfolio_company_sites.t11184(owner__$1,selection_portfolio_company_sites__$1,portfolio_company_sites__$1,meta11185));
});
}
return (new clustermap.components.full_report.portfolio_company_sites.t11184(owner,selection_portfolio_company_sites,portfolio_company_sites,null));
});

//# sourceMappingURL=portfolio_company_sites.js.map