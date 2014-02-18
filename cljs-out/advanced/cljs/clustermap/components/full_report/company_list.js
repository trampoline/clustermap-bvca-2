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
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs22329 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs22329))
{return React.DOM.div(sablono.interpreter.attributes(attrs22329),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22329),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
}
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
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
clustermap.components.full_report.company_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__22338){var map__22354 = p__22338;var map__22354__$1 = ((cljs.core.seq_QMARK_(map__22354))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22354):map__22354);var opts = map__22354__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22354__$1,cljs.core.constant$keyword$312);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22354__$1,cljs.core.constant$keyword$313);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$305,site) : path_fn.call(null,cljs.core.constant$keyword$305,site));if(typeof clustermap.components.full_report.company_list.t22355 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22355 = (function (company_path,link_fn,path_fn,opts,map__22354,p__22338,owner,site,portfolio_company_site,meta22356){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__22354 = map__22354;
this.p__22338 = p__22338;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta22356 = meta22356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22355.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22355.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22355";
clustermap.components.full_report.company_list.t22355.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22355");
});
clustermap.components.full_report.company_list.t22355.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22355.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs22358 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$305,self__.site) : self__.link_fn.call(null,cljs.core.constant$keyword$305,self__.site));if(cljs.core.map_QMARK_(attrs22358))
{return React.DOM.td(sablono.interpreter.attributes(attrs22358),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22358));
}
})(),(function (){var attrs22359 = cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_(attrs22359))
{return React.DOM.td(sablono.interpreter.attributes(attrs22359),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22359));
}
})(),(function (){var attrs22360 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$306,cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22360))
{return React.DOM.td(sablono.interpreter.attributes(attrs22360),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22360));
}
})(),(function (){var attrs22361 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$307,(function (){var G__22368 = self__.site;var G__22368__$1 = (((G__22368 == null))?null:cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(G__22368));var G__22368__$2 = (((G__22368__$1 == null))?null:cljs.core.filter(((function (G__22368,G__22368__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__22368,G__22368__$1))
,G__22368__$1));return G__22368__$2;
})());if(cljs.core.map_QMARK_(attrs22361))
{return React.DOM.td(sablono.interpreter.attributes(attrs22361),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22361));
}
})(),(function (){var attrs22362 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$342.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$301,2,cljs.core.constant$keyword$233,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$342.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$301,2,cljs.core.constant$keyword$233,"-"));if(cljs.core.map_QMARK_(attrs22362))
{return React.DOM.td(sablono.interpreter.attributes(attrs22362),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22362),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs22363 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22363))
{return React.DOM.td(sablono.interpreter.attributes(attrs22363),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22363));
}
})(),(function (){var attrs22364 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$301,2,cljs.core.constant$keyword$233,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$301,2,cljs.core.constant$keyword$233,"-"));if(cljs.core.map_QMARK_(attrs22364))
{return React.DOM.td(sablono.interpreter.attributes(attrs22364),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22364));
}
})(),(function (){var attrs22365 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$233,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$233,"-"));if(cljs.core.map_QMARK_(attrs22365))
{return React.DOM.td(sablono.interpreter.attributes(attrs22365),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22365),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs22366 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22366))
{return React.DOM.td(sablono.interpreter.attributes(attrs22366),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22366));
}
})(),(function (){var attrs22367 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$233,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$233,"-"));if(cljs.core.map_QMARK_(attrs22367))
{return React.DOM.td(sablono.interpreter.attributes(attrs22367),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22367));
}
})());
});
clustermap.components.full_report.company_list.t22355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22357){var self__ = this;
var _22357__$1 = this;return self__.meta22356;
});
clustermap.components.full_report.company_list.t22355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22357,meta22356__$1){var self__ = this;
var _22357__$1 = this;return (new clustermap.components.full_report.company_list.t22355(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__22354,self__.p__22338,self__.owner,self__.site,self__.portfolio_company_site,meta22356__$1));
});
clustermap.components.full_report.company_list.__GT_t22355 = (function __GT_t22355(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22354__$2,p__22338__$1,owner__$1,site__$1,portfolio_company_site__$1,meta22356){return (new clustermap.components.full_report.company_list.t22355(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22354__$2,p__22338__$1,owner__$1,site__$1,portfolio_company_site__$1,meta22356));
});
}
return (new clustermap.components.full_report.company_list.t22355(company_path,link_fn,path_fn,opts,map__22354__$1,p__22338,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_list.t22375 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22375 = (function (opts,owner,selection_portfolio_company_sites,company_list,meta22376){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_list = company_list;
this.meta22376 = meta22376;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22375.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22375.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22375";
clustermap.components.full_report.company_list.t22375.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22375");
});
clustermap.components.full_report.company_list.t22375.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22375.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs22380 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company_site,cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$298,cljs.core.constant$keyword$319,cljs.core.constant$keyword$299,self__.opts], null));if(cljs.core.map_QMARK_(attrs22380))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs22380),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs22380));
}
})())));
});
clustermap.components.full_report.company_list.t22375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22377){var self__ = this;
var _22377__$1 = this;return self__.meta22376;
});
clustermap.components.full_report.company_list.t22375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22377,meta22376__$1){var self__ = this;
var _22377__$1 = this;return (new clustermap.components.full_report.company_list.t22375(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_list,meta22376__$1));
});
clustermap.components.full_report.company_list.__GT_t22375 = (function __GT_t22375(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta22376){return (new clustermap.components.full_report.company_list.t22375(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta22376));
});
}
return (new clustermap.components.full_report.company_list.t22375(opts,owner,selection_portfolio_company_sites,company_list,null));
});
