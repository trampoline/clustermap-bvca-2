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
{var attrs11577 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs11577))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs11577),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs11577),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
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
clustermap.components.full_report.company_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__11586){var map__11601 = p__11586;var map__11601__$1 = ((cljs.core.seq_QMARK_.call(null,map__11601))?cljs.core.apply.call(null,cljs.core.hash_map,map__11601):map__11601);var opts = map__11601__$1;var path_fn = cljs.core.get.call(null,map__11601__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__11601__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),site);if(typeof clustermap.components.full_report.company_list.t11602 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t11602 = (function (company_path,link_fn,path_fn,opts,map__11601,p__11586,owner,site,portfolio_company_site,meta11603){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__11601 = map__11601;
this.p__11586 = p__11586;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta11603 = meta11603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t11602.cljs$lang$type = true;
clustermap.components.full_report.company_list.t11602.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t11602";
clustermap.components.full_report.company_list.t11602.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t11602");
});
clustermap.components.full_report.company_list.t11602.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t11602.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs11605 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.site);if(cljs.core.map_QMARK_.call(null,attrs11605))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11605),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11605));
}
})(),(function (){var attrs11606 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs11606))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11606),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11606));
}
})(),(function (){var attrs11607 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__11614 = self__.site;var G__11614__$1 = (((G__11614 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__11614));var G__11614__$2 = (((G__11614__$1 == null))?null:cljs.core.filter.call(null,((function (G__11614,G__11614__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__11614,G__11614__$1))
,G__11614__$1));return G__11614__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11607))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11607),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11607));
}
})(),(function (){var attrs11608 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11608))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11608),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11608),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs11609 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs11609))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11609),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11609));
}
})(),(function (){var attrs11610 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11610))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11610),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11610));
}
})(),(function (){var attrs11611 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11611))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11611),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11611),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs11612 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs11612))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11612),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11612));
}
})(),(function (){var attrs11613 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11613))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11613),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11613));
}
})());
});
clustermap.components.full_report.company_list.t11602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11604){var self__ = this;
var _11604__$1 = this;return self__.meta11603;
});
clustermap.components.full_report.company_list.t11602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11604,meta11603__$1){var self__ = this;
var _11604__$1 = this;return (new clustermap.components.full_report.company_list.t11602(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__11601,self__.p__11586,self__.owner,self__.site,self__.portfolio_company_site,meta11603__$1));
});
clustermap.components.full_report.company_list.__GT_t11602 = (function __GT_t11602(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__11601__$2,p__11586__$1,owner__$1,site__$1,portfolio_company_site__$1,meta11603){return (new clustermap.components.full_report.company_list.t11602(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__11601__$2,p__11586__$1,owner__$1,site__$1,portfolio_company_site__$1,meta11603));
});
}
return (new clustermap.components.full_report.company_list.t11602(company_path,link_fn,path_fn,opts,map__11601__$1,p__11586,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_list.t11621 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t11621 = (function (opts,owner,selection_portfolio_company_sites,company_list,meta11622){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_list = company_list;
this.meta11622 = meta11622;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t11621.cljs$lang$type = true;
clustermap.components.full_report.company_list.t11621.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t11621";
clustermap.components.full_report.company_list.t11621.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t11621");
});
clustermap.components.full_report.company_list.t11621.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t11621.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs11626 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company_site,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"portfolio_company_id","portfolio_company_id",771436262),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs11626))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs11626),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs11626));
}
})())));
});
clustermap.components.full_report.company_list.t11621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11623){var self__ = this;
var _11623__$1 = this;return self__.meta11622;
});
clustermap.components.full_report.company_list.t11621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11623,meta11622__$1){var self__ = this;
var _11623__$1 = this;return (new clustermap.components.full_report.company_list.t11621(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_list,meta11622__$1));
});
clustermap.components.full_report.company_list.__GT_t11621 = (function __GT_t11621(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta11622){return (new clustermap.components.full_report.company_list.t11621(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta11622));
});
}
return (new clustermap.components.full_report.company_list.t11621(opts,owner,selection_portfolio_company_sites,company_list,null));
});

//# sourceMappingURL=company_list.js.map