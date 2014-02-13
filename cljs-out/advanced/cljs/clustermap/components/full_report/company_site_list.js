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
clustermap.components.full_report.company_site_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs21839 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs21839))
{return React.DOM.div(sablono.interpreter.attributes(attrs21839),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs21839),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
}
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
}
});
clustermap.components.full_report.company_site_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__21840){var map__21850 = p__21840;var map__21850__$1 = ((cljs.core.seq_QMARK_(map__21850))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21850):map__21850);var opts = map__21850__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21850__$1,cljs.core.constant$keyword$290);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21850__$1,cljs.core.constant$keyword$291);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$284,site) : path_fn.call(null,cljs.core.constant$keyword$284,site));if(typeof clustermap.components.full_report.company_site_list.t21851 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t21851 = (function (company_path,link_fn,path_fn,opts,map__21850,p__21840,owner,site,portfolio_company_site,meta21852){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__21850 = map__21850;
this.p__21840 = p__21840;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta21852 = meta21852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t21851.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t21851.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t21851";
clustermap.components.full_report.company_site_list.t21851.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-site-list/t21851");
});
clustermap.components.full_report.company_site_list.t21851.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t21851.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs21854 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$284,self__.site) : self__.link_fn.call(null,cljs.core.constant$keyword$284,self__.site));if(cljs.core.map_QMARK_(attrs21854))
{return React.DOM.td(sablono.interpreter.attributes(attrs21854),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21854));
}
})(),(function (){var attrs21855 = cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_(attrs21855))
{return React.DOM.td(sablono.interpreter.attributes(attrs21855),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21855));
}
})(),(function (){var attrs21856 = clustermap.components.full_report.company_site_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$285,cljs.core.constant$keyword$293.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs21856))
{return React.DOM.td(sablono.interpreter.attributes(attrs21856),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21856));
}
})(),(function (){var attrs21857 = clustermap.components.full_report.company_site_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$286,(function (){var G__21858 = self__.site;var G__21858__$1 = (((G__21858 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21858));var G__21858__$2 = (((G__21858__$1 == null))?null:cljs.core.filter(((function (G__21858,G__21858__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__21858,G__21858__$1))
,G__21858__$1));return G__21858__$2;
})());if(cljs.core.map_QMARK_(attrs21857))
{return React.DOM.td(sablono.interpreter.attributes(attrs21857),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21857));
}
})());
});
clustermap.components.full_report.company_site_list.t21851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21853){var self__ = this;
var _21853__$1 = this;return self__.meta21852;
});
clustermap.components.full_report.company_site_list.t21851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21853,meta21852__$1){var self__ = this;
var _21853__$1 = this;return (new clustermap.components.full_report.company_site_list.t21851(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__21850,self__.p__21840,self__.owner,self__.site,self__.portfolio_company_site,meta21852__$1));
});
clustermap.components.full_report.company_site_list.__GT_t21851 = (function __GT_t21851(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__21850__$2,p__21840__$1,owner__$1,site__$1,portfolio_company_site__$1,meta21852){return (new clustermap.components.full_report.company_site_list.t21851(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__21850__$2,p__21840__$1,owner__$1,site__$1,portfolio_company_site__$1,meta21852));
});
}
return (new clustermap.components.full_report.company_site_list.t21851(company_path,link_fn,path_fn,opts,map__21850__$1,p__21840,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_site_list.t21865 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t21865 = (function (opts,owner,selection_portfolio_company_sites,company_site_list,meta21866){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_site_list = company_site_list;
this.meta21866 = meta21866;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t21865.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t21865.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t21865";
clustermap.components.full_report.company_site_list.t21865.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-site-list/t21865");
});
clustermap.components.full_report.company_site_list.t21865.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t21865.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"))),(function (){var attrs21870 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.portfolio_company_site,cljs.core.constant$keyword$296.cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$277,cljs.core.constant$keyword$297,cljs.core.constant$keyword$278,self__.opts], null));if(cljs.core.map_QMARK_(attrs21870))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs21870),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs21870));
}
})())));
});
clustermap.components.full_report.company_site_list.t21865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21867){var self__ = this;
var _21867__$1 = this;return self__.meta21866;
});
clustermap.components.full_report.company_site_list.t21865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21867,meta21866__$1){var self__ = this;
var _21867__$1 = this;return (new clustermap.components.full_report.company_site_list.t21865(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_site_list,meta21866__$1));
});
clustermap.components.full_report.company_site_list.__GT_t21865 = (function __GT_t21865(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_site_list__$1,meta21866){return (new clustermap.components.full_report.company_site_list.t21865(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_site_list__$1,meta21866));
});
}
return (new clustermap.components.full_report.company_site_list.t21865(opts,owner,selection_portfolio_company_sites,company_site_list,null));
});
