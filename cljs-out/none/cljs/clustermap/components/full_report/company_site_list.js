// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.company_site_list');
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
clustermap.components.full_report.company_site_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first.call(null,objs);var next_objs = cljs.core.next.call(null,objs);if(next_objs)
{var attrs11777 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs11777))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs11777),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs11777),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
}
} else
{return link_fn.call(null,type,first_obj);
}
});
clustermap.components.full_report.company_site_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__11778){var map__11788 = p__11778;var map__11788__$1 = ((cljs.core.seq_QMARK_.call(null,map__11788))?cljs.core.apply.call(null,cljs.core.hash_map,map__11788):map__11788);var opts = map__11788__$1;var path_fn = cljs.core.get.call(null,map__11788__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__11788__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),site);if(typeof clustermap.components.full_report.company_site_list.t11789 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t11789 = (function (company_path,link_fn,path_fn,opts,map__11788,p__11778,owner,site,portfolio_company_site,meta11790){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__11788 = map__11788;
this.p__11778 = p__11778;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta11790 = meta11790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t11789.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t11789.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t11789";
clustermap.components.full_report.company_site_list.t11789.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-site-list/t11789");
});
clustermap.components.full_report.company_site_list.t11789.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t11789.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs11792 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.site);if(cljs.core.map_QMARK_.call(null,attrs11792))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11792),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11792));
}
})(),(function (){var attrs11793 = new cljs.core.Keyword(null,"postcode","postcode",1771366911).cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_.call(null,attrs11793))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11793),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11793));
}
})(),(function (){var attrs11794 = clustermap.components.full_report.company_site_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs11794))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11794),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11794));
}
})(),(function (){var attrs11795 = clustermap.components.full_report.company_site_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__11796 = self__.site;var G__11796__$1 = (((G__11796 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__11796));var G__11796__$2 = (((G__11796__$1 == null))?null:cljs.core.filter.call(null,((function (G__11796,G__11796__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__11796,G__11796__$1))
,G__11796__$1));return G__11796__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11795))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11795),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11795));
}
})());
});
clustermap.components.full_report.company_site_list.t11789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11791){var self__ = this;
var _11791__$1 = this;return self__.meta11790;
});
clustermap.components.full_report.company_site_list.t11789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11791,meta11790__$1){var self__ = this;
var _11791__$1 = this;return (new clustermap.components.full_report.company_site_list.t11789(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__11788,self__.p__11778,self__.owner,self__.site,self__.portfolio_company_site,meta11790__$1));
});
clustermap.components.full_report.company_site_list.__GT_t11789 = (function __GT_t11789(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__11788__$2,p__11778__$1,owner__$1,site__$1,portfolio_company_site__$1,meta11790){return (new clustermap.components.full_report.company_site_list.t11789(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__11788__$2,p__11778__$1,owner__$1,site__$1,portfolio_company_site__$1,meta11790));
});
}
return (new clustermap.components.full_report.company_site_list.t11789(company_path,link_fn,path_fn,opts,map__11788__$1,p__11778,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_site_list.t11803 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t11803 = (function (opts,owner,selection_portfolio_company_sites,company_site_list,meta11804){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_site_list = company_site_list;
this.meta11804 = meta11804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t11803.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t11803.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t11803";
clustermap.components.full_report.company_site_list.t11803.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-site-list/t11803");
});
clustermap.components.full_report.company_site_list.t11803.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t11803.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"))),(function (){var attrs11808 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.portfolio_company_site,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"portfolio_company_site_uid","portfolio_company_site_uid",3220116067),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs11808))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs11808),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs11808));
}
})())));
});
clustermap.components.full_report.company_site_list.t11803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11805){var self__ = this;
var _11805__$1 = this;return self__.meta11804;
});
clustermap.components.full_report.company_site_list.t11803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11805,meta11804__$1){var self__ = this;
var _11805__$1 = this;return (new clustermap.components.full_report.company_site_list.t11803(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_site_list,meta11804__$1));
});
clustermap.components.full_report.company_site_list.__GT_t11803 = (function __GT_t11803(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_site_list__$1,meta11804){return (new clustermap.components.full_report.company_site_list.t11803(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_site_list__$1,meta11804));
});
}
return (new clustermap.components.full_report.company_site_list.t11803(opts,owner,selection_portfolio_company_sites,company_site_list,null));
});

//# sourceMappingURL=company_site_list.js.map