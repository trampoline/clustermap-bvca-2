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
{var attrs22251 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs22251))
{return React.DOM.div(sablono.interpreter.attributes(attrs22251),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22251),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
}
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
}
});
clustermap.components.full_report.company_site_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__22252){var map__22262 = p__22252;var map__22262__$1 = ((cljs.core.seq_QMARK_(map__22262))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22262):map__22262);var opts = map__22262__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22262__$1,cljs.core.constant$keyword$303);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22262__$1,cljs.core.constant$keyword$304);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$296,site) : path_fn.call(null,cljs.core.constant$keyword$296,site));if(typeof clustermap.components.full_report.company_site_list.t22263 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t22263 = (function (company_path,link_fn,path_fn,opts,map__22262,p__22252,owner,site,portfolio_company_site,meta22264){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__22262 = map__22262;
this.p__22252 = p__22252;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta22264 = meta22264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t22263.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t22263.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t22263";
clustermap.components.full_report.company_site_list.t22263.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-site-list/t22263");
});
clustermap.components.full_report.company_site_list.t22263.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t22263.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs22266 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$296,self__.site) : self__.link_fn.call(null,cljs.core.constant$keyword$296,self__.site));if(cljs.core.map_QMARK_(attrs22266))
{return React.DOM.td(sablono.interpreter.attributes(attrs22266),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22266));
}
})(),(function (){var attrs22267 = cljs.core.constant$keyword$305.cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_(attrs22267))
{return React.DOM.td(sablono.interpreter.attributes(attrs22267),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22267));
}
})(),(function (){var attrs22268 = clustermap.components.full_report.company_site_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$297,cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22268))
{return React.DOM.td(sablono.interpreter.attributes(attrs22268),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22268));
}
})(),(function (){var attrs22269 = clustermap.components.full_report.company_site_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$298,(function (){var G__22270 = self__.site;var G__22270__$1 = (((G__22270 == null))?null:cljs.core.constant$keyword$307.cljs$core$IFn$_invoke$arity$1(G__22270));var G__22270__$2 = (((G__22270__$1 == null))?null:cljs.core.filter(((function (G__22270,G__22270__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$308.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__22270,G__22270__$1))
,G__22270__$1));return G__22270__$2;
})());if(cljs.core.map_QMARK_(attrs22269))
{return React.DOM.td(sablono.interpreter.attributes(attrs22269),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22269));
}
})());
});
clustermap.components.full_report.company_site_list.t22263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22265){var self__ = this;
var _22265__$1 = this;return self__.meta22264;
});
clustermap.components.full_report.company_site_list.t22263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22265,meta22264__$1){var self__ = this;
var _22265__$1 = this;return (new clustermap.components.full_report.company_site_list.t22263(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__22262,self__.p__22252,self__.owner,self__.site,self__.portfolio_company_site,meta22264__$1));
});
clustermap.components.full_report.company_site_list.__GT_t22263 = (function __GT_t22263(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22262__$2,p__22252__$1,owner__$1,site__$1,portfolio_company_site__$1,meta22264){return (new clustermap.components.full_report.company_site_list.t22263(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22262__$2,p__22252__$1,owner__$1,site__$1,portfolio_company_site__$1,meta22264));
});
}
return (new clustermap.components.full_report.company_site_list.t22263(company_path,link_fn,path_fn,opts,map__22262__$1,p__22252,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_site_list.t22277 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t22277 = (function (opts,owner,selection_portfolio_company_sites,company_site_list,meta22278){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_site_list = company_site_list;
this.meta22278 = meta22278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t22277.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t22277.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t22277";
clustermap.components.full_report.company_site_list.t22277.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-site-list/t22277");
});
clustermap.components.full_report.company_site_list.t22277.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t22277.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"))),(function (){var attrs22282 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.portfolio_company_site,cljs.core.constant$keyword$309.cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$289,cljs.core.constant$keyword$310,cljs.core.constant$keyword$290,self__.opts], null));if(cljs.core.map_QMARK_(attrs22282))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs22282),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs22282));
}
})())));
});
clustermap.components.full_report.company_site_list.t22277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22279){var self__ = this;
var _22279__$1 = this;return self__.meta22278;
});
clustermap.components.full_report.company_site_list.t22277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22279,meta22278__$1){var self__ = this;
var _22279__$1 = this;return (new clustermap.components.full_report.company_site_list.t22277(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_site_list,meta22278__$1));
});
clustermap.components.full_report.company_site_list.__GT_t22277 = (function __GT_t22277(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_site_list__$1,meta22278){return (new clustermap.components.full_report.company_site_list.t22277(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_site_list__$1,meta22278));
});
}
return (new clustermap.components.full_report.company_site_list.t22277(opts,owner,selection_portfolio_company_sites,company_site_list,null));
});
