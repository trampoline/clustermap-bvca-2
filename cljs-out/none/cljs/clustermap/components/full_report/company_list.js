// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.company_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first.call(null,objs);var next_objs = cljs.core.next.call(null,objs);if(next_objs)
{var attrs11746 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs11746))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs11746),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs11746),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
}
} else
{return link_fn.call(null,type,first_obj);
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > 0))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < 0))
{return React.DOM.i({"className": "icon-negative"});
} else
{if(true)
{return null;
} else
{return null;
}
}
}
}
});
clustermap.components.full_report.company_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__11755){var map__11771 = p__11755;var map__11771__$1 = ((cljs.core.seq_QMARK_.call(null,map__11771))?cljs.core.apply.call(null,cljs.core.hash_map,map__11771):map__11771);var opts = map__11771__$1;var path_fn = cljs.core.get.call(null,map__11771__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__11771__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),site);if(typeof clustermap.components.full_report.company_list.t11772 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t11772 = (function (company_path,link_fn,path_fn,opts,map__11771,p__11755,owner,site,portfolio_company_site,meta11773){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__11771 = map__11771;
this.p__11755 = p__11755;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta11773 = meta11773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t11772.cljs$lang$type = true;
clustermap.components.full_report.company_list.t11772.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t11772";
clustermap.components.full_report.company_list.t11772.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t11772");
});
clustermap.components.full_report.company_list.t11772.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t11772.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs11775 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.site);if(cljs.core.map_QMARK_.call(null,attrs11775))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11775),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11775));
}
})(),(function (){var attrs11776 = new cljs.core.Keyword(null,"postcode","postcode",1771366911).cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_.call(null,attrs11776))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11776),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11776));
}
})(),(function (){var attrs11777 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs11777))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11777),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11777));
}
})(),(function (){var attrs11778 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__11785 = self__.site;var G__11785__$1 = (((G__11785 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__11785));var G__11785__$2 = (((G__11785__$1 == null))?null:cljs.core.filter.call(null,((function (G__11785,G__11785__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__11785,G__11785__$1))
,G__11785__$1));return G__11785__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11778))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11778),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11778));
}
})(),(function (){var attrs11779 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11779))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11779),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11779),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs11780 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs11780))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11780),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11780));
}
})(),(function (){var attrs11781 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11781))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11781),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11781));
}
})(),(function (){var attrs11782 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11782))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11782),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11782),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs11783 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs11783))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11783),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11783));
}
})(),(function (){var attrs11784 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11784))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11784),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11784));
}
})());
});
clustermap.components.full_report.company_list.t11772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11774){var self__ = this;
var _11774__$1 = this;return self__.meta11773;
});
clustermap.components.full_report.company_list.t11772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11774,meta11773__$1){var self__ = this;
var _11774__$1 = this;return (new clustermap.components.full_report.company_list.t11772(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__11771,self__.p__11755,self__.owner,self__.site,self__.portfolio_company_site,meta11773__$1));
});
clustermap.components.full_report.company_list.__GT_t11772 = (function __GT_t11772(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__11771__$2,p__11755__$1,owner__$1,site__$1,portfolio_company_site__$1,meta11773){return (new clustermap.components.full_report.company_list.t11772(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__11771__$2,p__11755__$1,owner__$1,site__$1,portfolio_company_site__$1,meta11773));
});
}
return (new clustermap.components.full_report.company_list.t11772(company_path,link_fn,path_fn,opts,map__11771__$1,p__11755,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_list.t11792 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t11792 = (function (opts,owner,selection_portfolio_company_sites,company_list,meta11793){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_list = company_list;
this.meta11793 = meta11793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t11792.cljs$lang$type = true;
clustermap.components.full_report.company_list.t11792.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t11792";
clustermap.components.full_report.company_list.t11792.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t11792");
});
clustermap.components.full_report.company_list.t11792.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t11792.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs11797 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company_site,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"portfolio_company_site_uid","portfolio_company_site_uid",3220116067),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs11797))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs11797),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs11797));
}
})())));
});
clustermap.components.full_report.company_list.t11792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11794){var self__ = this;
var _11794__$1 = this;return self__.meta11793;
});
clustermap.components.full_report.company_list.t11792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11794,meta11793__$1){var self__ = this;
var _11794__$1 = this;return (new clustermap.components.full_report.company_list.t11792(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_list,meta11793__$1));
});
clustermap.components.full_report.company_list.__GT_t11792 = (function __GT_t11792(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta11793){return (new clustermap.components.full_report.company_list.t11792(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta11793));
});
}
return (new clustermap.components.full_report.company_list.t11792(opts,owner,selection_portfolio_company_sites,company_list,null));
});

//# sourceMappingURL=company_list.js.map