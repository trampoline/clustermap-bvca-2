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
{var attrs22334 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs22334))
{return React.DOM.div(sablono.interpreter.attributes(attrs22334),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22334),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(site,owner,p__22343){var map__22359 = p__22343;var map__22359__$1 = ((cljs.core.seq_QMARK_(map__22359))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22359):map__22359);var opts = map__22359__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22359__$1,cljs.core.constant$keyword$310);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22359__$1,cljs.core.constant$keyword$311);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$303,site) : path_fn.call(null,cljs.core.constant$keyword$303,site));if(typeof clustermap.components.full_report.company_list.t22360 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22360 = (function (company_path,link_fn,path_fn,opts,map__22359,p__22343,owner,site,portfolio_company,meta22361){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__22359 = map__22359;
this.p__22343 = p__22343;
this.owner = owner;
this.site = site;
this.portfolio_company = portfolio_company;
this.meta22361 = meta22361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22360.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22360.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22360";
clustermap.components.full_report.company_list.t22360.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22360");
});
clustermap.components.full_report.company_list.t22360.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22360.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs22363 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$303,self__.site) : self__.link_fn.call(null,cljs.core.constant$keyword$303,self__.site));if(cljs.core.map_QMARK_(attrs22363))
{return React.DOM.td(sablono.interpreter.attributes(attrs22363),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22363));
}
})(),(function (){var attrs22364 = cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_(attrs22364))
{return React.DOM.td(sablono.interpreter.attributes(attrs22364),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22364));
}
})(),(function (){var attrs22365 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$304,cljs.core.constant$keyword$313.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22365))
{return React.DOM.td(sablono.interpreter.attributes(attrs22365),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22365));
}
})(),(function (){var attrs22366 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$305,(function (){var G__22373 = self__.site;var G__22373__$1 = (((G__22373 == null))?null:cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(G__22373));var G__22373__$2 = (((G__22373__$1 == null))?null:cljs.core.filter(((function (G__22373,G__22373__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__22373,G__22373__$1))
,G__22373__$1));return G__22373__$2;
})());if(cljs.core.map_QMARK_(attrs22366))
{return React.DOM.td(sablono.interpreter.attributes(attrs22366),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22366));
}
})(),(function (){var attrs22367 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22367))
{return React.DOM.td(sablono.interpreter.attributes(attrs22367),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22367),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs22368 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$342.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22368))
{return React.DOM.td(sablono.interpreter.attributes(attrs22368),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22368));
}
})(),(function (){var attrs22369 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$342.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$342.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22369))
{return React.DOM.td(sablono.interpreter.attributes(attrs22369),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22369));
}
})(),(function (){var attrs22370 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22370))
{return React.DOM.td(sablono.interpreter.attributes(attrs22370),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22370),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs22371 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22371))
{return React.DOM.td(sablono.interpreter.attributes(attrs22371),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22371));
}
})(),(function (){var attrs22372 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22372))
{return React.DOM.td(sablono.interpreter.attributes(attrs22372),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22372));
}
})());
});
clustermap.components.full_report.company_list.t22360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22362){var self__ = this;
var _22362__$1 = this;return self__.meta22361;
});
clustermap.components.full_report.company_list.t22360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22362,meta22361__$1){var self__ = this;
var _22362__$1 = this;return (new clustermap.components.full_report.company_list.t22360(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__22359,self__.p__22343,self__.owner,self__.site,self__.portfolio_company,meta22361__$1));
});
clustermap.components.full_report.company_list.__GT_t22360 = (function __GT_t22360(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22359__$2,p__22343__$1,owner__$1,site__$1,portfolio_company__$1,meta22361){return (new clustermap.components.full_report.company_list.t22360(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22359__$2,p__22343__$1,owner__$1,site__$1,portfolio_company__$1,meta22361));
});
}
return (new clustermap.components.full_report.company_list.t22360(company_path,link_fn,path_fn,opts,map__22359__$1,p__22343,owner,site,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(selection_portfolio_company_sites_by_company,owner,opts){if(typeof clustermap.components.full_report.company_list.t22380 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22380 = (function (opts,owner,selection_portfolio_company_sites_by_company,company_list,meta22381){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites_by_company = selection_portfolio_company_sites_by_company;
this.company_list = company_list;
this.meta22381 = meta22381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22380.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22380.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22380";
clustermap.components.full_report.company_list.t22380.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22380");
});
clustermap.components.full_report.company_list.t22380.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22380.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs22385 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites_by_company),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,cljs.core.constant$keyword$317,cljs.core.constant$keyword$297,self__.opts], null));if(cljs.core.map_QMARK_(attrs22385))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs22385),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs22385));
}
})())));
});
clustermap.components.full_report.company_list.t22380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22382){var self__ = this;
var _22382__$1 = this;return self__.meta22381;
});
clustermap.components.full_report.company_list.t22380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22382,meta22381__$1){var self__ = this;
var _22382__$1 = this;return (new clustermap.components.full_report.company_list.t22380(self__.opts,self__.owner,self__.selection_portfolio_company_sites_by_company,self__.company_list,meta22381__$1));
});
clustermap.components.full_report.company_list.__GT_t22380 = (function __GT_t22380(opts__$1,owner__$1,selection_portfolio_company_sites_by_company__$1,company_list__$1,meta22381){return (new clustermap.components.full_report.company_list.t22380(opts__$1,owner__$1,selection_portfolio_company_sites_by_company__$1,company_list__$1,meta22381));
});
}
return (new clustermap.components.full_report.company_list.t22380(opts,owner,selection_portfolio_company_sites_by_company,company_list,null));
});
