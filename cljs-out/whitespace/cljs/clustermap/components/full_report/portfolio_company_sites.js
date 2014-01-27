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
clustermap.components.full_report.portfolio_company_sites.portfolio_company_site = (function portfolio_company_site(site,owner){if(typeof clustermap.components.full_report.portfolio_company_sites.t30743 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.portfolio_company_sites.t30743 = (function (owner,site,portfolio_company_site,meta30744){
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta30744 = meta30744;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.portfolio_company_sites.t30743.cljs$lang$type = true;
clustermap.components.full_report.portfolio_company_sites.t30743.cljs$lang$ctorStr = "clustermap.components.full-report.portfolio-company-sites/t30743";
clustermap.components.full_report.portfolio_company_sites.t30743.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.portfolio-company-sites/t30743");
});
clustermap.components.full_report.portfolio_company_sites.t30743.prototype.om$core$IRender$ = true;
clustermap.components.full_report.portfolio_company_sites.t30743.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs30746 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_.call(null,attrs30746))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs30746),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs30746));
}
})(),(function (){var attrs30747 = new cljs.core.Keyword(null,"postcode","postcode",1771366911).cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_.call(null,attrs30747))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs30747),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs30747));
}
})(),React.DOM.td(null,"investor"),React.DOM.td(null,"constituency"),(function (){var attrs30752 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30752))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs30752),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs30752));
}
})(),(function (){var attrs30753 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30753))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs30753),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs30753));
}
})(),(function (){var attrs30754 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30754))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs30754),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs30754));
}
})(),(function (){var attrs30755 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30755))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs30755),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs30755));
}
})());
});
clustermap.components.full_report.portfolio_company_sites.t30743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30745){var self__ = this;
var _30745__$1 = this;return self__.meta30744;
});
clustermap.components.full_report.portfolio_company_sites.t30743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30745,meta30744__$1){var self__ = this;
var _30745__$1 = this;return (new clustermap.components.full_report.portfolio_company_sites.t30743(self__.owner,self__.site,self__.portfolio_company_site,meta30744__$1));
});
clustermap.components.full_report.portfolio_company_sites.__GT_t30743 = (function __GT_t30743(owner__$1,site__$1,portfolio_company_site__$1,meta30744){return (new clustermap.components.full_report.portfolio_company_sites.t30743(owner__$1,site__$1,portfolio_company_site__$1,meta30744));
});
}
return (new clustermap.components.full_report.portfolio_company_sites.t30743(owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites = (function portfolio_company_sites(selection_portfolio_company_sites,owner){if(typeof clustermap.components.full_report.portfolio_company_sites.t30762 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.portfolio_company_sites.t30762 = (function (owner,selection_portfolio_company_sites,portfolio_company_sites,meta30763){
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.portfolio_company_sites = portfolio_company_sites;
this.meta30763 = meta30763;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.portfolio_company_sites.t30762.cljs$lang$type = true;
clustermap.components.full_report.portfolio_company_sites.t30762.cljs$lang$ctorStr = "clustermap.components.full-report.portfolio-company-sites/t30762";
clustermap.components.full_report.portfolio_company_sites.t30762.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.portfolio-company-sites/t30762");
});
clustermap.components.full_report.portfolio_company_sites.t30762.prototype.om$core$IRender$ = true;
clustermap.components.full_report.portfolio_company_sites.t30762.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div({"className": "full-report-portfolio-company-sites"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th(null,"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th(null,"Emp. change"))),(function (){var attrs30767 = om.core.build_all.call(null,clustermap.components.full_report.portfolio_company_sites.portfolio_company_site,self__.selection_portfolio_company_sites);if(cljs.core.map_QMARK_.call(null,attrs30767))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs30767),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs30767));
}
})())));
});
clustermap.components.full_report.portfolio_company_sites.t30762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30764){var self__ = this;
var _30764__$1 = this;return self__.meta30763;
});
clustermap.components.full_report.portfolio_company_sites.t30762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30764,meta30763__$1){var self__ = this;
var _30764__$1 = this;return (new clustermap.components.full_report.portfolio_company_sites.t30762(self__.owner,self__.selection_portfolio_company_sites,self__.portfolio_company_sites,meta30763__$1));
});
clustermap.components.full_report.portfolio_company_sites.__GT_t30762 = (function __GT_t30762(owner__$1,selection_portfolio_company_sites__$1,portfolio_company_sites__$1,meta30763){return (new clustermap.components.full_report.portfolio_company_sites.t30762(owner__$1,selection_portfolio_company_sites__$1,portfolio_company_sites__$1,meta30763));
});
}
return (new clustermap.components.full_report.portfolio_company_sites.t30762(owner,selection_portfolio_company_sites,portfolio_company_sites,null));
});
