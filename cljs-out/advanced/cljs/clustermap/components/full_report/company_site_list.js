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
{var attrs22379 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs22379))
{return React.DOM.div(sablono.interpreter.attributes(attrs22379),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22379),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
}
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
}
});
clustermap.components.full_report.company_site_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__22380){var map__22390 = p__22380;var map__22390__$1 = ((cljs.core.seq_QMARK_(map__22390))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22390):map__22390);var opts = map__22390__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22390__$1,cljs.core.constant$keyword$309);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22390__$1,cljs.core.constant$keyword$310);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$302,site) : path_fn.call(null,cljs.core.constant$keyword$302,site));if(typeof clustermap.components.full_report.company_site_list.t22391 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t22391 = (function (company_path,link_fn,path_fn,opts,map__22390,p__22380,owner,site,portfolio_company_site,meta22392){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__22390 = map__22390;
this.p__22380 = p__22380;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta22392 = meta22392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t22391.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t22391.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t22391";
clustermap.components.full_report.company_site_list.t22391.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-site-list/t22391");
});
clustermap.components.full_report.company_site_list.t22391.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t22391.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs22394 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$302,self__.site) : self__.link_fn.call(null,cljs.core.constant$keyword$302,self__.site));if(cljs.core.map_QMARK_(attrs22394))
{return React.DOM.td(sablono.interpreter.attributes(attrs22394),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22394));
}
})(),(function (){var attrs22395 = cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_(attrs22395))
{return React.DOM.td(sablono.interpreter.attributes(attrs22395),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22395));
}
})(),(function (){var attrs22396 = clustermap.components.full_report.company_site_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$303,cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22396))
{return React.DOM.td(sablono.interpreter.attributes(attrs22396),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22396));
}
})(),(function (){var attrs22397 = clustermap.components.full_report.company_site_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$304,(function (){var G__22398 = self__.site;var G__22398__$1 = (((G__22398 == null))?null:cljs.core.constant$keyword$313.cljs$core$IFn$_invoke$arity$1(G__22398));var G__22398__$2 = (((G__22398__$1 == null))?null:cljs.core.filter(((function (G__22398,G__22398__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__22398,G__22398__$1))
,G__22398__$1));return G__22398__$2;
})());if(cljs.core.map_QMARK_(attrs22397))
{return React.DOM.td(sablono.interpreter.attributes(attrs22397),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22397));
}
})());
});
clustermap.components.full_report.company_site_list.t22391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22393){var self__ = this;
var _22393__$1 = this;return self__.meta22392;
});
clustermap.components.full_report.company_site_list.t22391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22393,meta22392__$1){var self__ = this;
var _22393__$1 = this;return (new clustermap.components.full_report.company_site_list.t22391(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__22390,self__.p__22380,self__.owner,self__.site,self__.portfolio_company_site,meta22392__$1));
});
clustermap.components.full_report.company_site_list.__GT_t22391 = (function __GT_t22391(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22390__$2,p__22380__$1,owner__$1,site__$1,portfolio_company_site__$1,meta22392){return (new clustermap.components.full_report.company_site_list.t22391(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22390__$2,p__22380__$1,owner__$1,site__$1,portfolio_company_site__$1,meta22392));
});
}
return (new clustermap.components.full_report.company_site_list.t22391(company_path,link_fn,path_fn,opts,map__22390__$1,p__22380,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_site_list.t22405 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t22405 = (function (opts,owner,selection_portfolio_company_sites,company_site_list,meta22406){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_site_list = company_site_list;
this.meta22406 = meta22406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t22405.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t22405.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t22405";
clustermap.components.full_report.company_site_list.t22405.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-site-list/t22405");
});
clustermap.components.full_report.company_site_list.t22405.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t22405.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"))),(function (){var attrs22410 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.portfolio_company_site,cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$295,cljs.core.constant$keyword$316,cljs.core.constant$keyword$296,self__.opts], null));if(cljs.core.map_QMARK_(attrs22410))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs22410),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs22410));
}
})())));
});
clustermap.components.full_report.company_site_list.t22405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22407){var self__ = this;
var _22407__$1 = this;return self__.meta22406;
});
clustermap.components.full_report.company_site_list.t22405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22407,meta22406__$1){var self__ = this;
var _22407__$1 = this;return (new clustermap.components.full_report.company_site_list.t22405(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_site_list,meta22406__$1));
});
clustermap.components.full_report.company_site_list.__GT_t22405 = (function __GT_t22405(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_site_list__$1,meta22406){return (new clustermap.components.full_report.company_site_list.t22405(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_site_list__$1,meta22406));
});
}
return (new clustermap.components.full_report.company_site_list.t22405(opts,owner,selection_portfolio_company_sites,company_site_list,null));
});
