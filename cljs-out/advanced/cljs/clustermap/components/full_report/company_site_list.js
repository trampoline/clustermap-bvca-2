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
{var attrs11746 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs11746))
{return React.DOM.div(sablono.interpreter.attributes(attrs11746),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs11746),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
}
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
}
});
clustermap.components.full_report.company_site_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__11747){var map__11757 = p__11747;var map__11757__$1 = ((cljs.core.seq_QMARK_(map__11757))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11757):map__11757);var opts = map__11757__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11757__$1,cljs.core.constant$keyword$83);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11757__$1,cljs.core.constant$keyword$84);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$77,site) : path_fn.call(null,cljs.core.constant$keyword$77,site));if(typeof clustermap.components.full_report.company_site_list.t11758 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t11758 = (function (company_path,link_fn,path_fn,opts,map__11757,p__11747,owner,site,portfolio_company_site,meta11759){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__11757 = map__11757;
this.p__11747 = p__11747;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta11759 = meta11759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t11758.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t11758.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t11758";
clustermap.components.full_report.company_site_list.t11758.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-site-list/t11758");
});
clustermap.components.full_report.company_site_list.t11758.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t11758.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs11761 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$77,self__.site) : self__.link_fn.call(null,cljs.core.constant$keyword$77,self__.site));if(cljs.core.map_QMARK_(attrs11761))
{return React.DOM.td(sablono.interpreter.attributes(attrs11761),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs11761));
}
})(),(function (){var attrs11762 = cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_(attrs11762))
{return React.DOM.td(sablono.interpreter.attributes(attrs11762),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs11762));
}
})(),(function (){var attrs11763 = clustermap.components.full_report.company_site_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$78,cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs11763))
{return React.DOM.td(sablono.interpreter.attributes(attrs11763),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs11763));
}
})(),(function (){var attrs11764 = clustermap.components.full_report.company_site_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$79,(function (){var G__11765 = self__.site;var G__11765__$1 = (((G__11765 == null))?null:cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(G__11765));var G__11765__$2 = (((G__11765__$1 == null))?null:cljs.core.filter(((function (G__11765,G__11765__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__11765,G__11765__$1))
,G__11765__$1));return G__11765__$2;
})());if(cljs.core.map_QMARK_(attrs11764))
{return React.DOM.td(sablono.interpreter.attributes(attrs11764),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs11764));
}
})());
});
clustermap.components.full_report.company_site_list.t11758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11760){var self__ = this;
var _11760__$1 = this;return self__.meta11759;
});
clustermap.components.full_report.company_site_list.t11758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11760,meta11759__$1){var self__ = this;
var _11760__$1 = this;return (new clustermap.components.full_report.company_site_list.t11758(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__11757,self__.p__11747,self__.owner,self__.site,self__.portfolio_company_site,meta11759__$1));
});
clustermap.components.full_report.company_site_list.__GT_t11758 = (function __GT_t11758(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__11757__$2,p__11747__$1,owner__$1,site__$1,portfolio_company_site__$1,meta11759){return (new clustermap.components.full_report.company_site_list.t11758(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__11757__$2,p__11747__$1,owner__$1,site__$1,portfolio_company_site__$1,meta11759));
});
}
return (new clustermap.components.full_report.company_site_list.t11758(company_path,link_fn,path_fn,opts,map__11757__$1,p__11747,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_site_list.t11772 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t11772 = (function (opts,owner,selection_portfolio_company_sites,company_site_list,meta11773){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_site_list = company_site_list;
this.meta11773 = meta11773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t11772.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t11772.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t11772";
clustermap.components.full_report.company_site_list.t11772.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-site-list/t11772");
});
clustermap.components.full_report.company_site_list.t11772.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t11772.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"))),(function (){var attrs11777 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.portfolio_company_site,cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$70,cljs.core.constant$keyword$90,cljs.core.constant$keyword$71,self__.opts], null));if(cljs.core.map_QMARK_(attrs11777))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs11777),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs11777));
}
})())));
});
clustermap.components.full_report.company_site_list.t11772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11774){var self__ = this;
var _11774__$1 = this;return self__.meta11773;
});
clustermap.components.full_report.company_site_list.t11772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11774,meta11773__$1){var self__ = this;
var _11774__$1 = this;return (new clustermap.components.full_report.company_site_list.t11772(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_site_list,meta11773__$1));
});
clustermap.components.full_report.company_site_list.__GT_t11772 = (function __GT_t11772(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_site_list__$1,meta11773){return (new clustermap.components.full_report.company_site_list.t11772(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_site_list__$1,meta11773));
});
}
return (new clustermap.components.full_report.company_site_list.t11772(opts,owner,selection_portfolio_company_sites,company_site_list,null));
});
