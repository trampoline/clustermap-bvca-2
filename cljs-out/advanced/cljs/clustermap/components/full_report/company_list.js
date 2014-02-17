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
{var attrs22195 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs22195))
{return React.DOM.div(sablono.interpreter.attributes(attrs22195),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22195),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
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
clustermap.components.full_report.company_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__22204){var map__22220 = p__22204;var map__22220__$1 = ((cljs.core.seq_QMARK_(map__22220))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22220):map__22220);var opts = map__22220__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22220__$1,cljs.core.constant$keyword$304);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22220__$1,cljs.core.constant$keyword$305);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$297,site) : path_fn.call(null,cljs.core.constant$keyword$297,site));if(typeof clustermap.components.full_report.company_list.t22221 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22221 = (function (company_path,link_fn,path_fn,opts,map__22220,p__22204,owner,site,portfolio_company_site,meta22222){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__22220 = map__22220;
this.p__22204 = p__22204;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta22222 = meta22222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22221.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22221.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22221";
clustermap.components.full_report.company_list.t22221.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22221");
});
clustermap.components.full_report.company_list.t22221.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22221.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs22224 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$297,self__.site) : self__.link_fn.call(null,cljs.core.constant$keyword$297,self__.site));if(cljs.core.map_QMARK_(attrs22224))
{return React.DOM.td(sablono.interpreter.attributes(attrs22224),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22224));
}
})(),(function (){var attrs22225 = cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_(attrs22225))
{return React.DOM.td(sablono.interpreter.attributes(attrs22225),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22225));
}
})(),(function (){var attrs22226 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$298,cljs.core.constant$keyword$307.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22226))
{return React.DOM.td(sablono.interpreter.attributes(attrs22226),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22226));
}
})(),(function (){var attrs22227 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$299,(function (){var G__22234 = self__.site;var G__22234__$1 = (((G__22234 == null))?null:cljs.core.constant$keyword$308.cljs$core$IFn$_invoke$arity$1(G__22234));var G__22234__$2 = (((G__22234__$1 == null))?null:cljs.core.filter(((function (G__22234,G__22234__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$309.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__22234,G__22234__$1))
,G__22234__$1));return G__22234__$2;
})());if(cljs.core.map_QMARK_(attrs22227))
{return React.DOM.td(sablono.interpreter.attributes(attrs22227),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22227));
}
})(),(function (){var attrs22228 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22228))
{return React.DOM.td(sablono.interpreter.attributes(attrs22228),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22228),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs22229 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22229))
{return React.DOM.td(sablono.interpreter.attributes(attrs22229),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22229));
}
})(),(function (){var attrs22230 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22230))
{return React.DOM.td(sablono.interpreter.attributes(attrs22230),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22230));
}
})(),(function (){var attrs22231 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22231))
{return React.DOM.td(sablono.interpreter.attributes(attrs22231),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22231),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs22232 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22232))
{return React.DOM.td(sablono.interpreter.attributes(attrs22232),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22232));
}
})(),(function (){var attrs22233 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22233))
{return React.DOM.td(sablono.interpreter.attributes(attrs22233),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22233));
}
})());
});
clustermap.components.full_report.company_list.t22221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22223){var self__ = this;
var _22223__$1 = this;return self__.meta22222;
});
clustermap.components.full_report.company_list.t22221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22223,meta22222__$1){var self__ = this;
var _22223__$1 = this;return (new clustermap.components.full_report.company_list.t22221(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__22220,self__.p__22204,self__.owner,self__.site,self__.portfolio_company_site,meta22222__$1));
});
clustermap.components.full_report.company_list.__GT_t22221 = (function __GT_t22221(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22220__$2,p__22204__$1,owner__$1,site__$1,portfolio_company_site__$1,meta22222){return (new clustermap.components.full_report.company_list.t22221(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22220__$2,p__22204__$1,owner__$1,site__$1,portfolio_company_site__$1,meta22222));
});
}
return (new clustermap.components.full_report.company_list.t22221(company_path,link_fn,path_fn,opts,map__22220__$1,p__22204,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_list.t22241 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22241 = (function (opts,owner,selection_portfolio_company_sites,company_list,meta22242){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_list = company_list;
this.meta22242 = meta22242;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22241.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22241.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22241";
clustermap.components.full_report.company_list.t22241.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22241");
});
clustermap.components.full_report.company_list.t22241.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22241.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs22246 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company_site,cljs.core.constant$keyword$310.cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$290,cljs.core.constant$keyword$311,cljs.core.constant$keyword$291,self__.opts], null));if(cljs.core.map_QMARK_(attrs22246))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs22246),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs22246));
}
})())));
});
clustermap.components.full_report.company_list.t22241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22243){var self__ = this;
var _22243__$1 = this;return self__.meta22242;
});
clustermap.components.full_report.company_list.t22241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22243,meta22242__$1){var self__ = this;
var _22243__$1 = this;return (new clustermap.components.full_report.company_list.t22241(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_list,meta22242__$1));
});
clustermap.components.full_report.company_list.__GT_t22241 = (function __GT_t22241(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta22242){return (new clustermap.components.full_report.company_list.t22241(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta22242));
});
}
return (new clustermap.components.full_report.company_list.t22241(opts,owner,selection_portfolio_company_sites,company_list,null));
});
