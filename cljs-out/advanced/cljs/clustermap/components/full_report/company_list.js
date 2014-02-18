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
{var attrs22326 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs22326))
{return React.DOM.div(sablono.interpreter.attributes(attrs22326),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22326),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
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
clustermap.components.full_report.company_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__22335){var map__22351 = p__22335;var map__22351__$1 = ((cljs.core.seq_QMARK_(map__22351))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22351):map__22351);var opts = map__22351__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22351__$1,cljs.core.constant$keyword$309);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22351__$1,cljs.core.constant$keyword$310);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$302,site) : path_fn.call(null,cljs.core.constant$keyword$302,site));if(typeof clustermap.components.full_report.company_list.t22352 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22352 = (function (company_path,link_fn,path_fn,opts,map__22351,p__22335,owner,site,portfolio_company_site,meta22353){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__22351 = map__22351;
this.p__22335 = p__22335;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta22353 = meta22353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22352.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22352.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22352";
clustermap.components.full_report.company_list.t22352.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22352");
});
clustermap.components.full_report.company_list.t22352.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22352.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs22355 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$302,self__.site) : self__.link_fn.call(null,cljs.core.constant$keyword$302,self__.site));if(cljs.core.map_QMARK_(attrs22355))
{return React.DOM.td(sablono.interpreter.attributes(attrs22355),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22355));
}
})(),(function (){var attrs22356 = cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_(attrs22356))
{return React.DOM.td(sablono.interpreter.attributes(attrs22356),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22356));
}
})(),(function (){var attrs22357 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$303,cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22357))
{return React.DOM.td(sablono.interpreter.attributes(attrs22357),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22357));
}
})(),(function (){var attrs22358 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$304,(function (){var G__22365 = self__.site;var G__22365__$1 = (((G__22365 == null))?null:cljs.core.constant$keyword$313.cljs$core$IFn$_invoke$arity$1(G__22365));var G__22365__$2 = (((G__22365__$1 == null))?null:cljs.core.filter(((function (G__22365,G__22365__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__22365,G__22365__$1))
,G__22365__$1));return G__22365__$2;
})());if(cljs.core.map_QMARK_(attrs22358))
{return React.DOM.td(sablono.interpreter.attributes(attrs22358),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22358));
}
})(),(function (){var attrs22359 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-"));if(cljs.core.map_QMARK_(attrs22359))
{return React.DOM.td(sablono.interpreter.attributes(attrs22359),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22359),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs22360 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22360))
{return React.DOM.td(sablono.interpreter.attributes(attrs22360),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22360));
}
})(),(function (){var attrs22361 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-"));if(cljs.core.map_QMARK_(attrs22361))
{return React.DOM.td(sablono.interpreter.attributes(attrs22361),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22361));
}
})(),(function (){var attrs22362 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$342.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$342.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$230,"-"));if(cljs.core.map_QMARK_(attrs22362))
{return React.DOM.td(sablono.interpreter.attributes(attrs22362),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22362),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs22363 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22363))
{return React.DOM.td(sablono.interpreter.attributes(attrs22363),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22363));
}
})(),(function (){var attrs22364 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$230,"-"));if(cljs.core.map_QMARK_(attrs22364))
{return React.DOM.td(sablono.interpreter.attributes(attrs22364),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22364));
}
})());
});
clustermap.components.full_report.company_list.t22352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22354){var self__ = this;
var _22354__$1 = this;return self__.meta22353;
});
clustermap.components.full_report.company_list.t22352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22354,meta22353__$1){var self__ = this;
var _22354__$1 = this;return (new clustermap.components.full_report.company_list.t22352(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__22351,self__.p__22335,self__.owner,self__.site,self__.portfolio_company_site,meta22353__$1));
});
clustermap.components.full_report.company_list.__GT_t22352 = (function __GT_t22352(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22351__$2,p__22335__$1,owner__$1,site__$1,portfolio_company_site__$1,meta22353){return (new clustermap.components.full_report.company_list.t22352(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22351__$2,p__22335__$1,owner__$1,site__$1,portfolio_company_site__$1,meta22353));
});
}
return (new clustermap.components.full_report.company_list.t22352(company_path,link_fn,path_fn,opts,map__22351__$1,p__22335,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_list.t22372 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22372 = (function (opts,owner,selection_portfolio_company_sites,company_list,meta22373){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_list = company_list;
this.meta22373 = meta22373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22372.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22372.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22372";
clustermap.components.full_report.company_list.t22372.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22372");
});
clustermap.components.full_report.company_list.t22372.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22372.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs22377 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company_site,cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$295,cljs.core.constant$keyword$316,cljs.core.constant$keyword$296,self__.opts], null));if(cljs.core.map_QMARK_(attrs22377))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs22377),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs22377));
}
})())));
});
clustermap.components.full_report.company_list.t22372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22374){var self__ = this;
var _22374__$1 = this;return self__.meta22373;
});
clustermap.components.full_report.company_list.t22372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22374,meta22373__$1){var self__ = this;
var _22374__$1 = this;return (new clustermap.components.full_report.company_list.t22372(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_list,meta22373__$1));
});
clustermap.components.full_report.company_list.__GT_t22372 = (function __GT_t22372(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta22373){return (new clustermap.components.full_report.company_list.t22372(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta22373));
});
}
return (new clustermap.components.full_report.company_list.t22372(opts,owner,selection_portfolio_company_sites,company_list,null));
});
